import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';

const menuItems = [
  { cat: 'platters', emoji: '🍖', name: 'Signature Mixed Platter', desc: 'Beef ribs, grilled chicken, sausage & chips. The crowd favourite.', price: 'K185', badge: 'Bestseller' },
  { cat: 'platters', emoji: '🐔', name: 'Whole Chicken Platter', desc: 'Marinated whole chicken with coleslaw, fries, and dipping sauce.', price: 'K145', badge: '' },
  { cat: 'platters', emoji: '🥩', name: 'Beef Lovers Platter', desc: 'T-bone steak, beef strips, peri-peri wings. For serious meat lovers.', price: 'K220', badge: "Chef's Pick" },
  { cat: 'grills', emoji: '🍗', name: 'Peri-Peri Chicken Wings', desc: 'Crispy, spicy wings marinated overnight in our secret peri-peri.', price: 'K95', badge: '' },
  { cat: 'grills', emoji: '🌭', name: 'Flame-Grilled Sausage', desc: 'Zambian-style boerewors with grilled peppers and onions.', price: 'K75', badge: '' },
  { cat: 'grills', emoji: '🥓', name: 'Ribs Half Rack', desc: 'Slow-cooked pork ribs with smoky BBQ glaze. Fall-off-the-bone.', price: 'K130', badge: 'Bestseller' },
  { cat: 'sides', emoji: '🍟', name: 'Loaded Fries', desc: 'Seasoned thick-cut fries with cheese, jalapeños, and special sauce.', price: 'K45', badge: '' },
  { cat: 'sides', emoji: '🥗', name: 'Garden Coleslaw', desc: 'Fresh, creamy homemade coleslaw. The perfect platter companion.', price: 'K25', badge: '' },
  { cat: 'drinks', emoji: '🥤', name: 'Fresh Mango Juice', desc: 'Blended fresh Zambian mangoes. No added sugar, all natural.', price: 'K30', badge: '' },
  { cat: 'drinks', emoji: '🍺', name: 'Cold Drinks & Beers', desc: 'Full selection of soft drinks, Mosi lager, and Castle Lite.', price: 'K20+', badge: '' },
];

export const Menu = () => {
  const [filter, setFilter] = useState('all');
  const tabs = [
    { id: 'all', label: 'All Items' },
    { id: 'platters', label: 'Platters' },
    { id: 'grills', label: 'Grills' },
    { id: 'sides', label: 'Sides' },
    { id: 'drinks', label: 'Drinks' },
  ];

  const filteredItems = filter === 'all' ? menuItems : menuItems.filter(i => i.cat === filter);

  return (
    <section id="menu" className="py-24 px-6 md:px-12 bg-dark-mid">
      <SectionHeader 
        label="Our Menu" 
        title={<>Crafted to <em className="text-amber not-italic">Impress</em></>} 
        sub="Every dish is prepared with care and the freshest ingredients. No shortcuts, ever."
        align="center"
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center flex-wrap gap-2 mb-12"
      >
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-5 py-2 rounded-full border-[1.5px] text-sm font-medium tracking-wide transition-all ${
              filter === tab.id 
                ? 'bg-amber border-amber text-dark' 
                : 'bg-transparent border-border-amber text-text-muted hover:bg-amber hover:border-amber hover:text-dark'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredItems.map((item, i) => (
          <motion.div 
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-dark-card border border-border-amber rounded-xl overflow-hidden hover:-translate-y-1 hover:border-amber/40 transition-all duration-300 relative flex flex-col"
          >
            <div className="h-40 flex items-center justify-center text-6xl dish-emoji-wrap relative">
              <span>{item.emoji}</span>
              {item.badge && (
                <span className="absolute top-3 right-3 bg-coral text-white text-[0.65rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-display text-lg font-bold text-cream mb-1">{item.name}</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">{item.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-display text-xl font-bold text-amber">{item.price}</span>
                <button 
                  onClick={() => window.open(`https://wa.me/260XXXXXXXXX?text=Hi! I'd like to order: ${item.name} from Juicy Platters`, '_blank')}
                  className="bg-coral hover:bg-coral-hover text-white px-4 py-2 rounded text-xs font-semibold tracking-wide transition-colors"
                >
                  Add to Order
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="#reservations" className="inline-block bg-coral hover:bg-coral-hover text-white px-8 py-4 rounded font-semibold tracking-wide transition-all transform hover:-translate-y-0.5">
          Order Your Platter →
        </a>
      </div>
    </section>
  );
};
