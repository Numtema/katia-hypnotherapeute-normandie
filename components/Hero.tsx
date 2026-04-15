'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-end items-center pb-32 md:pb-40 overflow-hidden bg-[#f9f8f6]">
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

      {/* Floating Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute top-32 md:top-40 right-4 md:right-12 lg:right-32 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-white/50 flex items-center gap-3 z-20"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8ba394] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8ba394]"></span>
        </span>
        <span className="text-xs uppercase tracking-widest text-[#555] font-medium">Séances en ligne & Cabinet</span>
      </motion.div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="font-serif italic text-xl md:text-2xl text-[#8ba394]">Katia Burgun</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#333] mb-8 font-light leading-[1.1]"
        >
          Hypnose &<br/>
          <span className="text-[#8ba394]">Communication Animale</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-[#666] mb-12 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
        >
          Un pont entre vous et votre animal, un chemin vers votre mieux-être.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#services"
            className="bg-[#8ba394] text-white px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-[#7a9283] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto"
          >
            Découvrir les services
          </a>
          <a
            href="#contact"
            className="text-[#333] px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:text-[#8ba394] transition-all duration-300 w-full sm:w-auto border border-transparent hover:border-[#8ba394]/30 flex items-center justify-center gap-2"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Prendre rendez-vous
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
