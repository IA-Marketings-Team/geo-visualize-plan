
import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'right' | 'left';
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.1,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
              
              if (direction === 'up') {
                entry.target.classList.add('animate-fade-in-up');
              } else if (direction === 'right') {
                entry.target.classList.add('animate-slide-in-right');
              }
            }, delay);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: threshold }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [delay, direction, threshold]);

  return (
    <div
      ref={sectionRef}
      className={`opacity-0 ${className}`}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
