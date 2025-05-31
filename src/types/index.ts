export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  slug: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  benefits: string[];
  process: string[];
  pricing: string;
  duration: string;
  image: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  slug: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  duration: string;
  teamSize: string;
  industry: string;
  projectType: string;
  gallery: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}