import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import { MapPin, Building, PenTool, Mountain, Lightbulb } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useServices } from '@/hooks/useDataApi';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

// Fonction pour mapper les noms d'icônes aux composants Lucide
const getIconComponent = (iconName) => {
  const icons = {
    'MapPin': <MapPin className="h-6 w-6 text-geoplan-red" />,
    'Building': <Building className="h-6 w-6 text-geoplan-red" />,
    'PenTool': <PenTool className="h-6 w-6 text-geoplan-red" />,
    'Mountain': <Mountain className="h-6 w-6 text-geoplan-red" />,
    'Lightbulb': <Lightbulb className="h-6 w-6 text-geoplan-red" />
  };

  return icons[iconName] || <MapPin className="h-6 w-6 text-geoplan-red" />;
};

const Services = () => {
  const { services, loading } = useServices();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  // Images principales correspondant à chaque service
  const serviceImages = {
    'Plans 2D': '/Plan2d(1).jpeg',
    'Modélisation 3D': '/modelisation.jpeg',
    'Plans topographiques': '/Planstopographiques.png',
    'SIG': '/sig.PNG',
    'Rendus réalistes': '/rendu_interieur.PNG'
  };

  // Images secondaires pour chaque service
  const secondaryImages = {
    'Plans 2D': '/1.png',
    'Modélisation 3D': '/architecture2.PNG',
    'Plans topographiques': '/topographie.png',
    'SIG': '/sig2.PNG',
    'Rendus réalistes': '/rendu_interieur2.PNG'
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

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
              Chez Geo-architectural, nous proposons une gamme complète de services cartographiques de haute précision, adaptés aux besoins spécifiques de chaque client et chaque projet.
            </p>
          </AnimatedSection>

          <div className="space-y-20">
            {loading ? (
              renderServiceSkeletons()
            ) : (
              displayServices.map((service, index) => (
                <AnimatedSection key={service.id} delay={100 * index} className="w-full">
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className={`grid grid-cols-1 lg:grid-cols-6 gap-0 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                      <div className={`lg:col-span-4 order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="overflow-hidden">
                            <img
                              src={serviceImages[service.title]}
                              onClick={() => openModal(serviceImages[service.title])}
                              onError={(e) => {
                                console.error(`Erreur de chargement de l'image pour ${service.title}`);
                                e.target.onerror = null; // évite les boucles infinies
                              }}
                              alt={`${service.title} - image principale`}
                              className="rounded w-full h-60 object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                            />
                          </div>
                          <div className="overflow-hidden">
                            <img
                              src={secondaryImages[service.title] || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop'}
                              onClick={() => openModal(secondaryImages[service.title])}
                              alt={`${service.title} - image secondaire`}
                              className="rounded w-full h-60 object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>

                      <CardContent className={`lg:col-span-2 order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'} p-8`}>
                        <div className="flex items-center mb-4">
                          <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                            {getIconComponent(service.icon)}
                          </div>
                          <h3 className="text-xl font-display font-bold text-geoplan-red">{service.title}</h3>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        <Separator className="my-6" />

                        <div className="mt-8">
                          <a
                            href="/contact"
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

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white p-8 rounded-lg max-w-4xl w-full">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img src={selectedImage} alt="Image agrandie" className="w-full h-auto rounded-lg max-h-[80vh]" />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Services;
