import SectionHeader from '@/components/shared/SectionHeader';
import { generateMeta } from '@/lib/seo';
import { Target, Heart, Lightbulb } from 'lucide-react';

export const metadata = generateMeta({
  title: 'About Us — Our Story, Mission & Values',
  description: 'Learn about NexaGrow Agency — a leading digital marketing agency in Dubai, UAE. Our mission is to help businesses grow through data-driven marketing, AI automation, and custom web development.',
  slug: 'about',
  keywords: ['about NexaGrow', 'digital marketing agency Dubai', 'marketing agency UAE', 'NexaGrow team', 'agency story'],
});

const values = [
  { icon: Target, title: 'Results First', desc: 'Every strategy is designed to deliver measurable outcomes — not vanity metrics.' },
  { icon: Heart, title: 'Client Partnership', desc: 'We treat your business like ours. Your success is our success.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We stay ahead of trends so you stay ahead of competitors.' },
];

export default function AboutPage() {
  return (
    <section className="pt-24 pb-20 lg:py-28 bg-[var(--bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          as="h1"
          label="About NexaGrow"
          title="Our Story"
          subtitle="A founder-led studio for websites, marketing and AI automation."
          align="center"
        />

        <div className="prose prose-lg max-w-none text-[var(--fg-muted)]">
          <p className="text-lg leading-relaxed">
            NexaGrow was founded by Asad Ali with a simple but powerful vision: to help businesses across the Arab world, USA, and Canada unlock the full potential of digital marketing.
          </p>
          <p className="text-lg leading-relaxed">
            NexaGrow is founder-led. Asad Ali does the strategy, writes the code and runs the campaigns himself, so you always deal with the person doing the work. Current clients are in the UAE and Pakistan, and every project is built to serve customers anywhere — and we take on fewer clients than we could so each one gets real attention.
          </p>
          <p className="text-lg leading-relaxed">
            Today, NexaGrow offers comprehensive services including social media marketing, AI automation, web development, Google Ads management, brand strategy, and content creation — plus custom web apps, internal tools and AI agents, all delivered by the founder personally.
          </p>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-[var(--fg)] font-display text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-sm">
                <Icon className="w-10 h-10 text-brand mx-auto mb-3" />
                <h3 className="font-semibold text-[var(--fg)] text-lg">{title}</h3>
                <p className="text-sm text-[var(--fg-muted)] mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="mt-16 p-8 rounded-2xl bg-brand text-white text-center">
          <h2 className="text-2xl font-bold font-display mb-4">Our Mission</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            To empower businesses worldwide with the digital tools, strategies, and automation they need to thrive in the modern economy — delivering measurable results with transparency and integrity.
          </p>
        </div>
      </div>
    </section>
  );
}
