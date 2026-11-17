import HeroSection from './components/hero/heroSection.jsx';
import AboutSection from './components/about/AboutSection.jsx';
import ServicesSection from './components/services/ServicesSection.jsx';
import WhyChooseSection from './components/whyChoose/whyChooseSection.jsx';
import PortfolioSection from './components/gallery/PortfolioSection.jsx';
import VideoGallerySection from './components/videos/VideoGallerySection.jsx';
import AcademySection from './components/academy/AcademySection.jsx';
import ReviewsSection from './components/reviews/ReviewsSection.jsx';
import ClientEnquiryForm from './components/ClientEnquiryForm.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

export default function App() {
  const handleBookAppointment = () => {
    document.getElementById('enquiry')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <main className="min-h-screen bg-cream">
      <HeroSection
        onBookAppointment={handleBookAppointment}
        onExploreServices={() => {
          document.getElementById('services')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }}
      />

      <AboutSection />

      <ServicesSection onBookService={handleBookAppointment} />

      <WhyChooseSection />

      <PortfolioSection />

      <VideoGallerySection />

      <AcademySection onBookDemo={handleBookAppointment} />

      <ReviewsSection />

      <section
        id="enquiry"
        className="scroll-mt-8 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <ClientEnquiryForm />
      </section>

      <WhatsAppButton />
    </main>
  );
}