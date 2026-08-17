# Michaylia Stephenson Portfolio

A React + GSAP portfolio mashup combining the original GSAP portfolio design with the loading, detail-page and transition interactions from the later portfolio version.

## Run

```bash
npm install
npm run dev
```

## Structure

- `src/App.jsx` — routing and global transitions
- `src/pages/HomePage.jsx` — main portfolio
- `src/pages/projects/` — individual project pages
- `src/pages/experience/` — individual experience pages
- `src/components/` — loading, navigation, butterflies and transitions
- `public/Michaylia-Stephenson-CV-2026.pdf` — downloadable CV

## Notes

- The main visual design follows the original `michaylia-portfolio-gsap` project.
- The project section is a pinned, horizontal GSAP scroll section inspired by the original Flavor-style interaction requested.
- The native scrollbar remains functional while a butterfly progress indicator tracks the page.
- The portfolio uses Avigea/Honfleur when installed, with Playfair/DM Sans fallbacks.
