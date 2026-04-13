import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import { projects } from '@/lib/projects';
import { generateMeta } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';

export const metadata = generateMeta({
  title: 'Our Projects — Case Studies & Results',
  description: 'Explore real case studies from businesses across UAE, Saudi Arabia, Canada and more. See measurable results from our digital marketing, SEO, Google Ads, and web development campaigns.',
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
            label="Our Projects"
            title="Real Results, Real Clients"
            subtitle="Browse our case studies and see how we have helped businesses achieve measurable growth."
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
    </>
  );
}
