import React from 'react';
import { Instagram, Facebook, Music, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-dark border-t border-border-amber pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-12">
          <div>
            <a href="#" className="font-display text-3xl font-black text-amber tracking-tight block mb-4">
              Juicy<span className="text-coral">.</span> Platters
            </a>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs mb-6">
              Bold flavors, generous portions, and a whole lot of heart. Serving Lusaka since 2019.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Music, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg border border-border-amber flex items-center justify-center text-text-muted hover:text-amber hover:border-amber hover:bg-amber/10 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-amber mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['Our Menu', 'About Us', 'Make a Reservation', 'Reviews', 'Find Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.split(' ').pop()?.toLowerCase()}`} className="text-sm text-text-muted hover:text-cream transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.12em] uppercase text-amber mb-5">Get Weekly Specials</h4>
            <p className="text-sm text-text-muted mb-4">Subscribe and get 10% off your first order.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert("You're subscribed! Check your inbox for your 10% discount code. 🎉"); }} className="flex gap-2">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 bg-white/5 border border-border-amber rounded-md px-3 py-2.5 text-sm text-cream outline-none focus:border-amber transition-colors min-w-0"
                required
              />
              <button type="submit" className="bg-coral hover:bg-coral-hover text-white px-4 py-2.5 rounded-md text-sm font-semibold transition-colors whitespace-nowrap">
                Join
              </button>
            </form>
            <p className="text-xs text-text-muted mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="border-t border-border-amber pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} Juicy Platters. All rights reserved. | Lusaka, Zambia</p>
          <p>🏅 Health & Safety Certified · Fresh Ingredients Daily</p>
        </div>
      </div>
    </footer>
  );
};
