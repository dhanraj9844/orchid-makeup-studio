import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * -----------------------------------------------------------------------
 * HeroBackground
 * -----------------------------------------------------------------------
 * WHY a slow auto-playing slideshow with a "Ken Burns" zoom, not a static
 * image: subtle continuous motion makes the hero feel cinematic the
 * instant the page loads — the single biggest "premium vs template"
 * signal on a homepage. A hard-cut static image reads as a stock banner.
 *
 * Built with plain React state + CSS transitions (no extra slideshow
 * library needed) — simpler to reason about and lighter than pulling in
 * Swiper just for a background loop.
 * -----------------------------------------------------------------------
 */
export default function HeroBackground({ images }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <motion.img
            src={images[index]}
            alt=""
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: 8, ease: 'linear' }}
            className="h-full w-full object-cover object-[65%_5%]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement.classList.add('bg-gold-gradient');
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark luxury overlay — warm-black scrim, stronger at the bottom
          so heading/CTA text always has enough contrast. */}
      <div className="absolute inset-0 bg-hero-scrim" />
      <div className="absolute inset-0 bg-heroOverlay/20" />

      {/* Slide indicator dots */}
      {images.length > 1 && (
        <div className="absolute bottom-7 right-7 flex gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-5 bg-gold' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}