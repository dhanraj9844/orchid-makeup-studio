import { motion } from 'framer-motion';

/**
 * -----------------------------------------------------------------------
 * AboutImageCollage
 * -----------------------------------------------------------------------
 * WHY an asymmetric 3-image collage instead of one plain photo: a single
 * rectangular photo reads as a stock "team page" template. An
 * overlapping, asymmetric collage (large portrait + landscape + small
 * floating detail shot) is the visual language luxury beauty brands use
 * for "About" sections — signals editorial art-direction.
 *
 * WHY the floating "Years of Experience" glass badge sits at the seam
 * between two photos: turns a static stat into part of the visual
 * composition instead of separate text competing for attention.
 * -----------------------------------------------------------------------
 */
export default function AboutImageCollage({ images, yearsOfExperience }) {
  return (
    <div className="relative aspect-[1/1.05] w-full">
      {/* Main portrait — owner photo */}
      <FramedImage
        src={images.owner}
        alt="Founder"
        className="absolute left-0 top-0 w-[68%] h-[78%]"
      />

      {/* Secondary landscape — studio interior, overlapping bottom-right */}
      <FramedImage
        src={images.studioInterior}
        alt="Studio interior"
        elevated
        className="absolute right-0 bottom-0 w-[58%] h-[48%]"
      />

      {/* Small square detail shot */}
      <FramedImage
        src={images.studioDetail}
        alt="Studio detail"
        elevated
        className="absolute right-[2%] top-[6%] w-[30%] aspect-square"
      />

      {/* Floating glass "Years of Experience" badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute left-[42%] bottom-[2%] rounded-2xl border border-gold/30
                   bg-heroOverlay/15 backdrop-blur-md px-6 py-4 text-center"
      >
        <p className="font-display text-3xl font-semibold text-goldLight">
          {yearsOfExperience}+
        </p>
        <p className="font-body text-xs font-semibold leading-tight text-textOnDark">
          Years of
          <br />
          Excellence
        </p>
      </motion.div>
    </div>
  );
}

function FramedImage({ src, alt, className = '', elevated = false }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border-2 border-goldLight/50 ${
        elevated ? 'shadow-card' : ''
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover object-top"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement.classList.add('bg-gold-gradient');
        }}
      />
    </div>
  );
}