/**
 * -----------------------------------------------------------------------
 * videoData
 * -----------------------------------------------------------------------
 * Local video data for the Video Gallery.
 * Videos are imported from src/assets so Vite can resolve them correctly.
 * -----------------------------------------------------------------------
 */

import transformation1Video from '../../assets/images/videos/transformation_1.mp4';
import transformation2Video from '../../assets/images/videos/transformation_2.mp4';
import tutorial1Video from '../../assets/images/videos/tutorial_1.mp4';
import tutorial2Video from '../../assets/images/videos/tutorial_2.mp4';
import highlight1Video from '../../assets/images/videos/highlight_1.mp4';
import highlight2Video from '../../assets/images/videos/SaveInta.com_AQPeTNGefzfj0l25-ajsf5tpg4zo6a4p_w8BBoeppNpLE_4KP0DDQs7Ss_r3FLXPlzZMpjfAPisYVW8l0cevE71wuUlmWEi2Eefkubo.mp4';

export const videoCategories = [
  'Transformation',
  'Tutorial',
  'Highlight',
];

export const videos = [
  {
    id: 'transformation_1',
    title: 'Bridal Transformation — Reception Look',
    category: 'Transformation',
    src: transformation1Video,
  },
  {
    id: 'transformation_2',
    title: 'Engagement Glam Transformation',
    category: 'Transformation',
    src: transformation2Video,
  },
  {
    id: 'tutorial_1',
    title: 'Everyday Glow — Quick Tutorial',
    category: 'Tutorial',
    src: tutorial1Video,
  },
  {
    id: 'tutorial_2',
    title: 'Perfecting Your Base — Foundation Tips',
    category: 'Tutorial',
    src: tutorial2Video,
  },
  {
    id: 'highlight_1',
    title: 'A Day at Orchid Studio',
    category: 'Highlight',
    src: highlight1Video,
  },
  {
    id: 'highlight_2',
    title: 'Academy Batch — Behind the Scenes',
    category: 'Highlight',
    src: highlight2Video,
  },
];