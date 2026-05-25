"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-bg-primary"
    >
      {/* Warm ambient background shapes */}
      <div className="absolute inset-0 z-0">
        {/* Warm orange glow 1 */}
        <div className="absolute top-1/3 left-1/5 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent/8 dark:bg-accent/5 blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDuration: "9s" }} />
        {/* Warm orange glow 2 */}
        <div className="absolute bottom-1/4 right-1/5 translate-x-1/2 translate-y-1/2 w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-accent/10 dark:bg-accent/4 blur-[90px] md:blur-[130px] animate-pulse" style={{ animationDuration: "13s" }} />
        
        {/* Subtle dot pattern instead of grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,var(--border-primary)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_55%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-25 dark:opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent-light text-accent text-xs md:text-sm font-mono font-medium mb-6"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Available for new opportunities
        </motion.div>

        {/* Heading name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          Hi, I&apos;m{" "}
          <span className="text-accent">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-text-secondary mb-6 font-mono"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Tagline description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-10"
        >
          B.Tech CSE graduate from <span className="text-text-primary font-semibold">IIITDM Jabalpur</span>. Currently architecting backend microservices, containerized setups, and DevOps pipelines at <span className="text-text-primary font-semibold">UNSW</span>.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-300 shadow-md shadow-accent/15 cursor-pointer"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-lg border border-border-primary bg-bg-card text-text-primary font-medium hover:bg-bg-secondary hover:border-text-secondary/30 transition-all duration-300 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-text-secondary" />
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Floating indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <a href="#about" className="flex flex-col items-center cursor-pointer" aria-label="Scroll down">
          <span className="text-xs font-mono text-text-secondary tracking-widest uppercase mb-1">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-text-secondary/50 flex items-start justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
