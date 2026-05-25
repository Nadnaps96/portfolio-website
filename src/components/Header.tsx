"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { personalInfo } from "@/data/personal";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Simple active link highlight based on scroll position
      const scrollPosition = window.scrollY + 120; // offset for header height
      
      for (const link of navLinks) {
        const section = document.getElementById(link.href.substring(1));
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-primary/85 backdrop-blur-md border-b border-border-primary/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo/Name */}
        <a
          href="#home"
          onClick={() => handleLinkClick("#home")}
          className="font-mono text-lg font-bold tracking-tight text-accent transition-colors hover:text-accent-hover cursor-pointer"
        >
          &lt;SG /&gt;
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                activeSection === link.href
                  ? "text-accent font-semibold"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.name}
              {activeSection === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent rounded-full" />
              )}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary border border-border-primary/50 focus:outline-none cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Overlay) */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-bg-primary border-l border-border-primary shadow-xl z-50 transform transition-transform duration-300 md:hidden h-screen ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-border-primary/50">
          <span className="font-mono text-lg font-bold text-accent">&lt;SG /&gt;</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary border border-border-primary/50 cursor-pointer"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col py-6 px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`py-3 px-4 rounded-lg text-base font-medium transition-all ${
                activeSection === link.href
                  ? "bg-accent/10 text-accent font-semibold"
                  : "text-text-secondary hover:bg-bg-secondary hover:text-text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile backdrop */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden"
        />
      )}
    </header>
  );
}
