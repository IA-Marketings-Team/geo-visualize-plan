
import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';
import { Users, Target, Star, TrendingUp } from 'lucide-react';

const NotrePage: React.FC = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Notre Groupe" 
        subtitle="Découvrez l'histoire, la mission et les valeurs qui font de GeoPlan un leader dans le domaine des solutions cartographiques."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2070&auto=format&fit=crop" 
                alt="Notre équipe" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={200} direction="right">
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">Notre Histoire</h2>
              <div className="w-20 h-1 bg-geoplan-red mb-6"></div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fondée en 2010 par une équipe d'ingénieurs passionnés par la cartographie et les technologies spatiales, GeoPlan s'est rapidement imposée comme un acteur majeur dans le domaine des solutions cartographiques.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Grâce à notre expertise technique et notre volonté constante d'innover, nous avons développé une gamme complète de services allant des plans 2D traditionnels aux rendus 3D photoréalistes, en passant par des solutions de cartographie numérique avancées.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Aujourd'hui, GeoPlan compte plus de 150 collaborateurs répartis dans nos bureaux en France et à l'international, et accompagne quotidiennement des clients de tous secteurs dans leurs projets d'aménagement et de visualisation spatiale.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-geoplan-darkblue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Notre Mission et Nos Valeurs</h2>
            <div className="w-20 h-1 bg-geoplan-red mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Guidés par notre passion pour l'innovation et l'excellence, nous nous efforçons de fournir des solutions cartographiques de haute qualité qui répondent précisément aux besoins de nos clients.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={100} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-geoplan-red" />
                </div>
                <h3 className="text-xl font-semibold">Notre Mission</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Faciliter l'accès aux données géographiques et spatiales pour tous nos clients, en proposant des solutions cartographiques précises, innovantes et adaptées à leurs besoins spécifiques. Notre objectif est de transformer des données complexes en visualisations claires et exploitables.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-geoplan-red" />
                </div>
                <h3 className="text-xl font-semibold">Notre Équipe</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Notre équipe est composée d'experts passionnés dans divers domaines : cartographes, ingénieurs, architectes, designers 3D et développeurs informatiques. Cette diversité nous permet d'aborder chaque projet sous différents angles et de proposer des solutions complètes et innovantes.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={300} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Star className="h-6 w-6 text-geoplan-red" />
                </div>
                <h3 className="text-xl font-semibold">Nos Valeurs</h3>
              </div>
              <ul className="text-white/80 leading-relaxed space-y-2">
                <li className="flex items-start">
                  <span className="text-geoplan-red mr-2">•</span>
                  <span><strong>Excellence</strong> : Nous visons l'excellence dans chaque aspect de notre travail, de la précision technique à la satisfaction client.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-geoplan-red mr-2">•</span>
                  <span><strong>Innovation</strong> : Nous investissons continuellement dans la recherche et le développement pour rester à la pointe de la technologie.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-geoplan-red mr-2">•</span>
                  <span><strong>Intégrité</strong> : Nous agissons avec honnêteté et transparence dans toutes nos relations professionnelles.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-geoplan-red mr-2">•</span>
                  <span><strong>Collaboration</strong> : Nous croyons en la puissance du travail d'équipe et de la coopération avec nos clients.</span>
                </li>
              </ul>
            </AnimatedSection>
            
            <AnimatedSection delay={400} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-geoplan-red" />
                </div>
                <h3 className="text-xl font-semibold">Notre Performance</h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">
                GeoPlan a connu une croissance constante depuis sa création, avec une expansion significative de nos activités et de notre équipe au cours des dernières années.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-geoplan-red mb-1">150+</span>
                  <span className="text-sm text-white/70">Collaborateurs</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-geoplan-red mb-1">500+</span>
                  <span className="text-sm text-white/70">Projets réalisés</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-geoplan-red mb-1">3</span>
                  <span className="text-sm text-white/70">Bureaux internationaux</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-geoplan-red mb-1">15+</span>
                  <span className="text-sm text-white/70">Années d'expérience</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotrePage;
