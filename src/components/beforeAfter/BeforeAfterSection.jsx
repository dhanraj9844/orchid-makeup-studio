import Section from '../layout/Section.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import BeforeAfterCard from './BeforeAfterCard.jsx';
import { beforeAfterPairs } from '../../features/beforeAfter/beforeAfterData.js';

/**
 * -----------------------------------------------------------------------
 * BeforeAfterSection
 * -----------------------------------------------------------------------
 * WHY this section works so well for conversion: a drag-to-compare is
 * the single most concrete proof of skill a makeup studio can show — it
 * lets the visitor control the reveal themselves rather than passively
 * viewing a static photo, which measurably increases engagement time on
 * the section that most directly answers "can they actually do this?"
 * -----------------------------------------------------------------------
 */
export default function BeforeAfterSection() {
  return (
    <Section bg="bg-champagne/30">
      <SectionHeading
        eyebrow="See The Transformation"
        title="Before & After"
        subtitle="Drag the slider to see the difference our artistry makes."
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {beforeAfterPairs.map((pair, i) => (
          <ScrollReveal key={pair.id} direction="fadeUp" delay={0.08 * (i % 3)}>
            <BeforeAfterCard pair={pair} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}