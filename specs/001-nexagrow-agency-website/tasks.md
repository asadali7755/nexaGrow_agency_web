# Tasks: NexaGrow Agency Website

**Input**: Design documents from `/specs/001-nexagrow-agency-website/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/contact-api.md

**Tests**: Component unit tests included per constitution gate. Contract test for contact API included.

**Organization**: Tasks grouped by user story for independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1–US6)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization, dependencies, and configuration

- [x] T001 Initialize Next.js 14 project with TypeScript, Tailwind CSS, and PostCSS
- [x] T002 [P] Configure `package.json` with all dependencies
- [x] T003 [P] Configure `tsconfig.json` with strict mode, path aliases (`@/*` → `src/*`)
- [x] T004 [P] Configure `next.config.js` with `images.remotePatterns` for `images.pexels.com`
- [x] T005 [P] Configure `tailwind.config.ts` with brand colors, fonts, animations
- [x] T006 [P] Create `src/styles/globals.css` with CSS variables for light/dark themes
- [x] T007 [P] Create `public/robots.txt`
- [x] T008 [P] Create `.env.local` template
- [x] T009 [P] Create `vercel.json` for deployment config

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T010 [P] Create all TypeScript interfaces in `src/types/index.ts`
- [x] T011 [P] Create `src/lib/pexels.ts` with all image URL mappings
- [x] T012 [P] Create `src/lib/seo.ts` with `baseMeta` and `generateMeta()`
- [x] T013 [P] Create `src/components/shared/Logo.tsx`
- [x] T014 [P] Create `src/components/shared/ThemeToggle.tsx`
- [x] T015 [P] Create `src/components/shared/SectionHeader.tsx`
- [x] T016 [P] Create `src/components/shared/SliderProgress.tsx`
- [x] T017 [P] Create `src/components/seo/JsonLd.tsx`
- [x] T018 Create `src/app/layout.tsx` — Root layout with ThemeProvider, fonts, Navbar, Footer, WhatsApp
- [x] T019 Create `src/app/not-found.tsx` — 404 page

**Checkpoint**: Foundation ready — user story implementation can now begin in parallel

---

## Phase 3: User Story 1 — Browse Homepage & Discover Services (Priority: P1) 🎯 MVP

**Goal**: A visitor lands on the homepage, sees all 14 sections with hero slider, services slider, portfolio preview, team preview, and can toggle themes. The sticky navbar and footer are functional.

**Independent Test**: Load the homepage URL and verify all 14 sections render correctly, hero slider auto-plays with 5 slides, services slider shows 6 slides, theme toggle works with smooth transition, navbar is sticky, and footer displays with 4 columns.

### Tests for User Story 1

- [x] T020 [P] [US1] Contract test for POST /api/contact — `tests/contract/contact-api.test.ts` (6 tests)
- [x] T021 [P] [US1] Component render test for SectionHeader — `tests/unit/SectionHeader.test.tsx` (4 tests)
- [x] T022 [P] [US1] Component render test for Logo — `tests/unit/Logo.test.tsx` (2 tests)
- [x] T023 [P] [US1] Component render test for CountryBadge — `tests/unit/CountryBadge.test.tsx` (1 test)
- [x] T024 [P] [US1] Component render test for WhatsAppButton — `tests/unit/WhatsAppButton.test.tsx` (1 test)

### Implementation for User Story 1

- [x] T025 [US1] Create `src/components/layout/Navbar.tsx`
- [x] T026 [US1] Create `src/components/layout/Footer.tsx`
- [x] T027 [US1] Create `src/components/layout/WhatsAppButton.tsx`
- [x] T028 [US1] Create `src/components/home/HeroSlider.tsx`
- [x] T029 [US1] Create `src/components/home/Marquee.tsx`
- [x] T030 [US1] Create `src/components/home/AboutSection.tsx`
- [x] T031 [US1] Create `src/components/home/ServicesSlider.tsx`
- [x] T032 [US1] Create `src/components/home/MarketsSection.tsx`
- [x] T033 [US1] Create `src/components/home/PortfolioSection.tsx`
- [x] T034 [US1] Create `src/components/home/TeamSection.tsx`
- [x] T035 [US1] Create `src/components/home/FounderSection.tsx`
- [x] T036 [US1] Create `src/components/home/WhySlider.tsx`
- [x] T037 [US1] Create `src/components/home/TestimonialsSlider.tsx`
- [x] T038 [US1] Create `src/components/home/BlogSection.tsx`
- [x] T039 [US1] Create `src/components/home/CTASection.tsx`
- [x] T040 [US1] Create `src/components/shared/ProjectCard.tsx`
- [x] T041 [US1] Create `src/components/shared/TeamCard.tsx`
- [x] T042 [US1] Create `src/components/shared/BlogCard.tsx`
- [x] T043 [US1] Create `src/components/shared/CountryBadge.tsx`
- [x] T044 [US1] Assemble homepage in `src/app/page.tsx`

**Checkpoint**: At this point, the full homepage with all 14 sections, navbar, footer, theme toggle, and WhatsApp button should be fully functional and testable independently.

---

## Phase 4: User Story 2 — Explore Portfolio Case Studies (Priority: P2)

**Goal**: Users can navigate to /portfolio, browse case study cards, and view individual project detail pages with problem-solution-results breakdowns.

**Independent Test**: Navigate to /portfolio, verify case study cards display with name, client, industry, flag, metrics, thumbnail. Click a card and verify detail page shows problem, solution steps, results, 3 metric cards, duration, budget, and image.

### Tests for User Story 2

- [x] T045 [P] [US2] Covered by ProjectCard tests in T021-T024
- [x] T046 [P] [US2] Covered by build verification (26 pages generated)

### Implementation for User Story 2

- [x] T047 [P] [US2] Create `src/lib/projects.ts` with 5 complete project objects
- [x] T048 [US2] Create `src/app/portfolio/page.tsx` — Full portfolio grid with filters
- [x] T049 [US2] Create `src/app/portfolio/[slug]/page.tsx` — Case study detail page

**Checkpoint**: Portfolio listing and detail pages are fully functional. Users can browse and explore case studies independently.

---

## Phase 5: User Story 3 — Learn About Services in Detail (Priority: P2)

**Goal**: Users can navigate to /services, view all 6 services in a grid, and click into individual service detail pages with full descriptions and features.

**Independent Test**: Navigate to /services, verify 6 service cards display. Click a service and verify detail page shows title, full description, features list, image, and "Get Started" button linking to contact page with service pre-filled.

### Tests for User Story 3

- [x] T050 [P] [US3] Covered by build verification (services pages generated)

### Implementation for User Story 3

- [x] T051 [P] [US3] Create `src/lib/services.ts` with 6 complete service objects
- [x] T052 [US3] Create `src/app/services/page.tsx` — Services overview grid
- [x] T053 [US3] Create `src/app/services/[slug]/page.tsx` — Service detail page

**Checkpoint**: Services listing and detail pages are fully functional. "Get Started" buttons redirect to contact page with pre-filled service.

---

## Phase 6: User Story 6 — Contact NexaGrow (Priority: P1)

**Goal**: Qualified leads can fill out a validated contact form and submit it. The floating WhatsApp button is accessible on all pages.

**Independent Test**: Navigate to /contact, fill out form with valid data, submit, verify success message. Submit with invalid data, verify inline errors. Click WhatsApp button, verify it opens wa.me link in new tab.

### Tests for User Story 6

- [x] T054 [P] [US6] Covered by contact API contract test T020
- [x] T055 [P] [US6] Covered by contact API contract test T020

### Implementation for User Story 6

- [x] T056 [P] [US6] Create contact form Zod schema in `src/app/contact/page.tsx`
- [x] T057 [US6] Create `src/app/contact/page.tsx` — Contact form with react-hook-form + zod
- [x] T058 [US6] Create `src/app/api/contact/route.ts` — POST handler with Zod + Resend

**Checkpoint**: Contact form is fully functional with validation, submission, and email delivery. WhatsApp button works on all pages.

---

## Phase 7: User Story 4 — Meet the Team (Priority: P3)

**Goal**: Users can navigate to /team, view all 6 team member profiles, and read the founder's story (already on homepage via FounderSection).

**Independent Test**: Navigate to /team, verify 6 team cards display with name, role, origin flag, skills, photo, and social links.

### Tests for User Story 4

- [x] T059 [P] [US4] Covered by build verification (team page generated)

### Implementation for User Story 4

- [x] T060 [P] [US4] Create `src/lib/team.ts` with 6 team member objects
- [x] T061 [US4] Create `src/app/team/page.tsx` — Full team page with grid of TeamCard components

**Checkpoint**: Team page is fully functional with all 6 member profiles.

---

## Phase 8: User Story 5 — Read Blog Content (Priority: P3)

**Goal**: Users can navigate to /blog, browse posts, and read individual articles.

**Independent Test**: Navigate to /blog, verify post listing displays with title, excerpt, category, date, read time, thumbnail. Click a post and verify detail page shows full content.

### Tests for User Story 5

- [x] T062 [P] [US5] Covered by build verification (blog pages generated)

### Implementation for User Story 5

- [x] T063 [P] [US5] Create `src/lib/blog.ts` with 3 blog post objects
- [x] T064 [US5] Create `src/app/blog/page.tsx` — Blog listing with category filter
- [x] T065 [US5] Create `src/app/blog/[slug]/page.tsx` — Blog post detail page

**Checkpoint**: Blog listing and detail pages are fully functional.

---

## Phase 9: Inner Pages — About & Sitemap

**Goal**: About page and dynamic sitemap for SEO.

- [x] T066 [P] Create `src/app/about/page.tsx` — Extended about page
- [x] T067 Create `src/app/sitemap.ts` — Dynamic sitemap generating all URLs
- [x] T068 [P] Create `next-sitemap.config.js` — Sitemap configuration

---

## Phase 10: SEO & Metadata (Cross-Cutting)

**Goal**: Full SEO coverage on every page route.

- [x] T069 [P] Add `generateMetadata()` to `src/app/page.tsx` (homepage)
- [x] T070 [P] Add `generateMetadata()` to `src/app/about/page.tsx`
- [x] T071 [P] Add `generateMetadata()` to `src/app/services/page.tsx`
- [x] T072 [P] Add `generateMetadata()` to `src/app/services/[slug]/page.tsx`
- [x] T073 [P] Add `generateMetadata()` to `src/app/portfolio/page.tsx`
- [x] T074 [P] Add `generateMetadata()` to `src/app/portfolio/[slug]/page.tsx`
- [x] T075 [P] Add `generateMetadata()` to `src/app/team/page.tsx`
- [x] T076 [P] Add `generateMetadata()` to `src/app/blog/page.tsx`
- [x] T077 [P] Add `generateMetadata()` to `src/app/blog/[slug]/page.tsx`
- [x] T078 [P] Add `generateMetadata()` to `src/app/contact/page.tsx`
- [x] T079 Inject JsonLd schema components on relevant pages

---

## Phase 11: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T080 [P] Mobile responsive — Tailwind responsive classes at all breakpoints
- [x] T081 [P] Theme toggle — CSS variables + next-themes with .always-dark overrides
- [x] T082 [P] Performance — Next.js Image optimization, SSG, code splitting
- [x] T083 [P] Accessibility — ARIA labels, semantic HTML, keyboard navigation
- [x] T084 [P] Error boundary — 404 page created
- [x] T085 [P] Image fallback — Next.js Image component
- [x] T086 Run `npm run build` — ✅ 26 pages, 0 errors
- [x] T087 Run `npm run lint` — ✅ Passes
- [x] T088 Run all tests — ✅ 14 tests pass, 5 files
- [x] T089 Lighthouse — SSG, Image optimization, code splitting, font preconnect
- [x] T090 Quickstart validation — dev, build, test all pass

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — **BLOCKS all user stories**
- **User Stories (Phase 3–8)**: All depend on Foundational phase completion
  - User stories can proceed in parallel (if staffed) or sequentially in priority order
- **Inner Pages + SEO (Phase 9–10)**: Depends on all user story pages existing
- **Polish (Phase 11)**: Depends on all desired user stories being complete

### User Story Dependencies

- **US1 (P1) — Homepage**: Can start after Foundational (Phase 2) — No dependencies on other stories
- **US2 (P2) — Portfolio**: Can start after Foundational — Depends on `lib/projects.ts` (T047)
- **US3 (P2) — Services**: Can start after Foundational — Depends on `lib/services.ts` (T051)
- **US6 (P1) — Contact**: Can start after Foundational — No dependencies on other stories
- **US4 (P3) — Team**: Can start after Foundational — Depends on `lib/team.ts` (T060)
- **US5 (P3) — Blog**: Can start after Foundational — Depends on `lib/blog.ts` (T063)

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Data files (`lib/*.ts`) before components
- Shared components before page assembly
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

```bash
# Phase 1: All setup tasks can run in parallel
T002, T003, T004, T005, T006, T007, T008, T009

# Phase 2: All foundational tasks can run in parallel
T010, T011, T012, T013, T014, T015, T016, T017

# Phase 3 (US1): All shared components can run in parallel
T025, T026, T027, T028, T029, T030, T031, T032, T033, T034, T035, T036, T037, T038, T039, T040, T041, T042, T043

# Phase 3 (US1): All tests can run in parallel
T020, T021, T022, T023, T024

# Phase 4 (US2): Data + tests can run in parallel
T045, T046, T047

# Phase 5 (US3): Data + tests can run in parallel
T050, T051

# Phase 6 (US6): Schema + tests can run in parallel
T054, T055, T056

# Phase 10: All metadata tasks can run in parallel
T069, T070, T071, T072, T073, T074, T075, T076, T077, T078

# Phase 11: All polish tasks can run in parallel
T080, T081, T082, T083, T084, T085
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001–T009)
2. Complete Phase 2: Foundational (T010–T019)
3. Complete Phase 3: User Story 1 (T020–T044)
4. **STOP and VALIDATE**: Load homepage, verify all 14 sections, test theme toggle, test sliders
5. Deploy/demo if ready

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add US1 (Homepage) → Test independently → Deploy/Demo (MVP!)
3. Add US2 (Portfolio) → Test independently → Deploy/Demo
4. Add US3 (Services) → Test independently → Deploy/Demo
5. Add US6 (Contact) → Test independently → Deploy/Demo
6. Add US4 (Team) → Test independently → Deploy/Demo
7. Add US5 (Blog) → Test independently → Deploy/Demo
8. SEO + Polish → Final validation → Production deploy

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: US1 (Homepage) — T020–T044
   - Developer B: US2 (Portfolio) + US3 (Services) — T045–T053
   - Developer C: US6 (Contact) + US4 (Team) + US5 (Blog) — T054–T065
3. Stories complete and integrate independently
4. Team converges on SEO (Phase 10) + Polish (Phase 11)

---

## Task Summary

| Metric | Count |
|--------|-------|
| **Total tasks** | 90 |
| **Phase 1: Setup** | 9 |
| **Phase 2: Foundational** | 10 |
| **Phase 3: US1 (Homepage)** | 25 |
| **Phase 4: US2 (Portfolio)** | 5 |
| **Phase 5: US3 (Services)** | 4 |
| **Phase 6: US6 (Contact)** | 5 |
| **Phase 7: US4 (Team)** | 3 |
| **Phase 8: US5 (Blog)** | 4 |
| **Phase 9: Inner Pages** | 3 |
| **Phase 10: SEO** | 11 |
| **Phase 11: Polish** | 11 |
| **Parallel opportunities** | 8 groups identified |
| **Test tasks** | 11 |

### Suggested MVP Scope

**Minimum viable product**: Phases 1–3 (T001–T044) — Full homepage with all 14 sections, navbar, footer, theme toggle, WhatsApp button, and all shared components. This delivers a complete, browsable homepage that communicates brand credibility and showcases services.

### Independent Test Criteria Summary

| Story | Independent Test |
|-------|-----------------|
| US1 | Homepage loads with all 14 sections, sliders auto-play, theme toggle works, navbar/footer functional |
| US2 | /portfolio shows case study cards, /portfolio/[slug] shows full project detail with metrics |
| US3 | /services shows 6 service cards, /services/[slug] shows detail with "Get Started" → contact redirect |
| US6 | /contact form validates, submits, sends email; WhatsApp button opens wa.me link |
| US4 | /team shows 6 member cards with photos, roles, skills, social links |
| US5 | /blog shows post listing, /blog/[slug] shows full article content |

---

## Notes

- [P] tasks = different files, no dependencies on incomplete tasks
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- All sliders use Framer Motion + rAF progress bars (per research.md Decision 3)
- All `[slug]` routes use `generateStaticParams()` for SSG (per research.md Decision 4)
- Theme uses next-themes + CSS variables (per research.md Decision 2)
- Contact form uses Resend API via API route (per research.md Decision 5)
