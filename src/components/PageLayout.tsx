
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      
      {/* Scroll to top button */}
      <a
  href="/contact"
  className="fixed bottom-6 bg-geoplan-red w-auto h-12 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform hover:scale-110 focus:outline-none z-40 opacity-80 px-4"
  aria-label="Demander un devis"
  style={{right:"70px"}}

>
  Demander un devis
</a>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-2 bg-geoplan-red w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform hover:scale-110 focus:outline-none z-40 opacity-80"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default PageLayout;
