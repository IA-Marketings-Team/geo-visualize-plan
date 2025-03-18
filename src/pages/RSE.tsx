
import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import { Heart, Users, Leaf, Award, Globe } from 'lucide-react';

const RSE: React.FC = () => {
  const rseCommitments = [
    {
      icon: Users,
      title: "Valorisation des collaborateurs",
      content: "Nous mettons nos collaborateurs au cœur de notre stratégie en favorisant leur bien-être, leur développement professionnel et l'équité au sein de l'entreprise."
    },
    {
      icon: Heart,
      title: "Satisfaction des clients",
      content: "Nous nous engageons à fournir des solutions de haute qualité, adaptées aux besoins spécifiques de nos clients, dans le respect des délais et des budgets convenus."
    },
    {
      icon: Leaf,
      title: "Respect de l'environnement",
      content: "Nous œuvrons à réduire notre empreinte écologique par des pratiques responsables dans nos opérations quotidiennes et dans le développement de nos solutions."
    },
    {
      icon: Globe,
      title: "Soutien aux communautés",
      content: "Nous participons activement au développement des communautés locales par le biais d'initiatives sociales, d'emplois et de partenariats avec des acteurs locaux."
    },
    {
      icon: Award,
      title: "Éthique et transparence",
      content: "Nous menons nos activités avec intégrité, transparence et dans le respect des normes éthiques les plus strictes, en insistant sur la confidentialité des données."
    }
  ];

  return (
    <PageLayout>
      <PageHeader 
        title="Responsabilité Sociétale" 
        subtitle="Découvrez notre engagement en matière de responsabilité sociale, environnementale et économique."
        backgroundImage="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Notre engagement RSE
            </h2>
            <div className="w-20 h-1 bg-geoplan-red mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chez GeoPlan, la responsabilité sociétale de l'entreprise est au cœur de notre stratégie. Nous nous engageons à avoir un impact positif sur notre environnement, nos collaborateurs et la société dans son ensemble.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {rseCommitments.map((commitment, index) => (
              <AnimatedSection key={index} delay={100 + index * 50}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow h-full border border-gray-100">
                  <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <commitment.icon className="h-6 w-6 text-geoplan-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{commitment.title}</h3>
                  <p className="text-muted-foreground">{commitment.content}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <img 
                src="https://images.unsplash.com/photo-1507025646582-49e021ad43cc?q=80&w=1976&auto=format&fit=crop" 
                alt="Engagement environnemental" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={200} direction="right">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">Actions environnementales</h3>
              <div className="w-20 h-1 bg-geoplan-red mb-6"></div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-geoplan-red mr-3 mt-1">•</span>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Réduction de notre empreinte carbone</strong> : Optimisation de nos déplacements professionnels, encouragement du télétravail et des mobilités douces.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-geoplan-red mr-3 mt-1">•</span>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Gestion responsable des ressources</strong> : Réduction de notre consommation d'énergie et d'eau, gestion optimisée des déchets et promotion du recyclage.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-geoplan-red mr-3 mt-1">•</span>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Solutions éco-responsables</strong> : Développement de solutions cartographiques qui favorisent une meilleure gestion des ressources naturelles et des espaces urbains.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-geoplan-red mr-3 mt-1">•</span>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Sensibilisation</strong> : Organisation régulière d'ateliers et d'événements pour sensibiliser nos équipes aux enjeux environnementaux.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-geoplan-darkblue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={100} direction="right">
              <h3 className="text-2xl font-display font-bold mb-6">Engagement social</h3>
              <div className="w-20 h-1 bg-geoplan-red mb-6"></div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-geoplan-red mr-3 mt-1">•</span>
                  <p className="text-white/80">
                    <strong className="text-white">Diversité et inclusion</strong> : Promotion de la diversité au sein de nos équipes et lutte contre toutes formes de discrimination.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-geoplan-red mr-3 mt-1">•</span>
                  <p className="text-white/80">
                    <strong className="text-white">Partenariats éducatifs</strong> : Collaboration avec des écoles et universités pour former la prochaine génération de cartographes et d'ingénieurs.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-geoplan-red mr-3 mt-1">•</span>
                  <p className="text-white/80">
                    <strong className="text-white">Projets communautaires</strong> : Soutien à des initiatives locales et participation à des projets d'intérêt général.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-geoplan-red mr-3 mt-1">•</span>
                  <p className="text-white/80">
                    <strong className="text-white">Bien-être au travail</strong> : Organisation d'activités sportives, culturelles et artistiques pour renforcer la cohésion et le bien-être de nos équipes.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} direction="right">
              <img 
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" 
                alt="Engagement social" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RSE;
