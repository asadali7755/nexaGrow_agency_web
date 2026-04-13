# Feature Specification: NexaGrow Agency Website

**Feature Branch**: `001-nexagrow-agency-website`
**Created**: 2026-04-11
**Status**: Draft
**Input**: Build NexaGrow Agency Website - A modern digital marketing agency website with dark/light theme, hero sliders, services showcase, portfolio, team profiles, blog, and contact pages

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Browse Homepage & Discover Services (Priority: P1)

A potential client lands on the NexaGrow homepage and immediately sees a compelling hero slider showcasing the agency's core value proposition. They can scroll through 14 well-designed sections including hero, marquee, about, services, markets, portfolio, team, founder story, testimonials, blog preview, and CTA. The visitor can toggle between light and dark themes and navigate to any section via the sticky navbar.

**Why this priority**: The homepage is the primary conversion funnel entry point. It must communicate credibility, showcase results, and guide visitors toward contacting the agency.

**Independent Test**: Can be fully tested by loading the homepage URL and verifying all 14 sections render correctly with proper content, navigation works, and theme toggle functions. Delivers immediate brand credibility and service discovery.

**Acceptance Scenarios**:

1. **Given** a visitor opens the homepage URL, **When** the page loads, **Then** the hero slider auto-plays with 5 slides, navbar is sticky, and all 14 sections are visible on scroll.
2. **Given** a visitor is on the homepage, **When** they click the theme toggle, **Then** the site switches between light and dark modes with a smooth 0.4s transition, and the preference persists on reload.
3. **Given** a visitor scrolls the homepage, **When** they reach the services section, **Then** a 6-slide services slider displays with service details, features, and CTA buttons.
4. **Given** a visitor views the portfolio section, **Then** they see 5 real case studies with metrics, results, and client details.

---

### User Story 2 - Explore Portfolio Case Studies (Priority: P2)

A potential client wants proof of results before contacting the agency. They navigate to the portfolio page, browse case studies filtered by industry or service, and click into individual project pages to see detailed problem-solution-results breakdowns with real metrics.

**Why this priority**: Social proof and measurable results are the strongest conversion drivers for B2B agency sales.

**Independent Test**: Can be fully tested by navigating to /portfolio, browsing case study cards, clicking into a project detail page, and verifying all data (metrics, results, images) displays correctly. Delivers trust-building evidence.

**Acceptance Scenarios**:

1. **Given** a user is on the portfolio listing page, **When** they view case study cards, **Then** each card shows project name, client, industry, country flag, key metrics, and thumbnail image.
2. **Given** a user clicks a case study card, **When** the detail page loads, **Then** it displays the full problem statement, solution steps, results with percentages, 3 metric cards, duration, budget, and project image.

---

### User Story 3 - Learn About Services in Detail (Priority: P2)

A visitor wants to understand what services NexaGrow offers. They navigate to the services page or use the services slider on the homepage, read detailed descriptions, and click "Get Started" to initiate contact.

**Why this priority**: Service clarity directly impacts lead quality and conversion rates.

**Independent Test**: Can be fully tested by navigating to /services, viewing each of the 6 service slides/pages, and verifying descriptions, features, and CTA buttons work correctly.

**Acceptance Scenarios**:

1. **Given** a user views the services slider, **When** they navigate through slides, **Then** each of the 6 services displays with title, short description, full description, 3+ feature bullet points, image, and CTA button.
2. **Given** a user clicks "Get Started" on any service, **When** the action triggers, **Then** they are directed to the contact page with the selected service pre-filled.

---

### User Story 4 - Meet the Team (Priority: P3)

A visitor wants to know who is behind NexaGrow. They navigate to the team page, view team member profiles with photos, roles, origins, skills, and social links. They can also read the founder's story in a dedicated section.

**Why this priority**: Human connection builds trust, especially for agency relationships.

**Independent Test**: Can be fully tested by navigating to /team and verifying all 6 team member cards render with correct data, and the founder section displays with bio, stats, and skills.

**Acceptance Scenarios**:

1. **Given** a user is on the team page, **When** they view team cards, **Then** each card shows name, role, origin flag, skills, photo, and social media links.
2. **Given** a user views the founder section, **Then** it displays in a dark-themed layout with image, bio, 3 stats, and skill tags.

---

### User Story 5 - Read Blog Content (Priority: P3)

A visitor or returning client wants to read NexaGrow's thought leadership content. They navigate to the blog, browse posts by category or date, and click into individual articles.

**Why this priority**: Blog content drives organic traffic (SEO) and positions NexaGrow as an industry authority.

**Independent Test**: Can be fully tested by navigating to /blog, viewing the post listing, and clicking into a post detail page.

**Acceptance Scenarios**:

1. **Given** a user is on the blog listing page, **When** they view posts, **Then** each card shows title, excerpt, category, date, read time, and thumbnail image.
2. **Given** a user clicks a blog post, **When** the detail page loads, **Then** it displays the full article content with proper formatting.

---

### User Story 6 - Contact NexaGrow (Priority: P1)

A qualified lead wants to reach out. They navigate to the contact page, fill out a form with their details and project requirements, and submit it. They can also reach out via the floating WhatsApp button.

**Why this priority**: This is the primary conversion action — without it, the site cannot generate leads.

**Independent Test**: Can be fully tested by navigating to /contact, filling out the form with valid data, submitting it, and verifying the submission succeeds. The WhatsApp button can be tested by clicking it and verifying it opens the correct wa.me link.

**Acceptance Scenarios**:

1. **Given** a user is on the contact page, **When** they fill out all required fields and submit, **Then** the form validates, submits successfully, and displays a confirmation message.
2. **Given** a user clicks the floating WhatsApp button, **When** the link opens, **Then** it redirects to https://wa.me/971XXXXXXXXX in a new tab.

