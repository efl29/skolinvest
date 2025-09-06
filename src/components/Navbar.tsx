
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 left-0 z-50">
      <nav className="container-custom py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/9dd49d29-b8bb-44ef-b085-ef528efb7cb4.png" 
            alt="Skolinvest Logo" 
            className="h-8 w-8"
          />
          <span className="text-xl font-bold text-brand-primary">Skolinvest</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-800 hover:text-brand-primary font-medium transition-colors">
            Accueil
          </a>
          <a href="#about" className="text-gray-800 hover:text-brand-primary font-medium transition-colors">
            À propos
          </a>
          <a href="#faq" className="text-gray-800 hover:text-brand-primary font-medium transition-colors">
            FAQ
          </a>
          <a href="https://calendly.com/skolinvest-formation/prise-de-rendez-vous-clone?month=2025-06" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-brand-primary font-medium transition-colors">
            Contact
          </a>
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
            <a href="#about" className="block py-2 text-gray-800 font-medium hover:text-brand-primary">
              À propos
            </a>
            <a href="#faq" className="block py-2 text-gray-800 font-medium hover:text-brand-primary">
              FAQ
            </a>
            <a href="https://calendly.com/skolinvest-formation/prise-de-rendez-vous-clone?month=2025-06" target="_blank" rel="noopener noreferrer" className="block py-2 text-gray-800 font-medium hover:text-brand-primary">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
