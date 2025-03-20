
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
      <div className='flex items-center gap-0'>
    
      <img src='logo.png' style={{width:'70px', height:'auto', borderRadius:'100px'}} className='rounded-circle'/>
      <div className='flex' style={{fontSize:'30px'}}>
      <span className='text-geoplan-red'>Geo-</span>
      <span className='text-white'>architectural</span>
      </div>
      </div>

    </div>
  );
};

export default Logo;
