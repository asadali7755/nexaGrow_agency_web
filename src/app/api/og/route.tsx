import { ImageResponse } from 'next/og';
import { SITE_URL } from '@/lib/site';

export const runtime = 'edge';

/**
 * Social share card. Previously every page pointed at /og-image.jpg, which was
 * never added to /public — so every WhatsApp, LinkedIn and X share rendered a
 * broken preview. Generating it here means it can never go missing again.
 *
 * Usage: /api/og?title=...&subtitle=...
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get('title')?.slice(0, 110) ||
    'Digital Marketing, AI Automation & Web Development';
  const subtitle =
    searchParams.get('subtitle')?.slice(0, 140) ||
    'Growth partner for businesses in the UAE, Saudi Arabia, USA & Canada';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0A0A0A',
          padding: '64px 72px',
        }}
      >
        {/* Brand lockup */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              backgroundColor: '#C8102E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 42,
              fontWeight: 800,
              color: '#FFFFFF',
            }}
          >
            N
          </div>
          <div style={{ display: 'flex', fontSize: 42, fontWeight: 800, color: '#F0EDE8' }}>
            <span>Nexa</span>
            <span style={{ color: '#C8102E' }}>Grow</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 30, color: '#B9B4AC', lineHeight: 1.35 }}>{subtitle}</div>
        </div>

        {/* Accent bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ width: 120, height: 8, borderRadius: 999, backgroundColor: '#C8102E' }} />
          <div style={{ fontSize: 26, color: '#8A857E' }}>{new URL(SITE_URL).host}</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
