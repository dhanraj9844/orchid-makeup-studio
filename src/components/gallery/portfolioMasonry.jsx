import { useState } from 'react';
import { motion } from 'framer-motion';
import PortfolioLightbox from './PortfolioLightbox.jsx';
import { categoryLabels } from '../../features/gallery/portfolioData.js';

export default function PortfolioMasonry({ images }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3.5 [&>*]:mb-3.5">
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.04 * (i % 8) }}
            className="group relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => setActiveIndex(i)}
          >
            <img
              src={img.src}
              alt=""
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.classList.add('bg-gold-gradient', 'aspect-[3/4]');
              }}
            />

            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <Corner className="top-3 left-3 border-t-2 border-l-2 delay-0" />
            <Corner className="top-3 right-3 border-t-2 border-r-2 delay-75" />
            <Corner className="bottom-3 left-3 border-b-2 border-l-2 delay-100" />
            <Corner className="bottom-3 right-3 border-b-2 border-r-2 delay-150" />

            <div className="absolute bottom-4 left-4 right-4 flex flex-col items-start">
              <span className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-150 font-body text-xs font-bold tracking-[2px] text-white uppercase">
                {categoryLabels[img.category]}
              </span>
              <span className="mt-1.5 h-[2px] w-8 origin-left scale-x-0 bg-goldLight group-hover:scale-x-100 transition-transform duration-500 delay-200" />
            </div>
          </motion.div>
        ))}
      </div>

      <PortfolioLightbox
        images={images}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}

function Corner({ className }) {
  return (
    <span
      className={`absolute h-5 w-5 border-goldLight opacity-0 scale-75 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 ${className}`}
    />
  );
}