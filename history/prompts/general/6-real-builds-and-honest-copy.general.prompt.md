---
id: 6
title: Real builds and honest copy
stage: general
date: 2026-10-27
surface: agent
model: claude-opus-5-5
feature: none
branch: update/real-builds-and-honest-copy
user: Asad Ali
command: none
labels: ["credibility", "portfolio", "copy"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - src/lib/builds.ts
 - src/app/portfolio/page.tsx
 - src/components/home/HeroSlider.tsx
 - src/app/about/page.tsx
 - src/lib/services.ts
 - src/lib/team.ts
 - src/components/home/FounderSection.tsx
 - src/app/layout.tsx
 - src/lib/seo.ts
tests:
 - npx vitest run (18 passing)
 - npm run build (success)
---

## Prompt

han kr do tum ye chenges sari kr do is main ceo asad ali he vo main hu baki bando ko hata do or jo chenges krni he kr do fake projects b hata do or jo mere real projects hen vo laga do is ko behtr kro phir agye ka kam krte hen . ye pdf b he is main maine kuch kam kie b hen aj ki date main ye b check kr lo or muje ak proper pora plan ak pdf main bana kr do k hum kya krenge clients tak pouchne k lia

## Response snapshot

Team, fake case studies and fake testimonials were already removed on master (commits 940b606, 5ea8ee1). Remaining unverified claims removed: hero "10+ years / 100+ businesses", "20+ hours saved per week", About page "small, senior team" and "North America" client claim, "Top digital marketing agency" meta copy. Added a separate "Systems Built In-House" section to /portfolio listing Asad's real apps, tools and AI agents (SEO multi-agent engine, Travel Agency platform, faceless video generator, AI todo app, Thrift Trades, Physical AI book), clearly labelled as not client work.

## Outcome

- ✅ Impact: Site copy now only states what can be shown on a client call; portfolio shows apps/tools/agents capability.
- 🧪 Tests: 18 vitest tests pass; production build succeeds.
- 📁 Files: 1 added, 8 modified.
- 🔁 Next prompts: rewrite blog posts that cite unsourced statistics; register domain.
- 🧠 Reflection: Markets section still lists markets without clients; descriptions are capability statements.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): build PASS, tests PASS
