import Card, { HoverZoomImage } from '../ui/Card.jsx';
import Button from '../ui/Button.jsx';
import { FiClock, FiTag } from 'react-icons/fi';

/**
 * -----------------------------------------------------------------------
 * CourseCard
 * -----------------------------------------------------------------------
 * WHY duration + fee shown as two small icon-labeled stats (not buried
 * in the description paragraph): a prospective student scanning courses
 * wants these two facts fastest — surfacing them as scannable stats
 * (like flight search "duration" and "price" chips) speeds decision-
 * making and reduces the paragraph-reading burden.
 *
 * WHY "Book Demo Class" as the CTA instead of "Enroll Now": a demo class
 * is a lower-commitment first step, which is a better-converting ask for
 * an education product a visitor hasn't fully decided on yet.
 * -----------------------------------------------------------------------
 */
export default function CourseCard({ course, onBookDemo }) {
  return (
    <Card noPadding className="flex flex-col h-full">
      <HoverZoomImage src={course.image} alt={course.title} aspect="aspect-[4/3]" />

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-xl font-semibold text-textPrimary leading-snug">
          {course.title}
        </h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-textSecondary flex-1">
          {course.description}
        </p>

        <div className="mt-4 flex gap-5">
          <Stat icon={FiClock} label={course.duration} />
          <Stat icon={FiTag} label={`₹${course.fee.toLocaleString('en-IN')}`} />
        </div>

        <Button
          variant="outlined"
          className="mt-5 w-full justify-center"
          onClick={() => onBookDemo(course)}
        >
          BOOK DEMO CLASS
        </Button>
      </div>
    </Card>
  );
}

function Stat({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-1.5 text-textMuted">
      <Icon size={14} className="text-gold" />
      <span className="font-body text-xs font-semibold">{label}</span>
    </div>
  );
}