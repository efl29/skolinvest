
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsSection: React.FC = () => {
  const products = [
    {
      title: "Parcours Gestion Passive : Débuter en Bourse",
      price: "647€",
      description: "Avoir l'esprit tranquille avec le minimum d'effort",
      features: [
        "Identifier les différents acteurs du marchés",
        "Se familiariser avec le vocabulaire des marchés",
        "Comprendre les spécificités de chaque instrument financier, leurs risques et rentabilités",
        "Apprendre à sélectionner un fond",
        "Diversifier votre portefeuille",
        "Optimiser votre portefeuille grâce à des notions fiscales",
        "Gérer mensuellement votre portefeuille en mettant en place une routine basée sur des indicateurs",
      ],
      buttonText: "Je commence maintenant",
      highlighted: false,
      link: "/contact",
    },
    {
      title: "Parcours Expert : Stock Picking",
      price: "1200€",
      description: "Gérer son portefeuille comme un pro",
      features: [
        "Tout ce qui est inclus dans le parcours Gestion passive",
        "Lire des rapports financiers",
        "Faire une analyse sectorielle",
        "Faire une analyse quantitative",
        "Faire une analyse qualitative",
      ],
      buttonText: "Je deviens expert",
      highlighted: true,
      link: "/contact",
    },
    {
      title: "Accompagnement individuel",
      price: "3600€",
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
      link: "/contact",
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
            3 parcours clairs. 3 niveaux d'engagement. 1 seul objectif : vous rendre autonome, serein et libre financièrement.
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
                  asChild
                >
                  <Link to={product.link}>
                    {product.buttonText}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <div className="bg-brand-light p-6 rounded-xl border border-brand-accent/30 mb-8">
            <p className="text-xl font-bold mb-4">Réservez un appel pour savoir quel parcours vous correspond</p>
            <Button asChild className="bg-brand-accent text-white hover:bg-brand-accent/90">
              <Link to="/contact">Réserver un appel</Link>
            </Button>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h4 className="text-xl font-bold mb-2">Vous ne prenez aucun risque</h4>
                <p className="text-gray-700">
                  Testez la méthode Skolinvest pendant 15 jours. Si elle ne vous convient pas, un simple email et nous vous rembourserons intégralement.
                </p>
              </div>
              <div className="shrink-0">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/1478/1478873.png"
                  alt="Satisfait ou remboursé 100%"
                  className="h-24 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
