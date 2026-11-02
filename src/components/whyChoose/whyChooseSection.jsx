import Section from '../layout/Section.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import WhyChooseCard from './WhyChooseCard.jsx';
import { whyChooseItems } from '../../features/whyChoose/whyChooseData.js';

/**
 * -----------------------------------------------------------------------
 * WhyChooseSection
 * -----------------------------------------------------------------------
 * WHY this sits right after Services (not right after Hero): by this
 * point the visitor already knows *what* Orchid offers — this answers
 * the next natural question, *why here, not a competitor* — the correct
 * persuasion sequence: interest first, differentiation second.
 *
 * WHY a plain cream background (not champagne like Services): alternating
 * background tones between sections creates a visible rhythm while
 * scrolling, making each section feel distinct without hard dividers.
 * -----------------------------------------------------------------------
 */
export default function WhyChooseSection() {
  return (
    <Section bg="bg-cream">
      <SectionHeading
        eyebrow="The Orchid Difference"
        title="Why Choose Orchid"
        subtitle="Every detail — from products to hygiene to artistry — is built around one standard: luxury you can trust."
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChooseItems.map((item, i) => (
          <ScrollReveal key={item.title} direction="scaleIn" delay={0.07 * (i % 4)}>
            <WhyChooseCard item={item} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}