"use client";

import SectionWrapper from "./SectionWrapper";
import { skillCategories } from "@/data/skills";
import { Code2, Layout, Server, Database, Terminal, LucideProps } from "lucide-react";
import { motion, Variants } from "framer-motion";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Terminal: Terminal,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="border-t border-border-primary/40 bg-bg-secondary/40">
      <div className="flex flex-col space-y-2 mb-12">
        <span className="text-sm font-mono text-accent tracking-wider uppercase">04. Stack</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
          Skills &amp; Technologies
        </h2>
        <p className="text-text-secondary text-sm max-w-xl">
          An overview of programming languages, libraries, databases, cloud, and DevOps tooling that I specialize in.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon] || Code2;
          return (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="p-6 bg-bg-card border border-border-primary rounded-xl hover:border-accent/35 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-accent/15 border border-accent/25 text-accent">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-text-primary">
                  {category.name}
                </h3>
              </div>

              {/* Skills badges list */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-accent-light text-accent border border-accent/20 text-xs font-mono font-medium hover:bg-accent hover:text-white hover:border-accent hover:scale-[1.03] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
