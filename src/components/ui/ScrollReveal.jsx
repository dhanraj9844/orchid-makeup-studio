import { motion } from 'framer-motion';

/**
 * -----------------------------------------------------------------------
 * ScrollReveal
 * -----------------------------------------------------------------------
 * WHY one shared scroll-reveal wrapper instead of ad-hoc animations per
 * section: keeps fade/slide/scale timing and easing identical across
 * every section on the site — inconsistent reveal timing is one of the
 * fastest ways a scroll experience feels "template" rather than bespoke.
 *
 * Uses Framer Motion's `whileInView` (built on IntersectionObserver) so
 * the animation fires once per element as it scrolls into view, and
 * `viewport={{ once: true }}` ensures it doesn't replay on scroll-up.
 * -----------------------------------------------------------------------
 */
const DIRECTIONS = {
  fadeUp: { y: 40 },
  fadeDown: { y: -40 },
  fadeLeft: { x: 40 },
  fadeRight: { x: -40 },
  scaleIn: { scale: 0.92 },
  fadeOnly: {},
};

export default function ScrollReveal({
  children,
  direction = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className = '',
}) {
  const initial = { opacity: 0, ...DIRECTIONS[direction] };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggeredReveal — wraps a list of children so they reveal in sequence
 * rather than simultaneously (e.g. service cards cascading in row by
 * row) — the signature high-end "choreographed" motion detail.
 */
export function StaggeredReveal({ children, step = 0.08, direction = 'fadeUp' }) {
  return (
    <>
      {children.map((child, i) => (
        <ScrollReveal key={i} direction={direction} delay={step * i}>
          {child}
        </ScrollReveal>
      ))}
    </>
  );
}
