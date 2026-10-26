import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

const ORIGINAL = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

async function renderButton() {
  vi.resetModules();
  const { default: WhatsAppButton } = await import('@/components/layout/WhatsAppButton');
  render(<WhatsAppButton />);
}

describe('WhatsAppButton', () => {
  afterEach(() => {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = ORIGINAL;
  });

  describe('when a WhatsApp number is configured', () => {
    beforeEach(() => {
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '923001234567';
    });

    it('links to wa.me with the configured number', async () => {
      await renderButton();
      const link = screen.getByRole('link', { name: /chat on whatsapp/i });
      expect(link).toHaveAttribute('href', expect.stringContaining('wa.me/923001234567'));
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  describe('when no WhatsApp number is configured', () => {
    beforeEach(() => {
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '';
    });

    // Regression guard: the live site shipped `wa.me/undefined` for a year,
    // so every click on the floating button was lost.
    it('falls back to the contact page instead of a dead wa.me link', async () => {
      await renderButton();
      const link = screen.getByRole('link', { name: /contact us/i });
      expect(link).toHaveAttribute('href', '/contact');
      expect(link.getAttribute('href')).not.toContain('undefined');
    });
  });
});
