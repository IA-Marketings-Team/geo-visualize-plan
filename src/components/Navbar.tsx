import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Notre Groupe', path: '/notre-groupe' },
    { name: 'Services', path: '/services' },
    { name: 'Carrières', path: '/carrieres' },
    { name: 'RSE', path: '/rse' },
    { name: 'Actualités', path: '/actualites' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'py-3 bg-black/80 backdrop-blur-sm shadow-md'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/">
          <Logo size="md" className={isScrolled ? "text-foreground" : ""} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                isScrolled ? 'text-white hover:text-geoplan-red' : 'text-[#ffffff] hover:text-geoplan-red'
              } ${location.pathname === item.path ? 'text-[#E63946] !important' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg animate-reveal origin-top">
            <nav className="container mx-auto py-6 px-4 flex flex-col space-y-4">
              {navItems.map((item, i) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-foreground text-lg font-medium hover:text-geoplan-red transition-colors duration-200 ${
                    location.pathname === item.path ? 'text-geoplan-red' : ''
                  }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
