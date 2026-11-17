import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * -----------------------------------------------------------------------
 * AnimatedHeroHeading
 * -----------------------------------------------------------------------
 * WHY a staggered entrance (eyebrow -> headline -> rotating tagline ->
 * buttons): sequences the visitor's eye in the order that builds trust
 * fastest — brand positioning first, emotional headline second, concrete
 * offering third, action last.
 *
 * WHY the tagline rotates through services instead of listing all four
 * statically: communicates breadth without a wall of text competing
 * with the headline — every visitor sees their reason to book within a
 * few seconds, whichever word appears.
 * -----------------------------------------------------------------------
 */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function AnimatedHeroHeading({ eyebrow, headline, taglines, actions }) {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [taglines.length]);

  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <motion.span
        {...fadeUp(0)}
        className="font-body text-xs md:text-sm font-bold tracking-[3.5px] text-goldLight uppercase"
      >
        {eyebrow}
      </motion.span>

      <motion.h1
        {...fadeUp(0.15)}
        className="mt-3 font-display font-semibold text-textOnDark leading-[1.05]
                   text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
      >
        {headline}
      </motion.h1>

      <motion.div {...fadeUp(0.3)} className="mt-5 h-9 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={taglineIndex}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5 }}
            className="font-accent italic text-2xl text-goldLight"
          >
            {taglines[taglineIndex]}
          </motion.p>
        </AnimatePresence>
      </motion.div>

      <motion.div {...fadeUp(0.45)} className="mt-10">
        {actions}
      </motion.div>
    </div>
  );
}