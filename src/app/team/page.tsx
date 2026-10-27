import SectionHeader from '@/components/shared/SectionHeader';
import TeamCard from '@/components/shared/TeamCard';
import { teamMembers } from '@/lib/team';
import { generateMeta } from '@/lib/seo';

export const metadata = generateMeta({
  title: 'Team — Who You Actually Work With',
  description: 'NexaGrow is a small, hands-on agency. Meet Asad Ali, the founder who plans and runs the work on every account — strategy, SEO, paid campaigns and AI automation.',
  slug: 'team',
  keywords: ['NexaGrow team', 'digital marketing experts', 'marketing team Dubai', 'agency team'],
});

export default function TeamPage() {
  return (
    <section className="pt-24 pb-20 lg:py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          as="h1"
          label="Our Team"
          title="Who You Actually Work With"
          subtitle="NexaGrow is deliberately small. The person who plans your campaign is the person who runs it, and specialists are brought in per project when the work calls for it."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-sm mx-auto sm:max-w-none sm:mx-0 sm:justify-items-center lg:justify-items-start">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        {/* CEO Bio */}
        {teamMembers.filter((m) => m.isCEO).map((ceo) => (
          <div key={ceo.name} className="mt-16 p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--fg)] font-display">{ceo.name}&apos;s Story</h2>
            <p className="text-[var(--fg-muted)] mt-4 text-lg leading-relaxed">{ceo.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
