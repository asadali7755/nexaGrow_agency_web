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
  // Empty on purpose. This list held three invented quotes from people who do
  // not exist (Ahmed Al-Maktoum, Fatima Al-Saud, Michael Thompson), attached to
  // stock photos. Fake testimonials are the fastest way to lose a buyer who
  // reverse-searches the photo. Add real ones here as clients give them —
  // the homepage slider shows itself again automatically once this is non-empty.
];
