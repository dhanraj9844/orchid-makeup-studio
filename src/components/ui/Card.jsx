import { motion } from 'framer-motion';

/**
 * -----------------------------------------------------------------------
 * Card
 * -----------------------------------------------------------------------
 * WHY a shared card shell for services/portfolio/academy/testimonials:
 * a consistent hover "lift" (translateY + deeper gold-tinted shadow) is
 * what makes a card grid feel interactive and premium — reused across
 * every card type so hover behavior is identical everywhere, only the
 * content differs per feature.
 * -----------------------------------------------------------------------
 */
export default function Card({ children, onClick, className = '', noPadding = false }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl bg-white shadow-card hover:shadow-cardHover overflow-hidden ${
        onClick ? 'cursor-pointer' : ''
      } ${noPadding ? '' : 'p-6'} ${className}`}
    >
      {children}
    </motion.div>
  );
}

/**
 * HoverZoomImage — reusable "zoom on hover" image wrapper used across
 * service cards, portfolio tiles, and video thumbnails. A small, tasteful
 * zoom reinforces a tactile, premium feel without being jarring.
 */
export function HoverZoomImage({ src, alt, aspect = 'aspect-[4/3]', className = '' }) {
  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement.classList.add('bg-gold-gradient');
        }}
      />
    </div>
  );
}
