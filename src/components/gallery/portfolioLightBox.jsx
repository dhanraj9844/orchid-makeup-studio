import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

/**
 * -----------------------------------------------------------------------
 * PortfolioLightbox
 * -----------------------------------------------------------------------
 * WHY a full-screen swipeable/keyboard-navigable viewer instead of just
 * enlarging the tapped image in place: bridal portfolios are the
 * strongest trust/conversion asset on the site. A focused, distraction-
 * free viewer with next/prev lets visitors inspect makeup detail
 * closely — exactly the scrutiny a bride does before booking.
 * -----------------------------------------------------------------------
 */
export default function PortfolioLightbox({ images, index, onClose, onNavigate }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
    },
    [index, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  if (index === null) return null;
  const current = images[index];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center
                     rounded-full border border-goldLight/50 bg-black/40 text-textOnDark
                     hover:bg-black/60 transition-colors"
        >
          <FiX size={20} />
        </button>

        {/* Category + index label */}
        <div className="absolute top-6 left-6 rounded-full bg-black/40 px-4 py-1.5 font-body text-sm text-textOnDark">
          {current.category} &nbsp;•&nbsp; {index + 1} / {images.length}
        </div>

        {/* Prev arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + images.length) % images.length);
          }}
          className="absolute left-4 md:left-8 flex h-11 w-11 items-center justify-center
                     rounded-full border border-goldLight/50 bg-black/40 text-textOnDark
                     hover:bg-black/60 transition-colors"
        >
          <FiChevronLeft size={22} />
        </button>

        {/* Image */}
        <motion.img
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          src={current.src}
          alt={current.category}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
        />

        {/* Next arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % images.length);
          }}
          className="absolute right-4 md:right-8 flex h-11 w-11 items-center justify-center
                     rounded-full border border-goldLight/50 bg-black/40 text-textOnDark
                     hover:bg-black/60 transition-colors"
        >
          <FiChevronRight size={22} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}