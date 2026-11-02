import Section from '../layout/Section.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import AboutImageCollage from './AboutImageCollage.jsx';
import { aboutContent, aboutImages } from '../../features/about/aboutData.js';

/**
 * -----------------------------------------------------------------------
 * AboutSection
 * -----------------------------------------------------------------------
 * WHY image-collage + text side-by-side on desktop, stacked on mobile:
 * side-by-side lets a visitor absorb "who's behind this brand" (image)
 * and "why trust them" (text) in a single eye movement — the classic
 * luxury-editorial About layout. On mobile, the collage comes first to
 * keep the emotional hook before the reading commitment.
 *
 * WHY mission + vision as separate labeled blocks rather than one
 * paragraph: scannable, distinct statements read as more deliberate —
 * visitors skim About sections, so short labeled blocks get read even
 * when skimmed.
 * -----------------------------------------------------------------------
 */
export default function AboutSection() {
  return (
    <Section bg="bg-cream">
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-12 lg:gap-24 items-center">
        <ScrollReveal direction="fadeLeft">
          <AboutImageCollage
            images={aboutImages}
            yearsOfExperience={aboutContent.yearsOfExperience}
          />
        </ScrollReveal>

        <ScrollReveal direction="fadeRight" delay={0.15}>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <SectionHeading
              eyebrow="Our Story"
              title="About Orchid"
              align="left"
              showDivider
            />

            <p className="mt-6 font-body text-base leading-relaxed text-textSecondary">
              {aboutContent.studioIntro}
            </p>

            <p className="mt-6 font-body font-bold text-textPrimary">
              {aboutContent.ownerName} — {aboutContent.ownerTitle}
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-textSecondary">
              {aboutContent.ownerIntro}
            </p>

            <MissionVisionBlock label="Our Mission" text={aboutContent.mission} />
            <MissionVisionBlock label="Our Vision" text={aboutContent.vision} />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

function MissionVisionBlock({ label, text }) {
  return (
    <div className="mt-8 w-full">
      <div className="flex items-center gap-2">
        <span className="h-[18px] w-1 rounded-sm bg-gold-gradient" />
        <span className="font-body text-sm font-bold text-textSecondary">{label}</span>
      </div>
      <p className="mt-1.5 font-body text-sm leading-relaxed text-textSecondary">{text}</p>
    </div>
  );
}