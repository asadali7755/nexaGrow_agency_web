import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog';
import { generateMeta } from '@/lib/seo';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return generateMeta({ title: 'Post Not Found', description: '', slug: 'blog' });
  return generateMeta({
    title: post.title,
    description: post.excerpt,
    slug: `blog/${post.slug}`,
    image: post.image,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="pt-24 pb-20 bg-[var(--bg)]">
      {/* Hero Image */}
      <div className="relative w-full aspect-[21/9] overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-white/80 hover:text-white text-sm mb-4 inline-block">
            ← Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 bg-brand text-white text-xs font-semibold rounded-full mb-3">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-display">{post.title}</h1>
          <div className="flex items-center gap-4 mt-3 text-white/60 text-sm">
            <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none text-[var(--fg)]">
          {post.content ? (
            post.content.split('\n').filter(Boolean).map((line, i) => {
              const trimmed = line.trim();
              if (trimmed.startsWith('# ')) {
                return <h1 key={i} className="text-3xl font-bold mt-8 mb-4 font-display">{trimmed.slice(2)}</h1>;
              }
              if (trimmed.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold mt-6 mb-3">{trimmed.slice(3)}</h2>;
              }
              if (trimmed.startsWith('- ')) {
                return <li key={i} className="ml-4 text-[var(--fg-muted)]">{trimmed.slice(2)}</li>;
              }
              return <p key={i} className="text-[var(--fg-muted)] leading-relaxed">{trimmed}</p>;
            })
          ) : (
            <p className="text-[var(--fg-muted)]">Full content coming soon.</p>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <Link href="/blog" className="text-brand font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
