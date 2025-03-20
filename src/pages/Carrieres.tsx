
import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import { Briefcase, Heart, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useJobOffers } from '@/hooks/useDataApi';
import { Skeleton } from '@/components/ui/skeleton';

const Carrieres: React.FC = () => {
  const { jobOffers, loading } = useJobOffers();

  // Offres d'emploi par défaut si le backend ne retourne pas de données
  const defaultJobOffers = [
    {
      id: '1',
      title: 'Cartographe spécialiste Plans 2D',
      location: 'Paris, France',
      type: 'CDI',
      description: 'Rejoignez notre équipe pour créer des plans 2D de haute précision pour nos clients. Vous maîtrisez AutoCAD et avez une expérience en dessin technique.',
      date: '03 mars 2024'
    },
    {
      id: '2',
      title: 'Modélisateur 3D confirmé',
      location: 'Lyon, France',
      type: 'CDI',
      description: 'Nous recherchons un expert en modélisation 3D pour créer des maquettes virtuelles détaillées pour nos clients dans le secteur de l\'architecture et de l\'urbanisme.',
      date: '15 avril 2024'
    },
    {
      id: '3',
      title: 'Ingénieur topographe',
      location: 'Marseille, France',
      type: 'CDI',
      description: 'Pour renforcer notre équipe de plans topographiques, nous recrutons un ingénieur spécialisé avec expérience dans les relevés de terrain précis.',
      date: '28 février 2024'
    },
    {
      id: '4',
      title: 'Développeur SIG',
      location: 'Bordeaux, France',
      type: 'CDI',
      description: 'Rejoignez notre département SIG pour développer et maintenir des solutions cartographiques avancées pour nos clients institutionnels et privés.',
      date: '10 mai 2024'
    },
    {
      id: '5',
      title: 'Infographiste 3D - Rendus réalistes',
      location: 'Nantes, France',
      type: 'CDD (6 mois)',
      description: 'Nous cherchons un talent pour créer des rendus photoréalistes de haute qualité pour nos projets architecturaux et urbains les plus prestigieux.',
      date: '22 avril 2024'
    }
  ];

  // Affichage des squelettes pendant le chargement
  const renderJobSkeletons = () => {
    return Array(4).fill(null).map((_, index) => (
      <AnimatedSection key={index} delay={100 + index * 50}>
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <Skeleton className="h-6 w-40 mb-2" />
                <Skeleton className="h-4 w-32" />
              </div>
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-16 w-full mb-3" />
            <Skeleton className="h-5 w-32" />
          </CardContent>
        </Card>
      </AnimatedSection>
    ));
  };

  // Utilise les offres du backend ou les offres par défaut si aucune donnée
  const displayJobOffers = jobOffers.length > 0 ? jobOffers : defaultJobOffers;

  return (
    <PageLayout>
      <PageHeader 
        title="Carrières" 
        subtitle="Rejoignez notre équipe de passionnés et participez à des projets innovants dans le domaine de la cartographie."
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Travailler chez GeoPlan
            </h2>
            <div className="w-20 h-1 bg-geoplan-red mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Rejoindre GeoPlan, c'est intégrer une équipe dynamique et passionnée, dans un environnement de travail stimulant et bienveillant.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={100}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-geoplan-red/10 rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-geoplan-red" />
                  </div>
                  <CardTitle>Offres d'emploi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Nous proposons régulièrement des opportunités professionnelles pour des profils variés : cartographes, ingénieurs, développeurs, designers 3D...
                  </p>
                  <p className="text-muted-foreground">
                    Consultez nos offres d'emploi ci-dessous ou envoyez-nous une candidature spontanée.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-geoplan-red/10 rounded-full flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-geoplan-red" />
                  </div>
                  <CardTitle>Bien-être au travail</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Nous accordons une importance particulière au bien-être et à la qualité de vie au travail de nos collaborateurs.
                  </p>
                  <p className="text-muted-foreground">
                    Équilibre vie professionnelle/vie personnelle, environnement de travail agréable, activités de team building régulières...
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-geoplan-red/10 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-geoplan-red" />
                  </div>
                  <CardTitle>Formation et développement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Nous investissons dans le développement professionnel de nos équipes à travers des formations régulières.
                  </p>
                  <p className="text-muted-foreground">
                    Nos collaborateurs ont accès à des programmes de formation pour renforcer leurs compétences et explorer de nouveaux domaines.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          
          <AnimatedSection className="mb-10">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">Nos offres d'emploi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? (
                renderJobSkeletons()
              ) : (
                displayJobOffers.map((job, index) => (
                  <AnimatedSection key={job.id} delay={100 + index * 50}>
                    <Card className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{job.title}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">{job.location} | {job.type}</p>
                          </div>
                          <div className="flex items-center">
                            <Badge variant="outline" className="bg-geoplan-red/10 text-geoplan-red border-geoplan-red/20">
                              {job.date ? `Publié le ${job.date}` : 'Nouveau'}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        <button className="text-geoplan-red font-medium hover:underline">
                          Voir l'offre complète →
                        </button>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))
              )}
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Vous ne trouvez pas l'offre qui vous correspond ?</h3>
            <p className="text-muted-foreground mb-6">
              N'hésitez pas à nous envoyer une candidature spontanée en précisant vos compétences et le poste qui vous intéresse.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-geoplan-red hover:bg-geoplan-red/90 text-white py-3 px-8 rounded-md font-medium transition-all duration-300 hover-lift"
            >
              Candidature spontanée
            </a>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Carrieres;
