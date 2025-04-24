
import React from 'react';
import { Button } from "@/components/ui/button";

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Formateur Skolinvest" 
              className="rounded-xl shadow-lg object-cover h-96 w-full"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary">
              Qui suis-je ?
            </h2>
            
            <p className="text-lg mb-4">
              Je suis Alexandre, investisseur depuis plus de 10 ans et fondateur de Skolinvest.
            </p>
            
            <p className="text-lg mb-4">
              Après avoir commencé ma carrière dans la finance et travaillé pour plusieurs institutions financières, j'ai décidé de créer Skolinvest pour partager mon expertise et aider les particuliers à prendre en main leur avenir financier.
            </p>
            
            <p className="text-lg mb-6">
              Ma mission est simple : démocratiser l'accès à un savoir financier de qualité, sans jargon inutile, avec des méthodes éprouvées que j'utilise moi-même depuis des années.
            </p>
            
            <Button className="bg-brand-primary hover:bg-brand-primary/90">
              En savoir plus sur mon parcours
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
