import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Cookies() {
  return (
    <main className="min-h-screen bg-[#f9f8f6] flex flex-col">
      <Navbar />
      <div className="flex-grow pt-40 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl md:text-5xl font-serif text-[#333] mb-12 font-semibold">Gestion des <span className="italic text-[#8ba394]">Cookies</span></h1>
        
        <div className="prose prose-stone prose-headings:font-serif prose-headings:font-bold prose-headings:text-[#333] prose-p:text-[#666] prose-p:font-light prose-a:text-[#8ba394] max-w-none bg-white p-8 md:p-12 rounded-[2rem] border border-[#e8e4dc] shadow-sm">
          <h2>1. Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web. Il permet de conserver des données utilisateur afin de faciliter la navigation et de permettre certaines fonctionnalités.
          </p>

          <h2>2. Les cookies utilisés sur ce site</h2>
          <p>Notre site utilise principalement des cookies strictement nécessaires à son bon fonctionnement :</p>
          <ul>
            <li><strong>Cookies techniques et de session</strong> : Ils sont indispensables pour vous permettre de naviguer sur le site et d'utiliser ses fonctionnalités de base. Ils ne requièrent pas votre consentement préalable.</li>
            <li><strong>Cookies de performance (Hébergement)</strong> : Notre hébergeur (Vercel) peut déposer des cookies techniques anonymes pour assurer la sécurité, la répartition de charge et la performance du réseau.</li>
          </ul>

          <h2>3. Cookies tiers</h2>
          <p>
            Nous n'utilisons pas de cookies publicitaires ou de traçage intrusifs. Si des contenus intégrés (comme des vidéos ou des cartes) venaient à être ajoutés, ces services tiers pourraient déposer leurs propres cookies.
          </p>

          <h2>4. Comment gérer vos cookies ?</h2>
          <p>
            Vous pouvez à tout moment configurer votre navigateur pour bloquer ou supprimer les cookies. Voici comment procéder selon votre navigateur :
          </p>
          <ul>
            <li><strong>Chrome</strong> : Menu &gt; Paramètres &gt; Confidentialité et sécurité &gt; Cookies et autres données des sites.</li>
            <li><strong>Firefox</strong> : Menu &gt; Options &gt; Vie privée et sécurité &gt; Cookies et données de sites.</li>
            <li><strong>Safari</strong> : Préférences &gt; Confidentialité &gt; Bloquer tous les cookies.</li>
            <li><strong>Edge</strong> : Menu &gt; Paramètres &gt; Cookies et autorisations de site.</li>
          </ul>
          <p>
            Veuillez noter que le blocage des cookies techniques peut altérer votre expérience de navigation sur le site.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
