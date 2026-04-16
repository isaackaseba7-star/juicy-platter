import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, MessageCircle, Truck } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const Location = () => {
  return (
    <section id="location" className="py-24 px-6 md:px-12 bg-dark-mid">
      <SectionHeader 
        label="Find Us" 
        title={<>Come Visit <em className="text-amber not-italic">Us</em></>} 
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-border-amber h-[400px] bg-dark-card flex items-center justify-center relative"
        >
          <div className="text-center text-text-muted">
            <MapPin size={48} className="mx-auto mb-3 text-amber/50" />
            <p className="text-sm mb-2">Lusaka, Zambia</p>
            <a href="https://maps.google.com/?q=Lusaka+Zambia" target="_blank" rel="noreferrer" className="text-amber font-medium hover:underline text-sm">
              Open in Google Maps →
            </a>
          </div>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              icon: <MapPin size={20} />,
              label: 'Address',
              content: <><p>Plot 123, Cairo Road<br/>Lusaka, Zambia</p><em className="text-xs text-amber not-italic block mt-1">Near Arcades Shopping Mall</em></>
            },
            {
              icon: <Clock size={20} />,
              label: 'Opening Hours',
              content: (
                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                  <span className="text-text-muted">Mon – Fri</span><span>10:00 AM – 10:00 PM</span>
                  <span className="text-text-muted">Saturday</span><span className="text-amber font-medium">10:00 AM – 11:00 PM</span>
                  <span className="text-text-muted">Sunday</span><span className="text-amber font-medium">11:00 AM – 9:00 PM</span>
                </div>
              )
            },
            {
              icon: <MessageCircle size={20} />,
              label: 'Contact',
              content: (
                <>
                  <a href="tel:+260900000000" className="text-amber hover:underline block mb-1">+260 9XX XXX XXX</a>
                  <a href="https://wa.me/260XXXXXXXXX" target="_blank" rel="noreferrer" className="text-text-muted hover:text-cream text-sm transition-colors">WhatsApp us →</a>
                </>
              )
            },
            {
              icon: <Truck size={20} />,
              label: 'Getting Here',
              content: <p className="text-sm">Free parking available on-site. 5 min walk from Arcades bus stop.</p>
            }
          ].map((info, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-dark-card border border-border-amber rounded-xl p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-amber/10 text-amber flex items-center justify-center shrink-0">
                {info.icon}
              </div>
              <div>
                <div className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-amber mb-1">{info.label}</div>
                <div className="text-text-light leading-relaxed">{info.content}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
