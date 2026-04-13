import Image from 'next/image';
import type { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <a
      href="https://marketing-services-alpha.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-[var(--bg-card)] cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[var(--fg)]">{member.name}</h3>
        <p className="text-sm text-brand mt-1">{member.role}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {member.skills.slice(0, 4).map((skill) => (
            <span key={skill} className="px-2 py-0.5 text-xs rounded-full bg-[var(--bg-elevated)] text-[var(--fg-muted)]">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
