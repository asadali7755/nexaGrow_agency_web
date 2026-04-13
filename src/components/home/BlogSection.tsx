import SectionHeader from '@/components/shared/SectionHeader';
import BlogCard from '@/components/shared/BlogCard';
import { blogPosts } from '@/lib/blog';

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--bg-elevated)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Latest Insights"
          title="From Our Blog"
          subtitle="Stay ahead with the latest digital marketing trends, AI tips, and growth strategies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-brand text-brand font-semibold rounded-lg hover:bg-brand hover:text-white transition-colors"
          >
            Read All Articles →
          </a>
        </div>
      </div>
    </section>
  );
}
