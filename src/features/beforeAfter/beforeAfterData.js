/**
 * -----------------------------------------------------------------------
 * beforeAfterData
 * -----------------------------------------------------------------------
 * Automatically finds before1.jpg / after1.jpg pairs
 * and matches them using their number.
 *
 * Example:
 * before1.jpg <-> after1.jpg
 * before2.jpg <-> after2.jpg
 * -----------------------------------------------------------------------
 */

const beforeModules = import.meta.glob(
  '../../assets/images/beforeAfter/before*.jpg',
  {
    eager: true,
    import: 'default',
  }
);

const afterModules = import.meta.glob(
  '../../assets/images/beforeAfter/after*.jpg',
  {
    eager: true,
    import: 'default',
  }
);

function extractNumber(path) {
  const match = path.match(/(before|after)(\d+)\.jpg$/);
  return match ? match[2] : null;
}

const beforeByNumber = Object.fromEntries(
  Object.entries(beforeModules).map(([path, src]) => [
    extractNumber(path),
    src,
  ])
);

const afterByNumber = Object.fromEntries(
  Object.entries(afterModules).map(([path, src]) => [
    extractNumber(path),
    src,
  ])
);

export const beforeAfterPairs = Object.keys(beforeByNumber)
  .filter((num) => afterByNumber[num])
  .sort((a, b) => Number(a) - Number(b))
  .map((num) => ({
    id: num,
    before: beforeByNumber[num],
    after: afterByNumber[num],
  }));