
import React from 'react';

const WhySkolinvestSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            La formation BOURSE Skolinvest, c'est quoi ?
          </h2>
          <p className="text-xl mb-8">
            Une formation pas-à-pas, pensée pour :
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-lg">
                Les curieux sérieux, qui veulent comprendre avant d'agir
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-lg">
                Ceux qui veulent gagner du temps, éviter les erreurs de débutant et progresser avec méthode
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-lg">
                Ceux qui veulent se bâtir une vraie stratégie d'investissement à long terme, et pas juste "tenter leur chance" sur une appli flashy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySkolinvestSection;
