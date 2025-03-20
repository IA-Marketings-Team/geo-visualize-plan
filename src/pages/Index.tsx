
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Hero from '../components/Hero';
import AnimatedSection from '../components/AnimatedSection';
import Services from '../components/Services';
import ContactSection from '../components/ContactSection';
import ProjectCarousel from '../components/ProjectCarousel';
import { ArrowRight } from 'lucide-react';
import { useProjects } from '@/hooks/useDataApi';
import { Skeleton } from '@/components/ui/skeleton';

const Index: React.FC = () => {
  const { projects, loading } = useProjects();

  return (
    <PageLayout>
      <Hero />
      
      <Services />
      
      {/* Section Projets Récents */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-geoplan-red/10 text-geoplan-red rounded-full text-sm font-medium mb-3">
              Nos Réalisations
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Découvrez nos projets récents
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explorez une sélection de nos réalisations les plus récentes, illustrant notre expertise et notre savoir-faire dans différents domaines.
            </p>
          </AnimatedSection>
          
          {/* Carousel de projets au lieu de la grille */}
          <ProjectCarousel />
          
          <AnimatedSection className="text-center mt-12">
            <Link 
              to="/references" 
              className="inline-flex items-center text-geoplan-red hover:text-geoplan-red/80 font-medium group"
            >
              Voir tous nos projets 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
