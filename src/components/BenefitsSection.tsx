
import React from 'react';
import { Check } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    "Vous ne serez plus seul face à vos décisions d'investissement",
    "Vous aurez une vision claire de votre stratégie et de vos prochaines actions",
    "Vous pourrez argumenter avec confiance, que ce soit face à votre entourage ou votre banquier",
    "Vous gagnerez en autonomie, en sérénité, et en liberté"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-brand-primary">
            Ce que ça va changer pour vous :
          </h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Check className="h-6 w-6 text-brand-accent flex-shrink-0 mt-0.5" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
