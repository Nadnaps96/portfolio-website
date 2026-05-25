import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "Code2",
    skills: ["Python", "JavaScript", "C++", "Java", "SQL"]
  },
  {
    name: "Frontend",
    icon: "Layout",
    skills: ["React.js", "Next.js", "Jinja2", "Semantic UI", "Tailwind CSS"]
  },
  {
    name: "Backend",
    icon: "Server",
    skills: ["Flask", "FastAPI", "Node.js", "REST APIs", "JWT Authentication", "WebSockets"]
  },
  {
    name: "Databases",
    icon: "Database",
    skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Firebase", "Supabase", "Redis"]
  },
  {
    name: "Cloud & DevOps",
    icon: "Terminal",
    skills: ["AWS ", "Docker", "Git", "GitHub", "Reverse Proxy (Nginx)"]
  }
];
