'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import SectionHeader from '@/components/shared/SectionHeader';
import { CONTACT_EMAIL, whatsappLink } from '@/lib/site';
import { Mail, MessageCircle, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

// Metadata for this route lives in ./layout.tsx because this is a client component.

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email format'),
  phone: z.string().optional().or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  budget: z.string().optional().or(z.literal('')),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  'Social Media Marketing',
  'AI Automation',
  'Web Development',
  'Google Ads',
  'Brand Strategy',
  'Content Creation',
];

const budgetOptions = ['Under $1K', '$1K-$5K', '$5K-$10K', '$10K+'];

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data: ContactFormData) => {
    setErrorMessage('');
    try {
      // The API (email) is the primary delivery path. Only report success when
      // the server actually confirms the lead was delivered — never optimistically.
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok || !result?.success) {
        setErrorMessage(result?.message || 'We could not send your message.');
        setSubmitStatus('error');
        return;
      }

      // Track the conversion once delivery is confirmed.
      window.gtag?.('event', 'generate_lead', {
        service: data.service,
        budget: data.budget || 'not_provided',
      });

      setSubmitStatus('success');
      reset();
    } catch {
      setErrorMessage('Network error. Please WhatsApp or email us directly.');
      setSubmitStatus('error');
    }
  };

  const waFormFallback = whatsappLink(
    "Hi NexaGrow! 👋 I tried the contact form on your website. I'd like to discuss a project."
  );
  const waGeneral = whatsappLink(
    "Hi NexaGrow! 👋 I visited your website and I'm interested in your services. Can we chat?"
  );
  const waConsult = whatsappLink(
    "Hi NexaGrow! 👋 I'd like to book a free 30-minute strategy consultation for my business. When is a good time?"
  );

  return (
    <section className="pt-24 pb-20 lg:py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          as="h1"
          label="Contact Us"
          title="Let&apos;s Start Growing Together"
          subtitle="Tell us about your project and we will get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitStatus === 'success' ? (
              <div className="text-center p-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)]">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[var(--fg)]">Message Sent!</h3>
                <p className="text-[var(--fg-muted)] mt-2">Thank you! We will get back to you within 24 hours.</p>
                <button onClick={() => setSubmitStatus('idle')} className="mt-6 px-6 py-2 bg-brand text-white rounded-lg hover:bg-red-dark transition-colors">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-sm" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--fg)] mb-1">Full Name *</label>
                  <input {...register('name')} id="name" type="text" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition" placeholder="John Smith" />
                  {errors.name && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--fg)] mb-1">Email Address *</label>
                  <input {...register('email')} id="email" type="email" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition" placeholder="john@example.com" />
                  {errors.email && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--fg)] mb-1">Phone (Optional)</label>
                  <input {...register('phone')} id="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition" placeholder="+1234567890" />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[var(--fg)] mb-1">Service Interested In *</label>
                  <select {...register('service')} id="service" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition">
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.service.message}</p>}
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-[var(--fg)] mb-1">Monthly Budget (Optional)</label>
                  <select {...register('budget')} id="budget" className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition">
                    <option value="">Select budget range</option>
                    {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--fg)] mb-1">Tell Us About Your Project *</label>
                  <textarea {...register('message')} id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] text-[var(--fg)] focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition resize-none" placeholder="Describe your project goals, challenges, and what you hope to achieve..." />
                  {errors.message && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.message.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white font-semibold rounded-lg hover:bg-red-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'error' && (
                  <div className="text-center text-sm text-red-500 space-y-2">
                    <p className="flex items-center justify-center gap-1">
                      <AlertCircle className="w-4 h-4" /> {errorMessage || 'Failed to send.'}
                    </p>
                    <p className="text-[var(--fg-muted)]">
                      Reach us directly:{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand underline">
                        {CONTACT_EMAIL}
                      </a>
                      {waFormFallback && (
                        <>
                          {' '}or{' '}
                          <a href={waFormFallback} target="_blank" rel="noopener noreferrer" className="text-brand underline">
                            WhatsApp
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] shadow-sm">
              <h3 className="font-semibold text-[var(--fg)] mb-4">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                {waGeneral && (
                  <a href={waGeneral} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--fg)] hover:text-brand transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm text-[var(--fg-muted)]">Chat with us instantly</p>
                    </div>
                  </a>
                )}
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-[var(--fg)] hover:text-brand transition-colors">
                  <Mail className="w-5 h-5 text-brand" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-[var(--fg-muted)]">{CONTACT_EMAIL}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-brand text-white">
              <h3 className="font-semibold mb-2">Free Consultation</h3>
              <p className="text-sm text-white/80">Book a free 30-minute strategy call with our team.</p>
              <a
                href={waConsult || `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Free 30-minute strategy call')}`}
                target={waConsult ? '_blank' : undefined}
                rel={waConsult ? 'noopener noreferrer' : undefined}
                className="inline-block mt-4 px-6 py-2 bg-white text-brand font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm"
              >
                Book Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
