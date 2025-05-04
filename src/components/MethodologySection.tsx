
import React from 'react';

const MethodologySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-primary">
            Des parcours de formation pour ceux qui veulent comprendre, décider en toutes confiance et prendre le contrôle de leur épargne.
          </h2>
          <div className="space-y-4 text-lg">
            <p>Pas de promesse de rendement fixe.</p>
            <p>Pas de suggestion d'investissement vers un actif.</p>
            <p>Pas de traits sur graphique pour annoncer une croissance ou une décroissance.</p>
            <p className="pt-4">
              Juste une méthode structurée, des outils concrets, et un accompagnement de qualité pour vous faire passer de l'info au résultat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
