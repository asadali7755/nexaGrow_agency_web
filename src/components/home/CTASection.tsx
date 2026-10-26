import Link from 'next/link';
import { Mail, MessageCircle } from 'lucide-react';
import { CONTACT_EMAIL, whatsappLink } from '@/lib/site';

const PITCH =
  "Hi NexaGrow! 👋 I'm interested in growing my business with your digital marketing services. Let's discuss!";

export default function CTASection() {
  const wa = whatsappLink(PITCH);

  const buttonClass =
    'inline-flex items-center gap-3 px-8 py-4 bg-white text-brand font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg';

  return (
    <section className="always-red py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display">
          Ready to Grow Your Business?
        </h2>
        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Let&apos;s discuss your goals and create a custom strategy that delivers real, measurable results.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Falls back to the contact page when no number is configured —
              this button shipped as `wa.me/undefined` for a year. */}
          {wa ? (
            <a href={wa} target="_blank" rel="noopener noreferrer" className={buttonClass}>
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          ) : (
            <Link href="/contact" className={buttonClass}>
              <MessageCircle className="w-5 h-5" />
              Get a Free Quote
            </Link>
          )}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}
