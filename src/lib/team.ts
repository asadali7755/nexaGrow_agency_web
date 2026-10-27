// lib/team.ts — 6 team members + testimonials
import type { TeamMember, Testimonial } from '@/types';


export const teamMembers: TeamMember[] = [
  {
    name: 'Asad Ali',
    role: 'Founder & CEO',
    origin: 'Pakistan',
    flag: '🇵🇰',
    skills: ['Digital Strategy', 'Growth Marketing', 'AI Solutions', 'Leadership'],
    image: '/asad-ali-ceo-founder.png',
    isCEO: true,
    bio: 'Asad Ali founded NexaGrow with a vision to help businesses across the Arab world harness the power of digital marketing and AI. With over 10 years of experience in growth marketing, he has helped 100+ businesses scale their online presence.',
  },
  {
    name: 'James Mitchell',
    role: 'Head of Paid Media',
    origin: 'Canada',
    flag: '🇨🇦',
    skills: ['Google Ads', 'Meta Ads', 'Analytics', 'CRO'],
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Omar Hassan',
    role: 'SEO Strategist',
    origin: 'Egypt',
    flag: '🇪🇬',
    skills: ['Technical SEO', 'Content Strategy', 'Link Building', 'Analytics'],
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Sarah Chen',
    role: 'Creative Director',
    origin: 'USA',
    flag: '🇺🇸',
    skills: ['Brand Design', 'UI/UX', 'Video Production', 'Art Direction'],
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Riya Patel',
    role: 'Social Media Manager',
    origin: 'India',
    flag: '🇮🇳',
    skills: ['Content Creation', 'Community Management', 'Influencer Outreach', 'Analytics'],
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Khalid Al-Rashid',
    role: 'AI Automation Engineer',
    origin: 'Saudi Arabia',
    flag: '🇸🇦',
    skills: ['AI Chatbots', 'Workflow Automation', 'API Integration', 'Python'],
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
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
