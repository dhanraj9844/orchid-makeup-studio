import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';

/**
 * -----------------------------------------------------------------------
 * BeforeAfterCard
 * -----------------------------------------------------------------------
 * WHY react-compare-slider instead of a hand-rolled drag handler: this
 * is a well-tested, accessible (keyboard + touch + mouse) drag-compare
 * implementation — reinventing drag-clip logic here would add risk
 * without adding anything visitors would notice.
 *
 * WHY a custom gold handle instead of the library default: the default
 * handle is a plain white circle — swapping it for a slim gold divider
 * with a small circular grip keeps this interactive moment on-brand
 * instead of looking like a bolted-on plugin.
 * -----------------------------------------------------------------------
 */
export default function BeforeAfterCard({ pair }) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-card">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage src={pair.before} alt="Before" style={{ objectFit: 'cover' }} />
        }
        itemTwo={
          <ReactCompareSliderImage src={pair.after} alt="After" style={{ objectFit: 'cover' }} />
        }
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backgroundColor: '#C9A15A',
              border: '3px solid #FFF8EF',
              width: 40,
              height: 40,
              boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            }}
            linesStyle={{ backgroundColor: '#E3C88F', width: 2 }}
          />
        }
        style={{ aspectRatio: '3 / 4', width: '100%' }}
      />

      <div className="flex justify-between px-4 py-2.5 bg-white">
        <span className="font-body text-xs font-bold tracking-wider text-textMuted uppercase">
          Before
        </span>
        <span className="font-body text-xs font-bold tracking-wider text-goldDeep uppercase">
          After
        </span>
      </div>
    </div>
  );
}