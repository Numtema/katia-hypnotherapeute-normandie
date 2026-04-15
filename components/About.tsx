'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f9f8f6] rounded-l-full opacity-50 -z-10 transform translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="relative h-[600px] md:h-[700px] w-full flex items-center justify-center"
          >
            {/* Main Arch Image */}
            <div className="relative w-[80%] h-[90%] ml-auto rounded-t-full overflow-hidden shadow-2xl">
              <Image
                src="https://scontent.fcdg3-1.fna.fbcdn.net/v/t39.30808-6/280736276_115864707788474_7526965914387568168_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=jUP3--iFNh4Q7kNvwHpwvJ2&_nc_oc=AdpIWNW1vwMQyhxm3byXUJ_FdegQrIr3jgM5jtGFeANaN5mN0mqxh18LK9gNklOrbnIwC6sX5K6RQNsqqhqdKk1w&_nc_zt=23&_nc_ht=scontent.fcdg3-1.fna&_nc_gid=gsjpyQADe76772P9QOpNkA&_nc_ss=7a3a8&oh=00_Af0oF_XrNSnxlEw3i4LkXUMGpZ8Zqv92LFO0l91cMzpdLg&oe=69E5A58C"
                alt="Portrait Katia Burgun"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Overlapping Circle Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-10 left-0 w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-white overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400&q=80"
                alt="Détail animal"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:pl-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-[#8ba394]"></div>
              <span className="uppercase tracking-[0.2em] text-sm text-[#8ba394]">À propos</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-[#333] mb-8 font-light leading-tight">
              L'hypnose et la communication animale <br/><span className="italic text-[#8ba394]">fonctionnent-elles vraiment ?</span>
            </h2>
            
            <div className="space-y-6 text-[#666] leading-loose font-light text-lg">
              <p className="font-medium text-[#333]">
                Oui. L'hypnose ericksonienne vous aide à réduire le stress, améliorer votre sommeil et débloquer des comportements. La communication animale me permet de mieux comprendre les émotions et les besoins de votre animal.
              </p>
              <p>
                Je suis Katia Burgun, hypnothérapeute et communicatrice animalière. Je vous accueille à mon cabinet de Fontaine-le-Dun ou à distance pour vous accompagner vers un mieux-être profond, pour vous comme pour votre compagnon.
              </p>
              <p>
                <strong>Pourquoi me consulter ?</strong> Je vous propose une double compétence rare (humain et animal) avec une approche douce et non intrusive. Mes séances sont entièrement personnalisées, dans un cadre bienveillant et sécurisant.
              </p>
            </div>
            
            <div className="mt-12 pt-10 border-t border-[#f0f0f0] flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-serif text-xl text-[#333]">Katia Burgun</span>
                <span className="text-xs uppercase tracking-widest text-[#888] mt-1">Thérapeute & Communicatrice</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
