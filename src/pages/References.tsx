
import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import { useProjects, useClients } from '@/hooks/useDataApi';
import { Skeleton } from '@/components/ui/skeleton';

const References: React.FC = () => {
  const { projects, loading: projectsLoading } = useProjects();
  const { clients, loading: clientsLoading } = useClients();

  // Affichage des squelettes pendant le chargement
  const renderProjectSkeletons = () => {
    return Array(8).fill(null).map((_, index) => (
      <div key={index} className="space-y-3">
        <Skeleton className="h-60 w-full rounded-lg" />
        <Skeleton className="h-4 w-1/4 rounded-lg" />
        <Skeleton className="h-6 w-3/4 rounded-lg" />
      </div>
    ));
  };

  const renderClientSkeletons = () => {
    return Array(8).fill(null).map((_, index) => (
      <Skeleton key={index} className="h-32 w-full rounded-xl" />
    ));
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Nos Références" 
        subtitle="Découvrez une sélection de nos projets réalisés et nos clients qui nous font confiance."
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Nos projets récents
            </h2>
            <div className="w-20 h-1 bg-geoplan-red mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explorez notre portfolio de réalisations récentes dans divers domaines de la cartographie et de la modélisation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectsLoading ? (
              renderProjectSkeletons()
            ) : (
              projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  imageSrc={project.image_src}
                  title={project.title}
                  category={project.category}
                  delay={100 + index * 50}
                />
              ))
            )}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-geoplan-darkblue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ils nous font confiance
            </h2>
            <div className="w-20 h-1 bg-geoplan-red mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              GeoPlan est fier de collaborer avec des clients de référence dans de nombreux secteurs.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientsLoading ? (
              renderClientSkeletons()
            ) : (
              clients.map((client, index) => (
                <AnimatedSection key={client.id} delay={100 + index * 50}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-32 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover-lift">
                    <span className="text-xl font-semibold text-center text-white">{client.name}</span>
                  </div>
                </AnimatedSection>
              ))
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default References;
