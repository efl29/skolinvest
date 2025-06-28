
import React from 'react';
import { 
  BarChart3, 
  Brain, 
  Hammer, 
  ShieldCheck, 
  TrendingUp, 
  Lightbulb
} from 'lucide-react';

const ProgramSection: React.FC = () => {
  const programItems = [
    {
      icon: <BarChart3 className="h-10 w-10" />,
      text: "Comprendre les bases de la Bourse : actions, ETF, obligations, fonds…"
    },
    {
      icon: <Brain className="h-10 w-10" />,
      text: "Sélectionner un actif avec une vision long-terme"
    },
    {
      icon: <Hammer className="h-10 w-10" />,
      text: "Outils pour analyser une action, éviter les pièges et construire un portefeuille solide"
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      text: "Comment limiter les risques, et protéger son capital"
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      text: "Comment construire une stratégie d'investissement alignée avec vos objectifs"
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      text: "Études de cas, analyses réelles, exercices guidés"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-brand-primary">
            Au Programme
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="text-brand-accent">
                  {item.icon}
                </div>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
