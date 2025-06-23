
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <Link to="/contact">
              <Button variant="outline" className="bg-brand-primary text-white hover:bg-brand-primary/90">
                Contactez-nous
              </Button>
            </Link>
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
