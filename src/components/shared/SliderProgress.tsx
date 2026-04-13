'use client';

import { useEffect, useRef, useState } from 'react';

interface SliderProgressProps {
  duration: number; // ms per slide
  totalSlides: number;
  currentSlide: number;
  isPlaying?: boolean;
  color?: string;
}

/**
 * rAF-based progress bar for sliders.
 * Provides smooth, sub-frame precision progress tracking.
 */
export default function SliderProgress({
  duration,
  totalSlides,
  currentSlide,
  isPlaying = true,
  color = '#C8102E',
}: SliderProgressProps) {
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset progress when slide changes
    startTimeRef.current = null;
    setProgress(0);

    if (!isPlaying) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress);

      if (newProgress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [currentSlide, duration, isPlaying]);

  return (
    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-none"
        style={{
          width: `${progress * 100}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}
