
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ChallengesSolutionSection from '@/components/ChallengesSolutionSection';
import WhySkolinvestSection from '@/components/WhySkolinvestSection';
import ProgramSection from '@/components/ProgramSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProductsSection from '@/components/ProductsSection';
import BonusSection from '@/components/BonusSection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ChallengesSolutionSection />
        <WhySkolinvestSection />
        <ProgramSection />
        <TestimonialsSection />
        <ProductsSection />
        <BonusSection />
        <AboutSection />
        <FAQSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
