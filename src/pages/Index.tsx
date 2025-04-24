
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import FeatureSection from '@/components/FeatureSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  // Données des formations
  const courses = [
    {
      id: 1,
      title: "Introduction au Marketing Digital",
      description: "Apprenez les fondamentaux du marketing digital et développez une stratégie efficace pour votre entreprise.",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2340&auto=format&fit=crop",
      price: 49.99,
      level: "débutant" as const,
      duration: "10 heures",
      lessons: 24,
    },
    {
      id: 2,
      title: "Photographie Professionnelle",
      description: "Maîtrisez les techniques de photographie professionnelle et améliorez drastiquement la qualité de vos images.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2340&auto=format&fit=crop",
      price: 79.99,
      level: "intermédiaire" as const,
      duration: "15 heures",
      lessons: 32,
    },
    {
      id: 3,
      title: "Développement Web Full-Stack",
      description: "Devenez développeur web complet en apprenant HTML, CSS, JavaScript, React et Node.js.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2340&auto=format&fit=crop",
      price: 129.99,
      level: "avancé" as const,
      duration: "40 heures",
      lessons: 65,
    },
    {
      id: 4,
      title: "Design Graphique avec Adobe",
      description: "Apprenez à utiliser la suite Adobe pour créer des designs graphiques professionnels.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2342&auto=format&fit=crop",
      price: 89.99,
      level: "intermédiaire" as const,
      duration: "20 heures",
      lessons: 40,
    },
    {
      id: 5,
      title: "Montage Vidéo Professionnel",
      description: "Maîtrisez les techniques de montage vidéo avec Premiere Pro et After Effects.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2340&auto=format&fit=crop",
      price: 99.99,
      level: "intermédiaire" as const,
      duration: "25 heures",
      lessons: 38,
    },
    {
      id: 6,
      title: "Gestion de Projet Agile",
      description: "Apprenez à gérer des projets avec les méthodologies agiles comme Scrum et Kanban.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2340&auto=format&fit=crop",
      price: 69.99,
      level: "débutant" as const,
      duration: "12 heures",
      lessons: 28,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="formations" className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos formations populaires
              </h2>
              <p className="text-xl text-gray-600">
                Développez vos compétences avec nos formations vidéo de haute qualité
              </p>
            </div>
            
            <div className="course-grid">
              {courses.map((course) => (
                <CourseCard 
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  price={course.price}
                  level={course.level}
                  duration={course.duration}
                  lessons={course.lessons}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="#" 
                className="inline-flex items-center text-brand-primary hover:underline font-medium"
              >
                Voir toutes nos formations
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        <FeatureSection />
        
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos statistiques
              </h2>
              <p className="text-xl text-gray-600">
                Découvrez pourquoi des milliers d'apprenants nous font confiance
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-primary mb-2">150+</div>
                <div className="text-gray-600">Formations</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-primary mb-2">50k+</div>
                <div className="text-gray-600">Apprenants</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-primary mb-2">98%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-primary mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
