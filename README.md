# Orchid Makeup Studio — React (Vite + Tailwind)

**Stage 1 of N: Foundation** — same phased delivery plan as before, now in React.

## Why this fixes your Flutter Web pain points

| Problem you hit in Flutter Web | How React/Vite avoids it |
|---|---|
| `pubspec.yaml` required every asset **folder** to exist or the whole build failed | Images just live in `src/assets/` or `public/` — reference them directly, no manifest/folder-existence rules |
| `assets/assets/...` double-prefix bugs | No asset-bundling step like that — Vite resolves imports/paths directly |
| Hot reload not picking up new packages/files | `npm run dev` gives instant, reliable hot-reload (Vite is built for this) |
| `BoxFit.cover` cropping oddly | Same `object-cover` concept in CSS, but easier to control with `object-position` per image |

## How to run this project

You'll need **Node.js** installed (v18+): https://nodejs.org

```bash
cd orchid-react
npm install
npm run dev
```

It'll print a local URL (usually `http://localhost:5173`) — open that in any browser. Changes save instantly, no build errors from missing folders.

## Folder structure

```
orchid-react/
  index.html                 ← fonts, SEO meta tags, page shell
  tailwind.config.js         ← every color/font/shadow token, defined once
  src/
    main.jsx                 ← React entry point
    App.jsx                  ← page composition (sections go here)
    index.css                ← Tailwind + global base styles
    components/
      ui/                    ← Button, Card, SectionHeading, ScrollReveal
      layout/                ← Section (shared responsive wrapper)
    features/
      home/ about/ services/ ← one folder per site section (added as built)
    assets/
      images/                ← logo and other bundled images
```

## Design tokens (carried over from the original brief)

- **Colors:** gold `#C9A15A`, cream, champagne, soft pink — all in `tailwind.config.js`
- **Fonts:** Playfair Display (headings), Manrope (body), Cormorant Garamond italic (accents) — loaded via Google Fonts in `index.html`
- **Animations:** Framer Motion powers `ScrollReveal` (fade/slide/scale on scroll) and hover micro-interactions on buttons/cards

## Images

Put real photos in `src/assets/images/` (organized in subfolders per section as we build them) and `import` them at the top of each component file, e.g.:

```jsx
import heroImage1 from '../../assets/images/hero/hero_1.jpg';
```

Vite handles the rest — no pubspec-style registration needed.

## What's next

1. ✅ Foundation — tokens, components, responsive layout *(this delivery)*
2. Hero Section
3. About Orchid
4. Services
5. Why Choose Orchid
6. Bridal Portfolio
7. ...continuing through Contact + Footer, same order as before

Since we already built the content/copy/structure in the Flutter version, these should go faster — it's mostly translating the same design decisions into JSX + Tailwind.
