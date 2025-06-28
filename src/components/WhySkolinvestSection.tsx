
import React from 'react';

const WhySkolinvestSection: React.FC = () => {
  const reasons = [
    "Vous en avez marre de subir les décisions de votre banquier ?",
    "Vous voulez prendre le contrôle de votre épargne, mais vous ne savez pas par où commencer ?",
    "Vous avez peur de faire n'importe quoi et de perdre votre argent ?",
    "Vous voulez investir, mais vous vous sentez perdu dans le jargon financier ?"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-primary">
            Les parcours de formation Skolinvest, c'est fait pour qui ?
          </h2>
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <p key={index} className="text-lg text-gray-700">
                {reason}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySkolinvestSection;
