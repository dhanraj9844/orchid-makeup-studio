/**
 * -----------------------------------------------------------------------
 * Section
 * -----------------------------------------------------------------------
 * WHY a shared section wrapper: every section needs the same responsive
 * horizontal gutter and a centered max-width container so content never
 * stretches edge-to-edge on ultra-wide monitors. Centralizing this one
 * decision keeps every section's rhythm identical as the visitor scrolls.
 * -----------------------------------------------------------------------
 */
export default function Section({
  children,
  bg = '', // Tailwind background class, e.g. 'bg-cream'
  id,
  className = '',
}) {
  return (
    <section id={id} className={`w-full ${bg}`}>
      <div
        className={`mx-auto max-w-content px-5 sm:px-gutterTablet lg:px-gutterDesktop py-16 md:py-24 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}
