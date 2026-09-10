# Centroid 3D Tours — Marketing Site

A React + Tailwind marketing site for a St. Louis 3D property tour and
condition-documentation business. Static site, no backend required.

## 1. One-time setup

This machine doesn't have Node.js installed, so before anything else:

1. Install Node.js (LTS) from https://nodejs.org — this gives you `node` and `npm`.
2. Open a terminal in this folder (`stl-property-tours`) and run:

```bash
npm install
```

This downloads React, Tailwind, Vite, and the router — everything the site needs.

## 2. Run it locally

```bash
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`) and reloads
automatically as you edit files.

## 3. Build for deployment

```bash
npm run build
```

This outputs a fully static site into a `dist/` folder — plain HTML/CSS/JS,
no server required to host it.

## 4. Deploy

Any static host works. Two easy options:

- **Netlify** (drag-and-drop): run `npm run build`, then drag the `dist` folder
  into Netlify's dashboard. A `public/_redirects` file is already included so
  the site's internal pages (e.g. `/pricing`) work correctly when visited directly.
- **Vercel**: connect the project (or run `vercel` from this folder). Build
  command `npm run build`, output directory `dist`. A `vercel.json` is already
  included to handle page routing the same way.

## Editing content

All page copy lives in `src/content/*.js` — you generally don't need to touch
any component or page file to update text or prices.

- `src/content/site.js` — **business name**, tagline, phone/email placeholders,
  nav links. This is the one place to change the business name everywhere.
- `src/content/home.js` — hero text, the "how it works" steps, bottom CTA banner.
  Note: `HERO.tagline` is an array of `{ text, highlight }` segments (not a
  plain string) so specific words can render in the accent color — edit the
  `text` values, and toggle `highlight: true` on whichever segments you want
  colored.
- `src/content/services.js` — the landlord service section (what's included).
- `src/content/pricing.js` — pricing tiers and prices.
- `src/content/about.js` — founder story.
- `src/content/contact.js` — contact page heading and inquiry-type dropdown options.
- `src/content/stats.js` — the "Why It Matters" stats and their sources.
- `src/content/sampleTour.js` — sample tour page copy.

### Business name

Currently set to `Centroid 3D Tours` in `src/content/site.js`
(`BUSINESS_NAME`). Change it there and it updates the header, footer, and
page titles automatically. Also update the `<title>` and `og:title` in
`index.html`, which aren't dynamic.

### Phone / email

Also in `src/content/site.js` (`CONTACT` object). If either changes, update
both the display text and its matching `Href` field (e.g. `tel:+13145551234`,
`mailto:you@yourdomain.com`) — they're separate so the display text can be
formatted for readability while the `Href` stays a valid link.

## Embedding a real sample tour

The Sample Tour page is already wired up to accept a tour published with
RICOH360 Tours. Once you've published one:

1. In RICOH360 Tours, open the tour and go to **Share**.
2. Copy the embed/share link.
3. Paste it into `RICOH360_TOUR_URL` in `src/content/sampleTour.js`.

The page automatically swaps the "coming soon" placeholder for a live
embedded tour — no component/JSX editing required.

## Wiring up the contact form

The contact form (`src/pages/Contact.jsx`) currently only logs submissions to
the browser console — nothing is sent anywhere yet. There's a comment block
in `handleSubmit` with ready-to-use snippets for three no-backend-required
options: Formspree, Netlify Forms, and EmailJS. Pick one, follow their setup
docs (each requires just an account and a form/service ID), and drop the
snippet in.

## SEO notes

Each page sets its own `<title>` and meta description via the `<SEO>`
component (`src/components/SEO.jsx`), targeting the three phrases from the
brief across different pages (3D tours, landlord documentation, investment
property scanning). Since this is a client-rendered single-page app, those
tags apply after the page's JavaScript runs — fine for Google, but if you
later want richer social-link previews or maximum crawler compatibility,
consider adding static prerendering (e.g. `vite-plugin-prerender`) as a
follow-up; it's not required to launch.
