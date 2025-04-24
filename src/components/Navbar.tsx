
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 left-0 z-50">
      <nav className="container-custom py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-xl font-bold text-brand-primary">Vidéo Formation France</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-800 hover:text-brand-primary font-medium transition-colors">
            Accueil
          </a>
          <a href="#formations" className="text-gray-800 hover:text-brand-primary font-medium transition-colors">
            Formations
          </a>
          <a href="#avantages" className="text-gray-800 hover:text-brand-primary font-medium transition-colors">
            Pourquoi nous choisir
          </a>
          <a href="#contact" className="text-gray-800 hover:text-brand-primary font-medium transition-colors">
            Contact
          </a>
          <Button variant="outline" className="ml-2">Se connecter</Button>
          <Button>S'inscrire</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="text-gray-700 hover:text-brand-primary"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-2 pt-2 pb-4 shadow-lg animate-fade-in">
          <div className="space-y-2 px-4">
            <a href="/" className="block py-2 text-gray-800 font-medium hover:text-brand-primary">
              Accueil
            </a>
            <a href="#formations" className="block py-2 text-gray-800 font-medium hover:text-brand-primary">
              Formations
            </a>
            <a href="#avantages" className="block py-2 text-gray-800 font-medium hover:text-brand-primary">
              Pourquoi nous choisir
            </a>
            <a href="#contact" className="block py-2 text-gray-800 font-medium hover:text-brand-primary">
              Contact
            </a>
            <Button variant="outline" className="w-full mt-3">Se connecter</Button>
            <Button className="w-full mt-2">S'inscrire</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
