
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight">
              Apprenez à investir par vous-même
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Des formations en ligne pour maîtriser les techniques d'investissement et gérer votre portefeuille en toute autonomie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg bg-brand-accent hover:bg-brand-accent/90 text-brand-primary">
                Découvrir nos formations
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-white text-brand-primary bg-white hover:bg-white hover:text-brand-secondary">
                En savoir plus
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
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
