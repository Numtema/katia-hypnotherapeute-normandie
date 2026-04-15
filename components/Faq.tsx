'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Est-ce que l'hypnose fonctionne vraiment ?",
    answer: "Oui, j'obtiens d'excellents résultats notamment pour réduire le stress, améliorer le sommeil et lever des blocages inconscients."
  },
  {
    question: "La communication animale est-elle fiable ?",
    answer: "Elle repose sur mon approche intuitive. Elle permet d'apporter des informations très utiles sur les émotions et les besoins de votre animal."
  },
  {
    question: "Peut-on faire une séance à distance ?",
    answer: "Oui, tout à fait. L'efficacité est comparable à une séance en cabinet, que ce soit pour l'hypnose ou pour la communication avec votre animal."
  },
  {
    question: "Combien de séances sont nécessaires ?",
    answer: "En moyenne, 1 à 3 séances suffisent selon votre besoin ou la problématique de votre animal."
  },
  {
    question: "Faut-il y croire pour que ça marche ?",
    answer: "Non. L'expérience prime sur la croyance. Vous n'avez pas besoin d'y croire pour en ressentir les bénéfices."
  },
  {
    question: "Les séances sont-elles remboursées ?",
    answer: "Certaines mutuelles remboursent mes séances d'hypnose. Je vous fournis systématiquement une facture."
  },
  {
    question: "Peut-on aider un animal anxieux ?",
    answer: "Oui, en comprenant ses émotions et ses besoins profonds, je peux l'aider à s'apaiser face à une situation stressante."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-[#f9f8f6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-[#333] mb-6 font-light"
          >
            Questions <span className="italic text-[#8ba394]">Fréquentes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#666] font-light text-lg"
          >
            Voici les réponses aux interrogations les plus courantes.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] border border-[#e8e4dc] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-serif text-lg text-[#333] pr-8">{faq.question}</span>
                <span className="text-[#8ba394] flex-shrink-0 bg-[#f9f8f6] p-2 rounded-full">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-[#666] font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
