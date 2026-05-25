import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function Footer() {
  return (
    <footer className="border-t border-border-primary/50 bg-bg-secondary/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <p className="text-sm font-semibold text-text-primary">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Deployed on Vercel.
          </p>
        </div>

        {/* Right Side: Back to Top Button */}
        <a
          href="#home"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border-primary bg-bg-card hover:bg-bg-secondary hover:text-accent hover:border-accent/30 text-xs font-mono font-medium transition-all cursor-pointer"
          aria-label="Scroll to top of page"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

      </div>
    </footer>
  );
}
