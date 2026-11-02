import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

/**
 * -----------------------------------------------------------------------
 * VideoModal
 * -----------------------------------------------------------------------
 * WHY a full-screen modal player instead of inline expand-in-place:
 * video with audio deserves focus — a dedicated overlay removes
 * distraction from surrounding cards and signals "this is the main
 * event now," which is the right register for a transformation reveal
 * or tutorial.
 * -----------------------------------------------------------------------
 */
export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!video) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md sm:max-w-2xl"
        >
          <video
            src={video.src}
            poster={video.poster}
            controls
            autoPlay
            className="w-full max-h-[80vh] rounded-lg bg-black"
          />

          <p className="mt-3 text-center font-body text-sm text-textOnDark">{video.title}</p>

          <button
            onClick={onClose}
            aria-label="Close video"
            className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center
                       rounded-full border border-goldLight/60 bg-black/40 text-textOnDark
                       hover:bg-black/60 transition-colors"
          >
            <FiX size={18} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}