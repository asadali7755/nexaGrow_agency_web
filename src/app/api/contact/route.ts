import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { CONTACT_EMAIL, LEADS_FROM_EMAIL, SITE_NAME } from '@/lib/site';

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

/** Escape user input before it goes into the notification email body. */
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
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

    const resendKey = process.env.RESEND_API_KEY;

    // A missing or placeholder key means every lead would be silently dropped.
    // Fail loudly instead so the problem surfaces the first time it happens.
    if (!resendKey || resendKey.startsWith('re_xxx')) {
      console.error(
        '[contact] RESEND_API_KEY is missing or a placeholder — lead NOT delivered:',
        { name, email, phone, service, budget }
      );
      return NextResponse.json(
        {
          success: false,
          message: 'Email delivery is not configured. Please WhatsApp or email us directly.',
        },
        { status: 503 }
      );
    }

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Must be a domain verified in Resend. A free inbox (gmail.com etc.)
        // is rejected by Resend and the lead never arrives.
        from: LEADS_FROM_EMAIL,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `New ${service} enquiry — ${name}${budget ? ` (${budget})` : ''}`,
        html: `
          <h2>New enquiry from the ${esc(SITE_NAME)} website</h2>
          <table cellpadding="6">
            <tr><td><strong>Name:</strong></td><td>${esc(name)}</td></tr>
            <tr><td><strong>Email:</strong></td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
            <tr><td><strong>Phone:</strong></td><td>${esc(phone || 'Not provided')}</td></tr>
            <tr><td><strong>Service:</strong></td><td>${esc(service)}</td></tr>
            <tr><td><strong>Budget:</strong></td><td>${esc(budget || 'Not provided')}</td></tr>
            <tr><td valign="top"><strong>Message:</strong></td><td>${esc(message).replace(/\n/g, '<br/>')}</td></tr>
          </table>
          <p style="color:#888;font-size:12px">Reply directly to this email to reach the lead.</p>
        `,
      }),
    });

    if (!resendRes.ok) {
      const detail = await resendRes.text();
      console.error('[contact] Resend rejected the message — lead NOT delivered:', detail);
      return NextResponse.json(
        {
          success: false,
          message: 'We could not send your message. Please WhatsApp or email us directly.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will get back to you within 24 hours.',
    });
  } catch (error) {
    console.error('[contact] Unexpected error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
