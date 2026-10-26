'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { whatsappLink } from '@/lib/site';

const GREETING =
  "Hi NexaGrow! 👋 I visited your website and I'm interested in your digital marketing services. Can you tell me more about how you can help grow my business?";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const href = whatsappLink(GREETING);

  // No number configured — send people to the contact form rather than a dead
  // `wa.me/undefined` link, which silently loses every click.
  const isWhatsApp = Boolean(href);
  const label = isWhatsApp ? 'Chat on WhatsApp' : 'Contact us';

  const className =
    'fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300';

  const inner = (
    <>
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      <MessageCircle className="w-7 h-7 relative z-10" />
    </>
  );

  const onEnter = () => setShowTooltip(true);
  const onLeave = () => setShowTooltip(false);

  const track = () => {
    window.gtag?.('event', isWhatsApp ? 'whatsapp_click' : 'contact_click', {
      location: 'floating_button',
    });
  };

  return (
    <>
      {isWhatsApp ? (
        <a
          href={href as string}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          aria-label={label}
          onClick={track}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          {inner}
        </a>
      ) : (
        <Link
          href="/contact"
          className={className}
          aria-label={label}
          onClick={track}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          {inner}
        </Link>
      )}

      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-20 right-4 z-50 px-3 py-1.5 bg-[var(--bg-card)] text-[var(--fg)] text-sm rounded-lg shadow-lg border border-[var(--border)] whitespace-nowrap">
          {label}
        </div>
      )}
    </>
  );
}
