
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-geoplan-red/10 text-geoplan-red rounded-full text-sm font-medium mb-3">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Discutons de votre projet
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous sommes à votre disposition pour répondre à vos questions et vous accompagner dans la réalisation de vos projets.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedSection delay={100} direction="right" className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-geoplan-red" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Téléphone</h3>
                <p className="text-muted-foreground">+33 1 23 45 67 89</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-geoplan-red" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">contact@geoplan.fr</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-geoplan-red" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Adresse</h3>
                <p className="text-muted-foreground">123 Avenue de la Cartographie<br />75001 Paris, France</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300} direction="right">
            <form className="space-y-5 p-6 sm:p-8 bg-white rounded-xl shadow-lg border border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-geoplan-red/20 focus:border-geoplan-red transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-geoplan-red/20 focus:border-geoplan-red transition-colors"
                    placeholder="Votre email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-geoplan-red/20 focus:border-geoplan-red transition-colors"
                  placeholder="Sujet de votre message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-geoplan-red/20 focus:border-geoplan-red transition-colors resize-none"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-geoplan-red hover:bg-geoplan-red/90 text-white py-3 px-6 rounded-md font-medium transition-all duration-300 hover-lift"
              >
                Envoyer
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
