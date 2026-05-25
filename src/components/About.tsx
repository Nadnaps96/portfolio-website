"use client";

import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "@/data/personal";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";

export default function About() {
  return (
    <SectionWrapper id="about" className="border-t border-border-primary/40 bg-bg-secondary/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Bio paragraphs & Quick Info */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <span className="text-sm font-mono text-accent tracking-wider uppercase">01. About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              Who I Am
            </h2>
          </div>
          
          <div className="space-y-4 text-text-secondary leading-relaxed">
            {personalInfo.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Quick info list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border-primary/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-text-secondary">Current Role</p>
                <p className="text-sm font-semibold text-text-primary">SDE-Backend at UNSW</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-text-secondary">Education</p>
                <p className="text-sm font-semibold text-text-primary">B.Tech CSE, IIITDM Jabalpur</p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:col-span-2">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-text-secondary">Location</p>
                <p className="text-sm font-semibold text-text-primary">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Developer Terminal Mockup */}
        <div className="lg:col-span-5 w-full">
          <div className="w-full rounded-xl overflow-hidden shadow-lg border border-border-primary bg-[#1a1a19] dark:bg-[#141413] text-[#e0e0de] font-mono text-sm leading-normal">
            {/* Terminal Header */}
            <div className="bg-[#242422] dark:bg-[#1c1c1b] px-4 py-3 flex items-center justify-between border-b border-[#2e2e2c]">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-accent/80" />
                <div className="w-3 h-3 rounded-full bg-[#f1ba34]/80" />
                <div className="w-3 h-3 rounded-full bg-[#5cb85c]/80" />
              </div>
              <span className="text-xs text-[#80807c] select-none">spandan@terminal: ~</span>
              <div className="w-12" /> {/* spacer to balance */}
            </div>

            {/* Terminal Content */}
            <div className="p-5 space-y-4">
              <div>
                <p className="text-accent">&lt;SG /&gt; ~ <span className="text-[#a0a09a]">cat info.json</span></p>
                <div className="pl-4 mt-1 space-y-1">
                  <p className="text-[#a0a09a]">&#123;</p>
                  <p className="pl-4"><span className="text-accent">&quot;name&quot;</span>: <span className="text-[#e0e0de]">&quot;Spandan Ghosh&quot;</span>,</p>
                  <p className="pl-4"><span className="text-accent">&quot;specialty&quot;</span>: <span className="text-[#e0e0de]">&quot;Full-Stack &amp; DevOps&quot;</span>,</p>
                  <p className="pl-4"><span className="text-accent">&quot;interests&quot;</span>: <span className="text-[#a0a09a]">[&quot;API Architecture&quot;, &quot;Dockerization&quot;, &quot;Cloud Infrastructure&quot;]</span></p>
                  <p className="text-[#a0a09a]">&#125;</p>
                </div>
              </div>

              <div>
                <p className="text-accent">&lt;SG /&gt; ~ <span className="text-[#a0a09a]">cat experiences.csv</span></p>
                <div className="mt-1 pl-4 space-y-1 select-all">
                  <p className="text-xs text-[#6e6e6c]">role,company,duration</p>
                  <p className="text-[#e0e0de]">Backend-SDE,UNSW,2025-Present</p>
                  <p className="text-[#e0e0de]">Marketing-Strategies,BetterMind Labs,2024-2024</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-accent">&lt;SG /&gt; ~ <span className="text-accent/60 select-none animate-pulse">█</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
