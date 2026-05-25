export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  dateRange: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  icon: string; // Lucide icon name (e.g. "Code", "Server", "Database", "Terminal")
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  bio: string[];
  education: {
    institution: string;
    degree: string;
    dateRange: string;
  };
}
