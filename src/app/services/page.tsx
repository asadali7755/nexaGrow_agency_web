import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from '@/components/shared/SectionHeader';
import { services } from '@/lib/services';
import { generateMeta } from '@/lib/seo';

export const metadata = generateMeta({
  title: 'Services — Digital Marketing, AI & Web Development',
  description: 'Explore our full range of digital marketing services including social media marketing, SEO, Google Ads, AI automation, web development, and brand strategy. Serving UAE, Saudi Arabia, USA & Canada.',
  slug: 'services',
  keywords: ['digital marketing services', 'social media marketing', 'SEO services Dubai', 'Google Ads agency', 'AI automation', 'web development UAE'],
});

export default function ServicesPage() {
  return (
    <section className="pt-24 pb-20 lg:py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title="Everything You Need to Grow Online"
          subtitle="From strategy to execution — comprehensive digital marketing solutions tailored to your business."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-[var(--bg-card)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-[var(--fg)] group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--fg-muted)] mt-2 line-clamp-2">{service.shortDesc}</p>
                <span className="inline-block mt-4 text-sm font-semibold text-brand group-hover:underline">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
