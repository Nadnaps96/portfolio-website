"use client";

import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="border-t border-border-primary/40">
      <div className="flex flex-col space-y-2 mb-12">
        <span className="text-sm font-mono text-accent tracking-wider uppercase">03. Portfolio</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
          Featured Projects
        </h2>
        <p className="text-text-secondary text-sm max-w-xl">
          A showcase of full-stack projects involving web development, database architectures, containerized services, and automated cloud deployments.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
