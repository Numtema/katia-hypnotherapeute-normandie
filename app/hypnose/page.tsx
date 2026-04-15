import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function Hypnose() {
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
              Hypnose <br/><span className="italic text-[#8ba394]">Ericksonienne</span>
            </h1>
            <p className="text-[#666] text-lg font-light leading-relaxed mb-8">
              Je vous accompagne vers l'apaisement et la clarté grâce à une méthode thérapeutique brève qui active vos propres ressources inconscientes.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-serif text-[#8ba394]">60€</span>
              <span className="text-[#888] text-sm uppercase tracking-widest">/ Séance (1h30)</span>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80" 
                alt="Hypnose Ericksonienne" 
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
          <h2 className="font-serif text-3xl text-[#333] mb-8 font-light">Qu'est-ce que l'hypnose Ericksonienne ?</h2>
          <div className="space-y-6 text-[#666] font-light leading-relaxed text-lg mb-12">
            <p>
              L'hypnose Ericksonienne est une thérapie brève, douce et respectueuse. Contrairement à l'hypnose de spectacle, vous gardez le contrôle à tout moment. L'état hypnotique est un état naturel (celui que vous expérimentez quand vous êtes "dans la lune") qui permet d'accéder à votre inconscient pour y puiser les ressources nécessaires à votre changement.
            </p>
            <p>
              Je vous accompagne avec bienveillance pour :
            </p>
            <ul className="space-y-4 mt-6">
              {[
                "Réduire significativement votre charge mentale, votre stress et votre anxiété au quotidien.",
                "Retrouver un sommeil profond, réparateur et des nuits paisibles.",
                "Renforcer durablement votre confiance en vous et votre estime personnelle.",
                "Vous libérer en douceur de vos phobies, de vos peurs irrationnelles et de vos blocages."
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
              Les séances peuvent se faire <strong>en cabinet</strong> à Fontaine-le-Dun ou <strong>à distance</strong> (via Zoom, Google Meet ou WhatsApp Vidéo). L'efficacité est exactement la même.
            </p>
            <p className="text-[#666] font-light leading-relaxed mb-4">
              Pour une séance optimale, vous devez impérativement être sobre et vous installer dans un environnement calme où vous ne serez pas dérangé(e).
            </p>
            <p className="text-sm text-[#8ba394] font-medium mt-6">
              Bon à savoir : Une facture vous sera systématiquement délivrée à l'issue de la séance pour faire valoir vos droits auprès de votre mutuelle (de nombreuses complémentaires remboursent l'hypnose).
            </p>
            <p className="text-sm text-[#d97777] italic mt-4">
              Important : L'hypnose est une approche complémentaire. Elle ne remplace en aucun cas un avis ou un traitement médical.
            </p>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
