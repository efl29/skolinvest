
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustpilotNote from '@/components/TrustpilotNote';
import ChallengesSolutionSection from '@/components/ChallengesSolutionSection';
import WhySkolinvestSection from '@/components/WhySkolinvestSection';
import ProgramSection from '@/components/ProgramSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProductsSection from '@/components/ProductsSection';
import BonusSection from '@/components/BonusSection';
import AboutSection from '@/components/AboutSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <TrustpilotNote />
        <ChallengesSolutionSection />
        <WhySkolinvestSection />
        <ProgramSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ProductsSection />
        <BonusSection />
        <AboutSection />
        <CTASection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
