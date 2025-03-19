
import React from 'react';
import Logo from './Logo';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section 
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, rgba(29, 53, 87, 0.8), rgba(0, 0, 0, 0.7))"
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('/plan.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.2) contrast(1.2)",
          mixBlendMode: "multiply"
        }}
      />

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <AnimatedSection delay={100}>
          <Logo size="lg" className="inline-block mb-8" />
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <h1 className="text-white text-4xl md:text-6xl font-display font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Solutions cartographiques et plans de précision
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={500}>
          <p className="text-geoplan-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Expertise en cartographie, plans 2D, maquettes 3D et rendus photoréalistes
            pour vos projets d'architecture et d'urbanisme.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={700}>
          <a 
            href="#services" 
            className="inline-flex items-center justify-center bg-geoplan-red hover:bg-geoplan-red/90 text-white py-3 px-8 rounded-md font-medium transition-all duration-300 hover-lift"
          >
            Découvrir nos services
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
