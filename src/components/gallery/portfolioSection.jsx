import { useState, useMemo } from 'react';
import Section from '../layout/Section.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import PortfolioFilter from './PortfolioFilter.jsx';
import PortfolioMasonry from './PortfolioMasonry.jsx';
import { portfolioImages } from '../../features/gallery/portfolioData.js';

/**
 * -----------------------------------------------------------------------
 * PortfolioSection
 * -----------------------------------------------------------------------
 * WHY filter state lives here: the filter chips and the grid share one
 * selected-category value — lifting state to the common parent keeps
 * both children simple, prop-driven components.
 * -----------------------------------------------------------------------
 */
export default function PortfolioSection() {
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () => (selected ? portfolioImages.filter((img) => img.category === selected) : portfolioImages),
    [selected]
  );

  return (
    <Section bg="bg-veryLightGrey">
      <SectionHeading
        eyebrow="Real Brides, Real Artistry"
        title="Bridal Portfolio"
        subtitle="A closer look at the looks we've created — browse by category or explore it all."
      />

      <div className="mt-8">
        <PortfolioFilter selected={selected} onSelect={setSelected} />
      </div>

      <div className="mt-10">
        <PortfolioMasonry key={selected ?? 'all'} images={filtered} />
      </div>
    </Section>
  );
}