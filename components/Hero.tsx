'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden bg-[#f9f8f6]">
      {/* Animated Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80"
          alt="Paysage doux et serein"
          fill
          className="object-cover opacity-50"
          referrerPolicy="no-referrer"
          priority
        />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f8f6]/70 via-[#f9f8f6]/50 to-[#f9f8f6] backdrop-blur-[1px]"></div>
      </motion.div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 flex flex-col items-center w-full mt-12 md:mt-0">
        {/* Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-white/50 flex items-center gap-3 mb-8 md:mb-12"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8ba394] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8ba394]"></span>
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#555] font-medium">Séances en ligne & Cabinet</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 md:mb-8"
        >
          <span className="font-serif italic text-2xl md:text-3xl text-[#8ba394]">Katia Burgun</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#333] mb-6 sm:mb-8 font-light leading-[1.15] sm:leading-[1.1]"
        >
          Retrouvez l'harmonie avec<br className="hidden sm:block" />
          <span className="text-[#8ba394] italic sm:not-italic sm:block"> vous-même et votre animal</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-[#666] mb-10 sm:mb-12 font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-2"
        >
          Hypnose Ericksonienne & Communication Intuitive : libérez vos blocages et créez un lien profond avec vos compagnons. Un accompagnement bienveillant en Normandie et à distance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#services"
            className="relative overflow-hidden group bg-[#8ba394] text-white px-8 sm:px-10 py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto"
          >
            <span className="relative z-10">Découvrir les services</span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          </a>
          <a
            href="https://wa.me/33677495288?text=Bonjour%20Katia,%20je%20souhaite%20prendre%20rendez-vous."
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group text-[#333] px-8 sm:px-10 py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] hover:text-[#8ba394] transition-all duration-300 w-full sm:w-auto border border-[#e8e4dc] sm:border-transparent hover:border-[#8ba394]/30 flex items-center justify-center gap-2 bg-white sm:bg-transparent shadow-sm sm:shadow-none"
          >
            <span className="relative z-10 flex items-center gap-2">
              <WhatsAppIcon className="w-5 h-5" />
              Prendre rendez-vous
            </span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-[#8ba394]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#8ba394]" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
