import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "../../types";
import "./projects.css";

export type ProjectDisplayProps = {
  projects: Project[];
};

export default function ProjectsDisplay({ projects }: ProjectDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const cards = containerRef.current?.querySelectorAll(".project-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      const index = parseInt(el.dataset.index || "0", 10);

      // Detectar si entra desde abajo
      const isEnteringFromBottom =
        entry.boundingClientRect.top > window.innerHeight * 0.85;

      // Detectar si sale por abajo
      const isLeavingBelow =
        entry.boundingClientRect.top > window.innerHeight &&
        !entry.isIntersecting;

      let animationClass = "";
      if (index % 3 === 0) animationClass = "animate-fadeInLeft";
      else if (index % 3 === 1) animationClass = "animate-fadeInUp";
      else animationClass = "animate-fadeInRight";

      // 👇 Aquí es donde entra tu delay
      const delay = (index % 3) * 0.1 + Math.floor(index / 3) * 0.15;
      el.style.animationDelay = `${delay}s`;

      // Si entra desde abajo → animar
      if (entry.isIntersecting && isEnteringFromBottom) {
        el.classList.remove(animationClass);
        void el.offsetWidth; // reinicia animación sin parpadeo
        el.classList.add(animationClass);
      
      }

     

      // Si sale por abajo → ocultar (para poder reanimar después)
      if (isLeavingBelow) {
        el.classList.remove(animationClass);
        el.style.opacity = "0";
      }

      // Si sale por arriba → mantener visible
      if (
        !entry.isIntersecting &&
        entry.boundingClientRect.bottom < 0
      ) {
        el.style.opacity = "1";
      }
    });
  }, { threshold: 0.15 });

  cards?.forEach((card) => observer.observe(card));
  return () => observer.disconnect();
}, [projects]);




  return (
    <div className="md:w-10/12 mx-auto">
      <div
        ref={containerRef}
        className="grid md:grid-cols-3 gap-6 md:gap-10 px-2 py-10"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
