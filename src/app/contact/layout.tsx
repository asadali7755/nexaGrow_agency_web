import { generateMeta } from '@/lib/seo';

export const metadata = generateMeta({
  title: 'Contact Us — Get a Free Consultation',
  description: 'Get in touch with NexaGrow Agency for a free digital marketing consultation. We help businesses in UAE, Saudi Arabia, USA & Canada grow online with proven strategies.',
  slug: 'contact',
  keywords: ['contact NexaGrow', 'free marketing consultation', 'digital marketing quote', 'hire marketing agency UAE'],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
