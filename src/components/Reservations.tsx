import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const Reservations = () => {
  return (
    <section id="reservations" className="py-24 px-6 md:px-12 bg-dark-mid">
      <SectionHeader 
        label="Skip the wait" 
        title={<>Reserve a Table or <em className="text-amber not-italic">Order Online</em></>} 
        sub="Choose how you'd like to enjoy Juicy Platters — dine in or from your couch."
        align="center"
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Book a Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-card border border-border-amber rounded-2xl p-8"
        >
          <h3 className="font-display text-2xl font-bold text-cream mb-2 flex items-center gap-2">
            <span>🍽️</span> Dine In
          </h3>
          <p className="text-sm text-text-muted mb-6">Reserve your table in seconds — we'll have everything ready for you.</p>
          
          <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll confirm your reservation via WhatsApp shortly. 🍽️"); }} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-1.5">Date</label>
                <input type="date" className="w-full bg-white/5 border border-border-amber rounded-md px-3.5 py-2.5 text-sm text-cream outline-none focus:border-amber transition-colors" required />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-1.5">Time</label>
                <select className="w-full bg-white/5 border border-border-amber rounded-md px-3.5 py-2.5 text-sm text-cream outline-none focus:border-amber transition-colors appearance-none">
                  <option className="bg-dark text-cream">10:00 AM</option>
                  <option className="bg-dark text-cream">12:00 PM</option>
                  <option className="bg-dark text-cream">1:00 PM</option>
                  <option className="bg-dark text-cream">6:00 PM</option>
                  <option className="bg-dark text-cream">7:00 PM</option>
                  <option className="bg-dark text-cream">8:00 PM</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-1.5">Name</label>
                <input type="text" placeholder="Your full name" className="w-full bg-white/5 border border-border-amber rounded-md px-3.5 py-2.5 text-sm text-cream outline-none focus:border-amber transition-colors" required />
              </div>
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-1.5">Guests</label>
                <select className="w-full bg-white/5 border border-border-amber rounded-md px-3.5 py-2.5 text-sm text-cream outline-none focus:border-amber transition-colors appearance-none">
                  <option className="bg-dark text-cream">1 guest</option>
                  <option className="bg-dark text-cream">2 guests</option>
                  <option className="bg-dark text-cream">3 guests</option>
                  <option className="bg-dark text-cream">4 guests</option>
                  <option className="bg-dark text-cream">5+ guests</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-wider uppercase text-text-muted mb-1.5">Phone Number</label>
              <input type="tel" placeholder="+260 9XX XXX XXX" className="w-full bg-white/5 border border-border-amber rounded-md px-3.5 py-2.5 text-sm text-cream outline-none focus:border-amber transition-colors" required />
            </div>
            <button type="submit" className="w-full bg-coral hover:bg-coral-hover text-white py-3.5 rounded-md font-semibold tracking-wide transition-colors mt-2">
              Confirm Reservation →
            </button>
          </form>
        </motion.div>

        {/* Order Online */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-dark-card border border-border-amber rounded-2xl p-8"
        >
          <h3 className="font-display text-2xl font-bold text-cream mb-2 flex items-center gap-2">
            <span>📦</span> Order Online
          </h3>
          <p className="text-sm text-text-muted mb-6">Hungry now? Order for delivery or takeaway — estimated 25–40 mins.</p>
          
          <div className="space-y-4 mb-6">
            <a href="https://wa.me/260XXXXXXXXX?text=Hi!%20I'd%20like%20to%20place%20an%20order%20from%20Juicy%20Platters" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-border-amber rounded-xl hover:border-coral hover:bg-coral/10 transition-all group">
              <span className="text-3xl">💬</span>
              <div className="flex-1">
                <div className="text-base font-semibold text-cream">Order via WhatsApp</div>
                <div className="text-xs text-text-muted">Fastest · Chat directly with us</div>
              </div>
              <ChevronRight className="text-text-muted group-hover:text-coral transition-colors" size={20} />
            </a>
            <a href="#" className="flex items-center gap-4 p-4 bg-white/5 border border-border-amber rounded-xl hover:border-coral hover:bg-coral/10 transition-all group">
              <span className="text-3xl">🛵</span>
              <div className="flex-1">
                <div className="text-base font-semibold text-cream">Delivery (Lusaka)</div>
                <div className="text-xs text-text-muted">Est. 25–40 mins · K20 delivery fee</div>
              </div>
              <ChevronRight className="text-text-muted group-hover:text-coral transition-colors" size={20} />
            </a>
            <a href="#" className="flex items-center gap-4 p-4 bg-white/5 border border-border-amber rounded-xl hover:border-coral hover:bg-coral/10 transition-all group">
              <span className="text-3xl">🏃</span>
              <div className="flex-1">
                <div className="text-base font-semibold text-cream">Collect / Takeaway</div>
                <div className="text-xs text-text-muted">Ready in 15 mins · No delivery fee</div>
              </div>
              <ChevronRight className="text-text-muted group-hover:text-coral transition-colors" size={20} />
            </a>
          </div>
          
          <div className="bg-amber/10 border border-border-amber rounded-lg p-4 text-sm text-text-muted">
            📞 <strong className="text-cream">Call to order:</strong> +260 9XX XXX XXX &nbsp;·&nbsp; Available 10am – 9pm daily
          </div>
        </motion.div>
      </div>
    </section>
  );
};
