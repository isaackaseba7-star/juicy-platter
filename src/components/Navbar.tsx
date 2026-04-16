import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 h-[70px] flex items-center justify-between transition-colors duration-300 border-b border-border-amber ${scrolled ? 'bg-dark/95 backdrop-blur-md' : 'bg-dark/80 backdrop-blur-sm'}`}>
        <a href="#" className="font-display text-2xl font-black text-amber tracking-tight">
          Juicy<span className="text-coral">.</span> Platters
        </a>
        
        <ul className="hidden md:flex items-center gap-8">
          {['Menu', 'About', 'Reservations', 'Reviews', 'Find Us'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-text-muted hover:text-amber text-sm font-medium tracking-wider uppercase transition-colors">
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#reservations" className="bg-coral hover:bg-coral-hover text-white px-5 py-2.5 rounded transition-all transform hover:-translate-y-0.5 text-sm font-semibold">
              Order Now
            </a>
          </li>
        </ul>

        <button className="md:hidden text-amber p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[70px] left-0 right-0 bg-dark/98 backdrop-blur-md border-b border-border-amber p-6 flex flex-col gap-5 z-40 md:hidden">
          {['Menu', 'About', 'Reservations', 'Reviews', 'Find Us'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-text-muted hover:text-amber text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#reservations" className="bg-coral text-white py-3 rounded text-center font-semibold mt-2" onClick={() => setIsOpen(false)}>
            Order Now
          </a>
        </div>
      )}
    </>
  );
};
