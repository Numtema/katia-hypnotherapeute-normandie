import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', weight: ['300', '400', '500'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', style: ['normal', 'italic'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.katiaburgun.fr'),
  title: 'Katia Burgun | Hypnose Ericksonienne & Communication Animale',
  description: 'Katia Burgun vous accompagne vers le mieux-être grâce à l\'hypnose Ericksonienne et la communication intuitive animale. Consultations en cabinet à Fontaine-le-Dun (76) et à distance.',
  keywords: ['hypnose normandie', 'communication animale', 'hypnothérapeute fontaine le dun', 'bien-être animal', 'séance hypnose stress', 'comprendre son animal', 'katia burgun', 'hypnose dieppe', 'hypnose yvetot', 'communication animale saint valery en caux'],
  authors: [{ name: 'Katia Burgun' }],
  openGraph: {
    title: 'Katia Burgun | Hypnose & Communication Animale',
    description: 'Accompagnement vers le mieux-être pour vous et vos animaux. Consultations en cabinet et à distance.',
    url: 'https://www.katiaburgun.fr',
    siteName: 'Katia Burgun',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Katia Burgun - Hypnose & Communication Animale",
    "image": "https://scontent.fcdg3-1.fna.fbcdn.net/v/t39.30808-6/280736276_115864707788474_7526965914387568168_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=jUP3--iFNh4Q7kNvwHpwvJ2&_nc_oc=AdpIWNW1vwMQyhxm3byXUJ_FdegQrIr3jgM5jtGFeANaN5mN0mqxh18LK9gNklOrbnIwC6sX5K6RQNsqqhqdKk1w&_nc_zt=23&_nc_ht=scontent.fcdg3-1.fna&_nc_gid=gsjpyQADe76772P9QOpNkA&_nc_ss=7a3a8&oh=00_Af0oF_XrNSnxlEw3i4LkXUMGpZ8Zqv92LFO0l91cMzpdLg&oe=69E5A58C",
    "description": "Katia Burgun vous accompagne vers le mieux-être grâce à l'hypnose Ericksonienne et la communication intuitive animale. Consultations en cabinet à Fontaine-le-Dun et à distance.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5 route de Bourville",
      "addressLocality": "Fontaine-le-Dun",
      "postalCode": "76740",
      "addressCountry": "FR"
    },
    "telephone": "+33677495288",
    "url": "https://www.katiaburgun.fr",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Séance d'Hypnose Ericksonienne",
            "description": "Séance d'hypnose pour la gestion du stress, les troubles du sommeil et le dépassement de blocages."
          },
          "price": "60.00",
          "priceCurrency": "EUR",
          "url": "https://www.katiaburgun.fr/tarifs"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultation en Communication Animale",
            "description": "Connexion intuitive pour comprendre les émotions et les besoins profonds de votre animal."
          },
          "price": "80.00",
          "priceCurrency": "EUR",
          "url": "https://www.katiaburgun.fr/tarifs"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Formation Initiation à la Communication Animale",
            "description": "Journée complète d'initiation pour apprendre à communiquer intuitivement avec les animaux."
          },
          "price": "150.00",
          "priceCurrency": "EUR",
          "url": "https://www.katiaburgun.fr/formation"
        }
      ]
    }
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${playfair.variable} font-sans bg-[#f9f8f6] text-[#4a4a4a] antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
