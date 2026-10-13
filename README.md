# Centroid 3D Tours

Marketing site for Centroid 3D Tours: 360° tours and dated condition documentation for St. Louis landlords.

Plain static site in `site/` (HTML/CSS/JS, GSAP from a CDN). No build step; Vercel serves `site/` directly.

- `site/index.html`: home page
- `site/book.html`: booking form (submits through Formspree)
- `site/js/`: logo spin and button effects
- Old routes (`/contact`, `/pricing`, ...) redirect via `vercel.json`

The previous React/Vite version is preserved at the git tag `react-site-2026-10`.
