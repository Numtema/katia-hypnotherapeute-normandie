import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', weight: ['300', '400', '500'] });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', style: ['normal', 'italic'] });

export const metadata: Metadata = {
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
  return (
    <html lang="fr" className="scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} ${playfair.variable} font-sans bg-[#f9f8f6] text-[#4a4a4a] antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
