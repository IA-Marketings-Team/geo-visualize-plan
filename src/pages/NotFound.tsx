
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-geoplan-darkblue">
      <div className="text-center px-4 py-10 max-w-md">
        <div className="mb-8">
          <Logo size="lg" />
        </div>
        <h1 className="text-8xl font-display font-bold text-geoplan-red mb-4">404</h1>
        <p className="text-xl text-white mb-8">
          Oups ! Cette page n'existe pas.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center bg-geoplan-red hover:bg-geoplan-red/90 text-white py-3 px-8 rounded-md font-medium transition-all duration-300 hover-lift"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
