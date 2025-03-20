
import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import AnimatedSection from '../components/AnimatedSection';

const PolitiqueConfidentialite: React.FC = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Politique de Confidentialité" 
        subtitle="Protection de vos données personnelles"
        backgroundImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="prose prose-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold mb-6">1. Collecte des données personnelles</h2>
            <p>
              Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé par geo-architectural pour la gestion de notre clientèle et nos prospects.
            </p>
            <p>
              Les données collectées sont les suivantes : nom, prénom, adresse email, numéro de téléphone, entreprise.
            </p>

            <h2 className="text-2xl font-display font-bold mb-6 mt-12">2. Utilisation des données personnelles</h2>
            <p>
              Les données personnelles collectées sont utilisées pour :
            </p>
            <ul>
              <li>La gestion de la relation client</li>
              <li>Le traitement des demandes de devis</li>
              <li>L'envoi d'informations commerciales (avec votre accord)</li>
              <li>L'amélioration de nos services</li>
            </ul>

            <h2 className="text-2xl font-display font-bold mb-6 mt-12">3. Durée de conservation</h2>
            <p>
              Les données personnelles sont conservées pendant une durée de 3 ans à compter de la fin de la relation commerciale ou du dernier contact pour les prospects.
            </p>

            <h2 className="text-2xl font-display font-bold mb-6 mt-12">4. Vos droits</h2>
            <p>
              Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement européen n°2016/679/UE du 27 avril 2016 (RGPD), vous bénéficiez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données ou encore de limitation du traitement.
            </p>
            <p>
              Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.
            </p>
            <p>
              Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez nous contacter à l'adresse email suivante : rgpd@geo-architectural.fr.
            </p>

            <h2 className="text-2xl font-display font-bold mb-6 mt-12">5. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez désactiver l'utilisation de cookies en sélectionnant les paramètres appropriés de votre navigateur.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default PolitiqueConfidentialite;
