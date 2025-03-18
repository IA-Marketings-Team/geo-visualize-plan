
import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import { MapPin, Building, Mountain, Globe, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Departements: React.FC = () => {
  const departments = [
    {
      icon: MapPin,
      name: "UnderMap",
      title: "Spécialiste des réseaux enterrés",
      description: "Notre département UnderMap se spécialise dans la cartographie précise des réseaux enterrés, permettant une visualisation claire et détaillée des infrastructures souterraines.",
      services: [
        "Plans de synthèse des réseaux enterrés",
        "Géoréférencement de précision",
        "Détection et cartographie des réseaux",
        "Modélisation 3D des infrastructures souterraines"
      ],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: Building,
      name: "BuildingMap",
      title: "Modélisation 3D BIM pour bâtiments",
      description: "BuildingMap accompagne les architectes, géomètres et maîtres d'ouvrage dans la conception de maquettes numériques BIM qui facilitent la gestion des projets de construction.",
      services: [
        "Maquettes BIM de bâtiments existants",
        "Plans d'architecture détaillés",
        "Modélisation 3D d'intérieurs et d'extérieurs",
        "Plans de façade et coupes architecturales"
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
    },
    {
      icon: Mountain,
      name: "InfraMap",
      title: "Traitement de données LIDAR pour infrastructures",
      description: "InfraMap se concentre sur l'acquisition et le traitement de données LIDAR pour produire des plans précis des infrastructures routières, ferroviaires ou électriques.",
      services: [
        "Relevés LIDAR haute précision",
        "Modélisation d'infrastructures de transport",
        "Plans 2D et 3D d'installations industrielles",
        "Analyses topographiques de terrain"
      ],
      image: "https://images.unsplash.com/photo-1494412519320-aa613df9ec67?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: Globe,
      name: "CityMap",
      title: "Maquettes numériques urbaines",
      description: "CityMap crée des représentations numériques complètes des environnements urbains, permettant une meilleure planification et gestion des espaces publics.",
      services: [
        "Modélisation 3D de quartiers et villes",
        "Plans cadastraux numériques",
        "Visualisations urbaines pour projets d'aménagement",
        "Cartographie des espaces verts et zones urbaines"
      ],
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop"
    },
    {
      icon: Code,
      name: "BeyondMap",
      title: "Développement d'applications web et mobiles",
      description: "BeyondMap développe des solutions logicielles sur mesure pour exploiter et visualiser les données cartographiques, avec des applications web, API et plateformes SIG.",
      services: [
        "Applications web cartographiques",
        "Solutions mobiles de géolocalisation",
        "Plateformes SIG personnalisées",
        "Visualisation de données géospatiales"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    }
  ];

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
            {departments.map((dept, index) => (
              <AnimatedSection key={dept.name} delay={100 * index} className="w-full">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="overflow-hidden rounded-xl shadow-xl">
                      <img 
                        src={dept.image} 
                        alt={dept.name} 
                        className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110" 
                      />
                    </div>
                  </div>
                  
                  <div className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <dept.icon className="h-6 w-6 text-geoplan-red" />
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
                      {dept.services.map((service, i) => (
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
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Departements;
