
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import { Briefcase, Heart, GraduationCap, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useJobOffers } from '@/hooks/useDataApi';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Carrieres: React.FC = () => {
  const { jobOffers, loading } = useJobOffers();
  const [selectedJob, setSelectedJob] = useState<any>(null);

  // Offres d'emploi par défaut si le backend ne retourne pas de données
  const defaultJobOffers = [
    {
      id: '1',
      title: 'Cartographe spécialiste Plans 2D',
      location: 'Antananarivo, Madagascar',
      type: 'CDI',
      description: 'Rejoignez notre équipe pour créer des plans 2D de haute précision pour nos clients. Vous maîtrisez AutoCAD et avez une expérience en dessin technique.',
      date: '03 mars 2024',
      fullDescription: `<h4>Votre rôle</h4>
        <ul>
          <li>Créer des plans 2D précis pour des projets architecturaux et urbains</li>
          <li>Collaborer avec l'équipe de conception et les clients</li>
          <li>Respecter les normes et les spécifications techniques</li>
          <li>Assurer un contrôle qualité des livrables</li>
        </ul>
        
        <h4>Compétences requises</h4>
        <ul>
          <li>Maîtrise d'AutoCAD ou logiciel similaire</li>
          <li>3+ ans d'expérience en cartographie ou dessin technique</li>
          <li>Connaissance des normes de dessin architectural</li>
          <li>Capacité à travailler en équipe et à respecter les délais</li>
        </ul>
        
        <h4>Ce que nous offrons</h4>
        <ul>
          <li>Environnement de travail stimulant</li>
          <li>Formation continue et développement professionnel</li>
          <li>Projets variés et challengeants</li>
          <li>Avantages sociaux compétitifs</li>
        </ul>`
    },
    {
      id: '2',
      title: 'Modélisateur 3D confirmé',
      location: 'Tamatave, Madagascar',
      type: 'CDI',
      description: 'Nous recherchons un expert en modélisation 3D pour créer des maquettes virtuelles détaillées pour nos clients dans le secteur de l\'architecture et de l\'urbanisme.',
      date: '15 avril 2024',
      fullDescription: `<h4>Votre rôle</h4>
        <ul>
          <li>Créer des modèles 3D détaillés de bâtiments et environnements</li>
          <li>Participer à l'élaboration de maquettes numériques BIM</li>
          <li>Assurer la cohérence entre les modèles 3D et les plans 2D</li>
          <li>Préparer les fichiers pour d'autres applications (rendus, simulations...)</li>
        </ul>
        
        <h4>Compétences requises</h4>
        <ul>
          <li>Maîtrise de logiciels 3D (Revit, 3ds Max, SketchUp...)</li>
          <li>Expérience en modélisation architecturale</li>
          <li>Connaissance des principes BIM</li>
          <li>Sens esthétique et souci du détail</li>
        </ul>
        
        <h4>Ce que nous offrons</h4>
        <ul>
          <li>Équipement informatique de pointe</li>
          <li>Projets innovants et variés</li>
          <li>Développement professionnel continu</li>
          <li>Horaires flexibles</li>
        </ul>`
    },
    {
      id: '3',
      title: 'Ingénieur topographe',
      location: 'Toamasina, Madagascar',
      type: 'CDI',
      description: 'Pour renforcer notre équipe de plans topographiques, nous recrutons un ingénieur spécialisé avec expérience dans les relevés de terrain précis.',
      date: '28 février 2024',
      fullDescription: `<h4>Votre rôle</h4>
        <ul>
          <li>Réaliser des relevés topographiques sur le terrain</li>
          <li>Traiter et analyser les données collectées</li>
          <li>Produire des plans topographiques détaillés</li>
          <li>Conseiller les clients sur les aspects techniques</li>
        </ul>
        
        <h4>Compétences requises</h4>
        <ul>
          <li>Diplôme d'ingénieur en topographie ou géomètre</li>
          <li>Maîtrise des instruments de mesure (station totale, GPS...)</li>
          <li>Expérience avec les logiciels de traitement topographique</li>
          <li>Aptitude au travail de terrain</li>
        </ul>
        
        <h4>Ce que nous offrons</h4>
        <ul>
          <li>Équipement technique de dernière génération</li>
          <li>Véhicule de service pour les déplacements</li>
          <li>Formation continue aux nouvelles technologies</li>
          <li>Évolution de carrière dans un secteur en croissance</li>
        </ul>`
    },
    {
      id: '4',
      title: 'Développeur SIG',
      location: 'Majunga, Madagascar',
      type: 'CDI',
      description: 'Rejoignez notre département SIG pour développer et maintenir des solutions cartographiques avancées pour nos clients institutionnels et privés.',
      date: '10 mai 2024',
      fullDescription: `<h4>Votre rôle</h4>
        <ul>
          <li>Développer et maintenir des applications SIG</li>
          <li>Intégrer et traiter des données géospatiales</li>
          <li>Créer des visualisations cartographiques interactives</li>
          <li>Automatiser des processus d'analyse spatiale</li>
        </ul>
        
        <h4>Compétences requises</h4>
        <ul>
          <li>Expérience avec les plateformes SIG (ArcGIS, QGIS...)</li>
          <li>Compétences en programmation (Python, JavaScript)</li>
          <li>Connaissance des bases de données spatiales</li>
          <li>Capacité à comprendre les besoins métier</li>
        </ul>
        
        <h4>Ce que nous offrons</h4>
        <ul>
          <li>Environnement technique stimulant</li>
          <li>Collaboration avec experts en données spatiales</li>
          <li>Projets innovants à impact social/environnemental</li>
          <li>Flexibilité et autonomie dans le travail</li>
        </ul>`
    },
    {
      id: '5',
      title: 'Infographiste 3D - Rendus réalistes',
      location: 'Fianarantsoa, Madagascar',
      type: 'CDD (6 mois)',
      description: 'Nous cherchons un talent pour créer des rendus photoréalistes de haute qualité pour nos projets architecturaux et urbains les plus prestigieux.',
      date: '22 janvier 2024',
      fullDescription: `<h4>Votre rôle</h4>
        <ul>
          <li>Créer des rendus photoréalistes à partir de modèles 3D</li>
          <li>Mettre en place des ambiances et éclairages adaptés aux projets</li>
          <li>Texturer et habiller les scènes 3D</li>
          <li>Participer à la présentation visuelle des projets</li>
        </ul>
        
        <h4>Compétences requises</h4>
        <ul>
          <li>Maîtrise des logiciels de rendu (V-Ray, Corona, Lumion...)</li>
          <li>Excellente compréhension de la lumière et des matériaux</li>
          <li>Portfolio démontrant des compétences en rendu architectural</li>
          <li>Connaissance des logiciels de post-traitement (Photoshop...)</li>
        </ul>
        
        <h4>Ce que nous offrons</h4>
        <ul>
          <li>Travail sur des projets architecturaux prestigieux</li>
          <li>Environnement créatif et collaboratif</li>
          <li>Équipement informatique performant</li>
          <li>Possibilité d'évolution vers un CDI</li>
        </ul>`
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

  // Ouvrir la modal avec les détails de l'offre
  const handleOpenJobDetails = (job: any) => {
    setSelectedJob(job);
  };

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
              Travailler chez Geo-architectural
            </h2>
            <div className="w-20 h-1 bg-geoplan-red mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Rejoindre Geo-architectural, c'est intégrer une équipe dynamique et passionnée, dans un environnement de travail stimulant et bienveillant.
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
                        <Button 
                          variant="ghost" 
                          className="text-geoplan-red font-medium hover:text-geoplan-red/90 hover:bg-geoplan-red/5 p-0"
                          onClick={() => handleOpenJobDetails(job)}
                        >
                          Voir l'offre complète →
                        </Button>
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

      {/* Modal pour afficher l'offre complète */}
      <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle className="text-2xl font-display text-geoplan-red">{selectedJob?.title}</DialogTitle>
              <DialogClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </div>
            <div className="flex items-center mt-2">
              <Badge className="mr-2 bg-geoplan-red/10 text-geoplan-red border-0">
                {selectedJob?.type}
              </Badge>
              <DialogDescription>
                {selectedJob?.location} | Publié le {selectedJob?.date}
              </DialogDescription>
            </div>
          </DialogHeader>
          
          <div className="mt-6 space-y-6">
            <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: selectedJob?.fullDescription }} />
            
            <div className="pt-4 border-t">
              <h4 className="text-lg font-semibold mb-4">Postuler à cette offre</h4>
              <p className="text-muted-foreground mb-4">
                Envoyez-nous votre CV et une lettre de motivation en précisant l'intitulé du poste à l'adresse :
                <a href="mailto:recrutement@geoplan.com" className="text-geoplan-red font-medium ml-1">recrutement@geoplan.com</a>
              </p>
              <Button className="bg-geoplan-red hover:bg-geoplan-red/90 text-white">
                Postuler maintenant
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default Carrieres;
