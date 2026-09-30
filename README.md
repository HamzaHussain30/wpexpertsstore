# WPExperts Store — Home Page (Next.js)

The redesigned WooCommerce store home page, ported to **Next.js (App Router)** with the
exact same design, markup and behavior as the static build.

## Run

```bash
npm install
npm run dev      # http://localhost:3000 (dev)
# or
npm run build && npm start   # production
```

## Structure

```
app/
  layout.js      Metadata (title/description/OG/Twitter/robots), Figtree via next/font,
                 JSON-LD (Organization, Store, FAQPage), global CSS import.
  page.js        The full page as a Server Component (JSX). Static markup is server-
                 rendered; loads /js/main.js via next/script (afterInteractive).
  globals.css    The complete stylesheet (identical to the static build).
public/
  js/main.js     Vanilla interactions + dynamic content (cards, marquees, mega menu,
                 category tabs, FAQ, countdown, etc.) — targets placeholder nodes by id.
  images/        Logos + photos (hero-shot.png, b2b-dashboard.png, etc.).
next.config.mjs  reactStrictMode disabled so the one-time init script isn't double-bound.
```

## How it works

- **Static, SEO-critical markup** (headings, section copy, hero, bundle, plans, footer,
  JSON-LD) is rendered on the server by `page.js` / `layout.js`.
- **Repeated/dynamic content** (top plugins, categories, reviews, blog, brands, FAQ,
  mega menu) is injected client-side by `public/js/main.js` into empty placeholder
  `<div id="…">` nodes — identical to the original build.

## Integrating into your existing Next.js site

- Drop `app/page.js` (or its JSX) into the route you want.
- Merge `app/globals.css` into your styles (it's plain CSS, no framework).
- Copy `public/js/main.js` and `public/images/*`.
- Move the metadata + JSON-LD from `app/layout.js` into your layout/route.
- If you prefer no external script, the `main.js` logic can be moved into a
  `'use client'` component `useEffect` — behavior is the same.
