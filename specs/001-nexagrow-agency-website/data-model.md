# Data Model: NexaGrow Agency Website

**Date**: 2026-04-11
**Feature**: 001-nexagrow-agency-website

---

## Entities

All entities are defined as TypeScript interfaces in `types/index.ts` and instantiated as static arrays in `/lib/` modules.

### Project

**File**: `lib/projects.ts`
**Purpose**: Portfolio case study data.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | `string` | ✅ | URL-safe identifier (e.g., `zafran-kitchen`) |
| `name` | `string` | ✅ | Project display name |
| `client` | `string` | ✅ | Client name |
| `city` | `string` | ✅ | City where project is based |
| `country` | `string` | ✅ | Country name |
| `flag` | `string` | ✅ | Country flag emoji |
| `industry` | `string` | ✅ | Industry category |
| `service` | `string` | ✅ | Service(s) provided |
| `problem` | `string` | ✅ | Client's challenge before NexaGrow |
| `solution` | `string[]` | ✅ | Steps taken to solve the problem |
| `results` | `{ label: string; value: string }[]` | ✅ | Outcome metrics (label/value pairs) |
| `metrics` | `{ label: string; value: string }[]` | ✅ | 3 key metric cards for display |
| `duration` | `string` | ✅ | Project duration |
| `budget` | `string` | ✅ | Budget range |
| `image` | `string` | ✅ | Pexels image URL |
| `tags` | `string[]` | ✅ | Filter/category tags |

**Validation rules**:
- `slug` must be lowercase alphanumeric with hyphens
- `results` must have at least 3 items
- `metrics` must have exactly 3 items
- `image` must be a valid HTTPS URL

---

### Service

**File**: `lib/services.ts`
**Purpose**: Agency service offering data.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | `string` | ✅ | URL-safe identifier |
| `title` | `string` | ✅ | Service display name |
| `shortDesc` | `string` | ✅ | One-line description (for cards/sliders) |
| `fullDesc` | `string` | ✅ | Detailed description (for detail pages) |
| `features` | `string[]` | ✅ | 3+ bullet points |
| `image` | `string` | ✅ | Pexels image URL |
| `slideThemeLight` | `string` | ✅ | Background color in light mode |
| `slideThemeDark` | `string` | ✅ | Background color in dark mode |
| `keywords` | `string[]` | ✅ | SEO/search keywords |

**Validation rules**:
- `features` must have at least 3 items
- `slideThemeLight` and `slideThemeDark` must be valid CSS color values

---

### TeamMember

**File**: `lib/team.ts`
**Purpose**: Team member profile data.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | `string` | ✅ | Full name |
| `role` | `string` | ✅ | Job title |
| `origin` | `string` | ✅ | Country of origin |
| `flag` | `string` | ✅ | Country flag emoji |
| `skills` | `string[]` | ✅ | Skill tags |
| `image` | `string` | ✅ | Pexels image URL |
| `linkedin` | `string` | ✅ | LinkedIn profile URL |
| `twitter` | `string` | ✅ | Twitter/X profile URL |
| `instagram` | `string` | ✅ | Instagram profile URL |
| `isCEO` | `boolean` | ❌ | Flag for founder/CEO badge |
| `bio` | `string` | ❌ | Extended biography text |

**Validation rules**:
- Social URLs must be valid HTTPS URLs
- `skills` must have at least 2 items

---

### Testimonial

**File**: `lib/team.ts` or dedicated `lib/testimonials.ts`
**Purpose**: Client testimonial data.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | `string` | ✅ | Client name |
| `role` | `string` | ✅ | Client role/title |
| `company` | `string` | ✅ | Company name |
| `city` | `string` | ✅ | City |
| `country` | `string` | ✅ | Country |
| `flag` | `string` | ✅ | Country flag emoji |
| `quote` | `string` | ✅ | Testimonial text |
| `image` | `string` | ✅ | Client photo URL |
| `projectImage` | `string` | ✅ | Associated project image URL |
| `industryLabel` | `string` | ✅ | Industry tag |
| `results` | `{ label: string; value: string }[]` | ✅ | Results achieved |

**Validation rules**:
- `quote` must be non-empty, max 500 characters
- `results` must have at least 2 items

---

### BlogPost

**File**: `lib/blog.ts`
**Purpose**: Blog article data.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `slug` | `string` | ✅ | URL-safe identifier |
| `title` | `string` | ✅ | Article title |
| `excerpt` | `string` | ✅ | Short preview text |
| `category` | `string` | ✅ | Content category/tag |
| `date` | `string` | ✅ | Publication date (ISO 8601) |
| `readTime` | `string` | ✅ | Estimated read time (e.g., "5 min read") |
| `image` | `string` | ✅ | Featured image URL |
| `content` | `string` | ❌ | Full article HTML/Markdown |

**Validation rules**:
- `date` must be valid ISO 8601 format
- `excerpt` max 200 characters

---

### WhySlide

**File**: `lib/services.ts` or dedicated data file
**Purpose**: "Why NexaGrow" section slide data.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | `string` | ✅ | Slide title |
| `desc` | `string` | ✅ | Description text |
| `image` | `string` | ✅ | Slide image URL |
| `stats` | `{ value: string; label: string }[]` | ✅ | Statistics cards |
| `themeLight` | `string` | ✅ | Background color in light mode |
| `themeDark` | `string` | ✅ | Background color in dark mode |

**Validation rules**:
- `stats` must have at least 2 items

---

## Relationships

```
Project ──────────────────┐
                          │  (referenced by)
Service ──────────────────┤── Testimonial
                          │
TeamMember ───────────────┘

BlogPost ─── (standalone, no relationships)

WhySlide ─── (standalone, presentation data)
```

- **Testimonials** reference a **Project** (via `projectImage` and `industryLabel`)
- **Projects** reference a **Service** (via the `service` field — free text, not a FK)
- **TeamMembers** are standalone — no relationships to other entities

## State Transitions

N/A — all data is static. No state transitions.

## Data Flow

```
types/index.ts          ← Interface definitions
     ↓
lib/*.ts                ← Static data arrays
     ↓
components/*.tsx        ← Import and render data
     ↓
app/**/*.tsx            ← Page-level data loading (generateStaticParams)
```
