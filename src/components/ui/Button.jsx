import { motion } from 'framer-motion';

/**
 * -----------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------
 * WHY a custom button instead of a plain <button>:
 * Conversion-critical CTAs ("Book Appointment") need a hover micro-
 * interaction (scale + shadow bloom) to feel "worth clicking" — this is
 * the single button used for every CTA site-wide, so every call-to-
 * action looks and behaves identically, building repetition-based trust.
 *
 * variant="primary"   -> solid gold gradient, white text
 * variant="outlined"  -> transparent, gold border (set onDark for hero use)
 * variant="text"      -> no border/fill, just text
 * -----------------------------------------------------------------------
 */
export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  icon: Icon,
  onDark = false,
  className = '',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-body font-bold text-sm tracking-wider transition-shadow duration-200';

  const variants = {
    primary: 'bg-gold-gradient text-white shadow-cta hover:shadow-lg',
    outlined: `bg-transparent border transition-colors ${
      onDark
        ? 'border-goldLight/70 text-textOnDark hover:bg-white/10'
        : 'border-gold text-textPrimary hover:bg-gold/10'
    }`,
    text: `bg-transparent ${onDark ? 'text-textOnDark' : 'text-textPrimary'} hover:opacity-70`,
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      {Icon && <Icon size={16} />}
    </Component>
  );
}
