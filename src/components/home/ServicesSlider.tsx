'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { services } from '@/lib/services';
import SliderProgress from '@/components/shared/SliderProgress';

const slideGradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',   // Purple Blue
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',   // Pink Red
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',   // Ocean Blue
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',   // Green Teal
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',   // Pink Gold
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',   // Lavender Pink
];

export default function ServicesSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const interval = 5000;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide, interval]);

  const service = services[current];

  return (
    <section
      className="py-20 lg:py-28 transition-all duration-700 ease-in-out"
      style={{ background: slideGradients[current] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content — LEFT */}
          <div key={current} className="animate-fade-up">
            <span className="text-sm font-semibold tracking-wider uppercase text-white/80">
              Service {current + 1} of {services.length}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white font-display">
              {service.title}
            </h2>
            <p className="mt-4 text-lg text-white/85">{service.shortDesc}</p>

            {/* Features */}
            <ul className="mt-6 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/services/${service.slug}`}
              className="inline-block mt-8 px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-lg"
            >
              Get Started
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-8">
              <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors" aria-label="Previous service">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => { nextSlide(); setIsPlaying(false); }} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors" aria-label="Next service">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex gap-2 ml-4">
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrent(i); setIsPlaying(false); }}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-white w-8' : 'bg-white/30 w-3 hover:bg-white/50'
                    }`}
                    aria-label={`Go to service ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Image — RIGHT */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12">
          <SliderProgress duration={interval} totalSlides={services.length} currentSlide={current} isPlaying={isPlaying} />
        </div>
      </div>
    </section>
  );
}
