
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Marie L.",
      role: "Enseignante",
      text: "Skolinvest m'a vraiment ouvert les yeux sur l'investissement en bourse. Les concepts sont expliqués clairement, et j'ai maintenant confiance pour gérer mon portefeuille.",
      rating: 5
    },
    {
      name: "Thomas R.",
      role: "Ingénieur",
      text: "Après plusieurs échecs en bourse, cette formation m'a permis de comprendre mes erreurs et de construire une stratégie solide. Je recommande vivement !",
      rating: 5
    },
    {
      name: "Sophie D.",
      role: "Pharmacienne",
      text: "Excellente formation pour les débutants. J'ai apprécié l'approche méthodique et les exemples concrets qui rendent l'apprentissage facile et engageant.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-brand-primary">
          Ce que nos apprenants disent
        </h2>
        
        <div className="flex justify-center mb-10">
          <a 
            href="https://fr.trustpilot.com/review/skolinvest.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <img 
              src="https://cdn.trustpilot.com/brand-assets/1.1.0/logo-black.svg"
              alt="Trustpilot"
              className="h-8"
            />
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand-accent text-brand-accent" />
              ))}
            </div>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex mb-3">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="italic mb-4 flex-grow">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://fr.trustpilot.com/review/skolinvest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline"
          >
            Voir tous les avis sur Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
