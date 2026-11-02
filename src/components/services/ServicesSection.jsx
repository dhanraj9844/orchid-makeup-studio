import Section from '../layout/Section.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import ServiceCard from './ServiceCard.jsx';
import { services } from '../../features/services/servicesData.js';

/**
 * -----------------------------------------------------------------------
 * ServicesSection
 * -----------------------------------------------------------------------
 * WHY a responsive grid (1/2/3 columns) instead of a fixed row: 14
 * services need to breathe on desktop but never cramp on mobile.
 *
 * WHY cards stagger in row-by-row rather than all at once: with 14
 * cards, a simultaneous pop-in feels chaotic — a cascading reveal reads
 * as intentional choreography.
 * -----------------------------------------------------------------------
 */
export default function ServicesSection({ onBookService }) {
  return (
    <Section bg="bg-champagne/35">
      <SectionHeading
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="From bridal artistry to salon, spa, and academy training — every service delivered with the same luxury standard."
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ScrollReveal key={service.slug} direction="fadeUp" delay={0.06 * (i % 3)}>
            <ServiceCard
              service={service}
              onBook={() => onBookService(service)}
            />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}