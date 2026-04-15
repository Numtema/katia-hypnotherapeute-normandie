'use client';
import { useState } from 'react';
import { ShieldPlus } from 'lucide-react';

export default function MutuelleLogo({ name, domain }: { name: string, domain: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return <ShieldPlus className="w-6 h-6 text-[#8ba394] shrink-0" />;
  }

  return (
    <img 
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`} 
      alt={`Logo ${name}`} 
      className="w-6 h-6 object-contain shrink-0 rounded-sm"
      onError={() => setError(true)}
    />
  );
}
