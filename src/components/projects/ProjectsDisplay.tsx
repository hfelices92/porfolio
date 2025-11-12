import ProjectCard from "./ProjectCard";
import type { Project } from "../../types";
import "./projects.css";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
import ProjectModalContent from "./ProjectModalContent";

export type ProjectDisplayProps = {
  projects: Project[];
};

export default function ProjectsDisplay({ projects }: ProjectDisplayProps) {
  const [expandedProject, setExpandedProject] = useState<Project["id"]>("");

  const handleExpand = (id: Project["id"]) => {
    setExpandedProject(id);
  };

  const handleClose = () => {
    setExpandedProject("");
  };

  // 🧠 Bloquear scroll del body cuando hay card expandida
  useEffect(() => {
    if (expandedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [expandedProject]);

  return (
    <div className="md:w-10/12 mx-auto relative">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-6 md:gap-14 px-2 md:px-10 py-10">
        {!expandedProject &&
          projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              expandProject={handleExpand}
            />
          ))}
      </div>

      {/* ✅ Overlay del proyecto expandido */}
      <AnimatePresence>
        {expandedProject && (
          <ProjectModal onClose={handleClose}>
            {projects
              .filter((p) => p.id === expandedProject)
              .map((project) => (
                <ProjectModalContent  key={project.id} project={project} />
              ))}
          </ProjectModal>
        )}
      </AnimatePresence>
    </div>
  );
}


