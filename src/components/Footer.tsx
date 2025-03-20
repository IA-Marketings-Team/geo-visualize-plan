
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-geoplan-darkblue text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo className="mb-6" />
            <p className="text-white/80 text-sm leading-relaxed">
              Solutions cartographiques et plans de précision pour tous vos projets d'architecture et d'urbanisme.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Plans 2D',
                'Modélisation 3D',
                'Plans topographique',
                'SIG',
                'Rendus réalistes'
              ].map((service, index) => (
                <li key={index}>
                  <Link to="/services" className="text-white/70 hover:text-white text-sm transition-colors duration-200">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Notre Groupe', path: '/notre-groupe' },
                { name: 'Services', path: '/services' },
                { name: 'Carrières', path: '/carrieres' },
                { name: 'RSE', path: '/rse' },
                { name: 'Actualités', path: '/actualites' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-white/70 hover:text-white text-sm transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-white/70 text-sm space-y-2">
              <p>123 Avenue de la Cartographie</p>
              <p>Antananarivo, Madagascar</p>
              <p className="mt-4">contact.mdgeo@gmail.com</p>
              <p>+33 1 23 45 67 89</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Geo-architectural. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/mentions-legales" className="text-white/60 hover:text-white transition-colors duration-200">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="text-white/60 hover:text-white transition-colors duration-200">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
