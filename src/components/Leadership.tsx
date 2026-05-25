"use client";

import SectionWrapper from "./SectionWrapper";
import { motion, Variants } from "framer-motion";
import { Users, Calendar, MapPin, ChevronRight } from "lucide-react";

interface LeadershipRole {
  org: string;
  role: string;
  location: string;
  duration: string;
  highlights: string[];
}

const roles: LeadershipRole[] = [
  {
    org: "Innovation & Incubation Cell (IIC)",
    role: "Startup Coordinator",
    location: "IIITDM Jabalpur",
    duration: "Aug 2024 – Apr 2025",
    highlights: [
      "Coordinated early-stage incubation at IIC, IIITDM Jabalpur, facilitating mentorship, pitch events, and resource allocation for 15+ student-led ventures while collaborating with founders and industry experts to accelerate idea-to-MVP transitions.",
      "Streamlined event planning, partner outreach, and reporting processes, strengthening entrepreneurship programs and driving greater engagement across the startup ecosystem."
    ]
  },
  {
    org: "Entrepreneurship Cell (E-Cell)",
    role: "Event, PR & Outreach Lead",
    location: "IIITDM Jabalpur",
    duration: "Aug 2023 – Dec 2024",
    highlights: [
      "Spearheaded the \"Startup Stories\" speaker series, successfully hosting Sandeep Jain (Founder, GeeksforGeeks) and other entrepreneurs, enhancing peer learning and boosting the E-Cell's visibility across the startup ecosystem.",
      "Designed and executed the orientation program for the incoming junior batch, onboarding 150+ students to entrepreneurship initiatives and increasing early engagement with E-Cell activities.",
      "Collaborated with industry mentors and alumni networks to establish long-term partnerships, resulting in enhanced networking opportunities for student entrepreneurs."
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Leadership() {
  return (
    <SectionWrapper id="leadership" className="border-t border-border-primary/40 bg-bg-primary">
      <div className="flex flex-col space-y-2 mb-12">
        <span className="text-sm font-mono text-accent tracking-wider uppercase">05. Leadership</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
          Positions of Responsibility
        </h2>
        <p className="text-text-secondary text-sm max-w-xl">
          Campus leadership roles in entrepreneurship, startup incubation, and community building during my time at IIITDM Jabalpur.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        {roles.map((role) => (
          <motion.div
            key={role.org}
            variants={itemVariants}
            className="flex flex-col p-6 bg-bg-card rounded-xl border border-border-primary hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20 text-accent shrink-0 mt-0.5">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-text-primary leading-snug">
                  {role.org}
                </h3>
                <p className="text-sm font-semibold text-accent font-mono mt-0.5">
                  {role.role}
                </p>
              </div>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-secondary font-mono mb-5">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {role.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {role.location}
              </span>
            </div>

            {/* Highlights */}
            <ul className="space-y-3">
              {role.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary leading-relaxed">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
