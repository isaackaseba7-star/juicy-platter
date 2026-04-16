import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="bg-dark-card border border-border-amber rounded-2xl p-10 text-center relative max-w-md mx-auto lg:mx-0">
            <div className="w-28 h-28 rounded-full chef-avatar border-[3px] border-amber/30 flex items-center justify-center text-5xl mx-auto mb-4">
              👨‍🍳
            </div>
            <h3 className="font-display text-2xl font-bold text-cream mb-1">Chef Marcus Banda</h3>
            <p className="text-sm text-amber font-medium tracking-wide mb-6">Head Chef & Co-Founder</p>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: '12+', lbl: 'Years cooking' },
                { num: '5K+', lbl: 'Platters served' },
                { num: '2019', lbl: 'Established' },
                { num: '4.8★', lbl: 'Avg rating' }
              ].map((stat, i) => (
                <div key={i} className="bg-amber/10 border border-border-amber rounded-xl p-3 text-center">
                  <span className="block font-display text-2xl font-black text-amber">{stat.num}</span>
                  <span className="text-xs text-text-muted font-medium">{stat.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="order-1 lg:order-2">
          <SectionHeader 
            label="Our Story" 
            title={<>Food That Brings <em className="text-amber not-italic">People Together</em></>} 
          />
          <div className="space-y-6 text-text-muted text-base leading-relaxed mb-8">
            <p>
              Juicy Platters was born in a small kitchen in Lusaka with one simple idea: every meal should feel like a celebration. We pour everything into every plate — from the marinade to the last garnish — because we believe generous, bold food is the best way to bring people together.
            </p>
            <p>
              Today we serve hundreds of families, celebrations, and corporate events every month, and our promise stays the same: fresh, bold, and always worth it.
            </p>
          </div>
          
          <div className="space-y-5">
            {[
              { icon: '🌿', title: 'Fresh Ingredients Only', desc: 'Sourced locally every morning. Never frozen proteins, never shortcuts.' },
              { icon: '🍴', title: 'Family Recipes at the Core', desc: 'Our signature marinades and spice blends have been passed down and perfected.' },
              { icon: '💛', title: 'Generous Portions, Always', desc: "You'll never leave our table hungry. That's a Juicy Platters guarantee." }
            ].map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-amber/10 border border-border-amber flex items-center justify-center text-lg shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-cream mb-1">{val.title}</h4>
                  <p className="text-sm text-text-muted">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
