import Link from 'next/link';
import SectionHeader from '@/components/shared/SectionHeader';
import TeamCard from '@/components/shared/TeamCard';
import { teamMembers } from '@/lib/team';

export default function TeamSection() {
  // Show first 6 members on homepage
  const displayMembers = teamMembers.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[var(--bg-elevated)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Team"
          title="Meet the Experts Behind Your Growth"
          subtitle="A diverse team of marketers, developers, and AI engineers from around the world."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-brand text-brand font-semibold rounded-lg hover:bg-brand hover:text-white transition-colors"
          >
            Meet the Full Team →
          </Link>
        </div>
      </div>
    </section>
  );
}
