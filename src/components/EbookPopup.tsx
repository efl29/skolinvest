
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

const EbookPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let hasTriggered = false;

    const handleScroll = () => {
      if (hasTriggered) return;
      
      const formationsSection = document.getElementById('formations');
      if (formationsSection) {
        const rect = formationsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer le lien mailto
    const subject = encodeURIComponent('Demande d\'ebook gratuit');
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite télécharger l'ebook gratuit.\n\nMes informations :\n- Prénom : ${formData.firstName}\n- Nom : ${formData.lastName}\n- Email : ${formData.email}\n\nCordialement`
    );
    
    window.location.href = `mailto:contact@skolinvest.fr?subject=${subject}&body=${body}`;
    setIsVisible(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h3 className="text-2xl font-bold mb-4 text-brand-primary">
          Téléchargez l'ebook gratuitement
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              Prénom *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Nom *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Adresse email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
          
          <Button type="submit" className="w-full bg-brand-primary hover:bg-brand-primary/90">
            Télécharger l'ebook
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EbookPopup;
