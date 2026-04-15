'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Est-ce que l'hypnose fonctionne vraiment ?",
    answer: "Absolument. L'hypnose est une thérapie brève reconnue qui permet d'accéder à vos ressources inconscientes. Elle est particulièrement efficace pour la gestion du stress, les troubles du sommeil et le dépassement de blocages émotionnels ancrés."
  },
  {
    question: "La communication animale est-elle fiable ?",
    answer: "C'est une approche intuitive qui demande de la pratique et de la justesse. Elle permet de traduire les ressentis de l'animal en mots ou images compréhensibles pour l'humain, offrant ainsi des clés précieuses pour résoudre des problèmes de comportement ou apaiser un animal en souffrance."
  },
  {
    question: "Peut-on faire une séance à distance ?",
    answer: "Oui, tout à fait. L'énergie et l'intention ne connaissent pas de frontières physiques. Que ce soit en visio pour l'hypnose ou sur photo pour la communication animale, les résultats sont identiques à une séance en cabinet."
  },
  {
    question: "Combien de séances sont nécessaires ?",
    answer: "Chaque parcours est unique. Cependant, l'hypnose étant une thérapie brève, on observe souvent des changements significatifs en 1 à 3 séances. Pour la communication animale, une seule consultation suffit généralement pour débloquer une situation."
  },
  {
    question: "Faut-il y croire pour que ça marche ?",
    answer: "Non, ce n'est pas une question de croyance mais d'expérience. L'état d'hypnose est un processus physiologique naturel que nous traversons tous plusieurs fois par jour (quand on est 'dans la lune' par exemple). Votre ouverture d'esprit suffit."
  },
  {
    question: "Les séances sont-elles remboursées ?",
    answer: "De plus en plus de mutuelles prennent en charge les séances d'hypnose dans le cadre de leurs forfaits 'médecines douces'. Je vous invite à consulter la page dédiée aux tarifs pour plus de détails. Je vous remettrai une facture à cet effet."
  },
  {
    question: "Peut-on aider un animal anxieux ?",
    answer: "C'est l'un des motifs de consultation les plus fréquents. En comprenant l'origine de son anxiété (passé, environnement, émotions du gardien), nous pouvons lui transmettre les messages nécessaires pour qu'il retrouve sa sérénité."
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
