export type TechCategory =
  | "Languages"
  | "Frameworks"
  | "Databases"
  | "Cloud & Tools"
  | "AI";

export interface TechItem {
  name: string;
  /** Stable key mapped to an icon component */
  icon: string;
  category: TechCategory;
  /** Featured items appear in the orbit ring */
  featured?: boolean;
  /** Brand accent used for soft glow (CSS color) */
  glow?: string;
}

export const techStack: TechItem[] = [
  // Languages — JS/TS first
  { name: "JavaScript", icon: "javascript", category: "Languages", featured: true, glow: "#F7DF1E" },
  { name: "TypeScript", icon: "typescript", category: "Languages", featured: true, glow: "#3178C6" },
  { name: "Python", icon: "python", category: "Languages", glow: "#3776AB" },
  { name: "PHP", icon: "php", category: "Languages", glow: "#777BB4" },
  { name: "SQL", icon: "sql", category: "Languages", glow: "#22d3ee" },

  // Frameworks — MERN / React / Next / Node first; Laravel retained
  { name: "React.js", icon: "react", category: "Frameworks", featured: true, glow: "#61DAFB" },
  { name: "Next.js", icon: "nextjs", category: "Frameworks", featured: true, glow: "#a78bfa" },
  { name: "Node.js", icon: "nodejs", category: "Frameworks", featured: true, glow: "#339933" },
  { name: "Express", icon: "express", category: "Frameworks", glow: "#94a3b8" },
  { name: "Laravel", icon: "laravel", category: "Frameworks", glow: "#FF2D20" },
  { name: "Vue.js", icon: "vue", category: "Frameworks", glow: "#4FC08D" },
  { name: "Tailwind CSS", icon: "tailwind", category: "Frameworks", glow: "#06B6D4" },
  { name: "FastAPI", icon: "fastapi", category: "Frameworks", glow: "#009688" },
  { name: "Django", icon: "django", category: "Frameworks", glow: "#092E20" },
  { name: "CodeIgniter", icon: "codeigniter", category: "Frameworks", glow: "#EF4223" },

  // Databases
  { name: "PostgreSQL", icon: "postgresql", category: "Databases", glow: "#4169E1" },
  { name: "MongoDB", icon: "mongodb", category: "Databases", featured: true, glow: "#47A248" },
  { name: "MySQL", icon: "mysql", category: "Databases", glow: "#4479A1" },

  // Cloud & Tools
  { name: "AWS", icon: "aws", category: "Cloud & Tools", glow: "#FF9900" },
  { name: "Docker", icon: "docker", category: "Cloud & Tools", featured: true, glow: "#2496ED" },
  { name: "Git", icon: "git", category: "Cloud & Tools", glow: "#F05032" },
  { name: "GitHub", icon: "github", category: "Cloud & Tools", glow: "#a78bfa" },

  // AI
  { name: "OpenAI", icon: "openai", category: "AI", featured: true, glow: "#10A37F" },
  { name: "LangChain", icon: "langchain", category: "AI", glow: "#1C3C3C" },
];

export const techCategories: TechCategory[] = [
  "Languages",
  "Frameworks",
  "Databases",
  "Cloud & Tools",
  "AI",
];
