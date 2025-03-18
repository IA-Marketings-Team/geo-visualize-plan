
import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import { Calendar, User, ChevronRight } from 'lucide-react';

const Actualites: React.FC = () => {
  const news = [
    {
      id: 1,
      title: "GeoPlan participe au salon de la cartographie numérique 2023",
      date: "15 novembre 2023",
      author: "Équipe GeoPlan",
      excerpt: "Notre équipe sera présente au salon international de la cartographie numérique pour présenter nos dernières innovations en matière de plans 3D et de visualisations interactives.",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop",
      category: "Événement"
    },
    {
      id: 2,
      title: "Nouveau service : rendus photoréalistes pour projets architecturaux",
      date: "28 octobre 2023",
      author: "Service Marketing",
      excerpt: "GeoPlan lance un nouveau service de rendus photoréalistes permettant aux architectes et promoteurs immobiliers de visualiser leurs projets avec un niveau de détail sans précédent.",
      image: "https://images.unsplash.com/photo-1574691250077-03a929faece5?q=80&w=2069&auto=format&fit=crop",
      category: "Service"
    },
    {
      id: 3,
      title: "Projet: modélisation 3D du quartier historique de Lyon",
      date: "12 octobre 2023",
      author: "Département CityMap",
      excerpt: "Notre équipe vient de finaliser un projet ambitieux de modélisation 3D du quartier historique de Lyon, permettant une visualisation immersive de ce patrimoine exceptionnel.",
      image: "https://images.unsplash.com/photo-1640091425394-9c97ef86a6d7?q=80&w=2062&auto=format&fit=crop",
      category: "Projet"
    },
    {
      id: 4,
      title: "GeoPlan recrute : rejoignez notre équipe de cartographes",
      date: "5 octobre 2023",
      author: "Ressources Humaines",
      excerpt: "Dans le cadre de notre expansion, nous recherchons de nouveaux talents pour renforcer notre équipe de cartographes. Découvrez les postes à pourvoir et postulez dès maintenant.",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=2070&auto=format&fit=crop",
      category: "Recrutement"
    },
    {
      id: 5,
      title: "Importance des données géographiques dans l'urbanisme moderne",
      date: "18 septembre 2023",
      author: "Jean Dupont, Directeur technique",
      excerpt: "Comment les données géographiques et les plans précis transforment l'urbanisme moderne et permettent une meilleure planification des espaces urbains.",
      image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=2072&auto=format&fit=crop",
      category: "Article"
    },
    {
      id: 6,
      title: "Collaboration avec la municipalité de Bordeaux",
      date: "2 septembre 2023",
      author: "Département InfraMap",
      excerpt: "GeoPlan annonce un partenariat avec la municipalité de Bordeaux pour la réalisation de plans détaillés des infrastructures urbaines et des réseaux souterrains.",
      image: "https://images.unsplash.com/photo-1613743990305-2380af8f7300?q=80&w=2070&auto=format&fit=crop",
      category: "Partenariat"
    }
  ];

  return (
    <PageLayout>
      <PageHeader 
        title="Actualités" 
        subtitle="Découvrez les dernières nouvelles, projets et événements de GeoPlan."
        backgroundImage="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Nos dernières actualités
                </h2>
                <div className="w-20 h-1 bg-geoplan-red mb-6"></div>
                <p className="text-muted-foreground">
                  Restez informé des dernières nouvelles de GeoPlan, nos projets récents, nos innovations technologiques et nos événements à venir.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 bg-geoplan-red/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-geoplan-red text-white rounded-full w-24 h-24 flex items-center justify-center">
                      <div className="text-center">
                        <span className="block text-2xl font-bold">{news.length}</span>
                        <span className="text-xs">articles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <AnimatedSection key={article.id} delay={100 + index * 50}>
                <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium uppercase tracking-wider text-geoplan-red bg-geoplan-red/10 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-geoplan-red transition-colors duration-300 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-muted-foreground text-xs">
                        <User className="h-3 w-3 mr-1" />
                        {article.author}
                      </div>
                      <a 
                        href="#" 
                        className="text-geoplan-red text-sm font-medium flex items-center hover:underline"
                      >
                        Lire plus
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <button className="inline-flex items-center justify-center border border-geoplan-red text-geoplan-red hover:bg-geoplan-red hover:text-white py-3 px-8 rounded-md font-medium transition-all duration-300">
              Charger plus d'articles
            </button>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Actualites;
