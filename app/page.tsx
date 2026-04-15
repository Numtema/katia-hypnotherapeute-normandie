import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Quote from '@/components/Quote';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import CitiesBanner from '@/components/CitiesBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f8f6]">
      <Navbar />
      <Hero />
      <Quote />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
      <CitiesBanner />
      <Footer />
    </main>
  );
}
