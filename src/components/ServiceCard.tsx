
import React from 'react';
import { LucideIcon } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <AnimatedSection delay={delay} className="w-full">
      <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full hover-lift">
        <div className="flex flex-col h-full">
          <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300">
            <Icon className="h-6 w-6 text-geoplan-red" />
          </div>
          
          <h3 className="text-xl font-display font-semibold mb-3 text-white group-hover:text-geoplan-red transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-white/80 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServiceCard;
