/**
 * -----------------------------------------------------------------------
 * Tailwind config — Orchid Makeup Studio design tokens
 * -----------------------------------------------------------------------
 * WHY tokens live here instead of scattered className strings:
 * Every color, font, and shadow used across the site is named once here
 * (e.g. `gold`, `champagne`, `font-display`) so every component reads
 * intent (`bg-gold`, `text-textPrimary`) instead of raw hex values.
 * Carried over 1:1 from the original Flutter design system so the site
 * keeps its identity through the rebuild — only the framework changed.
 * -----------------------------------------------------------------------
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9A15A',
        goldDeep: '#AD854A',
        goldLight: '#E3C88F',

        cream: '#FFF8EF',
        champagne: '#F3E5D0',
        lightBeige: '#EFE4D3',
        veryLightGrey: '#F7F6F4',
        softPink: '#F6E4E4',

        textPrimary: '#1B1411',
        textSecondary: '#4A3A32',
        textMuted: '#8A7A6E',
        textOnDark: '#F7F1E8',

        heroOverlay: '#1B1411',
      },
      fontFamily: {
        // Editorial serif for headings — luxury-magazine register.
        display: ['"Playfair Display"', 'serif'],
        // Romantic italic accent for taglines/eyebrows.
        accent: ['"Cormorant Garamond"', 'serif'],
        // Clean grotesque sans for body copy and UI chrome.
        body: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #AD854A 0%, #C9A15A 55%, #E3C88F 100%)',
        'section-soft-gradient': 'linear-gradient(180deg, #FFF8EF 0%, #F3E5D0 100%)',
        'hero-scrim': 'linear-gradient(180deg, rgba(27,20,17,0) 20%, rgba(27,20,17,0.9) 100%)',
      },
      boxShadow: {
        card: '0 12px 24px -4px rgba(27,20,17,0.08)',
        cardHover: '0 18px 32px -6px rgba(201,161,90,0.28)',
        cta: '0 8px 20px -2px rgba(201,161,90,0.35)',
      },
      borderRadius: {
        xl2: '32px',
      },
      maxWidth: {
        content: '1360px',
      },
      spacing: {
        gutterMobile: '20px',
        gutterTablet: '40px',
        gutterDesktop: '80px',
        gutterWide: '120px',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
