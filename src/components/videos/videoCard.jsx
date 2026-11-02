import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

/**
 * -----------------------------------------------------------------------
 * VideoCard
 * -----------------------------------------------------------------------
 * WHY a poster image + centered play button instead of an autoplaying
 * inline video: autoplaying video grids are heavy (many simultaneous
 * video loads) and can feel chaotic. A poster + deliberate tap-to-play
 * keeps the grid fast and gives the visitor control — standard, proven
 * pattern for video galleries.
 *
 * WHY the play button pulses gently rather than sitting static: a subtle
 * ambient pulse draws the eye to "this is playable" without being
 * distracting — restrained motion, not a flashy loop.
 * -----------------------------------------------------------------------
 */
export default function VideoCard({ video, onPlay }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onClick={() => onPlay(video)}
      className="group relative aspect-[9/16] sm:aspect-video overflow-hidden rounded-2xl shadow-card cursor-pointer"
    >
      <img
        src={video.poster}
        alt={video.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement.classList.add('bg-gold-gradient');
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Play button — gentle ambient pulse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20
                     backdrop-blur-sm border border-white/50 group-hover:bg-gold-gradient
                     group-hover:border-transparent transition-colors duration-300"
        >
          <FiPlay className="text-white ml-0.5" size={22} />
        </motion.div>
      </div>

      {/* Category tag + title */}
      <div className="absolute bottom-4 left-4 right-4">
        <span className="font-body text-[10px] font-bold tracking-[2px] text-goldLight uppercase">
          {video.category}
        </span>
        <p className="mt-1 font-display text-sm font-semibold text-white leading-snug line-clamp-2">
          {video.title}
        </p>
      </div>
    </motion.div>
  );
}