
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Project, Department, Service, News, JobOffer, Client, RseCommitment, CompanyInfo, Contact } from '@/types/supabase';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('projects')
          .select('*');

        if (error) throw error;
        setProjects(data || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les projets.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [toast]);

  return { projects, loading };
};

export const useDepartments = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setLoading(true);
        const { data: deptData, error: deptError } = await supabase
          .from('departments')
          .select('*');

        if (deptError) throw deptError;

        const departmentsWithServices = await Promise.all(
          (deptData || []).map(async (dept) => {
            const { data: servicesData, error: servicesError } = await supabase
              .from('department_services')
              .select('service_name')
              .eq('department_id', dept.id);

            if (servicesError) throw servicesError;

            return {
              ...dept,
              services: servicesData?.map(s => s.service_name) || []
            };
          })
        );

        setDepartments(departmentsWithServices);
      } catch (error) {
        console.error('Error fetching departments:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les départements.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, [toast]);

  return { departments, loading };
};

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('services')
          .select('*');

        if (error) throw error;
        setServices(data || []);
      } catch (error) {
        console.error('Error fetching services:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les services.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [toast]);

  return { services, loading };
};

export const useNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .order('date', { ascending: false });

        if (error) throw error;
        setNews(data || []);
      } catch (error) {
        console.error('Error fetching news:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les actualités.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [toast]);

  return { news, loading };
};

export const useJobOffers = () => {
  const [jobOffers, setJobOffers] = useState<JobOffer[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchJobOffers = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('job_offers')
          .select('*')
          .eq('is_active', true);

        if (error) throw error;
        setJobOffers(data || []);
      } catch (error) {
        console.error('Error fetching job offers:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les offres d'emploi.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchJobOffers();
  }, [toast]);

  return { jobOffers, loading };
};

export const useClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('clients')
          .select('*');

        if (error) throw error;
        setClients(data || []);
      } catch (error) {
        console.error('Error fetching clients:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les clients.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, [toast]);

  return { clients, loading };
};

export const useRseCommitments = () => {
  const [commitments, setCommitments] = useState<RseCommitment[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchCommitments = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('rse_commitments')
          .select('*');

        if (error) throw error;
        setCommitments(data || []);
      } catch (error) {
        console.error('Error fetching RSE commitments:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les engagements RSE.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCommitments();
  }, [toast]);

  return { commitments, loading };
};

export const useCompanyInfo = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('company_info')
          .select('*')
          .single();

        if (error && error.code !== 'PGRST116') throw error;
        setCompanyInfo(data);
      } catch (error) {
        console.error('Error fetching company info:', error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les informations de l'entreprise.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyInfo();
  }, [toast]);

  return { companyInfo, loading };
};

export const submitContactForm = async (contact: Contact) => {
  try {
    // Suppression de .single() qui peut causer des problèmes si aucune donnée n'est retournée
    // Et utilisation de .maybeSingle() pour gérer correctement le cas où aucune donnée n'est retournée
    const { data, error } = await supabase
      .from('contacts')
      .insert([contact])
      .select();

    if (error) {
      console.error('Error submitting contact form:', error);
      return { success: false, error };
    }
    
    return { success: true, data: data?.[0] || null };
  } catch (error) {
    console.error('Exception submitting contact form:', error);
    return { success: false, error };
  }
};
