'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface LogoProps {
  size?: number;
  variant?: 'dark' | 'light' | 'auto';
  tagline?: string;
}

export default function Logo({ size = 40, variant = 'auto', tagline }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentVariant = variant === 'auto' ? (mounted ? resolvedTheme : 'light') : variant;
  const textColor = currentVariant === 'dark' ? '#F0EDE8' : '#1A1A1A';
  const redColor = '#C8102E';

  return (
    <div className="flex flex-col items-start gap-0">
      <div className="flex items-center gap-2">
        {/* SVG Mark */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="8" fill={redColor} />
          <path
            d="M12 28V12L20 22L28 12V28"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Wordmark */}
        <div className="flex items-baseline" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: `${size * 0.55}px`, lineHeight: 1, color: textColor }}>
          <span>Nexa</span>
          <span style={{ color: redColor }}>Grow</span>
        </div>
      </div>

      {/* Optional Tagline */}
      {tagline && (
        <p className="text-xs mt-0.5" style={{ color: 'var(--fg-muted)', fontFamily: 'Space Grotesk, sans-serif' }}>
          {tagline}
        </p>
      )}
    </div>
  );
}
