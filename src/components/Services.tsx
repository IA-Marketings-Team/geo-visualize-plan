
import React from 'react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';
import { Building, MapPin, Home, PenTool, Mountain, Lightbulb } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Building,
      title: "Plans de façade",
      description: "Élévations détaillées et plans précis pour visualiser l'aspect extérieur de vos bâtiments, incluant les matériaux, fenêtres et détails architecturaux."
    },
    {
      icon: Home,
      title: "Plans d'intérieur",
      description: "Aménagements intérieurs optimisés avec une attention particulière aux flux de circulation, à l'ergonomie et à l'harmonie des espaces."
    },
    {
      icon: MapPin,
      title: "Plans de toiture",
      description: "Représentations exactes des toitures avec spécifications techniques, pentes, évacuations d'eau et zones techniques pour une planification sans faille."
    },
    {
      icon: PenTool,
      title: "Coupes et sections",
      description: "Visualisations en coupe révélant la structure interne, les niveaux et les détails constructifs essentiels à la compréhension globale du projet."
    },
    {
      icon: Mountain,
      title: "Plans topographiques",
      description: "Cartographie précise du terrain avec courbes de niveau, points cotés et caractéristiques naturelles pour une intégration optimale du projet dans son environnement."
    },
    {
      icon: Lightbulb,
      title: "Rendus réalistes",
      description: "Images photoréalistes de haute définition permettant une immersion complète dans votre projet avant sa réalisation, avec textures, éclairages et ambiances."
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gradient-to-b from-geoplan-darkblue to-black">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-geoplan-red/10 text-geoplan-red rounded-full text-sm font-medium mb-3">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Solutions cartographiques complètes
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Nous proposons une gamme complète de services pour répondre à tous vos besoins en matière de plans et visualisations.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={100 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
