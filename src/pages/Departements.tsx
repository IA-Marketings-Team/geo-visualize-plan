
import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import { MapPin, Building, Mountain, Globe, Code } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useDepartments } from '@/hooks/useDataApi';
import { Skeleton } from '@/components/ui/skeleton';

// Fonction pour mapper les noms d'icônes aux composants Lucide
const getIconComponent = (iconName: string) => {
  const icons: Record<string, React.ReactElement> = {
    'MapPin': <MapPin className="h-6 w-6 text-geoplan-red" />,
    'Building': <Building className="h-6 w-6 text-geoplan-red" />,
    'Mountain': <Mountain className="h-6 w-6 text-geoplan-red" />,
    'Globe': <Globe className="h-6 w-6 text-geoplan-red" />,
    'Code': <Code className="h-6 w-6 text-geoplan-red" />
  };
  
  return icons[iconName] || <MapPin className="h-6 w-6 text-geoplan-red" />;
};

const Departements: React.FC = () => {
  const { departments, loading } = useDepartments();

  // Affichage des squelettes pendant le chargement
  const renderDepartmentSkeletons = () => {
    return Array(5).fill(null).map((_, index) => (
      <div key={index} className="mb-16">
        <Skeleton className="h-[400px] w-full rounded-lg mb-6" />
        <div className="space-y-4">
          <div className="flex items-center">
            <Skeleton className="h-12 w-12 rounded-full mr-4" />
            <Skeleton className="h-6 w-48" />
          </div>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-4 w-full" />
          <div className="space-y-2 pt-4">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-3/5" />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Nos Départements" 
        subtitle="Découvrez nos équipes spécialisées et leurs domaines d'expertise dans le traitement des données géographiques."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Une expertise complète en cartographie
            </h2>
            <div className="w-20 h-1 bg-geoplan-red mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Chez GeoPlan, nous avons organisé nos activités en départements spécialisés pour mieux répondre aux besoins spécifiques de nos clients dans différents domaines de la cartographie et de la modélisation.
            </p>
          </AnimatedSection>

          <div className="space-y-20">
            {loading ? (
              renderDepartmentSkeletons()
            ) : (
              departments.map((dept, index) => (
                <AnimatedSection key={dept.id} delay={100 * index} className="w-full">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="overflow-hidden rounded-xl shadow-xl">
                        <img 
                          src={dept.image_src} 
                          alt={dept.name} 
                          className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110" 
                        />
                      </div>
                    </div>
                    
                    <div className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="flex items-center mb-4">
                        <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          {getIconComponent(dept.icon)}
                        </div>
                        <h3 className="text-2xl font-display font-bold text-geoplan-red">{dept.name}</h3>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-foreground mb-4">{dept.title}</h4>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {dept.description}
                      </p>
                      
                      <Separator className="my-6" />
                      
                      <h5 className="font-medium text-foreground mb-4">Nos services :</h5>
                      <ul className="space-y-2">
                        {dept.services?.map((service, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-geoplan-red mr-2">•</span>
                            <span className="text-muted-foreground">{service}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8">
                        <a 
                          href="#contact" 
                          className="inline-flex items-center justify-center bg-geoplan-red hover:bg-geoplan-red/90 text-white py-3 px-6 rounded-md font-medium transition-all duration-300 hover-lift"
                        >
                          En savoir plus
                        </a>
                      </div>
                    </div>
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

export default Departements;
