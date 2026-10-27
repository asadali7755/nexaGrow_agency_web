// lib/projects.ts — portfolio case studies
//
// Only real, delivered client work belongs here. The file previously carried
// five invented case studies (Zafran Kitchen, AlNoor Properties, UrbanEdge
// Store, ClearSkin Clinic, PeakDrive Autos) with fabricated revenue and ROAS
// figures. A buyer who checks one of those names and finds nothing stops
// trusting the whole site, so they were removed rather than reworded.
//
// Every number below was read directly from the client's own Google Search
// Console and GA4 properties on 27 Oct 2026. Search Console figures cover
// launch to 25 Oct 2026; GA4 figures cover the 28 days to 26 Oct 2026. When
// these are refreshed, re-read both sources rather than estimating — a number
// that cannot be produced on a client call should not be on this page.
import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'marblepro-dubai',
    name: 'MarblePro',
    client: 'MarblePro — Marble Polishing & Floor Restoration',
    city: 'Dubai',
    country: 'UAE',
    flag: '🇦🇪',
    industry: 'Marble Polishing & Floor Restoration',
    service: 'Web Development + Technical SEO + Local Search',
    problem:
      'MarblePro had the skills and the equipment but almost no way to be found. Marble polishing in Dubai is dominated by established contractors, and the business was relying on word of mouth and the occasional repeat customer. We built the site from scratch and took it from zero to page one for the terms people actually search before booking a polishing job.',
    solution: [
      'Built the site from the ground up — fast, mobile-first, with a dedicated page for each service rather than one long homepage',
      'Separate pages for the work buyers search by name: marble polishing, floor restoration, terrazzo polishing, Corian countertop repair, yellow stain removal and deep scratch repair',
      'Before-and-after galleries on their own URLs, which is what convinces a buyer comparing contractors and what earns the image results',
      'Technical SEO and structured data so Google and AI assistants can read the service, the service area and the pricing signals',
      'A standalone free-quote page kept one click from every service, instead of a form buried at the bottom',
    ],
    results: [
      { label: 'Search Impressions', value: '56.6K' },
      { label: 'Clicks from Google', value: '580' },
      { label: 'Keywords Ranking', value: '995' },
      { label: 'Avg. Position', value: '9.1' },
    ],
    metrics: [
      { label: 'Search Impressions', value: '56.6K' },
      { label: 'Clicks from Google', value: '580' },
      { label: 'Keywords Ranking', value: '995' },
    ],
    duration: '5 months, ongoing',
    budget: 'On request',
    image: 'https://images.pexels.com/photos/6489084/pexels-photo-6489084.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Development', 'SEO', 'Local Search', 'UAE'],
  },
  {
    slug: 'al-haya-cleaning',
    name: 'Al Haya Cleaning Services',
    client: 'Al Haya Cleaning Services',
    city: 'Dubai',
    country: 'UAE',
    flag: '🇦🇪',
    industry: 'Professional Cleaning Services',
    service: 'Multi-Site Web Development + SEO + Google Business Optimization',
    problem:
      'Cleaning is one of the most competitive search markets in the UAE, and one website trying to rank for everything from villa deep cleaning to sofa shampooing ranks for none of it. We built a group of focused sites instead — a main services site plus dedicated sites for sofa cleaning, villa cleaning and carpet cleaning — each with its own city pages across all 7 Emirates and its own WhatsApp booking path.',
    solution: [
      'Built four connected websites, each targeting one service cluster rather than competing with itself for the same keywords',
      'City-level pages across all 7 Emirates — Dubai, Sharjah, Abu Dhabi, Ajman, Fujairah and beyond — because cleaning searches are local before they are anything else',
      'Google Business Profiles set up and optimized so the brand appears in the map pack, not only in the blue links',
      'WhatsApp booking built into every page, which is how customers in this market actually want to book',
      'Service guides and a before-and-after gallery that answer pricing questions before a customer has to ask',
    ],
    results: [
      { label: 'Search Impressions', value: '86K' },
      { label: 'Monthly Visitors', value: '600+' },
      { label: 'Keywords Ranking', value: '2,900+' },
      { label: 'Coverage', value: '7 Emirates' },
    ],
    metrics: [
      { label: 'Search Impressions', value: '86K' },
      { label: 'Monthly Visitors', value: '600+' },
      { label: 'Coverage', value: '7 Emirates' },
    ],
    duration: '5 months, ongoing',
    budget: 'On request',
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Development', 'SEO', 'Google Business', 'UAE'],
  },
];
