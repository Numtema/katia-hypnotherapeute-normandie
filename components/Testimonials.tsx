'use client';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "L'approche de Katia a complètement transformé ma façon de gérer le stress. Ses séances d'hypnose sont une véritable bulle d'oxygène dans ma semaine.",
    author: "Sophie L.",
    role: "Patiente en hypnose"
  },
  {
    text: "Une expérience incroyable avec mon chien qui avait des problèmes de comportement. Katia a su mettre des mots sur ses maux. Je recommande les yeux fermés.",
    author: "Marc D.",
    role: "Communication animale"
  },
  {
    text: "La formation en communication animale est fascinante. Katia transmet son savoir avec tellement de bienveillance et de clarté. Une belle découverte.",
    author: "Élise M.",
    role: "Élève en formation"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-white border-y border-[#f0f0f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-[#333] mb-6 font-light"
          >
            Vos histoires, <span className="italic text-[#8ba394]">notre chemin</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-px bg-[#8ba394] mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#f9f8f6] p-10 rounded-2xl relative"
            >
              {/* Decorative Quote Mark */}
              <span className="absolute top-6 right-8 text-6xl font-serif text-[#8ba394] opacity-20 leading-none">"</span>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#8ba394] text-[#8ba394]" />
                ))}
              </div>
              
              <p className="text-[#555] font-light leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>
              
              <div>
                <p className="font-serif text-lg text-[#333]">{testimonial.author}</p>
                <p className="text-xs uppercase tracking-widest text-[#888] mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