---

### Edge Cases

- What happens when a user accesses the site with JavaScript disabled? Core content should still be readable via server-side rendering.
- How does the site handle missing or failed Pexels image loads? Fallback placeholder images should display.
- What happens when the contact form is submitted with invalid data? Validation errors must display inline.
- How does the theme toggle behave on first visit with no localStorage preference? Default to system preference (prefers-color-scheme).
- What happens on mobile when the hero slider image is hidden? Text content must remain fully visible and readable.
- How does the site handle a direct link to a portfolio project or blog post that no longer exists? Display a 404 page with navigation back to listing.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST render a responsive homepage with 14 distinct sections: Hero Slider, Marquee, About, Services Slider, Markets, Portfolio, Team, Founder, Why Slider, Testimonials, Blog, and CTA.
- **FR-002**: System MUST provide a sticky navigation bar (64px height) with logo, 5 navigation links, theme toggle, and "Get Started" button, collapsing to a hamburger menu on mobile.
- **FR-003**: System MUST support light and dark theme modes with smooth 0.4s CSS transitions, persisting user preference in localStorage.
- **FR-004**: System MUST display a hero slider with 5 slides, auto-playing every 4000ms, with opacity transitions, zoom-in image effects, progress bar, dots, and slide counter.
- **FR-005**: System MUST display a services slider with 6 slides, auto-playing every 5000ms, with navigation arrows, dots, and theme-aware backgrounds.
- **FR-006**: System MUST render a founder section with a fixed dark background (#1A1A1A), two-column layout, image with grayscale filter, red accent border, floating badge, bio, 3 stats, and skill tags.
- **FR-007**: System MUST display a floating WhatsApp button (fixed bottom-right, 56px circle, #25D366 green) with pulse animation linking to https://wa.me/971XXXXXXXXX.
- **FR-008**: System MUST render a footer with dark background, background image with overlay, 4 columns (Logo+tagline, Services links, Company links, Contact info), and a bottom bar with copyright and markets list.
- **FR-009**: System MUST provide portfolio listing at /portfolio with case study cards and individual project detail pages at /portfolio/[slug].
- **FR-010**: System MUST provide services listing at /services with individual service detail pages at /services/[slug].
- **FR-011**: System MUST provide team member listing at /team with individual profile data for 6 members.
- **FR-012**: System MUST provide blog listing at /blog with individual post pages at /blog/[slug].
- **FR-013**: System MUST provide a contact page at /contact with a validated form (name, email, message, service interest).
- **FR-014**: System MUST generate SEO-optimized metadata (title, description, Open Graph, Twitter Card, canonical URL) for every page.
- **FR-015**: System MUST generate a dynamic sitemap.xml for search engine indexing.
- **FR-016**: System MUST define structured data types for all content entities ensuring type safety and consistent data shapes across the application.
- **FR-017**: System MUST render specific sections (Hero, Founder, Footer) with fixed dark backgrounds regardless of active theme.
- **FR-018**: System MUST display a marquee/ticker component with scrolling text animation.
- **FR-019**: System MUST provide a testimonials slider with client quotes, photos, project images, and results.
- **FR-020**: System MUST render a "Why NexaGrow" slider with 4 slides, each containing title, description, image, stats, and theme-aware backgrounds.

### Key Entities

- **Project**: Represents a portfolio case study. Attributes: slug, name, client, city, country, flag emoji, industry, service type, problem statement, solution steps, results (label/value pairs), metrics (label/value pairs), duration, budget, image URL, tags.
- **Service**: Represents an agency service offering. Attributes: slug, title, short description, full description, features list, image URL, light/dark theme background colors, keywords.
- **TeamMember**: Represents a team member profile. Attributes: name, role, origin, flag emoji, skills list, image URL, social links (LinkedIn, Twitter, Instagram), isCEO flag, optional bio.
- **Testimonial**: Represents a client testimonial. Attributes: name, role, company, city, country, flag emoji, quote, image URL, project image URL, industry label, results (label/value pairs).
- **BlogPost**: Represents a blog article. Attributes: slug, title, excerpt, category, date, read time, image URL, optional full content.
- **WhySlide**: Represents a slide in the "Why NexaGrow" section. Attributes: title, description, image URL, stats (value/label pairs), light/dark theme background colors.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Homepage loads and displays all 14 sections with visible content within 3 seconds on a standard broadband connection.
- **SC-002**: Theme toggle switches between light and dark modes with a visually smooth transition (under 0.5s) and persists preference across page reloads.
- **SC-003**: All sliders (hero, services, testimonials, why) auto-play correctly, respond to manual navigation (arrows/dots), and display accurate slide counters.
- **SC-004**: Site achieves a Lighthouse performance score of 90+ on desktop and 80+ on mobile for the homepage.
- **SC-005**: All pages pass automated accessibility checks (WCAG 2.1 AA) for color contrast, keyboard navigation, and screen reader compatibility.
- **SC-006**: Contact form successfully validates input, displays inline errors, and submits without page reload in under 2 seconds.
- **SC-007**: SEO metadata (title, description, Open Graph tags, canonical URL) is correctly generated and verifiable for every page route.
- **SC-008**: Site is fully responsive across breakpoints (mobile 320px, tablet 768px, desktop 1024px+, wide 1440px+) with no horizontal scrolling or content overlap.
- **SC-009**: WhatsApp floating button is visible on all pages, clickable, and opens the correct WhatsApp link in a new tab.
- **SC-010**: All 5 portfolio case studies, 6 services, 6 team members, and 3 blog posts render with complete data from their respective data files.
