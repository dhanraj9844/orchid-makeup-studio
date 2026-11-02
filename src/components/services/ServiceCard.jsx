import Card from '../ui/Card.jsx';

export default function ServiceCard({ service, onBook }) {
  return (
    <Card noPadding onClick={onBook} className="flex flex-col h-full">
      <div className="group relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          style={{ objectPosition: service.imagePosition || '50% 15%' }}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 px-4 py-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-textPrimary leading-snug">
            {service.title}
          </h3>

          {service.startingPrice && (
            <div className="shrink-0 text-right">
              <p className="font-body text-[10px] font-bold tracking-wider text-gold uppercase">
                From
              </p>
              <p className="font-display text-base font-semibold text-goldDeep">
                ₹{service.startingPrice.toLocaleString('en-IN')}
              </p>
            </div>
          )}
        </div>

        <p className="mt-1 font-body text-[13px] leading-relaxed text-textSecondary line-clamp-2">
          {service.description}
        </p>
      </div>
    </Card>
  );
}