// lib/seo.ts — SEO metadata helpers and base configuration
import type { Metadata } from 'next';

export const baseMeta = {
  siteName: 'NexaGrow Agency',
  baseUrl: 'https://nexagrow.agency',
  defaultTitle: 'NexaGrow Agency — Digital Marketing, AI & Web Development',
  defaultDescription:
    'Top digital marketing agency in UAE, Saudi Arabia, USA & Canada. Expert in social media marketing, SEO, Google Ads, AI automation, web development, and brand strategy.',
  defaultImage: '/og-image.jpg',
};

export function generateMeta(page: {
  title: string;
  description: string;
  slug: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = page.slug ? `${baseMeta.baseUrl}/${page.slug}` : baseMeta.baseUrl;
  const image = page.image || baseMeta.defaultImage;

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
