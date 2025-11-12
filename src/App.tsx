// En App.tsx
import { useEffect, useRef } from "react";
import About from "./components/about/About";

import Navbar from "./components/Navbar";
import ProjectsSection from "./components/projects/ProjectSection";
import SkillsCaroussel from "./components/skills/SkillsCarousel";

import MainLayout from "./layouts/MainLayout";
import Contact from "./components/contact/Contact";

export default function App() {
  // 👇 Añade el tipo HTMLDivElement o HTMLElement
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToSection = {
    about: () => aboutRef.current?.scrollIntoView({ behavior: "smooth" }),
    skills: () => {
      const yOffset = -100; // ajusta el desplazamiento según la altura de tu navbar
      const element = skillsRef.current;
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
    projects: () => {
      const yOffset = -40; // ajusta el desplazamiento según la altura de tu navbar
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
    <MainLayout>
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
        <Contact />
      </section>
    </MainLayout>
  );
}
