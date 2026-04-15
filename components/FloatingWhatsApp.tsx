'use client';
import { motion } from 'motion/react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/33677495288?text=Bonjour%20Katia,%20je%20souhaite%20prendre%20rendez-vous."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Contactez-moi sur WhatsApp"
    >
      {/* Effet de pulsation douce */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 duration-1000"></span>
      
      <WhatsAppIcon className="w-7 h-7 md:w-8 md:h-8 relative z-10" />
      
      {/* Tooltip au survol */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-[#333] text-sm font-medium rounded-2xl shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border border-[#e8e4dc]">
        Prendre rendez-vous
      </span>
    </motion.a>
  );
}
