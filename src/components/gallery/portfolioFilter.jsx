import { categoryLabels, portfolioCategories } from '../../features/gallery/portfolioData.js';

/**
 * -----------------------------------------------------------------------
 * PortfolioFilter
 * -----------------------------------------------------------------------
 * WHY pill-style filter chips showing all 6 categories at once (not a
 * dropdown): all category names are short single words — showing them
 * all invites exploration in a way a dropdown hides.
 * -----------------------------------------------------------------------
 */
export default function PortfolioFilter({ selected, onSelect }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
      <Chip label="All" active={selected === null} onClick={() => onSelect(null)} />
      {portfolioCategories.map((cat) => (
        <Chip
          key={cat}
          label={categoryLabels[cat]}
          active={selected === cat}
          onClick={() => onSelect(cat)}
        />
      ))}
    </div>
  );
}

function Chip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full px-6 py-2 font-body text-sm font-semibold transition-all duration-200 ${
        active
          ? 'bg-gold-gradient text-white'
          : 'bg-champagne/50 text-textSecondary border border-gold/30 hover:bg-champagne'
      }`}
    >
      {label}
    </button>
  );
}