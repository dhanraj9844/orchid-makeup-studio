import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const tracked = execSync('git ls-files', { encoding: 'utf8' })
  .split('\n').map(s => s.trim()).filter(Boolean);
const trackedSet = new Set(tracked);
const lowerMap = new Map(tracked.map(f => [f.toLowerCase(), f]));

const exts = ['', '.js', '.jsx', '.ts', '.tsx', '.json', '.css'];
const importRe = /(?:from\s+|import\s*\(?\s*)['"](\.{1,2}\/[^'"]+)['"]/g;
let problems = 0;

for (const file of tracked.filter(f => /^src\/.*\.(jsx?|tsx?)$/.test(f))) {
  const src = fs.readFileSync(file, 'utf8');
  for (const m of src.matchAll(importRe)) {
    const base = path.posix.normalize(path.posix.join(path.posix.dirname(file), m[1].split('?')[0]));
    const candidates = [];
    for (const e of exts) candidates.push(base + e);
    for (const e of ['.js', '.jsx', '.ts', '.tsx']) candidates.push(base + '/index' + e);

    if (candidates.some(c => trackedSet.has(c))) continue;

    const hit = candidates.map(c => lowerMap.get(c.toLowerCase())).find(Boolean);
    problems++;
    if (hit) {
      const wanted = candidates.find(c => c.toLowerCase() === hit.toLowerCase());
      console.log(`CASE MISMATCH in ${file}\n  import: ${m[1]}\n  git has: ${hit}\n  fix: git mv ${hit} ${wanted}\n`);
    } else {
      console.log(`MISSING FILE in ${file}\n  import: ${m[1]} (not tracked by git)\n`);
    }
  }
}
console.log(problems ? `${problems} problem(s) found` : 'No problems found');