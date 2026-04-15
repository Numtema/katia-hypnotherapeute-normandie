import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-[#f9f8f6] flex flex-col">
      <Navbar />
      <div className="flex-grow pt-40 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl md:text-5xl font-serif text-[#333] mb-12 font-semibold">Politique de <span className="italic text-[#8ba394]">Confidentialité</span></h1>
        
        <div className="prose prose-stone prose-headings:font-serif prose-headings:font-bold prose-headings:text-[#333] prose-p:text-[#666] prose-p:font-light prose-a:text-[#8ba394] max-w-none bg-white p-8 md:p-12 rounded-[2rem] border border-[#e8e4dc] shadow-sm">
          <h2>1. Collecte des données personnelles</h2>
          <p>
            Dans le cadre de l'utilisation de notre site, nous pouvons être amenés à collecter les données personnelles suivantes via notre formulaire de contact :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Informations relatives à votre animal (dans le cadre d'une communication animale)</li>
          </ul>

          <h2>2. Utilisation des données</h2>
          <p>
            Les données collectées sont utilisées exclusivement pour :
          </p>
          <ul>
            <li>Répondre à vos demandes de contact et de prise de rendez-vous.</li>
            <li>Assurer le suivi des séances d'hypnose ou de communication animale.</li>
            <li>Vous envoyer les factures correspondantes.</li>
          </ul>

          <h2>3. Confidentialité et partage</h2>
          <p>
            Vos données personnelles sont strictement confidentielles. Elles ne sont en aucun cas vendues, échangées, ou transférées à des tiers sans votre consentement, à l'exception des prestataires techniques (comme notre hébergeur Vercel) qui nous aident à exploiter le site, à condition qu'ils s'engagent à garder ces informations confidentielles.
          </p>

          <h2>4. Sécurité</h2>
          <p>
            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Les échanges sur le site sont cryptés (HTTPS).
          </p>

          <h2>5. Vos droits (RGPD)</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition aux données personnelles vous concernant. Pour exercer ce droit, vous pouvez nous contacter directement par téléphone au 06 77 49 52 88 ou par courrier à l'adresse du cabinet.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
