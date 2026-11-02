import Card from '../ui/Card.jsx';
import { FiStar, FiMapPin } from 'react-icons/fi';

export default function ReviewCard({ review }) {
  return (
    <Card className="h-full">
      <div className="flex gap-1 mb-5">
        {Array.from({ length: review.rating }).map((_, index) => (
          <FiStar
            key={index}
            size={16}
            className="text-gold fill-current"
          />
        ))}
      </div>

      <p className="font-body text-sm leading-relaxed text-textSecondary">
        “{review.review}”
      </p>

      <div className="mt-6 pt-5 border-t border-border">
        <h3 className="font-display text-lg font-semibold text-textPrimary">
          {review.name}
        </h3>

        <div className="mt-1 flex items-center gap-1.5 text-textMuted">
          <FiMapPin size={13} />

          <span className="font-body text-xs">
            {review.location}
          </span>
        </div>
      </div>
    </Card>
  );
}
