// lib/seo.ts — SEO metadata helpers and base configuration
import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export const baseMeta = {
  siteName: SITE_NAME,
  baseUrl: SITE_URL,
  defaultTitle: 'NexaGrow Agency — Digital Marketing, AI & Web Development',
  defaultDescription:
    'Top digital marketing agency in UAE, Saudi Arabia, USA & Canada. Expert in social media marketing, SEO, Google Ads, AI automation, web development, and brand strategy.',
  defaultImage: '/api/og',
};

/** Share card rendered on demand by /api/og, so it always matches the page. */
function ogImageFor(title: string, description: string): string {
  const params = new URLSearchParams({
    title,
    subtitle: description.slice(0, 140),
  });
  return `${SITE_URL}/api/og?${params.toString()}`;
}

export function generateMeta(page: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = page.slug ? `${baseMeta.baseUrl}/${page.slug}` : baseMeta.baseUrl;
  const image = page.image || ogImageFor(page.title, page.description);

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: page.title }],
      siteName: baseMeta.siteName,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
