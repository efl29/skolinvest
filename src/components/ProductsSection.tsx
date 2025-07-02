
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import ExpandableProductCard from './ExpandableProductCard';

const ProductsSection: React.FC = () => {
  const products = [
    {
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
      buttonText: "Détails module",
      highlighted: false,
      link: "/contact",
      whyExists: "Vous voulez investir en bourse pour sécuriser votre avenir, préparer votre retraite, ou juste avoir un plan B si un jour vous souhaitez changer de vie.\nMais vous ne voulez pas y passer des heures. Vous voulez comprendre, mais sans vous noyer dans le jargon financier.\nCette formation a été pensée pour les gens comme vous : curieux, débordés, qui veulent des résultats sans sacrifier leur énergie mentale.",
      howItWorks: [
        "Accès immédiat à une plateforme claire, divisée en modules courts",
        "Vidéos explicatives + Quiz + PDF synthétiques",
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
      title: "Parcours Gestion active : Gérer son portefeuille d'actions",
      price: "1200€",
      description: "Apprenez à repérer les pépites, comme un vrai analyste",
      features: [
        "Tout ce qui est inclus dans le parcours Gestion passive",
        "Lire des rapports financiers",
        "Faire une analyse sectorielle",
        "Faire une analyse quantitative",
        "Faire une analyse qualitative",
      ],
      buttonText: "Détails module",
      highlighted: true,
      link: "/contact",
      whyExists: "Vous souhaitez choisir vous-mêmes les meilleures entreprises ?\nNe pas suivre un portefeuille tout fait, mais comprendre exactement ce que vous achetez ?\n\nCette formation est faite pour vous si vous voulez :\n• Devenir autonome dans l'analyse d'entreprise\n• Savoir quand acheter, quand vendre, et pourquoi\n• Créer votre propre portefeuille \"conviction\"\n• Ne plus dépendre d'un influenceur ou d'un gourou boursier\n\nVous allez apprendre à :\n• Lire un bilan, un compte de résultat, sans jargon inutile\n• Identifier les entreprises sous-cotées de qualité\n• Appliquer les meilleures méthodes de sélection (value, GARP, growth…)\n• Vous protéger des biais émotionnels qui vous font perdre de l'argent",
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
      title: "Accompagnement individuel",
      price: "3600€",
      description: "Ne perdez plus de temps, concevez rapidement votre portefeuille",
      features: [
        "Tout ce qui est inclus dans Expert",
        "4 sessions de coaching individuel",
        "Revue de votre portefeuille actuel",
        "Plan d'investissement sur-mesure",
        "Support prioritaire pendant 1 an",
      ],
      buttonText: "Je réserve mon appel gratuit",
      highlighted: false,
      link: "/contact",
      whyExists: "Vous souhaitez passer à l'action, mais vous voulez être guidé à chaque étape ?\nVous avez compris les bases, ou vous êtes en train de les apprendre, mais vous ne voulez pas rester bloqué.\nVous voulez pouvoir valider vos idées avec un expert, vous sentir accompagné, cadré, et surtout : mettre en place votre plan maintenant, sans vous disperser\nVous voulez être sûr de ne pas vous planter ?\nAvancer plus vite ?\n\nOn le fait ensemble.\n\nL'accompagnement individuel est fait pour vous si vous souhaitez :\n• Valider votre stratégie avec un expert\n• Être accompagné dans la mise en place concrète de votre portefeuille\n• Bénéficier d'un retour personnalisé sur vos choix\n• Vous sentir soutenu, encadré et motivé pour ne pas procrastiner",
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
    },
  ];

  return (
    <section className="py-16 bg-brand-primary" id="formations">
      <div className="container-custom">
        <div className="bg-white rounded-xl p-8 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-brand-primary">
            Nos Formations
          </h2>
        </div>
        
        <div className="text-center mb-10">
          <p className="text-xl text-white">
            3 parcours clairs. 3 niveaux d'engagement. 1 seul objectif : vous rendre autonome, serein et libre financièrement.
          </p>
        </div>
        
        <div className="space-y-8">
          {products.map((product, index) => (
            <ExpandableProductCard key={index} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h4 className="text-xl font-bold mb-2">Satisfait ou remboursé</h4>
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
