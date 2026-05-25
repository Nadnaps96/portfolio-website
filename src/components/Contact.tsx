"use client";

import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "@/data/personal";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";

export default function Contact() {
  const contactLinks = [
    {
      name: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      desc: "Reach out via email directly.",
      label: "Send Email"
    },
    {
      name: "LinkedIn",
      value: "spandan-ghosh-17b401240",
      href: personalInfo.linkedinUrl,
      icon: Linkedin,
      desc: "Connect on my professional profile.",
      label: "Message Me"
    },
    {
      name: "GitHub",
      value: "Nadnaps96",
      href: personalInfo.githubUrl,
      icon: Github,
      desc: "View my open source repositories.",
      label: "View Repos"
    },
    {
      name: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s+/g, '')}`,
      icon: Phone,
      desc: "Call or message me.",
      label: "Call Now"
    }
  ];

  return (
    <SectionWrapper id="contact" className="border-t border-border-primary/40 bg-bg-primary">
      <div className="flex flex-col space-y-2 mb-12 items-center text-center">
        <span className="text-sm font-mono text-accent tracking-wider uppercase">06. Contact</span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
          Get In Touch
        </h2>
        <p className="text-text-secondary text-sm max-w-lg">
          Interested in working together or want to chat about engineering? Drop me an email or connect on social media. I&apos;m always open to discussing new opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {contactLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target={item.name !== "Phone" && item.name !== "Email" ? "_blank" : undefined}
              rel={item.name !== "Phone" && item.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex flex-col justify-between p-6 bg-bg-card rounded-xl border border-border-primary hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Header Icon */}
                <div className="p-3 bg-bg-secondary group-hover:bg-accent/10 border border-border-primary/60 group-hover:border-accent/25 text-text-secondary group-hover:text-accent rounded-lg w-fit transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Details */}
                <h3 className="text-lg font-bold tracking-tight text-text-primary mt-5">
                  {item.name}
                </h3>
                <p className="text-xs text-text-secondary mt-1">{item.desc}</p>
                <p className="text-sm font-mono text-accent font-semibold mt-3 break-all">
                  {item.value}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="flex items-center gap-1 text-xs font-mono font-bold text-text-secondary group-hover:text-accent mt-6 transition-colors duration-300">
                <span>{item.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
