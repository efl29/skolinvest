
import React from 'react';
import { Star } from 'lucide-react';

const TrustpilotNote: React.FC = () => {
  return (
    <>
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="flex justify-center">
            <a 
              href="https://fr.trustpilot.com/review/skolinvest.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <img 
                src="https://cdn.trustpilot.com/brand-assets/1.1.0/logo-black.svg"
                alt="Trustpilot"
                className="h-8"
              />
              <div className="flex">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-accent text-brand-accent" />
                ))}
              </div>
            </a>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-4 text-lg">
              <p>Pas de promesse de gains faciles.</p>
              <p>Pas de traits sur graphique pour annoncer une croissance ou une décroissance.</p>
              <p className="pt-4">
                Juste une méthode structurée, des outils concrets, et un accompagnement de qualité pour aller plus loin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustpilotNote;
