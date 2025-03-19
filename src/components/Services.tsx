
import React from 'react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';
import { Building, MapPin, Home, PenTool, Mountain, Lightbulb } from 'lucide-react';
import { useServices } from '@/hooks/useDataApi';
import { Skeleton } from '@/components/ui/skeleton';
import { LucideIcon } from 'lucide-react';

// Fonction pour mapper les noms d'icônes aux composants Lucide
const getIconComponent = (iconName: string): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    'Building': Building,
    'MapPin': MapPin,
    'Home': Home,
    'PenTool': PenTool,
    'Mountain': Mountain,
    'Lightbulb': Lightbulb
  };
  
  return icons[iconName] || Building;
};

const Services: React.FC = () => {
  const { services, loading } = useServices();

  // Affichage des squelettes pendant le chargement
  const renderServiceSkeletons = () => {
    return Array(6).fill(null).map((_, index) => (
      <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full">
        <div className="flex flex-col h-full space-y-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-6 w-3/4 bg-white/20" />
          <Skeleton className="h-20 w-full bg-white/20" />
        </div>
      </div>
    ));
  };

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
          {loading ? (
            renderServiceSkeletons()
          ) : (
            services.map((service, index) => (
              <ServiceCard
                key={service.id}
                icon={getIconComponent(service.icon)}
                title={service.title}
                description={service.description}
                delay={100 + index * 100}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
