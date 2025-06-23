
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vous voulez arrêter de subir et commencer à construire ?
          </h2>
          <p className="text-xl mb-4">
            Prenez une décision que votre futur vous remerciera d'avoir prise.
          </p>
          <p className="text-xl mb-8">
            🎓 Rejoignez un des parcours de formation Bourse de Skolinvest et reprenez le contrôle sur vos finances.
          </p>
          <Button size="lg" className="bg-brand-accent text-brand-primary hover:bg-brand-accent/90" asChild>
            <Link to="/contact">
              Réserver un appel
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
