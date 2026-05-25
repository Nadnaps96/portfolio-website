"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { Briefcase, Calendar, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  link?: { label: string; url: string };
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "UNSW",
    role: "SDE-Backend Engineer",
    location: "Sydney — Remote",
    duration: "Oct 2025 - Present",
    link: { label: "Marevlo Application", url: "https://marevlo.vercel.app" },
    highlights: [
      "Architected and deployed Marevlo, a full-stack, Dockerized web application on AWS EC2, managing container orchestration, environment settings, and production builds.",
      "Designed a scalable backend using a modular, object-oriented architecture with reusable configuration and utility layers, supporting future microservices expansion.",
      "Implemented end-to-end DevOps workflows: Docker image creation, container debugging, reverse proxy setup, domain config, IAM roles, and server monitoring."
    ]
  },
  {
    company: "BetterMind Labs",
    role: "Marketing & Strategies",
    location: "USA — Remote",
    duration: "Jul - Sep 2024",
    highlights: [
      "Conducted in-depth analysis of competitor profiles and market trends to develop strategic initiatives, resulting in a 15% improvement in competitive positioning.",
      "Designed and implemented data-driven content strategies and graphics for social media, leading to 25% engagement.",
      "Redesigned chat file format and implemented backward compatibility for search."
    ]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SectionWrapper id="experience" className="border-t border-border-primary/40 bg-bg-primary">
      <div className="flex flex-col space-y-2 mb-12">
        <span className="text-sm font-mono text-accent tracking-wider uppercase">02. Experience</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
          Work History
        </h2>
        <p className="text-text-secondary text-sm max-w-xl">
          Professional work experience in backend software development, cloud operations, and marketing strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start max-w-4xl mx-auto">
        {/* Left Side: Tab Selection */}
        <div className="md:col-span-4 flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border-primary/60 pb-2 md:pb-0 scrollbar-none">
          {experiences.map((exp, idx) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center px-4 py-3 text-left text-sm font-mono tracking-wide transition-all border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:-ml-[2px] whitespace-nowrap cursor-pointer ${
                activeTab === idx
                  ? "border-accent text-accent bg-accent/5 font-semibold"
                  : "border-transparent text-text-secondary hover:text-text-primary hover:bg-bg-secondary/40"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Right Side: Tab Details panel */}
        <div className="md:col-span-8 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col space-y-4"
            >
              <div>
                <h3 className="text-xl font-bold tracking-tight text-text-primary">
                  {experiences[activeTab].role}{" "}
                  <span className="text-accent font-semibold">@ {experiences[activeTab].company}</span>
                </h3>
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-secondary font-mono mt-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {experiences[activeTab].duration}
                  </span>
                  <span>&bull;</span>
                  <span>{experiences[activeTab].location}</span>
                </div>
              </div>

              {/* Marevlo / App Link (if present) */}
              {experiences[activeTab].link && (
                <div className="py-2.5 px-4 bg-accent/5 border border-accent/20 rounded-lg w-fit">
                  <a
                    href={experiences[activeTab].link?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-mono font-bold text-accent hover:text-accent-hover transition-colors"
                  >
                    <span>{experiences[activeTab].link?.label}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* Highlights Bullet List */}
              <ul className="space-y-3.5 pt-2">
                {experiences[activeTab].highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                    <CheckCircle2 className="w-4.5 h-4.5 text-accent mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
