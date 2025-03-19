
import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';

const References: React.FC = () => {
  // Sample project data
  const projects = [
    {
      imageSrc: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
      title: "Résidence Les Terrasses",
      category: "Plan de façade"
    },
    {
      imageSrc: "/sitting_room.jpg",
      title: "Loft Urban Design",
      category: "Plan d'intérieur"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop",
      title: "Parc Central",
      category: "Plan topographique"
    },
    {
      imageSrc: "/caim.jpg",
      title: "Complexe Harmonie",
      category: "Rendu réaliste"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2074&auto=format&fit=crop",
      title: "Maison de la Colline",
      category: "Plan de toiture"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=2070&auto=format&fit=crop",
      title: "Bureaux Transparence",
      category: "Coupe architecturale"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
      title: "Métropole Réseaux",
      category: "Plan de réseaux enterrés"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      title: "Smart City",
      category: "Modélisation urbaine"
    }
  ];

  // Client logos
  const clients = [
    "Métropole de Lyon",
    "SNCF Réseau",
    "Bouygues Construction",
    "Eiffage",
    "Vinci Immobilier",
    "Aéroport de Paris",
    "EDF",
    "Engie"
  ];

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
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                imageSrc={project.imageSrc}
                title={project.title}
                category={project.category}
                delay={100 + index * 50}
              />
            ))}
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
            {clients.map((client, index) => (
              <AnimatedSection key={index} delay={100 + index * 50}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 h-32 flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover-lift">
                  <span className="text-xl font-semibold text-center text-white">{client}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default References;
