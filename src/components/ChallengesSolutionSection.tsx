
import React from 'react';

const ChallengesSolutionSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Colonne des challenges */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-dark">
              Vous avez envie de reprendre la main sur votre avenir financier ?
            </h2>
            <p className="text-lg font-semibold mb-4 text-brand-primary">
              Mais aujourd'hui :
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-brand-primary">•</div>
                <p>Vous êtes submergé d'infos contradictoires sur les réseaux</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-brand-primary">•</div>
                <p>Vous avez peut-être déjà investi… à l'instinct, en suivant un influenceur ou un "conseil avisé", et ça ne s'est pas bien passé</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-brand-primary">•</div>
                <p>Vous aimeriez passer à l'action, mais vous doutez de vos choix et vous ne savez pas par où commencer</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-brand-primary">•</div>
                <p>Et surtout, vous voulez enfin arrêter de tourner en rond et construire quelque chose de solide. De concret. De durable.</p>
              </li>
            </ul>
          </div>

          {/* Colonne des solutions */}
          <div className="bg-brand-light p-8 rounded-xl shadow-sm border border-brand-accent/30">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-brand-dark">
              Ce que vous voulez vraiment ?
            </h2>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-brand-accent text-xl">✔️</div>
                <p>Mieux comprendre les marchés financiers</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-brand-accent text-xl">✔️</div>
                <p>Savoir où placer votre argent intelligemment</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-brand-accent text-xl">✔️</div>
                <p>Construire une stratégie sur-mesure pour vous et vos projets</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-brand-accent text-xl">✔️</div>
                <p>Gagner en autonomie, et ne plus dépendre des banquiers ou de promesses floues</p>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 text-brand-accent text-xl">✔️</div>
                <p>Et surtout, reprendre confiance en vous et en vos décisions</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSolutionSection;
