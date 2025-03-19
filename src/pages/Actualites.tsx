
import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { useNews } from '@/hooks/useDataApi';
import { Skeleton } from '@/components/ui/skeleton';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

const Actualites: React.FC = () => {
  const { news, loading } = useNews();

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'dd MMMM yyyy', { locale: fr });
    } catch (error) {
      console.error('Invalid date format:', dateString);
      return dateString;
    }
  };

  // Affichage des squelettes pendant le chargement
  const renderNewsSkeletons = () => {
    return Array(6).fill(null).map((_, index) => (
      <div key={index} className="border rounded-xl overflow-hidden shadow-sm">
        <Skeleton className="h-48 w-full" />
        <div className="p-6 space-y-4">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-20 rounded" />
            <Skeleton className="h-4 w-24 rounded" />
          </div>
          <Skeleton className="h-6 w-full rounded" />
          <Skeleton className="h-20 w-full rounded" />
          <div className="flex justify-between">
            <Skeleton className="h-4 w-32 rounded" />
            <Skeleton className="h-4 w-16 rounded" />
          </div>
        </div>
      </div>
    ));
  };

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
                        <span className="block text-2xl font-bold">{loading ? '...' : news.length}</span>
                        <span className="text-xs">articles</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              renderNewsSkeletons()
            ) : (
              news.map((article, index) => (
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
                          {formatDate(article.date)}
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
              ))
            )}
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
