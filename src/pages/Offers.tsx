
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Offers = () => {
  const courses = [
    {
      id: "gestion-passive",
      title: "Parcours Gestion Passive : Débuter en Bourse",
      price: "647€",
      description: "Investir simplement, efficacement, sans y passer votre vie",
      features: [
        "Identifier les différents acteurs du marchés",
        "Se familiariser avec le vocabulaire des marchés",
        "Comprendre les spécificités de chaque instrument financier, leurs risques et rentabilités",
        "Apprendre à sélectionner un fond",
        "Diversifier votre portefeuille",
        "Optimiser votre portefeuille grâce à des notions fiscales",
        "Gérer mensuellement votre portefeuille en mettant en place une routine basée sur des indicateurs",
      ],
      buttonText: "Je commence la gestion passive",
      highlighted: false,
      whyExists: "Vous voulez investir en bourse pour sécuriser ton avenir, préparer votreretraite, ou juste avoir un plan B si un jour vous voulez vous reconvertir. Mais vous n'avez pas le temps. Vous voulez comprendre, mais sans vous noyer dans le jargon. Cette formation a été pensée pour les gens comme vous: curieux, débordés, qui veulent des résultats sans sacrifier leur énergie mentale.",
      howItWorks: [
        "Accès immédiat à une plateforme claire, divisée en modules courts",
        "Vidéos explicatives + PDF synthétiques",
        "Modèle de portefeuille prêt à l'emploi, basé sur ton profil (prudent/équilibré/dynamique)",
        "Bonus : simulateur d'investissement et routine de suivi simple"
      ],
      results: [
        "Vous savez où investir votre argent chaque mois, sans vous poser mille questions",
        "Vous savez pourquoi tu choisis tel ETF, tel compte, et non un autre",
        "Vous êtes autonome, calme et structuré dans votre gestion financière",
        "Vous pouvez vous concentrer sur ce qui vous intéresse vraiment, pas sur les marchés"
      ],
      isItForYou: [
        "Vous voulez investir en bourse sans stress",
        "Vous ne voulez pas \"trader\", mais placer votre argent intelligemment",
        "Vous avez peu de temps, mais vous voulez comprendre ce que vous faites",
        "Vous voulez un système clair, éprouvé, et facile à suivre"
      ]
    },
    {
      id: "expert",
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
      whyExists: "Vous voulez investir en bourse pour sécuriser ton avenir, préparer votreretraite, ou juste avoir un plan B si un jour vous voulez vous reconvertir. Mais vous n'avez pas le temps. Vous voulez comprendre, mais sans vous noyer dans le jargon. Cette formation a été pensée pour les gens comme vous: curieux, débordés, qui veulent des résultats sans sacrifier leur énergie mentale.",
      howItWorks: [
        "Accès immédiat à une plateforme claire, divisée en modules courts",
        "Vidéos explicatives + PDF synthétiques",
        "Modèle de portefeuille prêt à l'emploi, basé sur ton profil (prudent/équilibré/dynamique)",
        "Bonus : simulateur d'investissement et routine de suivi simple"
      ],
      results: [
        "Vous savez où investir votre argent chaque mois, sans vous poser mille questions",
        "Vous savez pourquoi tu choisis tel ETF, tel compte, et non un autre",
        "Vous êtes autonome, calme et structuré dans votre gestion financière",
        "Vous pouvez vous concentrer sur ce qui vous intéresse vraiment, pas sur les marchés"
      ],
      isItForYou: [
        "Vous voulez investir en bourse sans stress",
        "Vous ne voulez pas \"trader\", mais placer votre argent intelligemment",
        "Vous avez peu de temps, mais vous voulez comprendre ce que vous faites",
        "Vous voulez un système clair, éprouvé, et facile à suivre"
      ]
    },
    {
      id: "accompagnement",
      title: "Accompagnement individuel",
      price: "3600€",
      description: "Vous voulez être sûr de ne pas vous tromper dans votre sélection ? Avancer plus vite ? Nous vous accompagnons.",
      features: [
        "Tout ce qui est inclus dans Expert",
        "3 sessions de coaching individuel",
        "Revue de votre portefeuille actuel",
        "Plan d'investissement sur-mesure",
        "Support prioritaire pendant 6 mois",
      ],
      buttonText: "Je veux être accompagné",
      highlighted: false,
      whyExists: "Vous voulez investir en bourse pour sécuriser ton avenir, préparer votreretraite, ou juste avoir un plan B si un jour vous voulez vous reconvertir. Mais vous n'avez pas le temps. Vous voulez comprendre, mais sans vous noyer dans le jargon. Cette formation a été pensée pour les gens comme vous: curieux, débordés, qui veulent des résultats sans sacrifier leur énergie mentale.",
      howItWorks: [
        "Accès immédiat à une plateforme claire, divisée en modules courts",
        "Vidéos explicatives + PDF synthétiques",
        "Modèle de portefeuille prêt à l'emploi, basé sur ton profil (prudent/équilibré/dynamique)",
        "Bonus : simulateur d'investissement et routine de suivi simple"
      ],
      results: [
        "Vous savez où investir votre argent chaque mois, sans vous poser mille questions",
        "Vous savez pourquoi tu choisis tel ETF, tel compte, et non un autre",
        "Vous êtes autonome, calme et structuré dans votre gestion financière",
        "Vous pouvez vous concentrer sur ce qui vous intéresse vraiment, pas sur les marchés"
      ],
      isItForYou: [
        "Vous voulez investir en bourse sans stress",
        "Vous ne voulez pas \"trader\", mais placer votre argent intelligemment",
        "Vous avez peu de temps, mais vous voulez comprendre ce que vous faites",
        "Vous voulez un système clair, éprouvé, et facile à suivre"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container-custom py-20 mt-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-brand-primary">
          Nos Offres
        </h1>
        
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          3 parcours clairs. 3 niveaux d'engagement. 1 seul objectif : vous rendre autonome, serein et libre financièrement.
        </p>
        
        <div className="space-y-24">
          {courses.map((course, index) => (
            <section key={index} id={course.id} className="scroll-mt-20">
              <div className={`rounded-xl shadow-lg overflow-hidden border ${
                course.highlighted ? 'border-2 border-brand-accent bg-white' : 'border-gray-200 bg-white'
              }`}>
                {course.highlighted && (
                  <div className="bg-brand-accent text-white px-4 py-2 text-center text-sm font-bold uppercase">
                    Notre offre la plus populaire
                  </div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="lg:col-span-1 p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
                    <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                    <div className="text-3xl font-bold text-brand-primary mb-3">{course.price}</div>
                    <p className="text-gray-600 mb-6">{course.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Ce que vous apprendrez :</h3>
                      <ul className="space-y-2">
                        {course.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 mr-2 text-brand-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      className={`w-full ${
                        course.highlighted 
                          ? 'bg-brand-accent hover:bg-brand-accent/90 text-white' 
                          : 'bg-brand-primary hover:bg-brand-primary/90'
                      }`}
                      asChild
                    >
                      <Link to="/contact">
                        {course.buttonText}
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="lg:col-span-2 p-6">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">🟡 Pourquoi cette formation existe</h3>
                        <p className="text-gray-700">{course.whyExists}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3">⚙ Comment elle fonctionne</h3>
                        <ul className="space-y-2">
                          {course.howItWorks.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3">✅ Résultats concrets</h3>
                        <ul className="space-y-2">
                          {course.results.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3">🎯 Est-ce que ça vous correspond ?</h3>
                        <ul className="space-y-2">
                          {course.isItForYou.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-500 mr-2">✅</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Offers;
