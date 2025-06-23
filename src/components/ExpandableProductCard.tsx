
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
  link: string;
  whyExists: string;
  howItWorks: string[];
  results: string[];
  isItForYou: string[];
}

interface ExpandableProductCardProps {
  product: Product;
}

const ExpandableProductCard: React.FC<ExpandableProductCardProps> = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`rounded-xl shadow-lg overflow-hidden border ${
      product.highlighted 
        ? 'border-2 border-brand-accent bg-white' 
        : 'border border-gray-200 bg-white'
    }`}>
      {product.highlighted && (
        <div className="bg-brand-accent text-white px-4 py-1 text-center text-sm font-bold uppercase">
          Populaire
        </div>
      )}
      
      <div className={`p-6 ${product.highlighted ? 'bg-brand-light' : 'bg-gray-50'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            
            <div className="space-y-2 mb-4">
              <h4 className="font-semibold">Ce que vous allez apprendre :</h4>
              <ul className="text-sm space-y-1">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full mb-4 flex items-center justify-center gap-2"
            >
              En savoir plus
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        {isExpanded && (
          <div className="space-y-6 border-t pt-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl font-bold">{product.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">Paiement en plusieurs fois possible</p>
                
                <div>
                  <h4 className="font-semibold mb-2">🟡 Pourquoi choisir ce parcours-là ?</h4>
                  <p className="text-sm text-gray-700">{product.whyExists}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">⚙ Comment ça fonctionne ?</h4>
                  <ul className="text-sm space-y-1">
                    {product.howItWorks.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">✅ Résultats concrets</h4>
                  <ul className="text-sm space-y-1">
                    {product.results.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🎯 Est-ce que ce parcours est fait pour vous ?</h4>
                  <ul className="text-sm space-y-1">
                    {product.isItForYou.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandableProductCard;
