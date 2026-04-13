import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CountryBadge from '@/components/shared/CountryBadge';

describe('CountryBadge', () => {
  it('renders country name', () => {
    render(<CountryBadge name="UAE" />);
    expect(screen.getByText('UAE')).toBeInTheDocument();
  });
});
