import type { Thing, Organization, Person, Service, Review, FAQPage } from 'schema-dts';

interface JsonLdProps {
  type: 'organization' | 'person' | 'service' | 'review' | 'faq' | 'custom';
  data: Record<string, unknown>;
}

/**
 * JSON-LD schema markup injector for SEO.
 * Supports Organization, Person, Service, Review, and FAQ schemas.
 */
export default function JsonLd({ type, data }: JsonLdProps) {
  let schema: Thing | null = null;

  switch (type) {
    case 'organization':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        ...data,
      } as Organization;
      break;
    case 'person':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        ...data,
      } as Person;
      break;
    case 'service':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        ...data,
      } as Service;
      break;
    case 'review':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Review',
        ...data,
      } as Review;
      break;
    case 'faq':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        ...data,
      } as FAQPage;
      break;
    case 'custom':
      schema = data as Thing;
      break;
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
