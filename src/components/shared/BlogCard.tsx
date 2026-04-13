import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-[var(--bg-card)]">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Category Tag */}
        <span className="absolute top-3 left-3 px-3 py-1 bg-brand text-white text-xs font-semibold rounded-full">
          {post.category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-[var(--fg-muted)] mb-3">
          <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-semibold text-lg text-[var(--fg)] group-hover:text-brand transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-[var(--fg-muted)] mt-2 line-clamp-2">
          {post.excerpt}
        </p>
        <span className="inline-block mt-4 text-sm font-semibold text-brand group-hover:underline">
          Read More →
        </span>
      </div>
    </Link>
  );
}
