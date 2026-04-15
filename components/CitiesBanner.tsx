'use client';
import { motion } from 'motion/react';

const cities = [
  "Fontaine-le-Dun",
  "Houdetot",
  "Saint-Valery-en-Caux",
  "Veules-les-Roses",
  "Yvetot",
  "Dieppe",
  "Cany-Barville",
  "Doudeville",
  "Saint-Aubin-sur-Mer",
  "Luneray"
];

export default function CitiesBanner() {
  return (
    <div className="bg-[#b5a496] text-white py-4 overflow-hidden relative flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[#b5a496] via-transparent to-[#b5a496] z-10 pointer-events-none w-full"></div>
      
      <motion.div 
        className="flex whitespace-nowrap items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 30 
        }}
      >
        {/* Double the array to create a seamless loop */}
        {[...cities, ...cities, ...cities, ...cities].map((city, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="text-sm uppercase tracking-[0.2em] font-medium opacity-90">
              {city}
            </span>
            <span className="mx-6 text-white/30">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
