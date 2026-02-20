# Medianet Info — React Clone

A pixel-faithful React clone of [medianetinfo.com](https://medianetinfo.com/), an advertising and marketing agency website based in Kerala, India.

---

## Quick Start

### Prerequisites

- Node.js ≥ 16.x
- npm ≥ 8.x

### Install & Run

```bash
# From the project root
npm install
npm start
```

The app runs at **http://localhost:3000**.

### Production Build

```bash
npm run build
```

---

## Folder Structure

```
├── public/
│   ├── index.html          ← HTML shell with Google Fonts preconnect
│   └── assets/
│       ├── smiley.svg      ← Hero smiley ball (custom SVG approximation)
│       └── shadow.svg      ← Shadow beneath smiley ball
│
└── src/
    ├── index.js            ← React 18 root
    ├── App.js              ← Page layout — assembles all sections
    ├── styles/
    │   └── global.css      ← Reset, custom properties, shared utilities
    └── components/
        ├── Navbar/
        │   ├── Navbar.js   ← Fixed header + off-canvas sidebar navigation
        │   └── Navbar.css
        ├── Hero/
        │   ├── Hero.js     ← Full-viewport hero with character animations + smiley drop
        │   └── Hero.css
        ├── ServicesMarquee/
        │   ├── ServicesMarquee.js   ← Infinite scrolling service-name marquee
        │   └── ServicesMarquee.css
        ├── Clients/
        │   ├── Clients.js  ← Logo grid with hover effects
        │   └── Clients.css
        ├── Projects/
        │   ├── Projects.js ← Description block + work grid with popIn hover
        │   └── Projects.css
        ├── Testimonials/
        │   ├── Testimonials.js  ← Auto-play carousel with navigation dots
        │   └── Testimonials.css
        ├── FooterCTA/
        │   ├── FooterCTA.js  ← "Looking for a creative partner? Let's talk"
        │   └── FooterCTA.css
        └── Footer/
            ├── Footer.js   ← Logo, office addresses, social links, copyright
            └── Footer.css
```

---

## Original Layout → React Mapping

| Original (WordPress) | React Component | Notes |
|---|---|---|
| `#sidebar` off-canvas nav | `Navbar` | Slides in from right; hamburger toggle; gradient-clip menu links |
| `#home-banner2` | `Hero` | Playfair Display, per-character slide-in animation, smiley ball drop+spin |
| `#services .service-marquee` | `ServicesMarquee` | Infinite CSS marquee; 10 services doubled for seamless loop |
| `#clients` | `Clients` | 3-col responsive logo grid; grayscale→colour on hover |
| `#the-best-part` + `#the-next-part` | `Projects` | Description on white bg; work grid on SVG-pattern bg |
| `#testimonials` | `Testimonials` | Custom auto-play carousel; fade-slide animation |
| Footer CTA block | `FooterCTA` | Black bg; pulsing primary CTA button |
| `#wrapper-footer` | `Footer` | Blue address cards, white logo, social SVG icons |

---

## Animations Replicated

| Effect | Implementation |
|---|---|
| Hero text slide-in (left→right, per character, staggered) | CSS `@keyframes hero-text` + inline `animationDelay` per `<span>` |
| Smiley ball drop + bounce + spin | CSS `@keyframes drop` and `spin` with `animation-fill-mode: forwards` |
| Smiley overlay hide (white + blue circle) | CSS `@keyframes hide-overlay` on `::before`/`::after` pseudo-elements |
| Shadow scale-in beneath ball | CSS `@keyframes shadow` |
| Services marquee infinite scroll | CSS `@keyframes service-slide` on flex container |
| Service name hover outline text ↔ fill text | CSS `text-shadow` stroke technique |
| Project image zoom + `popIn` overlay | CSS `@keyframes popIn` on `.work:hover .work-info` |
| Testimonial fade-slide on change | CSS `@keyframes fadeSlideIn` |
| CTA button pulsing glow | CSS `@keyframes btn-pulse` |
| Client logo grayscale → colour | CSS `filter` transition |
| Sidebar nav link gradient text clip | CSS `background-clip: text` + `background-position` transition |
| Reveal text (underline highlight) | CSS `clip-text` + `text-revealer` @keyframes |

---

## Styles & Fonts

| Property | Value |
|---|---|
| Body font | Rubik (400, 600) |
| Heading font | Lato (300, 400, 700) |
| Hero headline font | Playfair Display (900) |
| Primary colour | `#1D93D1` |
| Background | `#fff` (light sections) / `#111` (hero) / `#000` (services, CTA, footer) |
| Max container width | `1440px` |

---

## Notes on Assets

The smiley and shadow SVGs in `public/assets/` are custom approximations. To use the original files, replace them from:

```
https://medianetinfo.com/wp-content/themes/medianetinfo-theme/img/home/smiley.svg
https://medianetinfo.com/wp-content/themes/medianetinfo-theme/img/home/shadow.svg
```

Client logos are referenced from the original CDN with a text fallback if images fail to load. Replace `src` attributes in `Clients.js` with locally hosted images for offline use.

---

## Dependencies

| Package | Purpose |
|---|---|
| `react` 18 | UI library |
| `react-dom` 18 | DOM renderer |
| `react-scripts` 5 | CRA build tooling |
| Google Fonts (CDN) | Lato, Rubik, Playfair Display |

No additional JS animation libraries are needed — all animations are pure CSS.
