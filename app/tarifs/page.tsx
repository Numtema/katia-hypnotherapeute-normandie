import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Check, ShieldCheck, CreditCard } from 'lucide-react';
import MutuelleLogo from '@/components/MutuelleLogo';

const mutuelles = [
  { name: 'AG2R La Mondiale', domain: 'ag2rlamondiale.fr' },
  { name: 'APICIL', domain: 'apicil.com' },
  { name: 'SMATIS', domain: 'smatis.fr' },
  { name: 'Malakoff Humanis', domain: 'malakoffhumanis.com' },
  { name: 'Harmonie Mutuelle', domain: 'harmonie-mutuelle.fr' },
  { name: 'PRO BTP', domain: 'probtp.com' },
  { name: 'Allianz', domain: 'allianz.fr' },
  { name: 'Axa', domain: 'axa.fr' },
  { name: 'MACIF', domain: 'macif.fr' }
];

export default function Tarifs() {
  return (
    <main className="min-h-screen bg-[#f9f8f6]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-[#8ba394]"></div>
          <span className="uppercase tracking-[0.2em] text-sm text-[#8ba394]">Transparence</span>
          <div className="w-8 h-[1px] bg-[#8ba394]"></div>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl text-[#333] mb-6 font-light leading-tight">
          Tarifs & <span className="italic text-[#8ba394]">Remboursements</span>
        </h1>
        <p className="text-[#666] text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Découvrez mes tarifs détaillés et les possibilités de prise en charge par votre mutuelle santé pour les séances d'hypnose.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hypnose */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-[#e8e4dc] flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#8ba394] text-white text-xs uppercase tracking-widest px-4 py-1 rounded-bl-xl font-medium">
              Mutuelle possible
            </div>
            <h3 className="font-serif text-2xl text-[#333] mb-2">Hypnose Ericksonienne</h3>
            <p className="text-[#666] font-light text-sm mb-6">En cabinet ou à distance</p>
            <div className="mb-8">
              <span className="text-4xl font-serif text-[#8ba394]">60€</span>
              <span className="text-[#888] text-sm"> / 1h30</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-sm text-[#555] font-light"><Check className="w-4 h-4 text-[#8ba394] mt-0.5" /> Gestion du stress et anxiété</li>
              <li className="flex items-start gap-3 text-sm text-[#555] font-light"><Check className="w-4 h-4 text-[#8ba394] mt-0.5" /> Troubles du sommeil</li>
              <li className="flex items-start gap-3 text-sm text-[#555] font-light"><Check className="w-4 h-4 text-[#8ba394] mt-0.5" /> Phobies et blocages</li>
            </ul>
            <a href="#contact" className="w-full py-3 rounded-full border border-[#8ba394] text-[#8ba394] text-center uppercase tracking-widest text-xs font-medium hover:bg-[#8ba394] hover:text-white transition-all duration-300">Réserver</a>
          </div>

          {/* Communication Animale */}
          <div className="bg-[#b5a496] p-10 rounded-[2rem] shadow-lg text-white flex flex-col transform md:-translate-y-4">
            <h3 className="font-serif text-2xl mb-2">Communication Animale</h3>
            <p className="text-white/80 font-light text-sm mb-6">À distance uniquement</p>
            <div className="mb-8">
              <span className="text-4xl font-serif">80€</span>
              <span className="text-white/80 text-sm"> / consultation</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-sm font-light"><Check className="w-4 h-4 text-white mt-0.5" /> Compréhension des comportements</li>
              <li className="flex items-start gap-3 text-sm font-light"><Check className="w-4 h-4 text-white mt-0.5" /> Apaisement du stress animal</li>
              <li className="flex items-start gap-3 text-sm font-light"><Check className="w-4 h-4 text-white mt-0.5" /> Accompagnement fin de vie</li>
            </ul>
            <a href="#contact" className="w-full py-3 rounded-full bg-white text-[#b5a496] text-center uppercase tracking-widest text-xs font-medium hover:bg-[#f9f8f6] transition-all duration-300 shadow-sm">Réserver</a>
          </div>

          {/* Formation */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-[#e8e4dc] flex flex-col">
            <h3 className="font-serif text-2xl text-[#333] mb-2">Formation Initiation</h3>
            <p className="text-[#666] font-light text-sm mb-6">À mon domicile (min. 3 pers)</p>
            <div className="mb-8">
              <span className="text-4xl font-serif text-[#8ba394]">150€</span>
              <span className="text-[#888] text-sm"> / personne</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-sm text-[#555] font-light"><Check className="w-4 h-4 text-[#8ba394] mt-0.5" /> Journée complète</li>
              <li className="flex items-start gap-3 text-sm text-[#555] font-light"><Check className="w-4 h-4 text-[#8ba394] mt-0.5" /> Développement de l'intuition</li>
              <li className="flex items-start gap-3 text-sm text-[#555] font-light"><Check className="w-4 h-4 text-[#8ba394] mt-0.5" /> Exercices pratiques</li>
            </ul>
            <a href="#contact" className="w-full py-3 rounded-full border border-[#8ba394] text-[#8ba394] text-center uppercase tracking-widest text-xs font-medium hover:bg-[#8ba394] hover:text-white transition-all duration-300">Me contacter</a>
          </div>
        </div>
      </section>

      {/* Mutuelles Section (SEO Optimized) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <ShieldCheck className="w-8 h-8 text-[#8ba394]" />
            <h2 className="font-serif text-3xl text-[#333] font-light">Remboursement de l'hypnose par la mutuelle</h2>
          </div>
          
          <div className="prose prose-stone prose-p:text-[#666] prose-p:font-light prose-p:leading-relaxed max-w-none">
            <p>
              Les séances d'hypnose Ericksonienne ne sont pas prises en charge par la Sécurité Sociale (CPAM). Cependant, face aux résultats prouvés de cette thérapie brève sur le bien-être, <strong>de plus en plus de mutuelles santé remboursent l'hypnose</strong> dans le cadre de leurs forfaits "médecines douces" ou "médecines alternatives".
            </p>
            
            <h3 className="font-serif text-xl text-[#333] mt-8 mb-4">Quelles mutuelles remboursent l'hypnose ?</h3>
            <p>
              Bien qu'il n'existe pas de liste officielle universelle, de nombreux organismes proposent des forfaits annuels (ex: 3 à 5 séances par an) ou des forfaits en euros. Parmi les mutuelles connues pour proposer ces prises en charge, on retrouve souvent :
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
              {mutuelles.map((mutuelle, i) => (
                <div key={i} className="bg-[#f9f8f6] px-4 py-3 rounded-xl border border-[#e8e4dc] flex items-center justify-start gap-3 text-sm text-[#555] font-medium transition-all hover:border-[#8ba394] hover:shadow-sm">
                  <MutuelleLogo name={mutuelle.name} domain={mutuelle.domain} />
                  <span>{mutuelle.name}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm italic text-[#888]">
              * Cette liste est donnée à titre indicatif. Le remboursement dépend intégralement du contrat que vous avez souscrit. Je vous invite à contacter votre conseiller mutuelle pour vérifier vos garanties exactes concernant les "médecines douces".
            </p>

            <h3 className="font-serif text-xl text-[#333] mt-8 mb-4">Comment obtenir votre remboursement ?</h3>
            <p>
              C'est très simple : à l'issue de chaque séance d'hypnose, <strong>je vous fournis une facture acquittée</strong>. Il vous suffit ensuite de transmettre cette facture à votre mutuelle (souvent possible directement via leur application mobile ou espace client) pour déclencher votre remboursement.
            </p>
          </div>
        </div>
      </section>

      {/* Modalités de paiement */}
      <section className="py-20 bg-[#f9f8f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-[#e8e4dc] flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-[#8ba394]/10 rounded-full flex items-center justify-center shrink-0">
              <CreditCard className="w-8 h-8 text-[#8ba394]" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[#333] mb-3 font-light">Modalités de paiement</h3>
              <p className="text-[#666] font-light leading-relaxed">
                Pour valider votre rendez-vous, <strong>le paiement s'effectue à l'avance</strong> (par virement bancaire ou lien de paiement sécurisé). Cela garantit la réservation de votre créneau, que ce soit pour une séance en cabinet à Fontaine-le-Dun ou pour une consultation à distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
