// lib/site.ts — single source of truth for domain, contact details and social profiles.
// Everything SEO-related (metadata, sitemap, robots, JSON-LD) reads from here so the
// site can never again ship with a half-updated domain or a dead contact link.

/** Production domain. Override per-environment with NEXT_PUBLIC_SITE_URL. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://nexagrow.agency'
).replace(/\/$/, '');

export const SITE_NAME = 'NexaGrow Agency';
export const SITE_LEGAL_NAME = 'NexaGrow Agency';

/** Inbox that receives website leads. */
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@nexagrow.agency';

/** Verified Resend sender. Must be on a domain verified in Resend, not a free inbox. */
export const LEADS_FROM_EMAIL =
  process.env.LEADS_FROM_EMAIL || 'NexaGrow Website <leads@nexagrow.agency>';

/**
 * WhatsApp number in wa.me format: country code + number, no "+" and no spaces.
 * Returns null when unset so callers render a working fallback instead of
 * a dead `wa.me/undefined` link.
 */
export function whatsappNumber(): string | null {
  const raw = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/[^0-9]/g, '');
  return raw.length >= 10 ? raw : null;
}

/** Full wa.me URL, or null when no number is configured. */
export function whatsappLink(message: string): string | null {
  const number = whatsappNumber();
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Public social profiles — these feed schema.org `sameAs` and entity recognition. */
export const SOCIAL_PROFILES: string[] = [
  process.env.NEXT_PUBLIC_LINKEDIN_URL,
  process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  process.env.NEXT_PUBLIC_FACEBOOK_URL,
  process.env.NEXT_PUBLIC_YOUTUBE_URL,
].filter((url): url is string => Boolean(url));

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

export function absoluteUrl(path = ''): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
