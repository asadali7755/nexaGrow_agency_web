import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import { generateMeta } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import CountryBadge from '@/components/shared/CountryBadge';
import { CheckCircle } from 'lucide-react';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return generateMeta({ title: 'Project Not Found', description: '', slug: 'portfolio' });
  return generateMeta({
    title: `${project.name} — Case Study`,
    description: `See how ${project.client} achieved ${project.results[0]?.value} ${project.results[0]?.label} with NexaGrow's ${project.service}. Real results from a real client.`,
    slug: `portfolio/${project.slug}`,
    image: project.image,
    keywords: [...project.tags, 'case study', 'marketing results', project.industry],
  });
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        type="custom"
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.name,
          description: project.problem,
          author: { '@type': 'Organization', name: 'NexaGrow Agency' },
        }}
      />
      <article className="pt-24 pb-20 bg-[var(--bg)]">
        {/* Hero Image */}
        <div className="relative w-full aspect-[21/9] overflow-hidden">
          <Image src={project.image} alt={project.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/portfolio" className="text-white/80 hover:text-white text-sm mb-4 inline-block">
              ← Back to Portfolio
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white font-display">{project.name}</h1>
            <div className="flex items-center gap-3 mt-3">
              <CountryBadge name={`${project.city}, ${project.country}`} size="md" />
              <span className="text-white/60 text-sm">{project.industry}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Problem */}
              <div>
                <h2 className="text-xl font-bold text-[var(--fg)] mb-3">The Challenge</h2>
                <p className="text-[var(--fg-muted)] text-lg">{project.problem}</p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-xl font-bold text-[var(--fg)] mb-4">Our Solution</h2>
                <ul className="space-y-3">
                  {project.solution.map((step) => (
                    <li key={step} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--fg)]">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-xl font-bold text-[var(--fg)] mb-6">The Results</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.results.map((r) => (
                    <div key={r.label} className="text-center p-5 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-sm">
                      <div className="text-3xl font-bold text-brand">{r.value}</div>
                      <div className="text-sm text-[var(--fg-muted)] mt-1">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-sm">
                <h3 className="font-semibold text-[var(--fg)] mb-4">Project Details</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm text-[var(--fg-muted)]">Service</dt>
                    <dd className="text-[var(--fg)] font-medium">{project.service}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-[var(--fg-muted)]">Duration</dt>
                    <dd className="text-[var(--fg)]">{project.duration}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-[var(--fg-muted)]">Budget</dt>
                    <dd className="text-[var(--fg)]">{project.budget}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-[var(--fg-muted)]">Tags</dt>
                    <dd className="flex flex-wrap gap-1.5 mt-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-[var(--bg-elevated)] text-[var(--fg-muted)]">
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Key Metrics */}
              <div className="p-6 rounded-xl bg-brand text-white">
                <h3 className="font-semibold mb-4">Key Metrics</h3>
                <div className="space-y-3">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl font-bold">{m.value}</div>
                      <div className="text-sm text-white/70">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="block w-full text-center px-6 py-3 bg-brand text-white font-semibold rounded-lg hover:bg-red-dark transition-colors">
                Get Similar Results →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
