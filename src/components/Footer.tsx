
import React from 'react';
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <Button variant="outline" className="bg-brand-primary text-white hover:bg-brand-primary/90" asChild>
              <a href="https://calendly.com/skolinvest-formation/prise-de-rendez-vous-clone?month=2025-06" target="_blank" rel="noopener noreferrer">
                Contactez-nous
              </a>
            </Button>
          </div>

          <div className="text-center md:text-right">
            <p>Email: contact@skolinvest.fr</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
