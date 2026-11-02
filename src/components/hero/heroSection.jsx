import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import Button from '../ui/Button.jsx';
import HeroBackground from './HeroBackground.jsx';
import AnimatedHeroHeading from './AnimatedHeroHeading.jsx';
import { heroImages, heroEyebrow, heroHeadline, heroTaglines } from '../../features/home/homeData.js';
import { motion } from 'framer-motion';

/**
 * -----------------------------------------------------------------------
 * HeroSection
 * -----------------------------------------------------------------------
 * WHY full viewport height (not a fixed banner): signals "flagship
 * experience" immediately and gives the slow Ken-Burns motion room to be
 * noticed. On mobile it drops to 92vh so CTAs stay visible without
 * excessive scrolling.
 * -----------------------------------------------------------------------
 */
export default function HeroSection({ onBookAppointment, onExploreServices }) {
  return (
    <section className="relative h-[92vh] md:h-screen w-full overflow-hidden">
      <HeroBackground images={heroImages} />

      <div className="relative z-10 flex h-full items-center px-5 sm:px-10 lg:px-20">
        <div className="w-full max-w-content mx-auto">
          <div className="max-w-xl">
            <AnimatedHeroHeading
              eyebrow={heroEyebrow}
              headline={heroHeadline}
              taglines={heroTaglines}
              actions={
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button variant="primary" icon={FiArrowRight} onClick={onBookAppointment}>
                    BOOK APPOINTMENT
                  </Button>
                  <Button variant="outlined" onDark onClick={onExploreServices}>
                    EXPLORE SERVICES
                  </Button>
                </div>
              }
            />
          </div>
        </div>
      </div>

      {/* Scroll-down indicator — hidden on mobile to save space for CTAs */}
      <div className="hidden md:flex absolute bottom-8 left-0 right-0 z-10 justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[11px] tracking-[3px] text-textOnDark/80 font-body font-semibold">
            SCROLL
          </span>
          <FiChevronDown className="text-goldLight" size={22} />
        </motion.div>
      </div>
    </section>
  );
}