'use client';
import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Prise de contact",
    description: "Vous me contactez pour définir votre objectif (pour vous ou votre animal)."
  },
  {
    number: "02",
    title: "Préparation",
    description: "Pour votre animal : vous m'envoyez sa photo et vos questions. Pour vous : vous vous installez au calme."
  },
  {
    number: "03",
    title: "La Séance",
    description: "Je réalise la séance d'hypnose avec vous, ou je me connecte intuitivement à votre animal."
  },
  {
    number: "04",
    title: "Restitution",
    description: "Nous échangeons sur les informations reçues. Vous repartez avec des réponses et un profond apaisement."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-[#333] mb-6 font-light"
          >
            Comment ça <span className="italic text-[#8ba394]">se passe ?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#666] font-light text-lg max-w-2xl mx-auto"
          >
            Un processus simple et bienveillant en 4 étapes pour vous accompagner au mieux.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-8 rounded-[2rem] bg-[#f9f8f6] border border-[#e8e4dc] hover:shadow-lg hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="text-5xl font-serif text-[#8ba394] opacity-20 mb-6 group-hover:opacity-40 transition-opacity duration-500">
                {step.number}
              </div>
              <h3 className="text-xl font-serif text-[#333] mb-4">{step.title}</h3>
              <p className="text-[#666] font-light leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
