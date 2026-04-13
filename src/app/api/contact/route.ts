import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional().or(z.literal('')),
  service: z.string().min(1),
  message: z.string().min(10).max(2000),
  budget: z.string().optional().or(z.literal('')),
});

// Simple rate limiting (in-memory, per-IP)
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 3600000 }); // 1 hour window
    return true;
  }

  if (entry.count >= 5) return false; // Max 5 per hour

  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';

  // Rate limiting
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, message: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const validated = contactSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validated.error.errors.map((e) => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message, budget } = validated.data;

    // If Resend API key is configured, send email
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'NexaGrow Contact <contact@nexagrow.agency>',
          to: ['leoali851@gmail.com'],
          subject: `New Contact Form: ${service} — ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <table>
              <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
              <tr><td><strong>Phone:</strong></td><td>${phone || 'Not provided'}</td></tr>
              <tr><td><strong>Service:</strong></td><td>${service}</td></tr>
              <tr><td><strong>Budget:</strong></td><td>${budget || 'Not provided'}</td></tr>
              <tr><td><strong>Message:</strong></td><td>${message}</td></tr>
            </table>
          `,
        }),
      });

      if (!resendRes.ok) {
        console.error('Resend API error:', await resendRes.text());
      }
    } else {
      // Fallback: log to console (for development)
      console.log('Contact Form Submission:', { name, email, phone, service, message, budget });
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will get back to you within 24 hours.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
