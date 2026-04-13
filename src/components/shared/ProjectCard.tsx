import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import CountryBadge from './CountryBadge';

interface ProjectCardProps {
  project: Project;
  variant?: 'grid' | 'detail';
}

export default function ProjectCard({ project, variant = 'grid' }: ProjectCardProps) {
  if (variant === 'grid') {
    return (
      <Link href={`/portfolio/${project.slug}`} className="group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <div className="flex gap-4 justify-center mb-3">
                {project.metrics.slice(0, 3).map((m) => (
                  <div key={m.label}>
                    <div className="text-2xl font-bold text-brand">{m.value}</div>
                    <div className="text-xs text-gray-300">{m.label}</div>
                  </div>
                ))}
              </div>
              <span className="inline-block px-4 py-2 bg-brand text-white text-sm font-semibold rounded-lg">
                View Case Study →
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 bg-[var(--bg-card)]">
          <div className="flex items-center gap-2 mb-2">
            <CountryBadge name={project.country} />
            <span className="text-xs text-[var(--fg-muted)]">{project.industry}</span>
          </div>
          <h3 className="font-semibold text-[var(--fg)] group-hover:text-brand transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-[var(--fg-muted)] mt-1">{project.service}</p>
        </div>
      </Link>
    );
  }

  return null;
}
