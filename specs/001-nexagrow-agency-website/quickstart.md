# Quickstart: NexaGrow Agency Website

**Date**: 2026-04-11
**Feature**: 001-nexagrow-agency-website

---

## Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- Git

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create `.env.local` in the project root:

```env
# WhatsApp number (format: country code + number, no spaces/plus)
NEXT_PUBLIC_WHATSAPP_NUMBER=971XXXXXXXXX

# Contact form email API (if using Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Site URL (for production)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm run start
```

## Project Structure Overview

```
src/
├── app/              # Next.js App Router — pages and layouts
├── components/       # React components (layout, home, shared, seo)
├── lib/              # Static data files (projects, services, team, blog)
├── types/            # TypeScript interfaces
└── styles/           # Global CSS (theme variables, base styles)
```

## Key Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |
| `npm test` | Run all tests |
| `npm test:watch` | Run tests in watch mode |

## Development Workflow

1. **Add new content**: Edit the relevant file in `lib/` (projects.ts, services.ts, etc.)
2. **Add new component**: Create in the appropriate `components/` subdirectory
3. **Add new page**: Create `page.tsx` in a new folder under `app/`
4. **Test**: Run `npm test` to verify
5. **Build**: Run `npm run build` to check for errors

## Theme Development

The site uses CSS variables for theming:

```css
/* Light mode (default) */
:root {
  --bg: #F5F2ED;
  --fg: #1A1A1A;
}

/* Dark mode */
html.dark {
  --bg: #0A0A0A;
  --fg: #F0EDE8;
}

/* Sections that never flip */
.always-dark {
  --bg: #1A1A1A !important;
  --fg: #F0EDE8 !important;
}
```

To make a section theme-aware, use `var(--bg)` and `var(--fg)` instead of hardcoded colors.

## Testing Strategy

1. **Unit tests**: Test individual components with Vitest + React Testing Library
2. **Integration tests**: Test page rendering with data
3. **E2E tests**: Test user flows with Playwright (navigation, form submission, theme toggle)

## Common Issues

| Issue | Solution |
|-------|----------|
| Pexels images not loading | Check `images.remotePatterns` in `next.config.js` |
| Theme flashes on load | Ensure `ThemeProvider` wraps the entire app in `layout.tsx` |
| Slider not auto-playing | Check `useEffect` cleanup function for interval |
| Form validation not working | Verify Zod schema matches form field names |
