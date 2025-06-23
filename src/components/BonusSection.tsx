
import React from 'react';
import { Gift } from 'lucide-react';

const BonusSection: React.FC = () => {
  const bonuses = [
    "Une séance d'accompagnement offerte par une experte certifiée par l'AMF",
    "Checklist d'analyse d'entreprise",
    "Modèle Excel de suivi de portefeuille",
    "Accès à une communauté engagée"
  ];

  return (
    <section className="py-16 bg-brand-light">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-brand-primary">
            Bonus Gratuits
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            En vous inscrivant aujourd'hui, recevez ces ressources gratuites
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-md border border-brand-accent/30">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-brand-accent/20 rounded-full">
                <Gift className="h-12 w-12 text-brand-accent" />
              </div>
            </div>
            
            <ul className="space-y-4 text-left">
              {bonuses.map((bonus, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-brand-accent/20 text-brand-primary flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <span>{bonus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
