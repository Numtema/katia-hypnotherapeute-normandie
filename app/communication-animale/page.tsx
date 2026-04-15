import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function CommunicationAnimale() {
  return (
    <main className="min-h-screen bg-[#f9f8f6]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#8ba394]"></div>
              <span className="uppercase tracking-[0.2em] text-sm text-[#8ba394]">Service</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-[#333] mb-6 font-light leading-tight">
              Communication <br/><span className="italic text-[#8ba394]">Animale</span>
            </h1>
            <p className="text-[#666] text-lg font-light leading-relaxed mb-8">
              Je vous aide à comprendre les émotions et les besoins de votre animal grâce à une approche intuitive basée sur la perception extrasensorielle.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-serif text-[#8ba394]">80€</span>
              <span className="text-[#888] text-sm uppercase tracking-widest">/ Consultation</span>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80" 
                alt="Communication Animale" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-[#333] mb-8 font-light">Pourquoi faire appel à la communication animale ?</h2>
          <div className="space-y-6 text-[#666] font-light leading-relaxed text-lg mb-12">
            <p>
              Les animaux ont un langage non verbal riche et complexe. La communication animale (ou communication intuitive) permet d'établir un pont entre vous et votre compagnon. En me connectant à lui par perception extrasensorielle, je peux recevoir des images, des sensations, des émotions ou des mots qu'il souhaite transmettre.
            </p>
            <p>
              Cette pratique est particulièrement utile pour :
            </p>
            <ul className="space-y-4 mt-6">
              {[
                "Comprendre l'origine d'un changement soudain de comportement (agressivité, peurs, malpropreté).",
                "Apaiser son stress et ses angoisses face à une situation nouvelle.",
                "Le préparer en douceur à un événement important (déménagement, arrivée d'un bébé ou d'un autre animal).",
                "L'accompagner sereinement et avec amour dans sa fin de vie, en comprenant ses besoins ultimes."
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#8ba394] shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#f9f8f6] p-8 rounded-3xl border border-[#e8e4dc]">
            <h3 className="font-serif text-2xl text-[#333] mb-4 font-light">Comment se déroule la séance ?</h3>
            <p className="text-[#666] font-light leading-relaxed mb-4">
              La consultation se fait <strong>à distance</strong>. L'énergie n'a pas de frontière, et cela permet à votre animal de rester serein dans son environnement habituel.
            </p>
            <p className="text-[#666] font-light leading-relaxed mb-4">
              Pour me connecter à lui, j'ai besoin :
            </p>
            <ul className="list-disc list-inside text-[#666] font-light space-y-2 mb-6 ml-4">
              <li>Du nom de votre animal et de son âge</li>
              <li>D'une photo récente où l'on voit bien ses yeux</li>
              <li>De votre objectif clair ou de vos questions</li>
            </ul>
            <p className="text-sm text-[#d97777] italic">
              Important : Ma pratique ne remplace en aucun cas une consultation vétérinaire. Je ne fais pas de diagnostic médical et je ne fais pas de recherche d'animaux perdus.
            </p>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
