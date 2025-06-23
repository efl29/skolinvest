
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight">
              <div>La performance ne s'improvise pas,</div>
              <div>apprenez à la créer</div>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Naviguer sur les marchés financiers en maitrisant les risques. Pas de promesse de gains faciles.
              <br /><br />
              Pas de traits sur graphique pour annoncer une croissance ou une décroissance.
              <br /><br />
              Juste une méthode structurée, des outils concrets, et un accompagnement de qualité pour aller plus loin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg bg-brand-accent hover:bg-brand-accent/90 text-brand-primary">
                Découvrir nos formations
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Graphique boursier" 
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
