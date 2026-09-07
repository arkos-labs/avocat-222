// Types & Interfaces — Cabinet d'Avocats 222

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  barYear: number; // Année de prestation de serment
  description: string;
  engagements: string[];
  imageInitials: string; // Pour le fallback avatar
  imageUrl?: string; // Photo du membre de l'équipe
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Expertise {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  longDescription?: string;
  faq?: FaqItem[];
  imageUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: number; // minutes
  content?: string; // Contenu complet de l'article (Markdown)
  imageUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  requestType: 'urgence' | 'conseil' | 'procedure';
  message: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CabinetInfo {
  name: string;
  legalForm: string;
  address: {
    street: string;
    floor: string;
    city: string;
    postalCode: string;
  };
  phone: {
    secretariat: string;
    urgence: string;
  };
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    urgence: string;
  };
}
