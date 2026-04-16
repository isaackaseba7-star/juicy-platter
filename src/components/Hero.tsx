import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-12 pt-[120px] pb-[80px] overflow-hidden">
      <div className="absolute inset-0 hero-bg"></div>
      <div className="absolute inset-0 hero-grain opacity-5"></div>
      
      <div className="relative z-10 max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-amber mb-6"
        >
          <span className="w-7 h-[1.5px] bg-amber"></span>
          Now Open in Lusaka
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-none tracking-tight text-cream mb-6"
        >
          Bold Flavors.<br/><em className="text-amber not-italic">Generous</em><br/>Portions.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-text-muted font-light max-w-md mb-10"
        >
          Hand-crafted platters built to satisfy — fresh ingredients, bold spices, and the kind of meals people talk about for days.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <a href="#reservations" className="bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded font-semibold tracking-wide text-center transition-all transform hover:-translate-y-0.5">
            Order Now →
          </a>
          <a href="#reservations" className="bg-transparent border-2 border-cream/30 hover:border-amber text-cream hover:text-amber px-8 py-4 rounded font-medium tracking-wide text-center transition-all transform hover:-translate-y-0.5">
            Book a Table
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center gap-6"
        >
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <span className="text-amber text-base">★★★★★</span>
            <span>4.8 rating</span>
          </div>
          <div className="w-px h-5 bg-border-amber"></div>
          <div className="text-sm text-text-muted">340+ happy customers</div>
          <div className="w-px h-5 bg-border-amber hidden sm:block"></div>
          <div className="text-sm text-text-muted">Open 7 days a week</div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 40, y: '-50%' }}
        animate={{ opacity: 1, x: 0, y: '-50%' }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:block absolute right-[-2%] top-1/2 w-[48%] max-w-[640px]"
      >
        <div className="w-full aspect-square rounded-full hero-plate border-[3px] border-amber/15 flex items-center justify-center">
          <motion.div 
            animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[75%] aspect-square rounded-full plate-inner flex items-center justify-center text-[7rem]"
          >
            🍖
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
