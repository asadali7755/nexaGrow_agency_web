// lib/team.ts — 6 team members + testimonials
import type { TeamMember, Testimonial } from '@/types';


export const teamMembers: TeamMember[] = [
  // Only real people belong here. Five invented colleagues (James Mitchell,
  // Omar Hassan, Sarah Chen, Riya Patel, Khalid Al-Rashid) used to sit below,
  // each on a stock photo — and one of those photos was also in use as a
  // client testimonial, so the same face appeared as both a US creative
  // director and a Riyadh marketing director. Add contractors or hires here
  // only with their own name and their own photo.
  {
    name: 'Asad Ali',
    role: 'Founder & CEO',
    origin: 'Pakistan',
    flag: '🇵🇰',
    skills: ['Digital Strategy', 'Growth Marketing', 'AI Solutions', 'Leadership'],
    image: '/asad-ali-ceo-founder.png',
    isCEO: true,
    bio: 'Asad Ali founded NexaGrow to help businesses in the Gulf, Pakistan and North America get measurable results from digital marketing. He works hands-on with every client on strategy, SEO, paid campaigns and AI automation — if you hire NexaGrow, he is the person doing the work, not a sales contact who hands you over.',
  },
];

export const testimonials: Testimonial[] = [
  // Drafted by NexaGrow at the client's request and approved by him before
  // publishing. Every figure in `results` comes from his own Search Console
  // properties, not from the quote. No author photo on file — the slider
  // shows initials rather than a stock portrait.
  //
  // This list previously held three invented quotes from people who do not
  // exist. Only add entries a real, named client has signed off on.
  {
    name: 'Sheryar',
    role: 'Owner',
    company: 'MarblePro & Al Haya Cleaning Services',
    city: 'Dubai',
    country: 'UAE',
    flag: '🇦🇪',
    quote:
      'For years my work came only through references — online, nobody could find me. NexaGrow built the websites for both my businesses from scratch. MarblePro now comes up on the first page of Google for marble polishing in Dubai, and the cleaning sites bring enquiries from across the Emirates. Work is coming in from the websites now, which never happened before.',
    projectImage:
      'https://images.pexels.com/photos/6489084/pexels-photo-6489084.jpeg?auto=compress&cs=tinysrgb&w=400',
    industryLabel: 'Marble Restoration & Cleaning Services',
    results: [
      { label: 'Search Impressions', value: '142K' },
      { label: 'Clicks from Google', value: '892' },
    ],
  },
];
