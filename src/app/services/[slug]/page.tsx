import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/lib/services';
import { generateMeta } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site';
import { CheckCircle } from 'lucide-react';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return generateMeta({ title: 'Service Not Found', description: '', slug: 'services' });

  const title = service.seoTitle
    ? `${service.seoTitle} — UAE, Saudi Arabia, USA & Canada`
    : `${service.title} — Digital Marketing Service`;

  return generateMeta({
    title,
    description: service.shortDesc,
    slug: `services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const faqs = service.faqs ?? [];

  return (
    <>
      <JsonLd
        type="custom"
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': `${absoluteUrl(`/services/${service.slug}`)}#service`,
              name: service.seoTitle || service.title,
              description: service.shortDesc,
              url: absoluteUrl(`/services/${service.slug}`),
              serviceType: service.title,
              provider: {
                '@type': 'Organization',
                '@id': `${SITE_URL}/#organization`,
                name: SITE_NAME,
                url: SITE_URL,
              },
              areaServed: [
                'United Arab Emirates',
                'Saudi Arabia',
                'Qatar',
                'Kuwait',
                'United States',
                'Canada',
                'United Kingdom',
                'Pakistan',
              ].map((name) => ({ '@type': 'Country', name })),
              hasOfferCatalog: service.deliverables?.length
                ? {
                    '@type': 'OfferCatalog',
                    name: `${service.title} deliverables`,
                    itemListElement: service.deliverables.map((d) => ({
                      '@type': 'Offer',
                      itemOffered: { '@type': 'Service', name: d },
                    })),
                  }
                : undefined,
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: service.title,
                  item: absoluteUrl(`/services/${service.slug}`),
                },
              ],
            },
            // FAQ markup mirrors the questions visible on the page — required
            // for the markup to be valid and eligible.
            ...(faqs.length
              ? [
                  {
                    '@type': 'FAQPage',
                    mainEntity: faqs.map((f) => ({
                      '@type': 'Question',
                      name: f.q,
                      acceptedAnswer: { '@type': 'Answer', text: f.a },
                    })),
                  },
                ]
              : []),
          ],
        }}
      />

      <article className="pt-24 pb-20 bg-[var(--bg)]">
        {/* Hero */}
        <div className="relative w-full aspect-[21/9] overflow-hidden">
          <Image src={service.image} alt={service.title} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="text-white/80 hover:text-white text-sm mb-4 inline-block">
              ← Back to Services
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white font-display">
              {service.seoTitle || service.title}
            </h1>
            <p className="mt-2 text-white/80 max-w-2xl">{service.shortDesc}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb trail */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[var(--fg-muted)]">
            <Link href="/" className="hover:text-brand">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-brand">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--fg)]">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Intro */}
              <div className="space-y-4">
                {(service.intro ?? [service.fullDesc]).map((para, i) => (
                  <p key={i} className="text-lg text-[var(--fg-muted)] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Who it's for */}
              {service.whoFor?.length ? (
                <section>
                  <h2 className="text-2xl font-bold text-[var(--fg)] mb-4 font-display">
                    Who {service.title} is for
                  </h2>
                  <ul className="space-y-3">
                    {service.whoFor.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-1" />
                        <span className="text-[var(--fg-muted)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {/* Process */}
              {service.process?.length ? (
                <section>
                  <h2 className="text-2xl font-bold text-[var(--fg)] mb-6 font-display">
                    How we run it
                  </h2>
                  <ol className="space-y-6">
                    {service.process.map((step, i) => (
                      <li key={step.title} className="flex gap-4">
                        <span className="flex-shrink-0 w-9 h-9 rounded-full bg-brand text-white font-bold flex items-center justify-center text-sm">
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="font-semibold text-[var(--fg)]">{step.title}</h3>
                          <p className="text-[var(--fg-muted)] mt-1">{step.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              ) : null}

              {/* Deliverables */}
              <section>
                <h2 className="text-2xl font-bold text-[var(--fg)] mb-4 font-display">
                  What you get each month
                </h2>
                <ul className="space-y-3">
                  {(service.deliverables ?? service.features).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--fg)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Outcomes */}
              {service.outcomes?.length ? (
                <section>
                  <h2 className="text-2xl font-bold text-[var(--fg)] mb-4 font-display">
                    What results look like
                  </h2>
                  <ul className="space-y-3">
                    {service.outcomes.map((item) => (
                      <li key={item} className="text-[var(--fg-muted)] leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {/* Pricing */}
              {service.pricingNote ? (
                <section className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
                  <h2 className="text-2xl font-bold text-[var(--fg)] mb-3 font-display">
                    What it costs
                  </h2>
                  <p className="text-[var(--fg-muted)] leading-relaxed">{service.pricingNote}</p>
                </section>
              ) : null}

              {/* FAQs */}
              {faqs.length ? (
                <section>
                  <h2 className="text-2xl font-bold text-[var(--fg)] mb-6 font-display">
                    Frequently asked questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <details
                        key={faq.q}
                        className="group p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]"
                      >
                        <summary className="font-semibold text-[var(--fg)] cursor-pointer list-none flex justify-between items-center gap-4">
                          {faq.q}
                          <span className="text-brand text-xl group-open:rotate-45 transition-transform">+</span>
                        </summary>
                        <p className="mt-3 text-[var(--fg-muted)] leading-relaxed">{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}

              {/* Related services — internal linking */}
              <section>
                <h2 className="text-2xl font-bold text-[var(--fg)] mb-4 font-display">
                  Services that pair well with this
                </h2>
                <div className="flex flex-wrap gap-3">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 4)
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--fg)] hover:border-brand hover:text-brand transition-colors"
                      >
                        {s.title}
                      </Link>
                    ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div>
              <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-sm sticky top-24">
                <h2 className="font-semibold text-[var(--fg)] mb-4">
                  Get started with {service.title}
                </h2>
                <p className="text-sm text-[var(--fg-muted)] mb-6">
                  Tell us what you are trying to achieve and we will tell you honestly whether this
                  service is the right fit — and what it would cost.
                </p>
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="block w-full text-center px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-red-dark transition-colors"
                >
                  Get a Free Quote →
                </Link>

                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <p className="text-xs uppercase tracking-wide text-[var(--fg-muted)] mb-2">
                    Related topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="px-2.5 py-1 text-xs rounded-full bg-[var(--bg-elevated)] text-[var(--fg-muted)]"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
