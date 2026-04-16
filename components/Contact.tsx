'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Video, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Contact() {
  const [selectedService, setSelectedService] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !selectedService || !message) {
      alert("Veuillez remplir tous les champs obligatoires (Nom, Prénom, Service, Message) avant d'envoyer.");
      return;
    }

    const serviceName = selectedService === 'animale' ? 'Communication Animale' :
                        selectedService === 'hypnose' ? 'Hypnose Ericksonienne' :
                        selectedService === 'formation' ? 'Formation' : 'Autre demande';

    const text = `Bonjour Katia,\n\nJe souhaite prendre rendez-vous.\n\n*Prénom:* ${firstName}\n*Nom:* ${lastName}\n*Email:* ${email}\n*Service:* ${serviceName}\n\n*Message:*\n${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/33677495288?text=${encodedText}`, '_blank');
  };

  const getMessagePlaceholder = () => {
    switch (selectedService) {
      case 'animale':
        return "Veuillez préciser le nom de l'animal, son âge, et l'objectif de la séance...";
      case 'hypnose':
        return "Veuillez décrire brièvement votre besoin ou l'objectif de la séance...";
      case 'formation':
        return "Veuillez préciser le nombre de participants et vos disponibilités...";
      default:
        return "Votre message...";
    }
  };

  const getMessageLabel = () => {
    switch (selectedService) {
      case 'animale':
        return "Votre Message (Nom de l'animal, âge, objectif...)";
      case 'hypnose':
        return "Votre Message (Besoin, objectif...)";
      case 'formation':
        return "Votre Message (Participants, dates...)";
      default:
        return "Votre Message";
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#f9f8f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side - Info & Image */}
          <div className="lg:w-2/5 relative bg-[#b5a496] text-white p-8 sm:p-12 flex flex-col justify-between overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&fit=crop&w=800&q=80"
                alt="Bureau chaleureux"
                fill
                className="object-cover opacity-20 mix-blend-overlay"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="relative z-10">
              <h3 className="font-serif text-2xl sm:text-3xl mb-2 font-light">Contactez-moi</h3>
              <p className="text-white/80 font-light mb-12">Je suis là pour répondre à vos questions et vous accompagner.</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-white/70 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="font-medium tracking-wide">Cabinet</p>
                    <p className="text-white/80 font-light mt-1">5 route de Bourville<br/>76740 Fontaine-le-Dun (Houdetot)<br/><span className="text-xs opacity-70 mt-1 block">Proche St-Valery-en-Caux, Veules-les-Roses, Yvetot, Dieppe</span></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Video className="w-6 h-6 text-white/70 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="font-medium tracking-wide">À distance</p>
                    <p className="text-white/80 font-light mt-1">Zoom, Google Meet, WhatsApp Vidéo</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-white/70 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="font-medium tracking-wide">Téléphone</p>
                    <p className="text-white/80 font-light mt-1">06 77 49 52 88</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-white/70 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="font-medium tracking-wide">Horaires</p>
                    <p className="text-white/80 font-light mt-1">Sur rendez-vous</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-2xl z-0"></div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-3/5 p-8 sm:p-12 lg:p-20">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#333] mb-6 sm:mb-8 font-light">Envoyer un message</h3>
            
            <form className="space-y-8" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="firstName" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-[#ddd] py-3 focus:border-[#8ba394] outline-none transition-colors font-light text-[#333] peer placeholder-transparent" 
                    placeholder="Prénom" 
                  />
                  <label htmlFor="firstName" className="absolute left-0 top-3 text-[#888] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#8ba394] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs uppercase tracking-widest">Prénom *</label>
                </div>
                <div className="relative group">
                  <input 
                    type="text" 
                    id="lastName" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-[#ddd] py-3 focus:border-[#8ba394] outline-none transition-colors font-light text-[#333] peer placeholder-transparent" 
                    placeholder="Nom" 
                  />
                  <label htmlFor="lastName" className="absolute left-0 top-3 text-[#888] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#8ba394] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs uppercase tracking-widest">Nom *</label>
                </div>
              </div>
              
              <div className="relative group">
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-[#ddd] py-3 focus:border-[#8ba394] outline-none transition-colors font-light text-[#333] peer placeholder-transparent" 
                  placeholder="Email" 
                />
                <label htmlFor="email" className="absolute left-0 top-3 text-[#888] text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#8ba394] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs uppercase tracking-widest">Adresse Email</label>
              </div>

              <div className="relative group">
                <select 
                  id="service" 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  className="w-full bg-transparent border-b border-[#ddd] py-3 focus:border-[#8ba394] outline-none transition-colors font-light text-[#333] appearance-none cursor-pointer"
                >
                  <option value="" disabled>Sélectionnez un service...</option>
                  <option value="animale">Communication Animale</option>
                  <option value="hypnose">Hypnose Ericksonienne</option>
                  <option value="formation">Formation Communication Animale</option>
                  <option value="autre">Autre demande</option>
                </select>
                <ChevronDown className="absolute right-0 top-4 w-5 h-5 text-[#888] pointer-events-none" />
                <label htmlFor="service" className="absolute left-0 -top-4 text-[#8ba394] text-xs uppercase tracking-widest">Service souhaité</label>
              </div>

              <div className="relative group pt-4">
                <textarea 
                  id="message" 
                  rows={4} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-transparent border-b border-[#ddd] py-3 focus:border-[#8ba394] outline-none transition-colors font-light text-[#333] peer placeholder-transparent resize-none" 
                  placeholder={getMessagePlaceholder()}
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-7 text-[#888] text-sm transition-all peer-focus:-top-0 peer-focus:text-xs peer-focus:text-[#8ba394] peer-not-placeholder-shown:-top-0 peer-not-placeholder-shown:text-xs uppercase tracking-widest">
                  {getMessageLabel()}
                </label>
                <p className="text-xs text-[#888] mt-2 italic font-light">
                  {selectedService === 'animale' && "N'oubliez pas de préparer une photo récente de votre animal."}
                  {selectedService === 'hypnose' && "Les séances peuvent se faire en cabinet ou en visio."}
                </p>
              </div>
              
              <div className="pt-4">
                <button type="submit" className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-[#128C7E] transition-all duration-300 shadow-sm hover:shadow-md w-full md:w-auto">
                  <WhatsAppIcon className="w-5 h-5" />
                  Envoyer sur WhatsApp
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
