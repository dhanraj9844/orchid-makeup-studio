import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Section from '../layout/Section.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import ReviewCard from './ReviewCard.jsx';

import { reviews } from '../../features/reviews/reviewsData.js';

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  const previousReview = () => {
    setCurrentIndex(
      (currentIndex - 1 + reviews.length) % reviews.length
    );
  };

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  return (
    <Section bg="bg-cream">
      <SectionHeading
        eyebrow="What Our Clients Say"
        title="Beautiful Experiences"
        subtitle="Trusted by clients for elegant makeup, professional service, and memorable experiences."
      />

      <ScrollReveal direction="fadeUp">
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review) => (
            <ReviewCard
              key={`${review.id}-${currentIndex}`}
              review={review}
            />
          ))}
        </div>
      </ScrollReveal>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={previousReview}
          aria-label="Previous review"
          className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-textPrimary hover:bg-softPink transition"
        >
          <FiChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition ${
                index === currentIndex
                  ? 'bg-gold'
                  : 'bg-border'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextReview}
          aria-label="Next review"
          className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-textPrimary hover:bg-softPink transition"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </Section>
  );
}