import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Guard against the bug that cost this site a year of leads: components
 * interpolating NEXT_PUBLIC_WHATSAPP_NUMBER straight into a wa.me URL.
 * When the variable is unset in the deployment that renders
 * `https://wa.me/undefined`, which looks fine in review and silently
 * swallows every click in production.
 *
 * All WhatsApp URLs must go through whatsappLink() in src/lib/site.ts,
 * which returns null when no valid number is configured so callers are
 * forced to render a working fallback.
 */
function sourceFiles(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) sourceFiles(full, acc);
    else if (/\.tsx?$/.test(entry)) acc.push(full);
  }
  return acc;
}

const SITE_CONFIG = join('src', 'lib', 'site.ts');

describe('contact link safety', () => {
  const files = sourceFiles('src').filter((f) => !f.endsWith(SITE_CONFIG));

  it('builds every wa.me URL through whatsappLink()', () => {
    const offenders = files.filter((f) => {
      const src = readFileSync(f, 'utf-8');
      return /wa\.me\/\$\{/.test(src);
    });
    expect(offenders).toEqual([]);
  });

  it('reads the WhatsApp number only from src/lib/site.ts', () => {
    const offenders = files.filter((f) =>
      readFileSync(f, 'utf-8').includes('NEXT_PUBLIC_WHATSAPP_NUMBER')
    );
    expect(offenders).toEqual([]);
  });

  it('hardcodes no contact email outside src/lib/site.ts', () => {
    const offenders = files.filter((f) =>
      /href="mailto:[a-z0-9._%+-]+@/i.test(readFileSync(f, 'utf-8'))
    );
    expect(offenders).toEqual([]);
  });
});
