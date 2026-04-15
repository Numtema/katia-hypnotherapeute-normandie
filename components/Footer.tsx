'use client';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-10 border-t border-[#eee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Bio */}
          <div className="col-span-1 md:col-span-2">
            <p className="font-serif text-3xl text-[#333] mb-4 italic">Katia Burgun</p>
            <p className="text-[#666] font-light leading-relaxed max-w-sm mb-8">
              KB Hypnose Ericksonienne & Mieux-être<br/>
              Communication intuitive animaux<br/>
              <span className="text-sm text-[#888] mt-2 block">Consultations en cabinet (76740 Fontaine-le-Dun, proche St-Valery-en-Caux, Dieppe) et à distance.</span>
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full bg-[#f9f8f6] flex items-center justify-center text-[#888] hover:bg-[#8ba394] hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#f9f8f6] flex items-center justify-center text-[#888] hover:bg-[#8ba394] hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#f9f8f6] flex items-center justify-center text-[#888] hover:bg-[#8ba394] hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#333] font-medium mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="/#home" className="text-[#666] hover:text-[#8ba394] transition-colors font-light text-sm">Accueil</a></li>
              <li><a href="/#about" className="text-[#666] hover:text-[#8ba394] transition-colors font-light text-sm">À propos</a></li>
              <li><a href="/#services" className="text-[#666] hover:text-[#8ba394] transition-colors font-light text-sm">Services & Tarifs</a></li>
              <li><a href="/#process" className="text-[#666] hover:text-[#8ba394] transition-colors font-light text-sm">Déroulement</a></li>
              <li><a href="/#faq" className="text-[#666] hover:text-[#8ba394] transition-colors font-light text-sm">FAQ</a></li>
              <li><a href="/#contact" className="text-[#666] hover:text-[#8ba394] transition-colors font-light text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#333] font-medium mb-6">Légal</h4>
            <ul className="space-y-4">
              <li><a href="/mentions-legales" className="text-[#666] hover:text-[#8ba394] transition-colors font-light text-sm">Mentions légales</a></li>
              <li><a href="/politique-confidentialite" className="text-[#666] hover:text-[#8ba394] transition-colors font-light text-sm">Politique de confidentialité</a></li>
              <li><a href="/cgv" className="text-[#666] hover:text-[#8ba394] transition-colors font-light text-sm">Conditions générales (CGV)</a></li>
              <li><a href="/cookies" className="text-[#666] hover:text-[#8ba394] transition-colors font-light text-sm">Gestion des cookies</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="py-8 border-t border-[#f0f0f0]">
          <p className="text-xs text-[#888] font-light leading-relaxed text-center max-w-4xl mx-auto">
            <strong className="font-medium">Disclaimer :</strong> L'hypnose et la communication animale sont des approches complémentaires visant le mieux-être. Elles ne se substituent en aucun cas à un avis, un diagnostic ou un traitement médical ou vétérinaire professionnel. Les consultations sont données à titre d'accompagnement.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#f0f0f0] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#888] font-light">© {new Date().getFullYear()} Katia Burgun. Tous droits réservés.</p>
          <p className="text-sm text-[#888] font-light">Fait avec douceur</p>
        </div>
      </div>
    </footer>
  );
}
