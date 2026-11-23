export interface NavLink {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0–100, drives fill animation
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  current?: boolean;
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  relocate: string;
}

export interface SocialLink {
  label: string;
  href: string;
  platform: "linkedin" | "github";
}

export interface ResumeConfig {
  /** Public path to the hosted PDF */
  pdfPath: string;
  /** App route for the shareable resume viewer */
  sharePath: string;
  fileName: string;
  /** Open Graph / social share title (and PDF Title metadata) */
  shareTitle: string;
  /** Open Graph / social share description (and PDF Subject metadata) */
  shareDescription: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  shortIntro: string;
  summary: string;
  contact: ContactInfo;
  social: SocialLink[];
  resume: ResumeConfig;
  nav: NavLink[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
}
