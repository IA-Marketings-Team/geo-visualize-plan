
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-md shadow-md'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo size="md" className={isScrolled ? "text-foreground" : ""} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Accueil', 'Services', 'Projets', 'À propos', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`text-sm font-medium link-underline transition-colors duration-200 ${
                isScrolled ? 'text-foreground hover:text-geoplan-red' : 'text-white hover:text-geoplan-red'
              }`}
            >
              {item}
            </a>
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
              {['Accueil', 'Services', 'Projets', 'À propos', 'Contact'].map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-foreground text-lg font-medium hover:text-geoplan-red transition-colors duration-200`}
                  style={{ animationDelay: `${i * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
