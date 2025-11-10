import ProjectCard from "./ProjectCard";
import type { Project } from "../../types";
import "./projects.css";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";

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
      <div className="grid md:grid-cols-3 gap-6 md:gap-14 px-10 py-10">
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
                <div key={project.id}>
                  <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                  <p className="mb-6">{project.description}</p>

                  <div className="h-80 bg-slate-700 rounded-lg mb-6 flex items-center justify-center">
                    <p className="text-slate-300">📸 Imagen o slider aquí</p>
                  </div>

                  <div className="space-y-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md font-medium text-white"
                    >
                      Ver demo
                    </a>
                  </div>

                  <div className="mt-8 space-y-3">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum sit amet sem vel ligula convallis bibendum.
                    </p>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Integer quis mi vitae
                      nunc.
                    </p>
                    <p>
                      Cras accumsan elit ut diam faucibus, at pretium augue
                      mattis.
                    </p>
                    <div className="h-80 bg-slate-700 rounded-lg mb-6 flex items-center justify-center">
                      <p className="text-slate-300">📸 Imagen o slider aquí</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum sit amet sem vel ligula convallis bibendum.
                    </p>
                    <div className="h-80 bg-slate-700 rounded-lg mb-6 flex items-center justify-center">
                      <p className="text-slate-300">📸 Imagen o slider aquí</p>
                    </div>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Integer quis mi vitae
                      nunc.
                    </p>
                    <p>
                      Cras accumsan elit ut diam faucibus, at pretium augue
                      mattis. Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit. Voluptate est fugiat aspernatur totam
                      iusto sapiente repudiandae, adipisci enim tempora commodi,
                      nostrum, dicta cupiditate excepturi dolore eos veniam
                      omnis voluptatem error?
                    </p>
                  </div>
                </div>
              ))}
          </ProjectModal>
        )}
      </AnimatePresence>
    </div>
  );
}


