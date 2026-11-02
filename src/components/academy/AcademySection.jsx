import Section from '../layout/Section.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import { courses } from '../../features/academy/academyData.js';
import CourseCard from './CourseCard.jsx';


/**
 * -----------------------------------------------------------------------
 * AcademySection
 * -----------------------------------------------------------------------
 * WHY Academy sits after the video/proof sections rather than earlier:
 * by this point the visitor has seen the studio's skill (portfolio,
 * before/after, video) — establishing artistry credibility first makes
 * "learn from us" a far more credible pitch than leading with it.
 * -----------------------------------------------------------------------
 */
export default function AcademySection({ onBookDemo }) {
  return (
    <Section bg="bg-softPink/25">
      <SectionHeading
        eyebrow="Learn From The Experts"
        title="Makeup Academy"
        subtitle="Professional training programs for aspiring makeup artists, from beginner to certification level."
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <ScrollReveal key={course.slug} direction="fadeUp" delay={0.07 * (i % 3)}>
            <CourseCard course={course} onBookDemo={onBookDemo} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}