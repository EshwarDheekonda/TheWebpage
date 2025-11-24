export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number; // 0-100
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  coursework?: string[];
  achievements?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

