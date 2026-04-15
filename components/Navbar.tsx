'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/#home' },
    { name: 'Qui suis-je ?', href: '/qui-suis-je' },
    { name: 'Services', href: '/#services' },
    { name: 'Tarifs & Mutuelles', href: '/tarifs' },
    { name: 'Témoignages', href: '/temoignages' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${isScrolled ? 'top-4 px-4' : 'top-0 w-full'}`}>
      <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'bg-[#f9f8f6]/95 backdrop-blur-md shadow-lg rounded-full px-6 py-3 w-full max-w-5xl border border-[#e8e4dc]' : 'bg-transparent w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-8'}`}>
        
        <a href="/#home" className="flex items-center gap-3 group">
          <div className="flex flex-col whitespace-nowrap">
            <span className={`font-sans tracking-widest text-[#333] uppercase font-light group-hover:text-[#8ba394] transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>Katia Burgun</span>
            <span className={`font-serif italic text-[#8ba394] transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm'}`}>Hypnose & Animaux</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-2 items-center">
          {navLinks.map((link) => {
            if (link.name === 'Services') {
              return (
                <div key={link.name} className="relative group">
                  <a 
                    href={link.href} 
                    className="relative px-4 py-2 text-[#5a5a5a] hover:text-[#8ba394] transition-colors text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:bg-[#8ba394]/10 cursor-pointer flex items-center gap-1"
                  >
                    {link.name}
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                  </a>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#e8e4dc] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2">
                    <a href="/communication-animale" className="px-4 py-3 text-xs uppercase tracking-widest text-[#5a5a5a] hover:text-[#8ba394] hover:bg-[#f9f8f6] transition-colors">Communication Animale</a>
                    <a href="/hypnose" className="px-4 py-3 text-xs uppercase tracking-widest text-[#5a5a5a] hover:text-[#8ba394] hover:bg-[#f9f8f6] transition-colors">Hypnose Ericksonienne</a>
                    <a href="/formation" className="px-4 py-3 text-xs uppercase tracking-widest text-[#5a5a5a] hover:text-[#8ba394] hover:bg-[#f9f8f6] transition-colors">Formation</a>
                  </div>
                </div>
              );
            }
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative px-4 py-2 text-[#5a5a5a] hover:text-[#8ba394] transition-colors text-xs uppercase tracking-[0.15em] font-medium rounded-full hover:bg-[#8ba394]/10 cursor-pointer"
              >
                {link.name}
              </a>
            );
          })}
          <a href="/#contact" className="ml-4 px-6 py-2 rounded-full bg-[#8ba394] text-white hover:bg-[#7a9283] transition-all duration-300 text-xs uppercase tracking-widest font-medium shadow-sm hover:shadow-md">
            Prendre RDV
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="lg:hidden text-[#4a4a4a] p-2 rounded-full hover:bg-[#8ba394]/10 transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-4 right-4 bg-[#f9f8f6] shadow-xl rounded-3xl overflow-hidden border border-[#e8e4dc]"
          >
            <div className="py-6 px-6 flex flex-col space-y-2 text-center">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <a
                    href={link.href}
                    onClick={() => link.name !== 'Services' && setIsOpen(false)}
                    className="text-[#5a5a5a] hover:text-[#8ba394] hover:bg-[#8ba394]/10 py-3 rounded-full text-sm uppercase tracking-widest font-medium transition-all"
                  >
                    {link.name}
                  </a>
                  {link.name === 'Services' && (
                    <div className="flex flex-col bg-[#f0eee9] rounded-2xl mt-1 py-2">
                      <a href="/communication-animale" onClick={() => setIsOpen(false)} className="text-[#5a5a5a] hover:text-[#8ba394] py-2 text-xs uppercase tracking-widest font-medium">Communication Animale</a>
                      <a href="/hypnose" onClick={() => setIsOpen(false)} className="text-[#5a5a5a] hover:text-[#8ba394] py-2 text-xs uppercase tracking-widest font-medium">Hypnose Ericksonienne</a>
                      <a href="/formation" onClick={() => setIsOpen(false)} className="text-[#5a5a5a] hover:text-[#8ba394] py-2 text-xs uppercase tracking-widest font-medium">Formation</a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
