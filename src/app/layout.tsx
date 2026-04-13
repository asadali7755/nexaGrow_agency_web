import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Syne } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import '@/styles/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F2ED' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://markiting-services-web.vercel.app'),
  title: {
    default: 'NexaGrow Agency — Digital Marketing, AI & Web Development',
    template: '%s | NexaGrow Agency',
  },
  description:
    'NexaGrow is a top digital marketing agency in UAE, Saudi Arabia, USA & Canada. We specialize in social media marketing, SEO, Google Ads, AI automation, web development, and brand strategy to grow your business online.',
  keywords: [
    'digital marketing agency', 'digital marketing UAE', 'social media marketing Dubai',
    'SEO agency Saudi Arabia', 'Google Ads management', 'AI automation business',
    'web development Dubai', 'brand strategy agency', 'content creation UAE',
    'marketing agency Middle East', 'PPC management', 'lead generation',
    'WhatsApp automation', 'ecommerce marketing', 'NexaGrow Agency',
  ],
  authors: [{ name: 'NexaGrow Agency', url: 'https://markiting-services-web.vercel.app' }],
  creator: 'NexaGrow Agency',
  publisher: 'NexaGrow Agency',
  verification: {
    google: '2mXFaag5G1fFLK_0DKABuHlB2CXFQyqPT6hfzNYFae0',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://markiting-services-web.vercel.app',
    siteName: 'NexaGrow Agency',
    title: 'NexaGrow Agency — Digital Marketing, AI & Web Development',
    description:
      'Top digital marketing agency helping businesses across UAE, Saudi Arabia, USA & Canada grow with data-driven marketing, AI automation, and web development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NexaGrow Agency — Digital Marketing & AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexaGrow Agency — Digital Marketing, AI & Web Development',
    description:
      'Top digital marketing agency helping businesses grow with data-driven strategies.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://markiting-services-web.vercel.app',
  },
  icons: {
    icon: '/favicon.ico',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${syne.variable}`}>
      <body className="antialiased min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="nexagrow-theme">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
