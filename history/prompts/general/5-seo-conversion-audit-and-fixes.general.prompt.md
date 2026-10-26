---
id: 5
title: SEO and Conversion Audit With Fixes
stage: general
date: 2026-10-26
surface: agent
model: claude-opus-5
feature: none
branch: master
user: asadali22
command: /beyond-seo
labels: ["seo", "aeo", "conversion", "lead-generation", "schema", "analytics", "performance"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - src/lib/site.ts (new) — single source of truth for domain, contact and socials
 - src/lib/services-content.ts (new) — deep content for all 6 service pages
 - src/app/robots.ts (new) — dynamic robots.txt incl. AI crawler rules
 - src/app/api/og/route.tsx (new) — dynamic OG share card
 - src/types/gtag.d.ts (new) — GA4 window typing
 - .env.example (new) — documented environment contract
 - public/favicon.svg, public/logo.svg, public/site.webmanifest (new)
 - src/app/api/contact/route.ts — fixed Resend sender; fail loudly instead of dropping leads
 - src/app/contact/page.tsx — API-first submit, real error states, no dead WhatsApp links
 - src/components/layout/WhatsAppButton.tsx — contact-page fallback, conversion tracking
 - src/components/layout/Footer.tsx — config-driven contact details
 - src/app/layout.tsx — canonical domain, GA4, favicon/manifest, OG image
 - src/app/page.tsx — @graph schema, removed fabricated aggregateRating
 - src/app/services/[slug]/page.tsx — long-form sections, FAQ + Breadcrumb schema
 - src/app/sitemap.ts, src/lib/seo.ts, next-sitemap.config.js — canonical domain
 - src/components/shared/SectionHeader.tsx — `as` prop for correct heading levels
 - src/components/home/HeroSlider.tsx — lazy-mount slides to cut LCP cost
 - src/app/{services,portfolio,blog,team,about,contact}/page.tsx — added H1
 - public/robots.txt (deleted) — pinned the stale domain
 - tests/unit/WhatsAppButton.test.tsx — regression guard for wa.me/undefined
tests:
 - npm run build — passes, 34 routes generated
 - npm run lint — no ESLint warnings or errors
 - npm test — 15 passed (5 files)
 - Built-output verification: 0 occurrences of wa.me/undefined, 1 H1 per listing page,
   service pages 752-898 words (previously ~90), FAQPage + BreadcrumbList present,
   aggregateRating removed
---

## Prompt

yar meri ak website ka nexagrow agency k name se os proper check kro muje os website se kam chaiya . main chahta hu k log muj se contect kre or muj se apne kam krwae. tumhy already mere kam k bary main sub information he k main kya kam kr skta hu . is website ko is hisab se banao k client b aye website jaldi rank b kre . is website ko bane howe muje ak saal hone wala he but abi tak muje ak client b nhi mila is se. tumhra kam yahi he k isy tum best marketing website banane m help kro is ka seo pora check kro kya cheezen theak krni hen vo theak krte hen hamary pas skill b he ak seo byond k name se vo b use kro proper performance check kro or is pe kam kro muje batao k kon si cheezen theak krne se client ayege. hamara maksad yahhi he k is website se kese hum clients se kam le skte hen .

(Follow-up in-turn message: Apify API token supplied; then "sorry start kro kam".)

## Response snapshot

Audit run in Beyond SEO Mode 3 (Native Agent Scraping) — no Apify token at audit time,
findings taken from source code and the live deployment.

Root cause of zero inbound leads in 12 months is not ranking. Every contact path on the
live site was broken:

1. `NEXT_PUBLIC_WHATSAPP_NUMBER` was unset in Vercel, so the floating button, the contact
   form handler and the footer all rendered `https://wa.me/undefined`. Confirmed live.
2. The contact form never delivered email. Resend was asked to send `from` a gmail.com
   address, which Resend rejects for unverified domains, and the failure was only
   `console.error`-ed while the UI still showed "Message Sent!".
3. `RESEND_API_KEY` was the literal placeholder `re_xxxxxxxxxxxxx`.
4. No analytics of any kind (no GA4, GTM, Vercel Analytics or pixel), so none of the above
   was observable.

Secondary blockers: site moved off `nexagrow.agency` (DNS now NXDOMAIN) to a vercel.app
subdomain; `/favicon.ico`, `/og-image.jpg` and `/logo.svg` were referenced but absent;
fabricated `aggregateRating` 4.9/50 in schema; service pages ~90 words; no H1 on any
listing page; all six hero images loading on first paint.

## Outcome

- ✅ Impact: All contact paths now work or degrade safely; form fails loudly instead of
  silently dropping leads; GA4 wired with `generate_lead` and `whatsapp_click` events;
  service pages grew from ~90 to 752-898 words with FAQ and Breadcrumb schema; fabricated
  review markup removed; canonical domain centralised in one module.
- 🧪 Tests: build + lint + 15 unit tests pass; built HTML verified for the specific
  regressions above.
- 📁 Files: 8 added, 15 modified, 1 deleted.
- 🔁 Next prompts: register a domain and point the site at it; add real WhatsApp number,
  Resend key and GA4 ID in Vercel; replace placeholder portfolio with real or clearly
  labelled sample work; build location landing pages.
- 🧠 Reflection: The ranking question was a red herring. A site with no working contact
  route converts zero traffic regardless of position, and with no analytics the owner had
  no way to discover it. Verifying the live deployment, not just the source, is what
  surfaced `wa.me/undefined`.

## Evaluation notes (flywheel)

- Failure modes observed: silent lead loss from an optimistic success state; env vars set
  locally but never in the deployment target; placeholder assets referenced in metadata.
- Graders run and results (PASS/FAIL): build PASS, lint PASS, unit tests PASS,
  built-output regression checks PASS.
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): add an end-to-end check that submits the
  contact form against a staging deploy and asserts a 2xx plus a delivered message id.
