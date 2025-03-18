
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`font-display font-bold tracking-tight select-none ${sizeClasses[size]} ${className}`}>
      <span className="text-geoplan-red">Geo</span>
      <span className="text-white">Plan</span>
    </div>
  );
};

export default Logo;
