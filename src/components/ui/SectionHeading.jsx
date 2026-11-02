import ScrollReveal from './ScrollReveal.jsx';

/**
 * -----------------------------------------------------------------------
 * SectionHeading
 * -----------------------------------------------------------------------
 * WHY: nearly every section (About, Services, Gallery, Academy...) needs
 * the same editorial pattern — small gold eyebrow, large serif title,
 * optional supporting line, short gold divider. Extracting this once
 * keeps the "editorial magazine" rhythm consistent site-wide.
 * -----------------------------------------------------------------------
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center', // 'center' | 'left'
  showDivider = true,
}) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <ScrollReveal direction="fadeUp">
      <div className={`flex flex-col ${alignClass}`}>
        <span className="font-body text-xs font-bold tracking-[3px] text-gold uppercase">
          {eyebrow}
        </span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl lg:text-[44px] font-semibold leading-tight text-textPrimary">
          {title}
        </h2>
        {showDivider && (
          <div className="mt-4 h-[3px] w-16 rounded-full bg-gold-gradient" />
        )}
        {subtitle && (
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-textSecondary">
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
