'use client';
import { motion } from 'motion/react';
import ServiceCard, { ServiceType } from './ServiceCard';

const services: ServiceType[] = [
  {
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80", // Dog looking up
    title: "Communication Animale",
    price: "80€ / Consultation",
    frontDescription: "Je vous aide à comprendre les émotions et les besoins de votre animal grâce à une approche intuitive.",
    backDetails: {
      what: "Une technique intuitive basée sur la perception des émotions, ressentis et besoins de votre animal.",
      benefits: [
        "Comprendre l'origine d'un changement soudain de comportement (agressivité, peurs, propreté)",
        "Apaiser son stress et ses angoisses face à une situation nouvelle",
        "Le préparer en douceur à un événement (déménagement, arrivée d'un bébé ou d'un autre animal)",
        "L'accompagner sereinement et avec amour dans sa fin de vie"
      ],
      limits: "Important : Ma pratique ne remplace pas un vétérinaire. Je ne fais pas de recherche d'animaux perdus.",
      process: "À distance. J'ai besoin du nom de votre animal, d'une photo et de votre objectif. Facture fournie."
    }
  },
  {
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80", // Woman relaxing/eyes closed
    title: "Hypnose Ericksonienne",
    price: "60€ / Séance (1h30)",
    frontDescription: "Je vous accompagne vers l'apaisement et la clarté, en cabinet ou à distance.",
    backDetails: {
      what: "Une méthode thérapeutique brève utilisant un état de conscience modifié pour activer vos ressources inconscientes.",
      benefits: [
        "Réduire significativement votre charge mentale, votre stress et votre anxiété au quotidien",
        "Retrouver un sommeil profond, réparateur et des nuits paisibles",
        "Renforcer durablement votre confiance en vous et votre estime personnelle",
        "Vous libérer en douceur de vos phobies, de vos peurs irrationnelles et de vos blocages"
      ],
      limits: "Important : L'hypnose ne remplace pas un avis ou un traitement médical.",
      process: "En cabinet ou visio. Vous devez être sobre et au calme. Facture fournie (mutuelle possible)."
    }
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80", // People in workshop/learning
    title: "Formation Communication",
    price: "150€ / Personne",
    frontDescription: "Je vous transmets les bases de la communication animale lors d'une journée d'initiation.",
    backDetails: {
      what: "Une journée complète d'initiation pour apprendre à vous connecter intuitivement aux animaux.",
      benefits: [
        "Développer et faire confiance à votre intuition naturelle et à vos ressentis",
        "Apprendre et maîtriser mes techniques de connexion télépathique étape par étape",
        "Pratiquer concrètement sur des photos pour valider vos premières perceptions",
        "Créer un lien encore plus fort et profond avec les animaux qui vous entourent"
      ],
      limits: "Un minimum de 3 personnes est requis pour maintenir la session.",
      process: "Je me déplace à votre domicile. Ambiance conviviale, bienveillante et sans jugement."
    }
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#f9f8f6] relative">
      {/* Decorative background element */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-[#8ba394]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#e8e4dc]/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#8ba394]"></div>
              <span className="uppercase tracking-[0.2em] text-sm text-[#8ba394]">Expertise</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#333] font-light leading-tight">
              Services <br/><span className="italic text-[#8ba394]">& Tarifs</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#666] font-light text-lg max-w-md md:text-right"
          >
            Des accompagnements sur-mesure pour vous et vos animaux, en cabinet ou à distance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
