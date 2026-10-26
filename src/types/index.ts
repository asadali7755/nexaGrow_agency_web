// types/index.ts — All TypeScript interfaces for NexaGrow Agency

export interface Project {
  slug: string;
  name: string;
  client: string;
  city: string;
  country: string;
  flag: string;
  industry: string;
  service: string;
  problem: string;
  solution: string[];
  results: { label: string; value: string }[];
  metrics: { label: string; value: string }[];
  duration: string;
  budget: string;
  image: string;
  tags: string[];
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceStep {
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  image: string;
  slideThemeLight: string;
  slideThemeDark: string;
  keywords: string[];

  // Deep-content fields. Service pages previously carried ~90 words each,
  // far below what ranks for commercial queries. These sections give each
  // page the substance Google and answer engines need to rank and cite it.
  /** Search-friendly H1/title override, e.g. "Social Media Marketing Agency". */
  seoTitle?: string;
  /** Primary commercial keyword this page targets. */
  primaryKeyword?: string;
  /** 2-3 paragraph opening that answers "what is this and who is it for". */
  intro?: string[];
  /** Specific buyer profiles — helps intent matching and self-qualification. */
  whoFor?: string[];
  /** The delivery process, step by step. */
  process?: ServiceStep[];
  /** Concrete monthly deliverables. */
  deliverables?: string[];
  /** What results realistically look like and in what timeframe. */
  outcomes?: string[];
  /** Honest pricing guidance — a top conversion blocker when missing. */
  pricingNote?: string;
  /** Questions real buyers ask. Powers on-page FAQ + FAQPage schema. */
  faqs?: ServiceFaq[];
}

export interface TeamMember {
  name: string;
  role: string;
  origin: string;
  flag: string;
  skills: string[];
  image: string;
  isCEO?: boolean;
  bio?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  city: string;
  country: string;
  flag: string;
  quote: string;
  image: string;
  projectImage: string;
  industryLabel: string;
  results: { label: string; value: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content?: string;
}

export interface WhySlide {
  title: string;
  desc: string;
  image: string;
  stats: { value: string; label: string }[];
  themeLight: string;
  themeDark: string;
}
