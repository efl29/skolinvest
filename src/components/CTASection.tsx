
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à développer vos compétences d'investisseur ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers d'apprenants qui ont déjà transformé leur avenir financier grâce à nos formations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-accent text-brand-primary hover:bg-brand-accent/90">
              Découvrir nos formations
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary">
              Me contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
