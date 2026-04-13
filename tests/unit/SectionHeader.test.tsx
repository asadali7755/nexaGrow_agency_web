import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SectionHeader from '@/components/shared/SectionHeader';

describe('SectionHeader', () => {
  it('renders title correctly', () => {
    render(<SectionHeader title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(<SectionHeader label="Test Label" title="Test Title" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<SectionHeader title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders red accent line', () => {
    const { container } = render(<SectionHeader title="Test Title" />);
    const line = container.querySelector('.bg-brand');
    expect(line).toBeInTheDocument();
  });
});
