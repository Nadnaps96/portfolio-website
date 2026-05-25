import { Project } from "@/types";
import { Github } from "@/components/BrandIcons";
import { ExternalLink, Folder, Calendar, CheckCircle2 } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col h-full bg-bg-card rounded-xl border border-border-primary hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
      {/* Card Header */}
      <div className="p-6 pb-4 flex items-start justify-between">
        <div className="p-3 bg-bg-secondary rounded-lg border border-border-primary/60 text-accent">
          <Folder className="w-6 h-6" />
        </div>
        <div className="flex items-center space-x-3 text-text-secondary">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-border-primary/60 bg-bg-secondary hover:text-accent hover:border-accent/30 transition-all"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg border border-border-primary/60 bg-bg-secondary hover:text-accent hover:border-accent/30 transition-all"
              aria-label={`View live demo for ${project.title}`}
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="px-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>
        
        {/* Date and Subtitle */}
        <div className="flex flex-col gap-1 mb-4">
          <span className="text-sm font-semibold text-accent font-mono">
            {project.subtitle}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-text-secondary font-mono">
            <Calendar className="w-3.5 h-3.5" />
            <span>{project.dateRange}</span>
          </div>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights bullets list */}
        <div className="mt-auto mb-6">
          <p className="text-xs font-mono font-bold tracking-wider text-text-secondary uppercase mb-3">Key Highlights</p>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-text-secondary leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer (Tech Badges) */}
      <div className="px-6 pb-6 pt-4 border-t border-border-primary/30 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-2xs font-mono px-2 py-0.5 rounded-md border border-accent/20 bg-accent-light text-accent font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
