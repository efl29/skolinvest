
import React from 'react';

const WhySkolinvestSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            La formation BOURSE Skolinvest, c'est quoi ?
          </h2>
          <p className="text-xl mb-8 text-center">
            Une formation pas-à-pas, pensée pour :
          </p>
          <ul className="space-y-6 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <li className="flex items-start gap-3">
              <div className="bg-white/20 rounded-full p-1 flex items-center justify-center">
                <div className="text-brand-accent text-xl">•</div>
              </div>
              <p className="text-lg">Les curieux sérieux, qui veulent comprendre avant d'agir</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-white/20 rounded-full p-1 flex items-center justify-center">
                <div className="text-brand-accent text-xl">•</div>
              </div>
              <p className="text-lg">Ceux qui veulent gagner du temps, éviter les erreurs de débutant et progresser avec méthode</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-white/20 rounded-full p-1 flex items-center justify-center">
                <div className="text-brand-accent text-xl">•</div>
              </div>
              <p className="text-lg">Ceux qui veulent se bâtir une vraie stratégie d'investissement à long terme, et pas juste "tenter leur chance" sur une appli flashy</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-white/20 rounded-full p-1 flex items-center justify-center">
                <div className="text-brand-accent text-xl">•</div>
              </div>
              <p className="text-lg">Ceux qui veulent se sentir accompagner, cadrer, et surtout : mettre en place leur plan maintenant, sans se disperser</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhySkolinvestSection;
