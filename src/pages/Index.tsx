import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Hero from '../components/Hero';
import AnimatedSection from '../components/AnimatedSection';
import Services from '../components/Services';
import ContactSection from '../components/ContactSection';
import ProjectCard from '../components/ProjectCard';
import { ArrowRight } from 'lucide-react';
import { useProjects } from '@/hooks/useDataApi';
import { Skeleton } from '@/components/ui/skeleton';

const Index: React.FC = () => {
  const { projects, loading } = useProjects();

  // Filtrer les projets pour n'afficher que les 6 plus récents
  const featuredProjects = projects.slice(0, 6);

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {loading ? (
              Array(6).fill(null).map((_, index) => (
                <div key={index} className="animate-pulse space-y-3">
                  <Skeleton className="h-48 w-full rounded-md bg-muted" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-3/4 bg-muted" />
                    <Skeleton className="h-4 w-1/2 bg-muted" />
                  </div>
                </div>
              ))
            ) : (
              // Map through projects with proper props
              featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  category={project.category}
                  imageSrc={project.image_src}
                  delay={100 + index * 100}
                />
              ))
            )}
          </div>
          
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
