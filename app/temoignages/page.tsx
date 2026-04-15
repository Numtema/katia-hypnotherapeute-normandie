import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Image from 'next/image';
import { Quote as QuoteIcon, Star } from 'lucide-react';

export default function Temoignages() {
  return (
    <main className="min-h-screen bg-[#f9f8f6]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-[#8ba394]"></div>
          <span className="uppercase tracking-[0.2em] text-sm text-[#8ba394]">Histoires vraies</span>
          <div className="w-8 h-[1px] bg-[#8ba394]"></div>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl text-[#333] mb-6 font-light leading-tight">
          Histoires & <span className="italic text-[#8ba394]">Témoignages</span>
        </h1>
        <p className="text-[#666] text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Découvrez les parcours de ceux qui m'ont fait confiance. Chaque accompagnement est unique, qu'il s'agisse d'hypnose pour vous ou de communication pour votre animal.
        </p>
      </section>

      {/* Case Studies / Storytelling */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-20">
        
        {/* Story 1 : Communication Animale */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-[#e8e4dc] overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5 relative h-64 md:h-auto">
            <Image 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80" 
              alt="Chat roux" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#8ba394] text-[#8ba394]" />)}
            </div>
            <h3 className="font-serif text-2xl text-[#333] mb-4">L'histoire de Simba, le chat anxieux</h3>
            <p className="text-[#666] font-light leading-relaxed mb-6 italic">
              "Simba avait développé un comportement très agressif depuis notre déménagement. Il se cachait toute la journée et feulait dès qu'on l'approchait. J'étais désespérée."
            </p>
            <p className="text-[#555] font-light leading-relaxed mb-6 text-sm">
              Lors de la communication animale, j'ai pu percevoir que Simba ne comprenait pas pourquoi son territoire avait soudainement disparu. Il se sentait en insécurité face aux nouvelles odeurs. En lui expliquant la situation par image mentale et en lui transmettant l'amour de sa gardienne, il a pu relâcher la pression.
            </p>
            <div className="border-t border-[#f0f0f0] pt-4 mt-auto">
              <p className="font-medium text-[#333] text-sm">Marie D.</p>
              <p className="text-xs text-[#888] uppercase tracking-widest mt-1">Communication Animale à distance</p>
            </div>
          </div>
        </div>

        {/* Story 2 : Hypnose */}
        <div className="bg-[#b5a496] rounded-[2rem] shadow-lg overflow-hidden flex flex-col md:flex-row-reverse text-white">
          <div className="md:w-2/5 relative h-64 md:h-auto">
            <Image 
              src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80" 
              alt="Femme sereine" 
              fill 
              className="object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-white text-white" />)}
            </div>
            <h3 className="font-serif text-2xl mb-4">Comment Sophie a vaincu sa phobie</h3>
            <p className="text-white/90 font-light leading-relaxed mb-6 italic">
              "Je souffrais d'une peur panique de l'avion depuis 10 ans. Cela m'empêchait de voyager et de voir ma famille à l'étranger. Les séances d'hypnose avec Katia ont été une révélation."
            </p>
            <p className="text-white/80 font-light leading-relaxed mb-6 text-sm">
              Nous avons travaillé en douceur sur l'origine inconsciente de cette peur. L'hypnose Ericksonienne a permis à Sophie de puiser dans ses propres ressources de calme et de sécurité. Après seulement 3 séances, elle a pu prendre un vol de 4 heures avec une sérénité qu'elle ne pensait plus jamais retrouver.
            </p>
            <div className="border-t border-white/20 pt-4 mt-auto">
              <p className="font-medium text-sm">Sophie L.</p>
              <p className="text-xs text-white/70 uppercase tracking-widest mt-1">Hypnose en cabinet (Fontaine-le-Dun)</p>
            </div>
          </div>
        </div>

        {/* Story 3 : Formation */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-[#e8e4dc] overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5 relative h-64 md:h-auto bg-[#f9f8f6] flex items-center justify-center">
            <QuoteIcon className="w-32 h-32 text-[#8ba394] opacity-20" />
          </div>
          <div className="md:w-3/5 p-10 md:p-12 flex flex-col justify-center">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#8ba394] text-[#8ba394]" />)}
            </div>
            <h3 className="font-serif text-2xl text-[#333] mb-4">La découverte de l'intuition</h3>
            <p className="text-[#666] font-light leading-relaxed mb-6 italic">
              "J'ai toujours senti que j'avais un lien spécial avec les animaux, mais je ne savais pas comment l'utiliser. La journée de formation avec Katia a tout changé."
            </p>
            <p className="text-[#555] font-light leading-relaxed mb-6 text-sm">
              Lors de cette journée d'initiation, le groupe a pu pratiquer sur des photos d'animaux qu'ils ne connaissaient pas. Les résultats ont été bluffants. Chacun a pu réaliser qu'il possédait cette capacité naturelle de connexion, il suffisait juste d'apprendre à l'écouter sans jugement.
            </p>
            <div className="border-t border-[#f0f0f0] pt-4 mt-auto">
              <p className="font-medium text-[#333] text-sm">Groupe de formation</p>
              <p className="text-xs text-[#888] uppercase tracking-widest mt-1">Initiation à mon domicile</p>
            </div>
          </div>
        </div>

      </section>

      <Contact />
      <Footer />
    </main>
  );
}
