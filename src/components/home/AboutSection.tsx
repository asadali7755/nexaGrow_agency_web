import Image from 'next/image';
import SectionHeader from '@/components/shared/SectionHeader';
import { images } from '@/lib/pexels';
import { Target, TrendingUp, Users } from 'lucide-react';

const infoBoxes = [
  {
    icon: Target,
    title: 'Strategy First',
    desc: 'Every campaign starts with deep market research and a data-driven growth plan.',
  },
  {
    icon: TrendingUp,
    title: 'Results Driven',
    desc: 'We focus on metrics that matter — revenue, leads, and customer acquisition cost.',
  },
  {
    icon: Users,
    title: 'Global Team',
    desc: 'Our diverse team brings perspectives from 6+ countries and 10+ industries.',
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About NexaGrow"
          title="Your Digital Growth Partner"
          subtitle="We combine creativity, data, and AI to deliver marketing results that matter."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={images.about}
              alt="NexaGrow team at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Info Boxes */}
          <div className="space-y-6">
            {infoBoxes.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--fg)] text-lg">{title}</h3>
                  <p className="text-[var(--fg-muted)] mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
