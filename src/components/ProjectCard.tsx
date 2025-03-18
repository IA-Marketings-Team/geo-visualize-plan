
import React from 'react';
import AnimatedSection from './AnimatedSection';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  category: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  imageSrc, 
  title, 
  category,
  delay = 0 
}) => {
  return (
    <AnimatedSection delay={delay} className="group w-full">
      <div className="overflow-hidden rounded-lg bg-white shadow-lg hover-lift">
        <div className="img-hover-zoom h-60 sm:h-72">
          <img 
            src={imageSrc} 
            alt={title} 
            className="h-full w-full object-cover" 
          />
        </div>
        <div className="p-5">
          <span className="text-xs font-medium uppercase tracking-wider text-geoplan-red">
            {category}
          </span>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground group-hover:text-geoplan-red transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectCard;
