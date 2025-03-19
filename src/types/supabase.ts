
export type Project = {
  id: string;
  title: string;
  category: string;
  image_src: string;
  description?: string;
  client?: string;
  created_at?: string;
};

export type Department = {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  image_src: string;
  created_at?: string;
  services?: string[];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  created_at?: string;
};

export type News = {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  created_at?: string;
};

export type JobOffer = {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  is_active?: boolean;
  created_at?: string;
};

export type Contact = {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_processed?: boolean;
  created_at?: string;
};

export type CompanyInfo = {
  id: string;
  phone: string;
  email: string;
  address: string;
  country: string;
  linkedin_url?: string;
  youtube_url?: string;
  created_at?: string;
};

export type Client = {
  id: string;
  name: string;
  logo_url?: string;
  created_at?: string;
};

export type RseCommitment = {
  id: string;
  title: string;
  icon: string;
  content: string;
  created_at?: string;
};
