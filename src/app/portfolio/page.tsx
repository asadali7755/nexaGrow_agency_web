import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import { projects } from '@/lib/projects';
import { builds } from '@/lib/builds';
import { generateMeta } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';

export const metadata = generateMeta({
  title: 'Our Projects — Case Studies & Results',
  description: 'Case studies from real NexaGrow clients, plus the web apps, tools and AI agents built in-house. See the work delivered and the results it produced.',
  slug: 'portfolio',
  keywords: ['digital marketing case studies', 'marketing results UAE', 'SEO case study', 'Google Ads results', 'portfolio NexaGrow'],
});

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        type="organization"
        data={{ name: 'NexaGrow Agency', description: 'Digital Marketing Agency Portfolio' }}
      />
      <section className="pt-24 pb-20 lg:py-28 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
          as="h1"
            label="Our Projects"
            title="Real Results, Real Clients"
            subtitle="We would rather show you a small number of projects we genuinely delivered than a long list we did not. More case studies are added as work completes."
            align="center"
          />

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-brand/10 text-brand text-xs font-semibold rounded-full">
                      {project.industry}
                    </span>
                    <span className="text-sm text-[var(--fg-muted)]">
                      {project.city}, {project.country}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] font-display">
                    {project.name}
                  </h2>

                  <p className="text-[var(--fg-muted)] leading-relaxed">
                    {project.problem}
                  </p>

                  <p className="text-sm text-[var(--fg-muted)]">
                    <span className="font-semibold text-[var(--fg)]">Service:</span> {project.service}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 py-4">
                    {project.metrics.slice(0, 3).map((m) => (
                      <div key={m.label} className="text-center p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border)]">
                        <div className="text-xl font-bold text-brand">{m.value}</div>
                        <div className="text-xs text-[var(--fg-muted)] mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-block px-6 py-3 bg-brand text-white text-sm font-semibold rounded-lg hover:bg-red-dark transition-colors shadow-md"
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products and systems built in-house. Kept visually separate from the
          client case studies above so they are never mistaken for client work. */}
      <section className="py-20 lg:py-28 bg-[var(--bg-card)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Apps, Tools & AI Agents"
            title="Systems Built In-House"
            subtitle="Beyond client websites, these are products and AI systems Asad Ali designed and coded himself. They are not client case studies; they show what NexaGrow can build for your business."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builds.map((b) => (
              <article
                key={b.name}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-[var(--bg)] border border-[var(--border)]"
              >
                <span className="self-start px-3 py-1 bg-brand/10 text-brand text-xs font-semibold rounded-full">
                  {b.kind}
                </span>
                <h3 className="text-xl font-bold text-[var(--fg)] font-display">{b.name}</h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed flex-1">{b.summary}</p>
                <ul className="flex flex-wrap gap-2" aria-label={`${b.name} technology`}>
                  {b.stack.map((t) => (
                    <li
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-[var(--fg-muted)]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                {b.link ? (
                  <a
                    href={b.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-brand hover:underline"
                  >
                    {b.link.label} →
                  </a>
                ) : (
                  <span className="text-sm text-[var(--fg-muted)]">Internal tool · demo on request</span>
                )}
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-brand text-white text-sm font-semibold rounded-lg hover:bg-red-dark transition-colors shadow-md"
            >
              Need an app, tool or AI agent? Tell us about it →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
