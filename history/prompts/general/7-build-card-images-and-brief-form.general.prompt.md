---
id: 7
title: Build card images and brief form
stage: general
date: 2026-10-27
surface: agent
model: claude-opus-5-5
feature: none
branch: master
user: Asad Ali
command: none
labels: ["portfolio", "lead-capture", "ui"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - src/lib/builds.ts
 - src/app/portfolio/page.tsx
 - src/components/home/ProjectBrief.tsx
 - src/app/page.tsx
tests:
 - npx vitest run (18 passing)
 - npm run build (success)
---

## Prompt

yar in cards k background main iamges lagi honi chaiya thi jo 6 cards tum ne banae he
or ye jo tum ne form bana kr dia muje ye b website pe nhi he

## Response snapshot

Added a background photo with a dark gradient overlay to each of the six "Systems Built In-House" cards (Pexels, already an allowed image host). Corrected the Thrift Trades description to a branded-shoes store. Added a ProjectBrief section to the homepage (above the red CTA): visitors pick what they need, fill name/business/goal/budget/timeline, and send the brief on WhatsApp through lib/site whatsappLink, with a copy fallback and the contact email. Fires GA4 whatsapp_click with location project_brief.

## Outcome

- ✅ Impact: Build cards are visual; homepage has a structured brief path straight to WhatsApp.
- 🧪 Tests: 18 vitest tests pass; production build succeeds.
- 📁 Files: 1 added component, 3 modified, 1 PHR.
- 🔁 Next prompts: link navbar "Get Started" to /#start-project if preferred.
- 🧠 Reflection: Without NEXT_PUBLIC_WHATSAPP_NUMBER the WhatsApp button hides and copy + email remain.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): build PASS, tests PASS
