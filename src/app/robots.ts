import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Generated at build time so the sitemap URL always matches the live domain.
// A hardcoded public/robots.txt is what previously pointed crawlers at the old host.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Answer engines — allow them explicitly so the brand can be cited in AI answers.
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
