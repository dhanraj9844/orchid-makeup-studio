/**
 * -----------------------------------------------------------------------
 * homeData
 * -----------------------------------------------------------------------
 * WHY a plain data module instead of hardcoding text in the component:
 * mirrors the repository pattern from the Flutter build — this is the
 * seam where "static content today" becomes "CMS/backend content later."
 * Swap this file's exports for an API call later; HeroSection never
 * needs to change.
 * -----------------------------------------------------------------------
 */
import hero1 from '../../assets/images/hero/hero_1.jpg';
import hero2 from '../../assets/images/hero/hero_2.jpg';
import hero3 from '../../assets/images/hero/hero_3.jpg';

export const heroImages = [hero1, hero2, hero3];

export const heroEyebrow = "AahilyaNagar's Premier Luxury Studio";
export const heroHeadline = 'Where Beauty Meets Elegance';

export const heroTaglines = [
  'Luxury Bridal Makeup',
  'Salon',
  'Spa',
  'Professional Makeup Academy',
];