
import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import ContactSection from '../components/ContactSection';

const Contact: React.FC = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Contact" 
        subtitle="N'hésitez pas à nous contacter pour discuter de vos projets ou pour obtenir plus d'informations sur nos services."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
      />
      <ContactSection />
    </PageLayout>
  );
};

export default Contact;
