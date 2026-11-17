import { motion } from 'framer-motion';
import Card from '../ui/Card.jsx';

/**
 * -----------------------------------------------------------------------
 * WhyChooseCard
 * -----------------------------------------------------------------------
 * WHY a circular gold-gradient icon badge instead of a plain icon: a
 * flat icon on white reads as a generic feature list (SaaS pricing
 * page). Framing it in a soft gold-gradient circle turns it into a
 * small piece of "jewelry" — keeps the luxury feel even in a section
 * with no photography.
 *
 * WHY only the icon scales on hover (not the whole card): these cards
 * are lightweight (no image), so a whole-card zoom would feel
 * disproportionate. Animating just the badge gives a precise, satisfying
 * micro-interaction without overstating a simple trust-point card.
 * -----------------------------------------------------------------------
 */
export default function WhyChooseCard({ item }) {
  const Icon = item.icon;

  return (
    <Card className="h-full">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient shadow-cta"
      >
        <Icon className="text-white" size={24} />
      </motion.div>

      <h3 className="mt-4 font-display text-lg font-semibold text-textPrimary">
        {item.title}
      </h3>
      <p className="mt-1.5 font-body text-sm leading-relaxed text-textSecondary">
        {item.description}
      </p>
    </Card>
  );
}