import SectionHeader from '@/components/shared/SectionHeader';
import BlogCard from '@/components/shared/BlogCard';
import { blogPosts } from '@/lib/blog';
import { generateMeta } from '@/lib/seo';

export const metadata = generateMeta({
  title: 'Blog — Digital Marketing Insights & Tips',
  description: 'Stay ahead with the latest digital marketing trends, AI automation tips, SEO strategies, social media guides, and growth insights from the NexaGrow team.',
  slug: 'blog',
  keywords: ['digital marketing blog', 'SEO tips', 'social media strategy', 'AI marketing', 'marketing insights UAE'],
});

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <section className="pt-24 pb-20 lg:py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Blog"
          title="Insights & Strategies"
          subtitle="Expert tips, industry trends, and actionable advice to help you grow."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button className="px-4 py-2 bg-brand text-white text-sm font-semibold rounded-full">
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 bg-[var(--bg-elevated)] text-[var(--fg-muted)] text-sm font-medium rounded-full hover:bg-brand hover:text-white transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
