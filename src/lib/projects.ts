// lib/projects.ts — portfolio case studies
//
// Only real, delivered client work belongs here. The file previously carried
// five invented case studies (Zafran Kitchen, AlNoor Properties, UrbanEdge
// Store, ClearSkin Clinic, PeakDrive Autos) with fabricated revenue and ROAS
// figures. A buyer who checks one of those names and finds nothing stops
// trusting the whole site, so they have been removed rather than reworded.
import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'al-haya-cleaning',
    name: 'Al Haya Cleaning Services',
    client: 'Al Haya Cleaning Services',
    city: 'Dubai',
    country: 'UAE',
    flag: '🇦🇪',
    industry: 'Professional Cleaning Services',
    service: 'Web Development + SEO + Google Business Optimization',
    problem: 'Al Haya Cleaning Services needed a strong digital presence to stand out in the competitive UAE cleaning market. We built them a high-converting website, optimized their Google visibility across all 7 Emirates, and set up an instant WhatsApp booking system — turning online visitors into paying customers.',
    solution: [
      'Built a fully responsive, SEO-optimized website showcasing all services with dedicated pages for villa, apartment, and deep cleaning',
      'Targeted high-intent keywords like "villa deep cleaning Dubai" and "move-out cleaning UAE" to drive organic traffic',
      'Set up and optimized Google Business Profiles across all 7 Emirates for maximum local visibility',
      'Integrated a WhatsApp-based instant booking system for seamless customer communication and faster conversions',
    ],
    results: [
      { label: 'Online Bookings', value: '+480%' },
      { label: 'Google Rating', value: '4.9★' },
      { label: 'Reviews', value: '500+' },
      { label: 'Coverage', value: '7 Emirates' },
    ],
    metrics: [
      { label: 'Online Bookings', value: '+480%' },
      { label: 'Google Rating', value: '4.9★' },
      { label: 'Reviews', value: '500+' },
    ],
    duration: '3 months',
    budget: 'AED 6,000/month',
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Development', 'SEO', 'Google Business', 'UAE'],
  },
];
