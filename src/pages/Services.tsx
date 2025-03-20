
import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import { MapPin, Building, PenTool, Mountain, Lightbulb } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useServices } from '@/hooks/useDataApi';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

// Fonction pour mapper les noms d'icônes aux composants Lucide
const getIconComponent = (iconName: string) => {
  const icons: Record<string, React.ReactElement> = {
    'MapPin': <MapPin className="h-6 w-6 text-geoplan-red" />,
    'Building': <Building className="h-6 w-6 text-geoplan-red" />,
    'PenTool': <PenTool className="h-6 w-6 text-geoplan-red" />,
    'Mountain': <Mountain className="h-6 w-6 text-geoplan-red" />,
    'Lightbulb': <Lightbulb className="h-6 w-6 text-geoplan-red" />
  };
  
  return icons[iconName] || <MapPin className="h-6 w-6 text-geoplan-red" />;
};

const Services: React.FC = () => {
  const { services, loading } = useServices();

  // Images correspondant à chaque service
  const serviceImages = {
    'Plans 2D': '/Plan2d(1).jpeg',
    'Modélisation 3D': '/modelisation.jpeg',
    'Plans topographique': '/topo1.png',
    'SIG': 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070&auto=format&fit=crop',
    'Rendus réalistes': '/rendu_interieur.PNG'
  };

  // Service par défaut si le backend ne retourne pas de données
  const defaultServices = [
    {
      id: '1',
      title: 'Plans 2D',
      description: "Création de plans précis et à l'échelle pour vos projets d'architecture et d'urbanisme. Nos plans 2D respectent les normes en vigueur et sont livrés dans les formats de votre choix.",
      icon: 'PenTool'
    },
    {
      id: '2',
      title: 'Modélisation 3D',
      description: "Modélisation tridimensionnelle de vos bâtiments et espaces, permettant une visualisation complète de votre projet sous tous les angles et à différentes échelles.",
      icon: 'Building'
    },
    {
      id: '3',
      title: 'Plans topographique',
      description: "Relevés et plans topographiques de haute précision pour vos terrains et zones d'intervention, intégrant les courbes de niveau et les éléments naturels du site.",
      icon: 'Mountain'
    },
    {
      id: '4',
      title: 'SIG',
      description: "Systèmes d'Information Géographique complets pour la gestion, l'analyse et la visualisation de vos données spatiales et informations géographiques.",
      icon: 'MapPin'
    },
    {
      id: '5',
      title: 'Rendus réalistes',
      description: "Images de synthèse photoréalistes de vos projets pour une communication efficace et impactante, tant pour les présentations commerciales que pour les concours.",
      icon: 'Lightbulb'
    }
  ];

  // Affichage des squelettes pendant le chargement
  const renderServiceSkeletons = () => {
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

  // Utilise les services du backend ou les services par défaut si aucune donnée
  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <PageLayout>
      <PageHeader 
        title="Nos Services" 
        subtitle="Découvrez l'éventail complet de nos services cartographiques et solutions de plans pour tous vos projets."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Notre expertise cartographique à votre service
            </h2>
            <div className="w-20 h-1 bg-geoplan-red mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Chez GeoPlan, nous proposons une gamme complète de services cartographiques de haute précision, adaptés aux besoins spécifiques de chaque client et chaque projet.
            </p>
          </AnimatedSection>

          <div className="space-y-20">
            {loading ? (
              renderServiceSkeletons()
            ) : (
              displayServices.map((service, index) => (
                <AnimatedSection key={service.id} delay={100 * index} className="w-full">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                      <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="overflow-hidden">
                          <img 
                            src={serviceImages[service.title] || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop'} 
                            alt={service.title} 
                            className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110" 
                          />
                        </div>
                      </div>
                      
                      <CardContent className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'} p-8`}>
                        <div className="flex items-center mb-4">
                          <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                            {getIconComponent(service.icon)}
                          </div>
                          <h3 className="text-2xl font-display font-bold text-geoplan-red">{service.title}</h3>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <Separator className="my-6" />
                        
                        <div className="mt-8">
                          <a 
                            href="#contact" 
                            className="inline-flex items-center justify-center bg-geoplan-red hover:bg-geoplan-red/90 text-white py-3 px-6 rounded-md font-medium transition-all duration-300 hover-lift"
                          >
                            Demander un devis
                          </a>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </AnimatedSection>
              ))
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
