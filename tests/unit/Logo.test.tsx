import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Logo from '@/components/shared/Logo';

describe('Logo', () => {
  it('renders SVG mark and wordmark', () => {
    const { container } = render(<Logo />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(screen.getByText('Nexa')).toBeInTheDocument();
    expect(screen.getByText('Grow')).toBeInTheDocument();
  });

  it('renders tagline when provided', () => {
    render(<Logo tagline="Digital Growth Partner" />);
    expect(screen.getByText('Digital Growth Partner')).toBeInTheDocument();
  });
});
