import React, { useRef, useEffect, useState } from 'react';

const ProjectCarousel: React.FC = () => {
  const projectImages = [
    '/architecture1.PNG',
    '/architecture2.PNG',
    '/plan.jpg',
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

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Scroll manuel avec les boutons
  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollLeft -= 400; // Ajuste selon la taille
      pauseAnimation();
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollLeft += 400;
      pauseAnimation();
    }
  };

  // Pause l'animation au scroll manuel et la reprend après 3s
  const pauseAnimation = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Bouton Gauche */}
      {/* <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full shadow-md z-10 hover:bg-opacity-90 transition-all"
        aria-label="Scroll left"
      >
        ‹
      </button> */}

      {/* Carrousel contenant 2 copies */}
      <div className="carousel-container">
        <div ref={scrollerRef} className={`carousel-track ${isPaused ? 'paused' : ''}`}>
          {[...Array(2)].map((_, i) => (
            <div key={i} className="carousel">
              {projectImages.map((image, index) => (
                <div key={index} className="carousel-item">
                  <img src={image} alt={`Projet ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bouton Droite */}
      {/* <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full shadow-md z-10 hover:bg-opacity-90 transition-all"
        aria-label="Scroll right"
      >
        ›
      </button> */}

      {/* Styles */}
      <style >{`
        .carousel-container {
          overflow: hidden;
          width: 100%;
        }

        .carousel-track {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
          scroll-behavior: smooth;
        }

        .carousel {
          display: flex;
        }

        .carousel-item {
          width: 18rem;
          height: 12rem;
          margin: 0 8px;
          flex-shrink: 0;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        /* Animation */
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .paused {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ProjectCarousel;
