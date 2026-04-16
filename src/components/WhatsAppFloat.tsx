import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat = () => (
  <a 
    href="https://wa.me/260XXXXXXXXX?text=Hi!%20I'd%20like%20to%20order%20from%20Juicy%20Platters" 
    target="_blank" 
    rel="noreferrer"
    className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);
