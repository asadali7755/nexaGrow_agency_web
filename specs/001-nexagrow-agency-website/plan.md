# Implementation Plan: NexaGrow Agency Website

**Branch**: `001-nexagrow-agency-website` | **Date**: 2026-04-11 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-nexagrow-agency-website/spec.md`

## Summary

Build a complete Next.js 14 agency website for NexaGrow — a digital marketing agency. The site features a 14-section homepage with hero slider, services showcase, portfolio case studies, team profiles, blog, and contact form. Key technical challenges include: dual-theme support (light/dark) with section-level theme override control, multiple auto-playing sliders with progress bars, SEO optimization with per-page metadata and sitemaps, and fully responsive design across all breakpoints. All content is static (file-based data layer) with server-side rendering for performance.

## Technical Context

**Language/Version**: TypeScript 5.x
**Primary Dependencies**: Next.js 14.2 (App Router), React 18, next-themes, framer-motion, lucide-react, react-hook-form + zod, next-seo, next-sitemap
**Storage**: N/A — static file-based data layer (TypeScript modules in `/lib/`). No database.
**Testing**: Vitest + React Testing Library for unit/component tests. Playwright for E2E tests.
**Target Platform**: Web — modern evergreen browsers. Server-side rendering via Vercel.
**Project Type**: Web application (single Next.js app with App Router)
**Performance Goals**: Lighthouse 90+ desktop, 80+ mobile. FCP < 1.5s. LCP < 2.5s. TTI < 3.5s.
**Constraints**: External Pexels images — must handle load failures. Sliders must auto-play smoothly. Theme persists across sessions. Keyboard accessible.
**Scale/Scope**: ~50 components, 6 data files, 10 page routes, 14 homepage sections.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

The project constitution at `.specify/memory/constitution.md` is currently a **template** (unfilled). No active gates defined. Proceeding with industry best practices as default gates:

| Gate | Status | Notes |
|------|--------|-------|
| TypeScript strict mode | ✅ Required | No `any` without justification |
| Component testing | ✅ Required | Each component has at least one render test |
| Accessibility | ✅ Required | WCAG 2.1 AA minimum |
| SEO metadata | ✅ Required | Every page route has `generateMetadata()` |
| Responsive design | ✅ Required | 320px, 768px, 1024px, 1440px breakpoints |
| No hardcoded secrets | ✅ Required | WhatsApp number, API keys via `.env` |
| Small viable changes | ✅ Required | No refactoring unrelated code |

## Project Structure

### Documentation (this feature)

```text
specs/001-nexagrow-agency-website/
├── spec.md
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
├── public/
│   ├── bg_banner1.jpg
│   ├── favicon.ico
│   ├── robots.txt
│   └── og-image.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── services/[slug]/page.tsx
│   │   ├── portfolio/page.tsx
│   │   ├── portfolio/[slug]/page.tsx
│   │   ├── team/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── blog/[slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── api/contact/route.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   ├── home/
│   │   │   ├── HeroSlider.tsx
│   │   │   ├── Marquee.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSlider.tsx
│   │   │   ├── MarketsSection.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── TeamSection.tsx
│   │   │   ├── FounderSection.tsx
│   │   │   ├── WhySlider.tsx
│   │   │   ├── TestimonialsSlider.tsx
│   │   │   ├── BlogSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── shared/
│   │   │   ├── Logo.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── TeamCard.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   ├── CountryBadge.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── SliderProgress.tsx
│   │   └── seo/
│   │       └── JsonLd.tsx
│   ├── lib/
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   ├── team.ts
│   │   ├── blog.ts
│   │   ├── pexels.ts
│   │   └── seo.ts
│   ├── types/
│   │   └── index.ts
│   └── styles/
│       └── globals.css
├── next.config.js
├── next-sitemap.config.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── vercel.json
├── package.json
└── .env.local
```

**Structure Decision**: Single Next.js web application using App Router. All content is file-based (TypeScript modules in `/lib/`). Components organized by type (layout, home sections, shared). Dynamic routes (`[slug]`) for portfolio, services, and blog detail pages.

## Complexity Tracking

> No constitution violations to justify.
