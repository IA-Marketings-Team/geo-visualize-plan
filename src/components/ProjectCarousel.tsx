
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const ProjectCarousel: React.FC = () => {
  const projectImages = [
    '/architecture1.PNG',
    '/architecture2.PNG',
    '/caim.jpg',
    '/coupe1.PNG',
    '/coupe2.PNG',
    '/division.PNG',
    '/exterieur1.PNG',
    '/exterieur2.PNG',
    '/infrastructure.PNG',
    '/interieur1.PNG',
    '/interieur2.PNG',
    '/mep.PNG',
    '/plan_façade.PNG',
    '/plan_façade2.PNG',
    '/rendu_interieur.PNG',
    '/rendu_interieur2.PNG',
    '/structure.PNG'
  ];

  // Duplicate the array to create continuous loop
  const duplicatedImages = [...projectImages, ...projectImages];

  return (
    <div className="overflow-hidden relative py-10">
      <div className="marquee-container">
        <div className="animate-marquee flex space-x-4">
          {duplicatedImages.map((image, index) => (
            <div key={index} className="w-60 h-40 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
              <img 
                src={image} 
                alt={`Projet ${index + 1}`}
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
