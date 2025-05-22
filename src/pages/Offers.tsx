
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
      whyExists: "Vous voulez investir en bourse pour sécuriser votre avenir, préparer votre retraite, ou juste avoir un plan B si un jour vous souhaitez changer de vie.\nMais vous ne voulez pas y passer des heures. Vous voulez comprendre, mais sans vous noyer dans le jargon financier.\nCette formation a été pensée pour les gens comme vous : curieux, débordés, qui veulent des résultats sans sacrifier leur énergie mentale.",
      howItWorks: [
        "Accès immédiat à une plateforme claire, divisée en modules courts",
        "Vidéos explicatives + PDF synthétiques",
        "Modèle de portefeuille prêt à l'emploi, basé sur ton profil (prudent/équilibré/dynamique)",
        "Bonus : simulateur d'investissement et routine de suivi simple"
      ],
      results: [
        "Vous savez où investir votre argent chaque mois, sans vous poser mille questions",
        "Vous savez pourquoi vous choisissez tel ETF, tel fonds, etc. ou tel compte, et non un autre",
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
      description: "Apprenez à repérer les pépites, comme un vrai analyste",
      features: [
        "Tout ce qui est inclus dans le parcours Gestion passive",
        "Lire des rapports financiers",
        "Faire une analyse sectorielle",
        "Faire une analyse quantitative",
        "Faire une analyse qualitative",
      ],
      buttonText: "Je deviens expert du Stock Picking",
      highlighted: true,
      whyExists: "Vous souhaitez choisir vous-mêmes les meilleures entreprises ?\nNe pas suivre un portefeuille tout fait, mais comprendre exactement ce que vous achetez ?\nCette formation est faite pour vous si vous voulez :\n• Devenir autonome dans l'analyse d'entreprise\n• Savoir quand acheter, quand vendre, et pourquoi\n• Créer votre propre portefeuille \"conviction\"\n• Ne plus dépendre d'un influenceur ou d'un gourou boursier\nVous allez apprendre à :\n• Lire un bilan, un compte de résultat, sans jargon inutile\n• Identifier les entreprises sous-cotées de qualité\n• Appliquer les meilleures méthodes de sélection (value, GARP, growth…)\n• Vous protéger des biais émotionnels qui vous font perdre de l'argent",
      howItWorks: [
        "6 modules progressifs : fondamentaux, lecture comptable, ratios clés, analyse avancée, valorisation, gestion long-terme",
        "Cas pratiques sur des entreprises réelles",
        "Accès aux modèles Excel + tableurs de suivi",
        "Quiz, résumé PDF, et bonus : checklists de sélection d'actions"
      ],
      results: [
        "Vous savez analyser une entreprise comme un pro, en toute autonomie",
        "Vous ne suivez plus les conseils d'influenceurs soi-disant « experts »",
        "Vous construisez votre propre portefeuille long terme, adapté à votre style",
        "Vous savez éviter les erreurs les plus fréquentes des investisseurs solo"
      ],
      isItForYou: [
        "Vous voulez vous sentir compétent et autonome dans vos choix",
        "Vous ne voulez plus dépendre du portefeuille d'un influenceur",
        "Vous avez envie d'apprendre sérieusement, même si c'est dense",
        "Vous êtes prêt à vous investir pour avoir un vrai retour sur le long terme"
      ]
    },
    {
      id: "accompagnement",
      title: "Accompagnement individuel",
      price: "3600€",
      description: "Ne perdez plus de temps, concevez rapidement votre portefeuille",
      features: [
        "Tout ce qui est inclus dans Expert",
        "3 sessions de coaching individuel",
        "Revue de votre portefeuille actuel",
        "Plan d'investissement sur-mesure",
        "Support prioritaire pendant 6 mois",
      ],
      buttonText: "Je réserve mon appel gratuit",
      highlighted: false,
      whyExists: "Vous souhaitez passer à l'action, mais vous voulez être guidé à chaque étape ?\nVous avez compris les bases, ou vous êtes en train de les apprendre, mais vous ne voulez pas rester bloqué.\nVous voulez pouvoir valider vos idées avec un expert, vous sentir accompagné, cadré, et surtout : mettre en place votre plan maintenant, sans vous disperser\nVous voulez être sûr de ne pas vous planter ? Avancer plus vite ? On le fait ensemble.\n\nL'accompagnement individuel est fait pour vous si vous souhaitez :\n• Valider votre stratégie avec un expert\n• Être accompagné dans la mise en place concrète de votre portefeuille\n• Bénéficier d'un retour personnalisé sur vos choix\n• Vous sentir soutenu, encadré et motivé pour ne pas procrastiner",
      howItWorks: [
        "Audit complet de votre situation (temps, fiscalité, capital, objectifs)",
        "4 sessions en visio (personnalisables selon votre besoin)",
        "Plan d'action pas à pas : comptes, fiscalité, construction portefeuille, suivi",
        "Assistance mail entre les sessions + accès à des ressources privées"
      ],
      results: [
        "Vous mettez en place une stratégie claire, solide et cohérente",
        "Vous passez à l'action concrètement, sans procrastiner",
        "Vous gagnez en confiance dans vos décisions",
        "Vous avez quelqu'un à vos côtés, pour vous épauler, vous encourager, corriger si besoin"
      ],
      isItForYou: [
        "Vous voulez gagner du temps et éviter les erreurs classiques",
        "Vous voulez valider vos choix avec un pro, au lieu de douter",
        "Vous êtes motivé, mais vous avez besoin d'un cadre pour ne pas vous éparpiller",
        "Vous voulez tout mettre en place rapidement, sans vous user mentalement"
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
