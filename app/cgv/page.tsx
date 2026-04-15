import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CGV() {
  return (
    <main className="min-h-screen bg-[#f9f8f6] flex flex-col">
      <Navbar />
      <div className="flex-grow pt-40 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl md:text-5xl font-serif text-[#333] mb-12 font-semibold">Conditions Générales <span className="italic text-[#8ba394]">de Vente</span></h1>
        
        <div className="prose prose-stone prose-headings:font-serif prose-headings:font-bold prose-headings:text-[#333] prose-p:text-[#666] prose-p:font-light prose-a:text-[#8ba394] max-w-none bg-white p-8 md:p-12 rounded-[2rem] border border-[#e8e4dc] shadow-sm">
          <h2>1. Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Katia Burgun (ci-après "la Praticienne") et toute personne (ci-après "le Client") souhaitant bénéficier des services proposés sur le site.
          </p>

          <h2>2. Services et Tarifs</h2>
          <p>Les services proposés sont les suivants :</p>
          <ul>
            <li><strong>Hypnose Ericksonienne</strong> : 60€ la séance (environ 1h30).</li>
            <li><strong>Communication Intuitive Animale</strong> : 80€ la consultation.</li>
            <li><strong>Formation Communication Animale</strong> : 150€ par personne (journée complète, minimum 3 personnes).</li>
          </ul>
          <p>Les prix sont indiqués en euros (TTC). La Praticienne se réserve le droit de modifier ses prix à tout moment, mais les services seront facturés sur la base des tarifs en vigueur au moment de la réservation.</p>

          <h2>3. Modalités de paiement</h2>
          <ul>
            <li><strong>Hypnose et Formation</strong> : Le paiement s'effectue à l'avance, lors de la réservation ou avant le début de la séance.</li>
            <li><strong>Communication Animale</strong> : Une facture est envoyée après la réalisation de la consultation.</li>
          </ul>

          <h2>4. Annulation et Retard</h2>
          <p>
            Toute annulation de rendez-vous doit être signalée au moins 48 heures à l'avance. En cas d'annulation tardive ou de non-présentation, la séance pourra être due. En cas de retard du Client, la séance pourra être écourtée d'autant afin de ne pas pénaliser les rendez-vous suivants.
          </p>

          <h2>5. Engagements et Limites</h2>
          <p>
            La Praticienne s'engage à mettre en œuvre tous les moyens à sa disposition pour accompagner le Client. Il s'agit d'une obligation de moyens et non de résultats.
          </p>
          <p>
            <strong>Avertissement médical :</strong> Les séances d'hypnose et les communications animales ne sont pas des actes médicaux ou vétérinaires. Elles ne remplacent en aucun cas un traitement médical. Le Client s'engage à poursuivre ses traitements médicaux en cours.
          </p>

          <h2>6. Litiges</h2>
          <p>
            Les présentes CGV sont soumises à la loi française. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
