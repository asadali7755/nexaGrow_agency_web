import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/lib/services';
import { generateMeta } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { CheckCircle } from 'lucide-react';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return generateMeta({ title: 'Service Not Found', description: '', slug: 'services' });
  return generateMeta({
    title: `${service.title} — Digital Marketing Service`,
    description: `${service.fullDesc.slice(0, 155)}...`,
    slug: `services/${service.slug}`,
    image: service.image,
    keywords: service.keywords,
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
    <JsonLd
      type="service"
      data={{
        name: service.title,
        description: service.fullDesc,
        provider: { '@type': 'Organization', name: 'NexaGrow Agency', url: 'https://markiting-services-web.vercel.app' },
        areaServed: ['UAE', 'Saudi Arabia', 'USA', 'Canada', 'UK', 'Qatar', 'Kuwait'],
        serviceType: service.title,
      }}
    />
    <article className="pt-24 pb-20 bg-[var(--bg)]">
      {/* Hero */}
      <div className="relative w-full aspect-[21/9] overflow-hidden">
        <Image src={service.image} alt={service.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-white/80 hover:text-white text-sm mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-display">{service.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <p className="text-lg text-[var(--fg-muted)] mb-8">{service.fullDesc}</p>

            <h2 className="text-xl font-bold text-[var(--fg)] mb-4">What&apos;s Included</h2>
            <ul className="space-y-3 mb-8">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--fg)]">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2">
              {service.keywords.map((kw) => (
                <span key={kw} className="px-3 py-1 text-sm rounded-full bg-[var(--bg-elevated)] text-[var(--fg-muted)]">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-sm sticky top-24">
              <h3 className="font-semibold text-[var(--fg)] mb-4">Get Started with {service.title}</h3>
              <p className="text-sm text-[var(--fg-muted)] mb-6">
                Ready to see results? Contact us today for a free consultation and custom strategy.
              </p>
              <Link
                href={`/contact?service=${service.slug}`}
                className="block w-full text-center px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-red-dark transition-colors"
              >
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
