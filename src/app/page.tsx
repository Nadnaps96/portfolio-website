import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      {/* Navigation Header */}
      <Header />
      
      {/* Main content sections */}
      <main className="flex-grow flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>
      
      {/* Page Footer */}
      <Footer />
    </div>
  );
}
