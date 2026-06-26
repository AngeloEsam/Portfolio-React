// ==================== Portfolio Types ====================

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  website?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  tagline: string;
  avatar?: string;
  cvUrl?: string;
  contact: ContactInfo;
}

export interface Skill {
  name: string;
  level: number; // 0–100
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  type: string; // Full-time, Part-time, Contract, Freelance
  startDate: string;
  endDate: string; // 'Present' for current
  location: string;
  description: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
  status: 'completed' | 'in-progress' | 'archived';
  featured: boolean;
  category: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  location: string;
  grade?: string;
  description?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  icon?: string;
}

export interface Achievement {
  icon: string;
  value: string;
  label: string;
}

// ==================== Chatbot Types ====================

export type MessageRole = 'user' | 'bot';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

export interface SuggestedQuestion {
  id: string;
  text: string;
  icon: string;
}
