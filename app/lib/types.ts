
// Business Types for Medical Content Creation

export interface Contact {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  serviceType: string;
  projectBudget?: string;
  timeline?: string;
  message: string;
  status?: string;
  source?: string;
}

export interface ServicePackage {
  id: number;
  name: string;
  description: string;
  serviceType: string;
  pricing: string;
  minRate?: number;
  maxRate?: number;
  deliveryTime?: string;
  features: string[];
  isActive: boolean;
}

export interface PortfolioSample {
  id: string;
  title: string;
  type: string;
  description: string;
  wordCount: number;
  audience: string;
  filename: string;
}

export interface Testimonial {
  id: number;
  clientName: string;
  company: string;
  content: string;
  rating: number;
  projectType?: string;
  isPublic: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featuredImage?: string;
  category?: string;
  tags?: string[];
  published: boolean;
  publishedAt?: Date;
}
