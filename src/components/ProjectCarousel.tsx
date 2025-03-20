
import React, { useEffect, useRef } from 'react';

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

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;
    
    // Clone the scroller for smooth infinite scrolling
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach(item => {
      const clone = item.cloneNode(true);
      scrollerRef.current?.appendChild(clone);
    });

    // Animation function
    const scrollSpeed = 0.5; // px per frame
    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!scrollerRef.current) return;
      
      scrollPos += scrollSpeed;
      
      // Reset position when we've scrolled the first set of images
      if (scrollPos >= scrollerRef.current.children[0].clientWidth * (projectImages.length)) {
        scrollPos = 0;
      }
      
      scrollerRef.current.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationId = requestAnimationFrame(scroll);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden py-10" ref={containerRef}>
      <div 
        ref={scrollerRef}
        className="flex whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        {projectImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-72 h-48 mx-2 rounded-lg overflow-hidden shadow-md">
            <img 
              src={image} 
              alt={`Projet ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
