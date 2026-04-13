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
