
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
      <div className='flex items-center gap-3'>
    
      <img src='logo.png' style={{width:'50px', height:'auto', borderRadius:'100px'}} className='rounded-circle'/>
      <div className='flex text-4xl'>
      <span className='text-geoplan-red'>Geo</span>
      <span className='text-white'>Plan</span>
      </div>
      </div>

    </div>
  );
};

export default Logo;
