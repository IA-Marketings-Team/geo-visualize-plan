
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';
import { Building, Users, Award } from 'lucide-react';

const Index: React.FC = () => {
  // For animating elements when they come into view
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.9) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  // Project showcase data
  const projects = [
    {
      imageSrc: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
      title: "Résidence Les Terrasses",
      category: "Plan de façade"
    },
    {
      imageSrc: "/sitting_room.jpg",
      title: "Loft Urban Design",
      category: "Plan d'intérieur"
    },
    {
      imageSrc: "/blueprint.jpg",
      title: "Parc Central",
      category: "Plan topographique"
    },
    {
      imageSrc: "/caim.jpg",
      title: "Complexe Harmonie",
      category: "Rendu réaliste"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2074&auto=format&fit=crop",
      title: "Maison de la Colline",
      category: "Plan de toiture"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=2070&auto=format&fit=crop",
      title: "Bureaux Transparence",
      category: "Coupe architecturale"
    }
  ];

  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      
      <main>
        <Hero />
        
        <Services />
        
        {/* Projects Section */}
        <section id="projets" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-3 py-1 bg-geoplan-red/10 text-geoplan-red rounded-full text-sm font-medium mb-3">
                Nos Projets
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Projets récents
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez notre expertise à travers une sélection de nos réalisations récentes.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  imageSrc={project.imageSrc}
                  title={project.title}
                  category={project.category}
                  delay={100 + index * 100}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="à-propos" className="py-20 bg-gradient-to-b from-geoplan-darkblue to-black text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <AnimatedSection delay={100} direction="right">
                <div className="bg-geoplan-blue/10 backdrop-blur-md border border-white/10 rounded-xl p-8 h-full">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                    À propos de <span className="text-geoplan-red">Geo</span>Plan
                  </h2>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Depuis plus de 15 ans, GeoPlan s'est imposé comme un leader dans la création de plans et de visualisations architecturales. Notre équipe d'experts combine des compétences techniques pointues et une sensibilité esthétique pour offrir des solutions sur mesure.
                  </p>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Nous utilisons les technologies les plus avancées pour produire des plans précis et des rendus photoréalistes qui répondent aux besoins spécifiques de chaque projet, qu'il s'agisse d'architecture, d'urbanisme ou d'aménagement paysager.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <span className="block text-3xl font-bold text-geoplan-red mb-1">250+</span>
                      <span className="text-sm text-white/70">Projets réalisés</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-3xl font-bold text-geoplan-red mb-1">15+</span>
                      <span className="text-sm text-white/70">Années d'expérience</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-3xl font-bold text-geoplan-red mb-1">50+</span>
                      <span className="text-sm text-white/70">Clients satisfaits</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <div className="space-y-6">
                <AnimatedSection delay={200} direction="right">
                  <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Building className="h-6 w-6 text-geoplan-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Expertise technique</h3>
                      <p className="text-white/80 text-sm">
                        Notre équipe maîtrise parfaitement les logiciels et techniques les plus avancés pour une précision sans compromis.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={300} direction="right">
                  <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="h-6 w-6 text-geoplan-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Approche personnalisée</h3>
                      <p className="text-white/80 text-sm">
                        Chaque projet est unique, c'est pourquoi nous adaptons nos méthodes et solutions à vos besoins spécifiques.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection delay={400} direction="right">
                  <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Award className="h-6 w-6 text-geoplan-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Qualité garantie</h3>
                      <p className="text-white/80 text-sm">
                        Nous nous engageons à fournir des livrables d'une qualité irréprochable, dans les délais impartis et selon vos spécifications.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Scroll to top button - appears when scrolling down */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-geoplan-red w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform hover:scale-110 focus:outline-none"
        aria-label="Scroll to top"
        style={{ 
          opacity: 0.8,
          zIndex: 40
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default Index;
