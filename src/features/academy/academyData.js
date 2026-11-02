/**
 * -----------------------------------------------------------------------
 * academyData
 * -----------------------------------------------------------------------
 * PLACEHOLDER fees/durations — replace with the studio's real course
 * details before launch. Same swappable-repository pattern as every
 * other feature.
 * -----------------------------------------------------------------------
 */
import professionalCourse from '../../assets/images/academy/professional_course.jpg';
import bridalCourse from '../../assets/images/academy/bridal_course.jpg';
import selfMakeupCourse from '../../assets/images/academy/self_makeup_course.jpg';
import hairStylingCourse from '../../assets/images/academy/hair_styling_course.jpg';
import salonTrainingCourse from '../../assets/images/academy/salon_training_course.jpg';
import certificationCourse from '../../assets/images/academy/certification_course.jpg';

export const courses = [
  {
    slug: 'professional_makeup',
    title: 'Professional Makeup Course',
    description:
      'Comprehensive training covering everyday, party, and editorial makeup techniques for aspiring professionals.',
    image: professionalCourse,
    duration: '3 Months',
    fee: 35000,
  },
  {
    slug: 'bridal_course',
    title: 'Bridal Course',
    description:
      'Master bridal makeup artistry — HD, airbrush, traditional, and modern bridal looks with hands-on practice.',
    image: bridalCourse,
    duration: '2 Months',
    fee: 28000,
  },
  {
    slug: 'self_makeup',
    title: 'Self Makeup Course',
    description:
      'Learn to do your own makeup confidently for daily wear, parties, and special occasions.',
    image: selfMakeupCourse,
    duration: '2 Weeks',
    fee: 6000,
  },
  {
    slug: 'hair_styling',
    title: 'Hair Styling Course',
    description:
      'Hands-on training in bridal updos, curls, braids, and modern hairstyling techniques.',
    image: hairStylingCourse,
    duration: '1 Month',
    fee: 15000,
  },
  {
    slug: 'salon_training',
    title: 'Salon Training',
    description:
      'Complete salon skill-building — haircuts, coloring, facials, and client service standards.',
    image: salonTrainingCourse,
    duration: '3 Months',
    fee: 30000,
  },
  {
    slug: 'certification',
    title: 'Certification Program',
    description:
      'An advanced, exam-based certification recognized across the industry for serious makeup professionals.',
    image: certificationCourse,
    duration: '6 Months',
    fee: 55000,
  },
];