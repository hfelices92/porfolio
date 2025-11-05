// En App.tsx
import { useEffect, useRef } from "react";
import About from "./components/about/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/projects/ProjectSection";
import SkillsCaroussel from "./components/skills/SkillsCarousel";
import { Particles } from "./components/ui/shadcn-io/particles";

export default function App() {
  // 👇 Añade el tipo HTMLDivElement o HTMLElement
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToSection = {
    about: () => aboutRef.current?.scrollIntoView({ behavior: "smooth" }),
    skills: () => skillsRef.current?.scrollIntoView({ behavior: "smooth" }),
    projects: () => {
      const yOffset = -100; // ajusta el desplazamiento según la altura de tu navbar
      const element = projectsRef.current;
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
    contact: () => contactRef.current?.scrollIntoView({ behavior: "smooth" }),
  };
  useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-gray-900 via-gray-800 to-black">
      <Particles
        className="fixed inset-0 z-0"
        quantity={100}
        ease={80}
        staticity={50}
        color="#00ff99"
        size={0.8}
      />

      <div className="relative z-10">
        <Navbar scrollToSection={scrollToSection} />

        <section ref={aboutRef}>
          <About />
        </section>

        <section ref={skillsRef}>
          <SkillsCaroussel />
        </section>

        <section ref={projectsRef}>
          <ProjectsSection />
        </section>

        <section ref={contactRef}>
          <Footer />
        </section>
      </div>
    </div>
  );
}
