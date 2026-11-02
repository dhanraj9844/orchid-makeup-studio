import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowRight, FiPlay, FiX } from 'react-icons/fi';
import { videos } from '../../features/videos/videoData.js';

export default function VideoGallerySection() {
  const [active, setActive] = useState(null);
  const [featured, ...rest] = videos;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-champagne/50 to-cream py-16 sm:py-24">
      {/* soft gold glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-content px-5 sm:px-10">

        {/* Heading */}
      <div className="text-center">
        <p className="font-body text-xs font-bold uppercase tracking-[0.35em] text-gold">
          Watch &amp; Discover
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-textPrimary sm:text-5xl">
          See the <span className="italic text-goldDeep">magic</span> in motion
        </h2>
        <div className="mx-auto mt-5 h-px w-16 bg-gold" />
        <p className="mx-auto mt-5 max-w-xl font-body text-sm leading-7 text-textSecondary">
          Real transformations, quick tutorials and moments from the studio.
          Hover to preview, tap to watch.
        </p>
      </div>

        {/* Featured video */}
        {featured && (
          <div className="mt-12">
            <VideoTile video={featured} onOpen={setActive} featured />
          </div>
        )}

        {/* Reels grid */}
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {rest.map((video) => (
            <VideoTile key={video.id} video={video} onOpen={setActive} />
          ))}
        </div>
      </div>

      <VideoModal video={active} onClose={() => setActive(null)} />
    </section>
  );
}

function VideoTile({ video, onOpen, featured = false }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const el = ref.current;
    if (!el) return;
    const promise = el.play();
    if (promise && promise.catch) promise.catch(() => {});
    setPlaying(true);
  };

  const stop = () => {
    const el = ref.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setPlaying(false);
  };

  // Touch devices have no hover, so play the preview when the card is on screen.
  useEffect(() => {
    if (window.matchMedia('(hover: hover)').matches) return undefined;
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? play() : stop()),
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      type="button"
      onClick={() => onOpen(video)}
      onMouseEnter={play}
      onMouseLeave={stop}
      aria-label={`Play video: ${video.title}`}
      className={`group relative block w-full overflow-hidden rounded-2xl 
        border border-gold/40 bg-black text-left shadow-[0_18px_40px_rgba(84,32,45,0.18)] transition duration-500 hover:-translate-y-1 hover:border-gold ${
        featured ? 'aspect-[9/12] sm:aspect-[16/8]' : 'aspect-[9/16]'
      }`}
    >
      <video
        ref={ref}
        src={`${video.src}#t=0.1`}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* shading */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30" />

      {/* category tag */}
      <span className="absolute left-3 top-3 rounded-full border border-goldLight/50 bg-black/40 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-goldLight backdrop-blur-sm">
        {video.category}
      </span>

      {/* play button */}
      <span
        className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/15 text-white backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-gold ${
          featured ? 'h-20 w-20' : 'h-14 w-14'
        } ${playing ? 'opacity-0' : 'opacity-100'}`}
      >
        <FiPlay size={featured ? 30 : 22} className="ml-1" />
      </span>

      {/* title */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        {featured && (
          <p className="mb-1 font-body text-[11px] font-bold uppercase tracking-[0.3em] text-goldLight">
            Featured
          </p>
        )}
        <h3
          className={`font-display font-semibold leading-snug text-white ${
            featured ? 'text-2xl sm:text-3xl' : 'text-sm sm:text-base'
          }`}
        >
          {video.title}
        </h3>
      </div>
    </button>
  );
}

function VideoModal({ video, onClose }) {
  useEffect(() => {
    if (!video) return undefined;

    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [video, onClose]);

  function handleBook() {
    onClose();
    setTimeout(() => {
      document
        .getElementById('enquiry')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  }

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          key={video.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/10"
          >
            <FiX size={22} />
          </button>

          <motion.div
            initial={{ scale: 0.92, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-full w-full max-w-md flex-col items-center gap-4"
          >
            <video
              src={video.src}
              poster={video.poster}
              controls
              autoPlay
              playsInline
              className="max-h-[75vh] w-full rounded-2xl bg-black object-contain"
            />

            <div className="flex w-full flex-wrap items-center justify-between gap-3">
              <p className="font-display text-lg text-white">{video.title}</p>
              <button
                type="button"
                onClick={handleBook}
                className="inline-flex items-center gap-2 bg-gold px-5 py-3 font-body text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-goldDeep"
              >
                Book this look
                <FiArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}