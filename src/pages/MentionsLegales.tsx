
import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';

const MentionsLegales: React.FC = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Mentions Légales" 
        subtitle="Informations juridiques concernant le site GeoPlan"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="prose prose-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold mb-6">1. Édition du site</h2>
            <p>
              Le présent site, accessible à l'URL www.geoplan.fr (le « Site »), est édité par :
            </p>
            <p>
              GeoPlan, société au capital de 100 000 euros, inscrite au R.C.S. de PARIS sous le numéro RCS PARIS 123 456 789, dont le siège social est situé au 123 Avenue de la Cartographie, 75001 Paris, France
            </p>
            <p>
              Le numéro de téléphone du directeur de la publication est le +33 1 23 45 67 89, et son adresse e-mail est contact@geoplan.fr.
            </p>

            <h2 className="text-2xl font-display font-bold mb-6 mt-12">2. Hébergement</h2>
            <p>
              Le Site est hébergé par la société Hébergement Web, situé 45 rue des Serveurs, 75002 Paris, (contact téléphonique ou email: +33 1 98 76 54 32).
            </p>

            <h2 className="text-2xl font-display font-bold mb-6 mt-12">3. Directeur de publication</h2>
            <p>
              Le Directeur de la publication du Site est Jean Dupont.
            </p>

            <h2 className="text-2xl font-display font-bold mb-6 mt-12">4. Nous contacter</h2>
            <p>
              Par téléphone : +33 1 23 45 67 89<br />
              Par email : contact@geoplan.fr<br />
              Par courrier : 123 Avenue de la Cartographie, 75001 Paris, France
            </p>

            <h2 className="text-2xl font-display font-bold mb-6 mt-12">5. Propriété intellectuelle</h2>
            <p>
              Le contenu du présent site, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société GeoPlan à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de GeoPlan.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default MentionsLegales;
