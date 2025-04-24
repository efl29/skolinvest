
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const products = [
    {
      title: "Débutant",
      price: "297€",
      description: "Formation complète en ligne pour démarrer en bourse",
      features: [
        "Accès à vie à la formation",
        "Modules vidéo étape par étape",
        "Quiz et exercices pratiques",
        "Mises à jour gratuites",
        "Forum d'entraide",
      ],
      buttonText: "Je commence maintenant",
      highlighted: false,
    },
    {
      title: "Expert",
      price: "497€",
      description: "Formation complète + Analyses avancées",
      features: [
        "Tout ce qui est inclus dans Débutant",
        "Modules avancés (analyse fondamentale/technique)",
        "Études de cas d'entreprises réelles",
        "Templates d'analyse financière",
        "Sessions de questions/réponses mensuelles",
      ],
      buttonText: "Je deviens expert",
      highlighted: true,
    },
    {
      title: "Accompagnement",
      price: "997€",
      description: "Formation complète + Coaching personnalisé",
      features: [
        "Tout ce qui est inclus dans Expert",
        "3 sessions de coaching individuel",
        "Revue de votre portefeuille actuel",
        "Plan d'investissement sur-mesure",
        "Support prioritaire pendant 6 mois",
      ],
      buttonText: "Je veux être accompagné",
      highlighted: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="formations">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-brand-primary">
          Nos Formations
        </h2>
        
        <div className="text-center mb-10 space-y-2">
          <p className="text-xl text-gray-700">
            Plusieurs formules selon votre niveau & vos besoins :
          </p>
          <p className="text-lg text-gray-600">
            → De 647€ à 3 600€, selon l'accompagnement choisi
          </p>
          <p className="text-lg text-gray-600">
            → Paiement en plusieurs fois possible
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`rounded-xl shadow-lg overflow-hidden flex flex-col ${
                product.highlighted 
                  ? 'border-2 border-brand-accent scale-105 relative bg-white' 
                  : 'border border-gray-200 bg-white'
              }`}
            >
              {product.highlighted && (
                <div className="absolute top-0 right-0 bg-brand-accent text-white px-4 py-1 text-sm font-bold uppercase rounded-bl-lg">
                  Populaire
                </div>
              )}
              
              <div className={`p-6 ${
                product.highlighted ? 'bg-brand-light' : 'bg-gray-50'
              }`}>
                <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl font-bold">{product.price}</span>
                </div>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-6 pb-6">
                <Button 
                  className={`w-full ${
                    product.highlighted 
                      ? 'bg-brand-accent hover:bg-brand-accent/90 text-white' 
                      : 'bg-brand-primary hover:bg-brand-primary/90'
                  }`}
                >
                  {product.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="bg-brand-light p-6 rounded-xl border border-brand-accent/20">
            <p className="text-lg">
              Et si vous hésitez, vous pouvez même demander un extrait de la formation pour vérifier qu'elle est faite pour vous. Remplacer par satisfait ou rembourser 15 jours.
            </p>
            <div className="mt-4">
              <img 
                src="https://cdn.trustpilot.com/brand-assets/1.1.0/logo-black.svg"
                alt="Satisfaction garantie"
                className="h-12 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
