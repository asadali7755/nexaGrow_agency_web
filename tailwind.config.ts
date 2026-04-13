import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#C8102E',
          dark: '#A00D24',
        },
        brand: '#C8102E',
        dark: {
          DEFAULT: '#0A0A0A',
          1: '#111111',
          2: '#1A1A1A',
          3: '#222222',
        },
        light: {
          DEFAULT: '#F5F2ED',
          2: '#FFFFFF',
          3: '#F0EBE0',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'Syne', 'sans-serif'],
        body: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        logo: ['var(--font-syne)', 'Syne', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        'pulse-ring': 'pulseRing 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseRing: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.15)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
