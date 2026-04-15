'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, RotateCcw, Check, AlertCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export interface ServiceType {
  image: string;
  title: string;
  price: string;
  frontDescription: string;
  backDetails: {
    what: string;
    benefits: string[];
    limits: string;
    process: string;
  };
}

export default function ServiceCard({ service, index }: { service: ServiceType, index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative h-[620px] w-full group"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* FRONT FACE */}
        <div 
          className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden flex flex-col border border-[#f0f0f0] shadow-sm hover:shadow-xl transition-shadow duration-500"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative h-[280px] w-full overflow-hidden shrink-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80"></div>
            <div className="absolute bottom-4 left-6 right-6">
              <h3 className="text-2xl font-serif text-white mb-1 font-light drop-shadow-md">{service.title}</h3>
            </div>
          </div>
          
          <div className="p-8 flex-grow flex flex-col bg-white">
            <p className="text-[#8ba394] font-medium mb-4 text-lg">{service.price}</p>
            <p className="text-[#666] leading-relaxed font-light mb-6 text-sm flex-grow">{service.frontDescription}</p>
            
            <button 
              onClick={() => setIsFlipped(true)}
              className="inline-flex items-center justify-center w-full py-3 rounded-full border border-[#e8e4dc] text-[#555] uppercase tracking-widest text-xs font-medium hover:bg-[#f9f8f6] transition-all duration-300 gap-2 mb-3"
            >
              <span>Voir les détails</span>
              <RotateCcw className="w-4 h-4" />
            </button>

            <a href="#contact" className="inline-flex items-center justify-center w-full py-3 rounded-full bg-[#8ba394] text-white uppercase tracking-widest text-xs font-medium hover:bg-[#7a9283] transition-all duration-300 gap-2">
              <span>Réserver</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* BACK FACE */}
        <div 
          className="absolute inset-0 bg-[#f9f8f6] rounded-[2rem] overflow-hidden flex flex-col border border-[#e8e4dc] shadow-lg p-8"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex justify-between items-start mb-6 shrink-0">
            <h3 className="text-xl font-serif text-[#333] font-light leading-tight pr-4">{service.title}</h3>
            <button onClick={() => setIsFlipped(false)} className="p-2 bg-white rounded-full shadow-sm text-[#888] hover:text-[#8ba394] transition-colors shrink-0">
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto pr-2 space-y-5 scrollbar-hide">
            <div className="relative w-full h-32 rounded-xl overflow-hidden shadow-sm border border-[#e8e4dc] mb-4">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <p className="text-sm text-[#555] font-light leading-relaxed">{service.backDetails.what}</p>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#8ba394] font-medium mb-3">Bienfaits</h4>
              <ul className="space-y-2">
                {service.backDetails.benefits.map((benefit: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#666] font-light">
                    <Check className="w-4 h-4 text-[#8ba394] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#f0f0f0]">
              <div className="flex items-start gap-2 text-sm text-[#666] font-light">
                <AlertCircle className="w-4 h-4 text-[#d97777] shrink-0 mt-0.5" />
                <span className="italic">{service.backDetails.limits}</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#8ba394] font-medium mb-2">En pratique</h4>
              <p className="text-sm text-[#555] font-light leading-relaxed">{service.backDetails.process}</p>
            </div>
          </div>

          <div className="pt-6 mt-auto border-t border-[#e8e4dc] shrink-0">
            <a 
              href={`https://wa.me/33677495288?text=${encodeURIComponent(`Bonjour Katia, je souhaite prendre rendez-vous pour : ${service.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 rounded-full bg-[#25D366] text-white uppercase tracking-widest text-xs font-medium hover:bg-[#128C7E] transition-all duration-300 gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Réserver sur WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
