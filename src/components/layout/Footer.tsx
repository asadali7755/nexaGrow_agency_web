'use client';

import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import { Mail } from 'lucide-react';

const services = [
  { label: 'Social Media Marketing', slug: 'social-media-marketing' },
  { label: 'AI Automation', slug: 'ai-automation' },
  { label: 'Web Development', slug: 'web-development' },
  { label: 'Google Ads', slug: 'google-ads' },
  { label: 'Brand Strategy', slug: 'brand-strategy' },
  { label: 'Content Creation', slug: 'content-creation' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
];

const markets = [
  'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman',
  'USA', 'Canada', 'UK', 'Egypt', 'Jordan', 'Lebanon',
];


export default function Footer() {
  return (
    <footer className="relative always-black">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/bg_banner1.jpg)',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(8, 32, 50, 0.95)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo + Tagline + Social */}
          <div>
            <Logo size={36} variant="light" tagline="Digital Growth Partner" />
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Helping businesses across the Arab world, USA and Canada grow through digital marketing, AI automation, and web development.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map(({ label, slug }) => (
                <li key={slug}>
                  <Link href={`/services/${slug}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:leoali851@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  leoali851@gmail.com
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NexaGrow Agency. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <span className="text-gray-500 text-sm">Markets:</span>
            {markets.map((m) => (
              <span key={m} className="text-gray-500 text-sm">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
