
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
              <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-brand-primary">
                En savoir plus
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl transform rotate-3 animate-pulse">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                <div className="w-full h-full bg-brand-accent/30 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-6 bg-white/30 rounded w-3/4"></div>
                <div className="h-4 bg-white/20 rounded w-1/2"></div>
              </div>
            </div>
            <div className="absolute top-12 -right-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl transform -rotate-6">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                <div className="w-full h-full bg-brand-accent/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="h-6 bg-white/30 rounded w-3/4"></div>
                <div className="h-4 bg-white/20 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
