
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inscription réussie",
      description: "Vous êtes maintenant inscrit à notre newsletter.",
    });
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300 fixed bottom-0 w-full">
      <div className="container-custom py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 text-white"
                required
              />
              <Button type="submit" variant="outline" className="whitespace-nowrap">
                S'inscrire
              </Button>
            </form>
          </div>
          
          <div className="text-center">
            <Link to="/contact">
              <Button variant="outline" className="bg-brand-primary text-white hover:bg-brand-primary/90">
                Contactez-nous
              </Button>
            </Link>
          </div>

          <div className="text-right">
            <p>Email: contact@skolinvest.fr</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
