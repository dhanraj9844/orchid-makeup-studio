import { FiArrowRight } from 'react-icons/fi';
import logo from './assets/images/orchid_logo.png';
import Section from './components/layout/Section.jsx';
import SectionHeading from './components/ui/SectionHeading.jsx';
import Button from './components/ui/Button.jsx';
import ScrollReveal from './components/ui/ScrollReveal.jsx';

/**
 * -----------------------------------------------------------------------
 * App — Stage 1 foundation preview
 * -----------------------------------------------------------------------
 * Proves the design system end-to-end: Tailwind tokens, fonts, ScrollReveal,
 * Button, SectionHeading, and the real client logo, all wired together.
 * Full page sections (Hero, About, Services...) replace this as each is
 * delivered — same phased plan as the original build.
 * -----------------------------------------------------------------------
 */
export default function App() {
  return (
    <main className="bg-cream min-h-screen">
      <Section className="flex flex-col items-center text-center gap-8">
        <ScrollReveal direction="fadeDown">
          <img src={logo} alt="Orchid Makeup Studio" className="w-44" />
        </ScrollReveal>

        <SectionHeading
          eyebrow="Foundation Ready"
          title="Where Beauty Meets Elegance"
          subtitle="Design tokens, typography, responsive layout, and reusable components are wired up in React + Tailwind. Pages come next, section by section."
        />

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" icon={FiArrowRight}>
            BOOK APPOINTMENT
          </Button>
          <Button variant="outlined">EXPLORE SERVICES</Button>
        </div>
      </Section>
    </main>
  );
}
