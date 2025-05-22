
import React from 'react';
import { Button } from "@/components/ui/button";
import { Briefcase, Users, BookOpen, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const expertise = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      text: "Expertise marchés & fiscalité"
    },
    {
      icon: <Users className="h-6 w-6" />,
      text: "Accompagnement humain et personnalisé"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      text: "Pédagogie claire et structurée"
    },
    {
      icon: <Search className="h-6 w-6" />,
      text: "Transparence totale : je vous montre ce que je fais, je vous explique pourquoi"
    }
  ];

  return (
    <section className="py-16 bg-white" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Formatrice Skolinvest" 
              className="rounded-xl shadow-lg object-cover h-96 w-full"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary">
              Pourquoi me faire confiance ?
            </h2>
            
            <p className="text-lg mb-4">
              Je suis une ancienne assistante trader.
            </p>
            
            <p className="text-lg mb-4">
              J'ai accompagné des dizaines de clients dans la construction de leur patrimoine.
            </p>
            
            <p className="text-lg mb-6">
              Mon approche s'appuie sur les méthodes des plus grands investisseurs, validées par l'histoire et les chiffres.
            </p>

            <div className="space-y-4 mb-6">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-brand-primary">
                    {item.icon}
                  </div>
                  <p className="text-lg">{item.text}</p>
                </div>
              ))}
            </div>
            
            <Link to="/contact">
              <Button className="bg-brand-accent hover:bg-brand-accent/90 text-white">
                Réserver un appel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
