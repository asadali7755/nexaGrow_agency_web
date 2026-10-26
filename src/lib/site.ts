// lib/site.ts — single source of truth for domain, contact details and social profiles.
// Everything SEO-related (metadata, sitemap, robots, JSON-LD) reads from here so the
// site can never again ship with a half-updated domain or a dead contact link.

/**
 * Canonical origin for metadata, canonicals, sitemap.xml, robots.txt and JSON-LD.
 *
 * The fallback MUST be a host that actually resolves. nexagrow.agency is not
 * registered at the time of writing (DNS returns NXDOMAIN), and pointing
 * canonical tags at a dead host would tell Google to drop the live pages from
 * its index — worse than the problem it was meant to fix.
 *
 * Once the real domain is registered and attached in Vercel, set
 * NEXT_PUBLIC_SITE_URL to it and every URL on the site follows automatically.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://markiting-services-web.vercel.app'
).replace(/\/$/, '');

export const SITE_NAME = 'NexaGrow Agency';
export const SITE_LEGAL_NAME = 'NexaGrow Agency';

/**
 * Inbox shown publicly and used as the lead destination.
 * Falls back to the address that actually receives mail today — publishing
 * hello@nexagrow.agency before that domain exists would bounce every reply.
 */
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'leoali851@gmail.com';

/**
 * Resend sender. Must be a domain verified in Resend — a free inbox such as
 * gmail.com is rejected, which is what silently swallowed every lead before.
 * Defaults to Resend's shared test sender so the form works the moment an API
 * key is added, with no custom domain required. Switch to leads@<your-domain>
 * once the domain is verified in Resend.
 */
export const LEADS_FROM_EMAIL =
  process.env.LEADS_FROM_EMAIL || 'NexaGrow Website <onboarding@resend.dev>';

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
