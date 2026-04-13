// lib/team.ts — 6 team members + testimonials
import type { TeamMember, Testimonial } from '@/types';


export const teamMembers: TeamMember[] = [
  {
    name: 'Asad Ali',
    role: 'Founder & CEO',
    origin: 'Pakistan',
    flag: '🇵🇰',
    skills: ['Digital Strategy', 'Growth Marketing', 'AI Solutions', 'Leadership'],
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
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
  {
    name: 'Ahmed Al-Maktoum',
    role: 'Owner',
    company: 'Zafran Kitchen',
    city: 'Dubai',
    country: 'UAE',
    flag: '🇦🇪',
    quote: 'NexaGrow transformed our Instagram from 2K to 20K followers in just 4 months. Our weekday tables are now fully booked. The ROI has been incredible — best investment we ever made.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    projectImage: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=400',
    industryLabel: 'Restaurant & F&B',
    results: [
      { label: 'Order Growth', value: '+312%' },
      { label: 'New Followers', value: '+18K' },
    ],
  },
  {
    name: 'Fatima Al-Saud',
    role: 'Marketing Director',
    company: 'AlNoor Properties',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    quote: 'We went from zero online presence to 200+ qualified leads per month. NexaGrow understands the Saudi market deeply and delivered results beyond our expectations.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    projectImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
    industryLabel: 'Real Estate',
    results: [
      { label: 'Leads/Month', value: '200+' },
      { label: 'ROI', value: '6x' },
    ],
  },
  {
    name: 'Michael Thompson',
    role: 'Founder',
    company: 'UrbanEdge Store',
    city: 'Toronto',
    country: 'Canada',
    flag: '🇨🇦',
    quote: 'We were burning money on Facebook ads with no results. NexaGrow restructured everything and took us from $12K to $58K per month. They are true growth partners.',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200',
    projectImage: 'https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=400',
    industryLabel: 'E-Commerce',
    results: [
      { label: 'Revenue Growth', value: '+383%' },
      { label: 'ROAS', value: '5.2x' },
    ],
  },
];
