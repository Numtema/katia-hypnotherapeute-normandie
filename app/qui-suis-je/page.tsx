import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Image from 'next/image';
import { Heart, MapPin, Sparkles } from 'lucide-react';

export default function QuiSuisJe() {
  return (
    <main className="min-h-screen bg-[#f9f8f6]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-[#8ba394]"></div>
          <span className="uppercase tracking-[0.2em] text-sm text-[#8ba394]">Mon parcours</span>
          <div className="w-8 h-[1px] bg-[#8ba394]"></div>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl text-[#333] mb-6 font-light leading-tight">
          Qui suis-je ? <br/><span className="italic text-[#8ba394]">Katia Burgun</span>
        </h1>
        <p className="text-[#666] text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Une passionnée du vivant, dédiée à l'harmonie entre l'humain et l'animal. Découvrez mon histoire et ce qui m'a menée vers l'hypnose et la communication intuitive.
        </p>
      </section>

      {/* Story Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-sm border border-[#e8e4dc] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            {/* Image Portrait */}
            <div className="lg:w-2/5 relative h-[300px] sm:h-[400px] lg:h-auto">
              <Image 
                src="https://scontent.fcdg3-1.fna.fbcdn.net/v/t39.30808-6/280736276_115864707788474_7526965914387568168_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=jUP3--iFNh4Q7kNvwHpwvJ2&_nc_oc=AdpIWNW1vwMQyhxm3byXUJ_FdegQrIr3jgM5jtGFeANaN5mN0mqxh18LK9gNklOrbnIwC6sX5K6RQNsqqhqdKk1w&_nc_zt=23&_nc_ht=scontent.fcdg3-1.fna&_nc_gid=gsjpyQADe76772P9QOpNkA&_nc_ss=7a3a8&oh=00_Af0oF_XrNSnxlEw3i4LkXUMGpZ8Zqv92LFO0l91cMzpdLg&oe=69E5A58C" 
                alt="Katia Burgun - Thérapeute" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Text Content */}
            <div className="lg:w-3/5 p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-[#8ba394]" />
                <h2 className="font-serif text-3xl text-[#333] font-light">Le déclic</h2>
              </div>
              
              <div className="space-y-6 text-[#666] font-light leading-relaxed text-lg">
                <p>
                  Depuis toujours, j'ai ressenti un lien profond et inexplicable avec les animaux. Je sentais qu'ils avaient des choses à nous dire, bien au-delà de leurs simples comportements physiques. Le véritable déclic s'est produit lorsque j'ai compris que cette intuition pouvait être travaillée, affinée et mise au service de leur bien-être.
                </p>
                <p>
                  C'est ainsi que je me suis formée à la <strong>communication animale</strong>. J'ai appris à écouter avec mes sens subtils, à recevoir leurs images, leurs émotions et leurs messages.
                </p>
                <p>
                  Mais très vite, je me suis rendu compte d'une chose essentielle : <strong>le bien-être de l'animal est intimement lié à celui de son gardien</strong>. Un animal stressé est souvent l'éponge des émotions de son humain. C'est pour cette raison que j'ai décidé d'ajouter une corde à mon arc en me formant à l'<strong>Hypnose Ericksonienne</strong>.
                </p>
                <p>
                  Aujourd'hui, ma double compétence me permet d'offrir un accompagnement global : j'apaise l'animal par la communication intuitive, et j'accompagne l'humain vers la sérénité grâce à l'hypnose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet & Local SEO Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-[#8ba394]" />
              <h2 className="font-serif text-3xl text-[#333] font-light">Mon cabinet en Normandie</h2>
            </div>
            
            <div className="space-y-6 text-[#666] font-light leading-relaxed text-lg mb-8">
              <p>
                Je vous reçois dans un espace chaleureux, sécurisant et empreint de douceur, spécialement pensé pour favoriser le lâcher-prise lors de vos séances d'hypnose.
              </p>
              <p>
                Mon cabinet est situé au <strong>5 route de Bourville, à Fontaine-le-Dun (76740)</strong>, au cœur de la Seine-Maritime.
              </p>
              <div className="bg-[#f9f8f6] p-6 rounded-2xl border border-[#e8e4dc]">
                <p className="text-sm font-medium text-[#333] mb-2 uppercase tracking-widest">Zone d'intervention</p>
                <p className="text-sm text-[#555]">
                  Idéalement situé, le cabinet est facilement accessible depuis les communes environnantes : <strong>Saint-Valery-en-Caux, Veules-les-Roses, Yvetot, Dieppe, Cany-Barville, Doudeville, Saint-Aubin-sur-Mer et Luneray</strong>.
                </p>
              </div>
              <p className="text-sm italic text-[#888]">
                * Note : Les séances de communication animale se font exclusivement à distance, tout comme les séances d'hypnose en visio si vous ne pouvez pas vous déplacer.
              </p>
            </div>
          </div>

          {/* Cabinet Images Grid */}
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-md mt-8">
              <Image 
                src="https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=600&q=80" 
                alt="Intérieur du cabinet d'hypnose" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-md">
              <Image 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" 
                alt="Paysage apaisant Normandie" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
