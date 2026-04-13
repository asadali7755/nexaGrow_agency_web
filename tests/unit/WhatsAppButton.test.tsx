import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

describe('WhatsAppButton', () => {
  it('renders with correct link', () => {
    render(<WhatsAppButton />);
    const link = screen.getByRole('link', { name: /chat on whatsapp/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', expect.stringContaining('wa.me/'));
    expect(link).toHaveAttribute('target', '_blank');
  });
});
