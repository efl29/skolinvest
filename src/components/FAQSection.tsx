
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqItems = [
    {
      question: "Faut-il avoir des connaissances préalables en finance pour suivre la formation ?",
      answer: "Non, la formation est conçue pour être accessible aux débutants complets. Nous partons de zéro et construisons progressivement vos connaissances à chaque module."
    },
    {
      question: "Combien de temps faut-il pour compléter la formation ?",
      answer: "La formation Gestion Passive représente 3 heures de contenu et la formation Stock Picking environ 6 heures. Vous pouvez la suivre à votre rythme, et vous aurez un accès à vie à tous les contenus et leurs mises à jour."
    },
    {
      question: "Combien de temps dois-je prévoir par semaine ?",
      answer: "Environ 1 à 2h par semaine. L'idée est que vous puissiez avancer à votre rythme, sans pression."
    },
    {
      question: "Et si j'ai des questions en cours de route ?",
      answer: "Vous pouvez poser toutes vos questions par email. Et dans la formule accompagnement, vous êtes suivi personnellement."
    },
    {
      question: "Est-ce que c'est remboursable ?",
      answer: "Oui, vous avez une garantie de 14 jours satisfait ou remboursé, sans condition."
    },
    {
      question: "Est-ce que je peux payer en plusieurs fois ?",
      answer: "Oui, il est possible de payer en 3 fois."
    },
    {
      question: "Est-ce que je recevrai une facture pour ma comptabilité ?",
      answer: "Oui, une facture au format PDF vous sera automatiquement envoyée par email après votre achat."
    },
    {
      question: "Comment se déroulent les sessions de coaching individuel ?",
      answer: "Les sessions de coaching se font par visioconférence (Zoom) et durent 60 minutes. Vous pouvez choisir les sujets que vous souhaitez aborder en fonction de vos besoins spécifiques."
    },
    {
      question: "Y a-t-il une garantie de remboursement ?",
      answer: "Oui, nous offrons une garantie satisfait ou remboursé de 30 jours. Si vous n'êtes pas satisfait de la formation, vous pouvez demander un remboursement complet sans justification."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-brand-primary">
            Questions Fréquentes
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
