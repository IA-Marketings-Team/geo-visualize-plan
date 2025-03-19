
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useCompanyInfo } from '@/hooks/useDataApi';
import { submitContactForm } from '@/hooks/useDataApi';
import { Contact } from '@/types/supabase';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const { companyInfo, loading } = useCompanyInfo();
  const { toast } = useToast();
  const [formData, setFormData] = useState<Contact>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs du formulaire.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        toast({
          title: "Message envoyé",
          description: "Nous avons bien reçu votre message. Nous vous répondrons dans les plus brefs délais.",
        });
      } else {
        console.error("Erreur détaillée:", result.error);
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi du formulaire.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      toast({
        title: "Erreur",
        description: "Une erreur inattendue est survenue.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {loading ? (
              <>
                <div className="flex items-start space-x-4">
                  <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-geoplan-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Téléphone</h3>
                    <Skeleton className="h-5 w-32" />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-geoplan-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <Skeleton className="h-5 w-40" />
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-geoplan-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Adresse</h3>
                    <Skeleton className="h-5 w-48 mb-1" />
                    <Skeleton className="h-5 w-40" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start space-x-4">
                  <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-geoplan-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Téléphone</h3>
                    <p className="text-muted-foreground">{companyInfo?.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-geoplan-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">{companyInfo?.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-geoplan-red/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-geoplan-red" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground">{companyInfo?.address}<br />{companyInfo?.country}</p>
                  </div>
                </div>
              </>
            )}
          </AnimatedSection>

          <AnimatedSection delay={300} direction="right">
            <form 
              className="space-y-5 p-6 sm:p-8 bg-white rounded-xl shadow-lg border border-border"
              onSubmit={handleSubmit}
            >
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message envoyé !</h3>
                  <p className="text-muted-foreground mb-4">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-geoplan-red hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-geoplan-red/20 focus:border-geoplan-red transition-colors"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-geoplan-red/20 focus:border-geoplan-red transition-colors"
                        placeholder="Votre email"
                        required
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
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-geoplan-red/20 focus:border-geoplan-red transition-colors"
                      placeholder="Sujet de votre message"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-geoplan-red/20 focus:border-geoplan-red transition-colors resize-none"
                      placeholder="Votre message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-geoplan-red hover:bg-geoplan-red/90 text-white py-3 px-6 rounded-md font-medium transition-all duration-300 hover-lift disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                  </button>
                </>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
