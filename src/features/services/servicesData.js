/**
 * -----------------------------------------------------------------------
 * servicesData
 * -----------------------------------------------------------------------
 * Static local list today; swap for an API call later without touching
 * ServicesSection or ServiceCard. Prices are PLACEHOLDER — replace with
 * real starting prices before launch, or set to null to hide pricing
 * for a given service.
 * -----------------------------------------------------------------------
 */
import bridalMakeup from '../../assets/images/services/bridal_makeup.jpg';
import engagementMakeup from '../../assets/images/services/engagement_makeup.jpg';
import partyMakeup from '../../assets/images/services/party_makeup.jpg';
import hdMakeup from '../../assets/images/services/hd_makeup.jpg';
import airbrushMakeup from '../../assets/images/services/airbrush_makeup.jpg';
import receptionMakeup from '../../assets/images/services/reception_makeup.jpg';
import preWedding from '../../assets/images/services/pre_wedding.jpg';
import hairStyling from '../../assets/images/services/hair_styling.jpg';
import hairSpa from '../../assets/images/services/hair_spa.jpg';
import facial from '../../assets/images/services/facial.jpg';
import skinTreatment from '../../assets/images/services/skin_treatment.jpg';
import salonServices from '../../assets/images/services/salon_services.png';
import spaServices from '../../assets/images/services/spa_services.jpg';
import academyCourses from '../../assets/images/services/academy_courses.png';

export const services = [
  {
    slug: 'bridal_makeup',
    title: 'Bridal Makeup',
    description:
      'Flawless, long-lasting bridal makeup tailored to your skin tone, outfit, and wedding theme.',
    image: bridalMakeup,
    startingPrice: 15000,
  },
  {
    slug: 'engagement_makeup',
    title: 'Engagement Makeup',
    description: 'Soft, radiant glam designed to photograph beautifully for your engagement ceremony.',
    image: engagementMakeup,
    startingPrice: 8000,
  },
  {
    slug: 'party_makeup',
    title: 'Party Makeup',
    description: 'Bold, event-ready looks for celebrations, sangeet nights, and special occasions.',
    image: partyMakeup,
    startingPrice: 3500,
  },
  {
    slug: 'hd_makeup',
    title: 'HD Makeup',
    description: 'Camera-ready, high-definition finish that stays flawless under any lighting.',
    image: hdMakeup,
    startingPrice: 6000,
  },
  {
    slug: 'airbrush_makeup',
    title: 'Airbrush Makeup',
    description: 'Featherlight, long-wear airbrush application for an ultra-smooth, natural finish.',
    image: airbrushMakeup,
    startingPrice: 9000,
  },
  {
    slug: 'reception_makeup',
    title: 'Reception Makeup',
    description: 'Glamorous, statement makeup designed for reception-night photography and video.',
    image: receptionMakeup,
    startingPrice: 12000,
  },
  {
    slug: 'pre_wedding',
    title: 'Pre-Wedding Shoot Makeup',
    description: 'Effortless, camera-friendly looks crafted for pre-wedding photo and video shoots.',
    image: preWedding,
    startingPrice: 7000,
  },
  {
    slug: 'hair_styling',
    title: 'Hair Styling',
    description: 'Elegant updos, curls, and bridal hairstyling to complete your complete look.',
    image: hairStyling,
    startingPrice: 2500,
  },
  {
    slug: 'hair_spa',
    title: 'Hair Spa',
    description: 'Deep-nourishing hair spa treatments for shine, strength, and softness.',
    image: hairSpa,
    startingPrice: 1500,
  },
  {
    slug: 'facial',
    title: 'Facial',
    description: 'Rejuvenating facials tailored to your skin type for a radiant, camera-ready glow.',
    image: facial,
    startingPrice: 1800,
  },
  {
    slug: 'skin_treatment',
    title: 'Skin Treatment',
    description: 'Advanced skin treatments to address concerns before your big day, from acne to pigmentation.',
    image: skinTreatment,
    startingPrice: 2500,
  },
  {
    slug: 'salon_services',
    title: 'Salon Services',
    description: 'Full-service salon care — haircuts, styling, coloring, and grooming in a luxurious setting.',
    image: salonServices,
    startingPrice: null,
  },
  {
    slug: 'spa_services',
    title: 'Spa Services',
    description: 'Relaxing spa therapies designed to refresh you inside and out, any day of the year.',
    image: spaServices,
    startingPrice: null,
  },
  {
    slug: 'academy_courses',
    title: 'Academy Courses',
    description: 'Professional makeup and beauty courses for aspiring artists, taught by industry experts.',
    image: academyCourses,
    startingPrice: null,
  },
];