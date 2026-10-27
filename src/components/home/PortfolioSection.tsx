import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import ProjectCard from '@/components/shared/ProjectCard';
import { projects } from '@/lib/projects';

export default function PortfolioSection() {
  const displayProjects = projects;
  // With only a handful of case studies live, a "View All" card just loops the
  // visitor back to the same work. It returns once the list grows.
  const showViewAll = projects.length >= 3;

  return (
    <section className="py-20 lg:py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Work"
          title="Real Results for Real Clients"
          subtitle="Every case study below is work we actually delivered — no invented numbers, no borrowed logos."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="grid" />
          ))}

          {/* View All Card */}
          {showViewAll && (
          <Link
            href="/portfolio"
            className="group flex items-center justify-center rounded-xl border-2 border-dashed border-[var(--border)] hover:border-brand transition-colors min-h-[300px]"
          >
            <div className="text-center">
              <span className="text-4xl font-bold text-brand group-hover:scale-110 transition-transform inline-block">
                &rarr;
              </span>
              <p className="mt-2 font-semibold text-[var(--fg)]">View All Projects</p>
              <p className="text-sm text-[var(--fg-muted)]">Explore our full portfolio</p>
            </div>
          </Link>
          )}
        </div>
      </div>
    </section>
  );
}
