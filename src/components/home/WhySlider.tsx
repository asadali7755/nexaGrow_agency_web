'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SliderProgress from '@/components/shared/SliderProgress';
import { images } from '@/lib/pexels';
import type { WhySlide } from '@/types';

const slideGradients = [
  'linear-gradient(135deg, #0061ff 0%, #60efff 100%)',   // Electric Blue
  'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',   // Coral Fire
  'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',   // Sky Ocean
  'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',   // Sunset Gold
];

const slides: WhySlide[] = [
  {
    title: 'Data-Driven Strategy',
    desc: 'Every decision backed by analytics. We track, measure, and optimize every campaign for maximum ROI.',
    image: images.why1,
    stats: [
      { value: '95%', label: 'Client Retention' },
      { value: '4.2x', label: 'Average ROAS' },
    ],
    themeLight: '#F0EBE0',
    themeDark: '#1A1A1A',
  },
  {
    title: 'AI-Powered Efficiency',
    desc: 'Our AI automation saves clients 20+ hours per week while improving lead qualification and response times.',
    image: images.why2,
    stats: [
      { value: '20+', label: 'Hours Saved/Week' },
      { value: '24/7', label: 'AI Availability' },
    ],
    themeLight: '#E8F4FD',
    themeDark: '#0D1B2A',
  },
  {
    title: 'Global Market Expertise',
    desc: 'With team members from 6+ countries, we understand local markets and deliver culturally relevant campaigns.',
    image: images.why3,
    stats: [
      { value: '24+', label: 'Markets Served' },
      { value: '6+', label: 'Countries' },
    ],
    themeLight: '#F5F2ED',
    themeDark: '#111111',
  },
  {
    title: 'Transparent Reporting',
    desc: 'Real-time dashboards, weekly updates, and monthly strategy calls. You always know exactly where your money goes.',
    image: images.why4,
    stats: [
      { value: '100%', label: 'Transparency' },
      { value: 'Weekly', label: 'Reports' },
    ],
    themeLight: '#F3E5F5',
    themeDark: '#1A0D2A',
  },
];

export default function WhySlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const interval = 5000;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide, interval]);

  const slide = slides[current];

  return (
    <section
      className="py-20 lg:py-28 transition-all duration-700 ease-in-out"
      style={{ background: slideGradients[current] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div key={current} className="animate-fade-up">
            <span className="text-sm font-semibold tracking-wider uppercase text-white/80">
              Why NexaGrow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white font-display">
              {slide.title}
            </h2>
            <p className="mt-4 text-lg text-white/85">{slide.desc}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {slide.stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors" aria-label="Previous">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => { nextSlide(); setIsPlaying(false); }} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors" aria-label="Next">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex gap-2 ml-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrent(i); setIsPlaying(false); }}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-white w-8' : 'bg-white/30 w-3 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-12">
          <SliderProgress duration={interval} totalSlides={slides.length} currentSlide={current} isPlaying={isPlaying} />
        </div>
      </div>
    </section>
  );
}
