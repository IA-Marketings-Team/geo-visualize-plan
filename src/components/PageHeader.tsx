
import React from 'react';
import AnimatedSection from './AnimatedSection';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" 
}) => {
  return (
    <section 
      className="relative pt-40 pb-20 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, rgba(29, 53, 87, 0.8), rgba(0, 0, 0, 0.7))"
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4) contrast(1.2)",
          mixBlendMode: "multiply"
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection delay={100}>
          <h1 className="text-white text-3xl md:text-5xl font-display font-bold leading-tight mb-4">
            {title}
          </h1>
          <div className="w-20 h-1 bg-geoplan-red mb-6"></div>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl">
            {subtitle}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PageHeader;
