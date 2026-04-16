import React from 'react';
import { motion } from 'motion/react';

export const SectionHeader = ({ label, title, sub, align = 'left' }: { label: string, title: React.ReactNode, sub?: string, align?: 'left' | 'center' }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7 }}
    className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
  >
    <div className={`text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-amber mb-3 flex items-center gap-2.5 ${align === 'center' ? 'justify-center' : ''}`}>
      {label}
      {align === 'left' && <div className="flex-1 max-w-[40px] h-px bg-amber/50"></div>}
    </div>
    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight tracking-tight mb-4">
      {title}
    </h2>
    {sub && <p className={`text-base text-text-muted font-light max-w-[500px] ${align === 'center' ? 'mx-auto' : ''}`}>{sub}</p>}
  </motion.div>
);
