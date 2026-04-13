'use client';

import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '971XXXXXXXXX';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi NexaGrow! 👋 I visited your website and I\'m interested in your digital marketing services. Can you tell me more about how you can help grow my business?')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>

      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-20 right-4 z-50 px-3 py-1.5 bg-[var(--bg-card)] text-[var(--fg)] text-sm rounded-lg shadow-lg border border-[var(--border)] whitespace-nowrap">
          Chat on WhatsApp
        </div>
      )}
    </>
  );
}
