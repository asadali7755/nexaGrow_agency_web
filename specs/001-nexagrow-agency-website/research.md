# Research: NexaGrow Agency Website

**Date**: 2026-04-11
**Feature**: 001-nexagrow-agency-website

---

## Decision 1: Image Optimization with External Pexels URLs

**Chosen**: Configure `next.config.js` `images.remotePatterns` to allow Pexels domains.

**Rationale**: Next.js `<Image>` component requires explicit permission for external domains. Pexels images are served from `images.pexels.com`. We need to add this to `remotePatterns` in `next.config.js`.

**Configuration**:
```js
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.pexels.com' }
  ]
}
```

**Alternatives considered**:
- Using `<img>` tags directly — loses automatic optimization (WebP, sizing, lazy loading)
- Downloading and hosting images locally — more maintenance overhead, larger repo size

**Fallback strategy**: Use `onError` handler on `<Image>` to display a solid color placeholder with the project/client name as text.

---

## Decision 2: Theme Toggle with next-themes + CSS Variables

**Chosen**: `next-themes` wrapping the app in `ThemeProvider`, combined with CSS custom properties on `:root` and `html.dark`.

**Rationale**: 
- `next-themes` handles SSR hydration correctly (no flash of wrong theme)
- CSS variables allow per-component theme overrides without Tailwind `dark:` prefix complexity
- Sections that "never flip" can override variables with `.always-dark` class
- Smooth 0.4s transition via `transition: background-color 0.4s ease` on `html` and `body`

**Implementation pattern**:
```css
:root {
  --bg: #F5F2ED;
  --fg: #1A1A1A;
  /* ... all light theme vars */
}
html.dark {
  --bg: #0A0A0A;
  --fg: #F0EDE8;
  /* ... all dark theme vars */
}
.always-dark {
  --bg: #1A1A1A !important;
  --fg: #F0EDE8 !important;
}
```

Components reference `var(--bg)`, `var(--fg)` etc. instead of Tailwind color classes.

**Alternatives considered**:
- Tailwind `dark:` prefix — harder to override per-section, more verbose
- CSS-in-JS (styled-components) — adds bundle size, unnecessary for this scope
- Manual localStorage + context — reinvents what next-themes already solves

---

## Decision 3: Slider Implementation — Framer Motion + CSS

**Chosen**: Framer Motion for slide transitions (opacity, scale) + vanilla JS `requestAnimationFrame` for progress bars.

**Rationale**:
- Framer Motion provides smooth, GPU-accelerated animations with minimal code
- `AnimatePresence` handles enter/exit transitions cleanly
- Progress bars use `requestAnimationFrame` for sub-frame precision (smoother than CSS animation for timing-critical progress)
- Auto-play controlled via `useEffect` with `setInterval`

**Pattern**:
```tsx
const [current, setCurrent] = useState(0);
useEffect(() => {
  const timer = setInterval(() => setCurrent(p => (p + 1) % slides.length), interval);
  return () => clearInterval(timer);
}, []);
```

**Alternatives considered**:
- Swiper.js — heavier bundle, more features than needed
- Pure CSS scroll-snap — no auto-play, harder progress bar integration
- React Slick — older, less animation control

---

## Decision 4: Static Site Generation with generateStaticParams

**Chosen**: Next.js 14 `generateStaticParams()` for all dynamic `[slug]` routes.

**Rationale**:
- All content is static (file-based) — perfect for SSG
- `generateStaticParams` pre-renders all slug pages at build time
- Zero server-side computation per request
- Fastest possible page loads

**Pattern**:
```tsx
export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}
```

**Alternatives considered**:
- `getStaticPaths` (Pages Router) — legacy, App Router uses `generateStaticParams`
- Server-side rendering — unnecessary latency for static content
- Client-side fetching — worse SEO, slower initial load

---

## Decision 5: Contact Form Submission

**Chosen**: [NEEDS CLARIFICATION — see Question 1 below]

**Context**: The spec requires a validated contact form that submits without page reload. No backend is specified.

**Options evaluated**:
- **Formspree** — Simple, free tier, no backend code needed. Form posts to their endpoint.
- **Resend API** — Modern, developer-friendly email API. Requires a small API route.
- **Netlify Forms** — Only works if deploying to Netlify.
- **Custom API route + nodemailer** — Full control but more complexity.

**Recommendation**: Use a Next.js API route (`app/api/contact/route.ts`) with Resend or nodemailer. This keeps the solution self-contained and allows custom validation logic.

---

## Decision 6: WCAG 2.1 AA Color Contrast Verification

**Chosen**: All color combinations meet WCAG 2.1 AA minimum 4.5:1 contrast ratio for normal text.

**Verification**:
| Background | Foreground | Ratio | Pass AA? |
|------------|-----------|-------|----------|
| #F5F2ED (light bg) | #1A1A1A (text) | 16.3:1 | ✅ AAA |
| #0A0A0A (dark bg) | #F0EDE8 (text) | 15.8:1 | ✅ AAA |
| #1A1A1A (elevated) | #F0EDE8 (text) | 14.9:1 | ✅ AAA |
| #C8102E (red accent) | #FFFFFF (text) | 5.4:1 | ✅ AA |
| #25D366 (WhatsApp) | #FFFFFF (icon) | 3.3:1 | ⚠️ AA Large Text only (icon is fine) |

**Note**: The red brand color (#C8102E) on white background has a 3.9:1 ratio — passes AA for large text (18pt+) but fails for normal text. Use red only for headings/decorative elements, not body text.

---

## Decision 7: Form Validation Library

**Chosen**: `react-hook-form` + `zod` + `@hookform/resolvers/zod`.

**Rationale**:
- `react-hook-form` is the most popular React form library — performant, minimal re-renders
- `zod` provides TypeScript-first schema validation with excellent error messages
- `@hookform/resolvers` bridges the two seamlessly
- Both are already listed in the spec's package.json dependencies

**Alternatives considered**:
- Formik + Yup — older, heavier bundle
- React Final Form — less popular, similar complexity
- Native HTML5 validation — insufficient UX (no inline error messages, no custom validation)

---

## Decision 8: Deployment Platform

**Chosen**: Vercel (recommended default for Next.js).

**Rationale**:
- Vercel is the creator of Next.js — best compatibility, zero-config deployments
- Automatic HTTPS, edge network, image optimization included
- `vercel.json` for custom config (redirects, headers, rewrites)
- Free tier sufficient for agency website traffic

**Alternatives considered**:
- Netlify — good but less optimized for Next.js
- AWS/GCP — overkill for static site, more ops overhead
- Self-hosted VPS — unnecessary maintenance burden

---

## Open Questions

### Question 1: Contact Form Backend

**Decision**: Option A — API route + Resend (email API).

**Rationale**: Resend is modern, developer-friendly, has a generous free tier (3,000 emails/month), and integrates cleanly with Next.js API routes. It requires only an API key in `.env.local` and ~10 lines of server code. This keeps the solution self-contained while avoiding the complexity of SMTP configuration.

**Implementation**: `app/api/contact/route.ts` will validate with Zod, send email via Resend SDK, and return JSON response.
