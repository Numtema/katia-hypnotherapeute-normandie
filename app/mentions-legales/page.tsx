import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#f9f8f6] flex flex-col">
      <Navbar />
      <div className="flex-grow pt-40 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl md:text-5xl font-serif text-[#333] mb-12 font-semibold">Mentions <span className="italic text-[#8ba394]">Légales</span></h1>
        
        <div className="prose prose-stone prose-headings:font-serif prose-headings:font-bold prose-headings:text-[#333] prose-p:text-[#666] prose-p:font-light prose-a:text-[#8ba394] max-w-none bg-white p-8 md:p-12 rounded-[2rem] border border-[#e8e4dc] shadow-sm">
          <h2>1. Éditeur du site</h2>
          <p>
            Le présent site est édité par :<br />
            <strong>Katia Burgun</strong><br />
            Adresse : 5 route de Bourville, 76740 Fontaine-le-Dun, France<br />
            Téléphone : 06 77 49 52 88
          </p>

          <h2>2. Création et développement</h2>
          <p>
            Le site a été conçu et réalisé par :<br />
            <strong>Nümtema AGENCY</strong><br />
            Site web : <a href="https://numtemaagency.com/" target="_blank" rel="noopener noreferrer">numtemaagency.com</a>
          </p>

          <h2>3. Hébergement</h2>
          <p>
            Ce site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            340 S Lemon Ave #4133 Walnut, CA 91789, USA<br />
            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
          </p>

          <h2>4. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse de l'éditeur.
          </p>

          <h2>5. Avertissement</h2>
          <p>
            L'hypnose Ericksonienne et la communication animale sont des pratiques d'accompagnement au mieux-être. Elles ne se substituent en aucun cas à un avis, un diagnostic ou un traitement médical ou vétérinaire professionnel.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
