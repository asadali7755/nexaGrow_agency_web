'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SliderProgress from '@/components/shared/SliderProgress';
import { testimonials } from '@/lib/team';

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const interval = 5000;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isPlaying, nextSlide, interval]);

  const t = testimonials[current];
  const isThemeAware = current === 1;
  const bgClass = isThemeAware ? 'bg-[var(--bg-card)]' : 'always-dark';

  return (
    <section className={`py-20 lg:py-28 transition-colors duration-500 ${bgClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-wider uppercase text-brand">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-[var(--fg)] font-display">
            What Our Clients Say
          </h2>
        </div>

        <div key={current} className="text-center animate-fade-up">
          {/* Quote */}
          <Quote className="w-10 h-10 text-brand mx-auto mb-6 opacity-50" />
          <blockquote className="text-xl md:text-2xl text-[var(--fg)] font-display leading-relaxed italic">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
              <Image src={t.image} alt={t.name} fill className="object-cover" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-[var(--fg)]">{t.name}</p>
              <p className="text-sm text-[var(--fg-muted)]">{t.role}, {t.company}</p>
              <p className="text-xs text-[var(--fg-dim)]">{t.city}, {t.country}</p>
            </div>
          </div>

          {/* Results */}
          <div className="flex justify-center gap-6 mt-8">
            {t.results.map((r) => (
              <div key={r.label} className="text-center">
                <div className="text-2xl font-bold text-brand">{r.value}</div>
                <div className="text-xs text-[var(--fg-muted)]">{r.label}</div>
              </div>
            ))}
          </div>

          {/* Project Image */}
          <div className="relative mt-8 w-full max-w-md mx-auto aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
            <Image src={t.projectImage} alt={t.company} fill className="object-cover" />
            <div className="absolute top-2 left-2 px-2 py-1 bg-brand text-white text-xs rounded-full">
              {t.industryLabel}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg)] hover:border-brand hover:text-brand transition-colors" aria-label="Previous testimonial">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextSlide} className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg)] hover:border-brand hover:text-brand transition-colors" aria-label="Next testimonial">
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="flex gap-2 ml-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setIsPlaying(false); }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-brand w-8' : 'bg-[var(--fg-dim)] w-3'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <SliderProgress duration={interval} totalSlides={testimonials.length} currentSlide={current} isPlaying={isPlaying} />
        </div>
      </div>
    </section>
  );
}
