import Image from 'next/image';
import Link from 'next/link';
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
  const [featured, ...rest] = blogPosts;

  return (
    <section className="pt-24 pb-20 lg:py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Blog"
          title="Insights & Strategies"
          subtitle="Expert tips, industry trends, and actionable advice to help you grow your business."
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <span className="px-4 py-2 bg-brand text-white text-sm font-semibold rounded-full">
            All
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 bg-[var(--bg-elevated)] text-[var(--fg-muted)] text-sm font-medium rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Featured Post — Large */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-brand text-white text-xs font-semibold rounded-full">
                {featured.category}
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-[var(--fg-muted)]">
                <span className="px-3 py-1 bg-brand/10 text-brand text-xs font-semibold rounded-full">Featured</span>
                <time>{new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] font-display group-hover:text-brand transition-colors">
                {featured.title}
              </h2>
              <p className="text-[var(--fg-muted)] leading-relaxed">
                {featured.excerpt}
              </p>
              <span className="inline-block px-6 py-3 bg-brand text-white text-sm font-semibold rounded-lg group-hover:bg-red-dark transition-colors">
                Read Article →
              </span>
            </div>
          </div>
        </Link>

        {/* Rest of Posts — Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
