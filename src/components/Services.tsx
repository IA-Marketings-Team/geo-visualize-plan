import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';
import { Building, MapPin, PenTool, Mountain, Lightbulb } from 'lucide-react';
import { useServices } from '@/hooks/useDataApi';
import { Skeleton } from '@/components/ui/skeleton';
import { LucideIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// Fonction pour mapper les noms d'icônes aux composants Lucide
const getIconComponent = (iconName: string): LucideIcon => {
  const icons: Record<string, LucideIcon> = {
    'Building': Building,
    'MapPin': MapPin,
    'PenTool': PenTool,
    'Mountain': Mountain,
    'Lightbulb': Lightbulb
  };

  return icons[iconName] || Building;
};

const Services: React.FC = () => {
  const { services, loading } = useServices();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Images correspondant à chaque service
  const serviceImages = {
    'Plans 2D': '/Plan2d(1).jpeg',
    'Modélisation 3D': '/modelisation.jpeg',
    'Plans topographiques': '/topographie.png',
    'SIG': '/sig.PNG',
    'Rendus réalistes': '/rendu_interieur.PNG'
  };

  // Service par défaut si le backend ne retourne pas de données
  const defaultServices = [
    {
      id: '1',
      title: 'Plans 2D',
      description: "Création de plans précis et à l'échelle pour vos projets d'architecture et d'urbanisme.",
      icon: 'PenTool'
    },
    {
      id: '2',
      title: 'Modélisation 3D',
      description: "Modélisation tridimensionnelle de vos bâtiments et espaces pour une visualisation complète.",
      icon: 'Building'
    },
    {
      id: '3',
      title: 'Plans topographiques',
      description: "Relevés et plans topographiques de haute précision pour vos terrains et zones d'intervention.",
      icon: 'Mountain'
    },
    {
      id: '4',
      title: 'SIG',
      description: "Systèmes d'Information Géographique pour la gestion et l'analyse de vos données spatiales.",
      icon: 'MapPin'
    },
    {
      id: '5',
      title: 'Rendus réalistes',
      description: "Images de synthèse photoréalistes de vos projets pour une communication efficace et impactante.",
      icon: 'Lightbulb'
    }
  ];

  // Affichage des squelettes pendant le chargement
  const renderServiceSkeletons = () => {
    return Array(5).fill(null).map((_, index) => (
      <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full">
        <div className="flex flex-col h-full space-y-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-6 w-3/4 bg-white/20" />
          <Skeleton className="h-20 w-full bg-white/20" />
        </div>
      </div>
    ));
  };

  // Utilise les services du backend ou les services par défaut si aucune donnée
  const displayServices = services.length > 0 ? services : defaultServices;

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
            displayServices.map((service, index) => (
              <Dialog key={service.id}>
                <DialogTrigger asChild>
                  <div onClick={() => setSelectedService(service.title)}>
                    <ServiceCard
                      icon={getIconComponent(service.icon)}
                      title={service.title}
                      description={service.description}
                      delay={100 + index * 100}
                      style={{height:"200px"}} // Assurez-vous que la carte prend toute la hauteur disponible
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px]">
                  <DialogTitle className="text-xl font-semibold mb-4 text-geoplan-red">{service.title}</DialogTitle>
                  <div className="space-y-4">
                    <div  className="rounded-lg overflow-hidden h-48"> {/* Fixe la hauteur de l'image */}
                      <img
                        src={serviceImages[service.title]}
                        alt={service.title}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => setSelectedImage(serviceImages[service.title])}
                      />
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="pt-4">
                      <Link
                        to="/services"
                        className="inline-flex items-center justify-center bg-geoplan-red hover:bg-geoplan-red/90 text-white py-2 px-4 rounded-md font-medium transition-all duration-300"
                      >
                        En savoir plus
                      </Link>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))
          )}
        </div>
      </div>

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="sm:max-w-[90%]">
            <img
              src={selectedImage}
              alt="Agrandie"
              style={{width:"auto", height:'400px'}}
              className=" m-auto h-auto object-contain"
            />
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Services;
