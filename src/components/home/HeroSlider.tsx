'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import SliderProgress from '@/components/shared/SliderProgress';
import { images } from '@/lib/pexels';

const slides = [
  {
    title: 'Digital Marketing That Drives Revenue',
    subtitle: 'We help businesses across the Arab world, USA and Canada scale with data-driven marketing strategies.',
    image: images.hero1,
  },
  {
    title: 'AI-Powered Automation',
    subtitle: 'Save 20+ hours per week with intelligent WhatsApp bots and CRM automation.',
    image: images.hero2,
  },
  {
    title: 'Websites That Convert',
    subtitle: 'Blazing-fast, SEO-optimized websites designed to turn visitors into customers.',
    image: images.hero3,
  },
  {
    title: 'Google Ads That Actually Work',
    subtitle: 'Capture high-intent buyers and maximize your return on ad spend.',
    image: images.hero4,
  },
  {
    title: 'Your Growth Partner',
    subtitle: 'From strategy to execution — we are the team behind your digital success.',
    image: images.hero5,
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const interval = 4000;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide, interval]);

  return (
    <section className="relative min-h-screen flex items-center always-black overflow-hidden">
      {/* Background Images — CSS crossfade, no Framer Motion */}
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
            style={{ objectPosition: 'center' }}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-[3] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div key={current} className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display leading-tight">
                {slides[current].title}
              </h1>
              <p className="mt-6 text-lg text-gray-300 max-w-xl">
                {slides[current].subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="px-8 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-red-dark transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="/portfolio"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>

          {/* Right side — empty for image visibility */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-[4] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Progress Bar */}
          <SliderProgress duration={interval} totalSlides={slides.length} currentSlide={current} isPlaying={isPlaying} />

          {/* Dots + Counter */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setIsPlaying(false); }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-brand w-8' : 'bg-white/40 hover:bg-white/60 w-3'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="text-white/60 text-sm font-mono">
              <span className="text-white font-bold">{String(current + 1).padStart(2, '0')}</span>
              {' / '}
              {String(slides.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
