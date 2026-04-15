import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Formation() {
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
              Formation <br/><span className="italic text-[#8ba394]">Communication Animale</span>
            </h1>
            <p className="text-[#666] text-lg font-light leading-relaxed mb-8">
              Je vous transmets les bases de la communication animale lors d'une journée complète d'initiation pour réveiller vos capacités intuitives.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-serif text-[#8ba394]">150€</span>
              <span className="text-[#888] text-sm uppercase tracking-widest">/ Personne (Journée)</span>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80" 
                alt="Formation Communication Animale" 
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
          <h2 className="font-serif text-3xl text-[#333] mb-8 font-light">Apprenez à communiquer avec les animaux</h2>
          <div className="space-y-6 text-[#666] font-light leading-relaxed text-lg mb-12">
            <p>
              Nous avons tous en nous la capacité de communiquer intuitivement avec les animaux. Cette journée d'initiation est conçue pour vous donner les clés, les techniques et la confiance nécessaires pour réveiller cette aptitude naturelle.
            </p>
            <p>
              Lors de cette formation, vous allez :
            </p>
            <ul className="space-y-4 mt-6">
              {[
                "Développer et faire confiance à votre intuition naturelle et à vos ressentis.",
                "Apprendre et maîtriser mes techniques de connexion télépathique étape par étape.",
                "Pratiquer concrètement sur des photos pour valider vos premières perceptions.",
                "Créer un lien encore plus fort et profond avec les animaux qui vous entourent."
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#8ba394] shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#f9f8f6] p-8 rounded-3xl border border-[#e8e4dc]">
            <h3 className="font-serif text-2xl text-[#333] mb-4 font-light">Informations pratiques</h3>
            <p className="text-[#666] font-light leading-relaxed mb-4">
              La formation se déroule sur une journée complète. Je vous reçois <strong>directement à mon domicile</strong> pour animer cette session dans un cadre chaleureux et apaisant.
            </p>
            <p className="text-[#666] font-light leading-relaxed mb-4">
              L'ambiance est toujours conviviale, bienveillante et garantie sans aucun jugement. C'est un moment de partage et de découverte.
            </p>
            <p className="text-sm text-[#d97777] italic mt-6">
              Condition : Un minimum de 3 personnes est requis pour valider et maintenir la session de formation. N'hésitez pas à en parler autour de vous !
            </p>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
