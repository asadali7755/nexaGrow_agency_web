'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SliderProgress from '@/components/shared/SliderProgress';

const markets = [
  {
    name: 'UAE',
    desc: 'Dubai, Abu Dhabi, Sharjah and beyond — we help UAE businesses dominate digital with localized campaigns that convert.',
    image: 'https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [{ value: '50+', label: 'Clients Served' }, { value: '#1', label: 'Market Focus' }],
  },
  {
    name: 'Saudi Arabia',
    desc: 'From Riyadh to Jeddah, we deliver growth strategies aligned with Vision 2030 and the booming Saudi digital economy.',
    image: 'https://images.pexels.com/photos/3601167/pexels-photo-3601167.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [{ value: '30+', label: 'Campaigns' }, { value: '6x', label: 'Avg ROI' }],
  },
  {
    name: 'Qatar',
    desc: 'Helping Doha-based businesses capture the fast-growing Qatari market through targeted Google Ads and social media.',
    image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [{ value: '15+', label: 'Clients' }, { value: '3x', label: 'Lead Growth' }],
  },
  {
    name: 'Kuwait',
    desc: 'From healthcare to retail, we help Kuwaiti businesses build powerful online presence and drive measurable results.',
    image: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [{ value: '10+', label: 'Brands' }, { value: '245%', label: 'Growth' }],
  },
  {
    name: 'USA',
    desc: 'Scaling American businesses with data-driven PPC, SEO, and AI automation strategies that deliver real ROI.',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [{ value: '20+', label: 'US Clients' }, { value: '5.2x', label: 'ROAS' }],
  },
  {
    name: 'Canada',
    desc: 'Helping Canadian e-commerce and service businesses grow with performance marketing and conversion optimization.',
    image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [{ value: '15+', label: 'Brands' }, { value: '383%', label: 'Revenue Growth' }],
  },
  {
    name: 'UK',
    desc: 'Supporting London and UK-wide businesses with brand strategy, content marketing, and paid advertising campaigns.',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [{ value: '10+', label: 'Clients' }, { value: '4x', label: 'Avg ROAS' }],
  },
  {
    name: 'Pakistan',
    desc: 'Empowering Pakistani startups and established brands to go digital with affordable, high-impact marketing solutions.',
    image: 'https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [{ value: '25+', label: 'Brands' }, { value: '500%', label: 'Growth' }],
  },
  {
    name: 'Egypt',
    desc: 'Tapping into the largest Arab market with social media strategies and performance campaigns tailored for Egyptian audiences.',
    image: 'https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [{ value: '10+', label: 'Campaigns' }, { value: '3.5x', label: 'ROI' }],
  },
  {
    name: 'India',
    desc: 'Driving growth for Indian businesses through AI-powered automation, Google Ads, and scalable digital marketing strategies.',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    stats: [{ value: '15+', label: 'Clients' }, { value: '4.5x', label: 'ROAS' }],
  },
];

const slideGradients = [
  'linear-gradient(135deg, #FF6B6B 0%, #ee5a24 100%)',   // Ember Red
  'linear-gradient(135deg, #6C5CE7 0%, #a29bfe 100%)',   // Royal Purple
  'linear-gradient(135deg, #00b894 0%, #00cec9 100%)',   // Emerald Cyan
  'linear-gradient(135deg, #e17055 0%, #fdcb6e 100%)',   // Warm Amber
  'linear-gradient(135deg, #0984e3 0%, #74b9ff 100%)',   // Steel Blue
  'linear-gradient(135deg, #d63031 0%, #e17055 100%)',   // Cherry Red
  'linear-gradient(135deg, #636e72 0%, #2d3436 100%)',   // Slate Dark
  'linear-gradient(135deg, #00b894 0%, #55efc4 100%)',   // Mint Green
  'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)',   // Gold Flame
  'linear-gradient(135deg, #6c5ce7 0%, #fd79a8 100%)',   // Purple Pink
];

export default function MarketsSection() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const interval = 4000;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % markets.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + markets.length) % markets.length);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide, interval]);

  const market = markets[current];

  return (
    <section
      className="py-20 lg:py-28 transition-all duration-700 ease-in-out"
      style={{ background: slideGradients[current] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider uppercase text-white/80">
            Global Reach — {markets.length}+ Markets
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image — LEFT */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
            <Image
              src={market.image}
              alt={market.name}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content — RIGHT */}
          <div key={current} className="animate-fade-up">
            <span className="text-sm font-semibold tracking-wider uppercase text-white/70">
              Market {current + 1} of {markets.length}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 text-white font-display">
              {market.name}
            </h2>
            <p className="mt-4 text-lg text-white/85 leading-relaxed">
              {market.desc}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {market.stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors" aria-label="Previous market">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => { nextSlide(); setIsPlaying(false); }} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors" aria-label="Next market">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex gap-1.5 ml-4">
                {markets.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrent(i); setIsPlaying(false); }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-white w-7' : 'bg-white/30 w-2.5 hover:bg-white/50'
                    }`}
                    aria-label={`Go to market ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12">
          <SliderProgress duration={interval} totalSlides={markets.length} currentSlide={current} isPlaying={isPlaying} />
        </div>
      </div>
    </section>
  );
}
