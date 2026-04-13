import { describe, it, expect } from 'vitest';
import { z } from 'zod';

// Contract test for POST /api/contact
// Tests the Zod schema validation that the API route uses

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional().or(z.literal('')),
  service: z.string().min(1),
  message: z.string().min(10).max(2000),
  budget: z.string().optional().or(z.literal('')),
});

describe('POST /api/contact — Contract Tests', () => {
  it('accepts valid contact form data', () => {
    const validData = {
      name: 'John Smith',
      email: 'john@example.com',
      service: 'Google Ads',
      message: 'We need help with Google Ads for our business.',
      budget: '$5K-$10K',
    };
    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects name shorter than 2 characters', () => {
    const result = contactSchema.safeParse({
      name: 'J',
      email: 'john@example.com',
      service: 'Google Ads',
      message: 'We need help with Google Ads.',
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].path).toContain('name');
    }
  });

  it('rejects invalid email format', () => {
    const result = contactSchema.safeParse({
      name: 'John Smith',
      email: 'not-an-email',
      service: 'Google Ads',
      message: 'We need help with Google Ads.',
    });
    expect(result.success).toBe(false);
  });

  it('rejects message shorter than 10 characters', () => {
    const result = contactSchema.safeParse({
      name: 'John Smith',
      email: 'john@example.com',
      service: 'Google Ads',
      message: 'Hi',
    });
    expect(result.success).toBe(false);
  });

  it('requires service field', () => {
    const result = contactSchema.safeParse({
      name: 'John Smith',
      email: 'john@example.com',
      message: 'We need help with our marketing.',
    });
    expect(result.success).toBe(false);
  });

  it('accepts optional phone and budget', () => {
    const result = contactSchema.safeParse({
      name: 'John Smith',
      email: 'john@example.com',
      service: 'SEO',
      message: 'We need help with our marketing strategy.',
    });
    expect(result.success).toBe(true);
  });
});
