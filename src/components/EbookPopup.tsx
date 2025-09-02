
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

const EbookPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let hasTriggered = false;

    const handleScroll = () => {
      if (hasTriggered) return;
      
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.bottom <= window.innerHeight) {
          setIsVisible(true);
          hasTriggered = true;
        }
      }
    };

    // Afficher après 30 secondes
    timeoutId = setTimeout(() => {
      if (!hasTriggered) {
        setIsVisible(true);
        hasTriggered = true;
      }
    }, 30000);

    // Écouter le scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-2 max-w-2xl w-full relative" style={{ height: '80vh' }}>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-1 shadow-md"
        >
          <X className="h-6 w-6" />
        </button>
        
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeYxoZOBdaIpzLWCNgbJ3j35vbNUqtpaSaoaKcI-4k5XQ4yBA/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="rounded-lg"
          title="Formulaire d'inscription"
        >
          Chargement…
        </iframe>
      </div>
    </div>
  );
};

export default EbookPopup;
