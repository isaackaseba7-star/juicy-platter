import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';

export const Reviews = () => {
  const reviews = [
    { stars: 5, text: "Best platters in Lusaka, full stop. The mixed platter is enormous and every piece is perfectly cooked. We come here at least twice a month!", name: "Chanda M.", source: "Google Review", avatar: "😊" },
    { stars: 5, text: "Ordered delivery for our office lunch — 8 people, everyone was genuinely impressed. Fast delivery, food arrived hot, portions were massive.", name: "Patricia K.", source: "Facebook Review", avatar: "👩" },
    { stars: 5, text: "The beef platter is the best I've had in Zambia. The marinade is something special. Highly recommend the peri-peri wings too!", name: "Moses N.", source: "Google Review", avatar: "👨" },
    { stars: 5, text: "Came for my birthday dinner with family. The staff treated us like royalty, the food was incredible. We'll definitely be back.", name: "Natasha B.", source: "Google Review", avatar: "🙋‍♀️" },
    { stars: 5, text: "Order via WhatsApp is so convenient. Food is always ready on time for pickup. Consistent quality every single visit.", name: "David C.", source: "WhatsApp Customer", avatar: "🧑" },
    { stars: 5, text: "The loaded fries alone are worth the trip. Paired with the chicken platter it's a full experience. Prices are very fair for what you get.", name: "Grace Z.", source: "Google Review", avatar: "👧" },
  ];

  return (
    <section id="reviews" className="py-24 px-6 md:px-12">
      <SectionHeader 
        label="What People Say" 
        title={<>Loved by <em className="text-amber not-italic">Lusaka</em></>} 
        align="center"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-12"
      >
        <span className="font-display text-6xl font-black text-amber leading-none">4.8</span>
        <div className="text-amber text-xl my-2 tracking-widest">★★★★★</div>
        <span className="text-sm text-text-muted">Based on 340+ verified reviews</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-dark-card border border-border-amber rounded-2xl p-6 hover:border-amber/40 transition-colors"
          >
            <div className="text-amber text-sm mb-3 tracking-widest">{'★'.repeat(r.stars)}</div>
            <p className="text-sm text-text-light italic leading-relaxed mb-5">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber/15 border border-border-amber flex items-center justify-center text-lg">
                {r.avatar}
              </div>
              <div>
                <div className="text-sm font-semibold text-cream">{r.name}</div>
                <div className="text-xs text-text-muted">{r.source}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="https://g.page/r/YOURPAGE/review" target="_blank" rel="noreferrer" className="inline-block bg-transparent border-2 border-cream/30 hover:border-amber text-cream hover:text-amber px-8 py-3.5 rounded font-medium tracking-wide transition-all transform hover:-translate-y-0.5">
          Leave Us a Review ★
        </a>
      </div>
    </section>
  );
};
