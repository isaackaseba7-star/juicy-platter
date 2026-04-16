import React from 'react';
import { Flame, Truck, MapPin, Clock, Star } from 'lucide-react';

export const TrustStrip = () => {
  const items = [
    { icon: <Flame size={16} />, text: "Freshly Prepared Daily" },
    { icon: <Truck size={16} />, text: "Fast Delivery Available" },
    { icon: <MapPin size={16} />, text: "Lusaka's Favourite Platter Spot" },
    { icon: <Clock size={16} />, text: "Open 10am – 10pm" },
    { icon: <Star size={16} />, text: "4.8/5 on Google" },
  ];

  return (
    <div className="bg-dark-mid border-y border-border-amber py-5 px-6 overflow-hidden">
      <div className="flex items-center justify-center gap-8 flex-wrap max-w-7xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-text-muted font-medium whitespace-nowrap">
            <span className="text-amber">{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};
