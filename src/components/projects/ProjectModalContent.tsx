import type { Project } from "@/types";


import ProjectImgSlider from "./ProjectImgSlider";

type ProjectModalContentProps = {
  project: Project;
};
export default function ProjectModalContent({
  project,
}: ProjectModalContentProps) {
  return (
    <div key={project.id} className="md:px-3">
      <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
      <p className="mb-6">{project.description}</p>

      <ProjectImgSlider images={project.images} size="large" captions={project.captions} />

      <div className="flex items-center gap-4 mb-6 justify-end mt-8 mr-10">
        {project.github && (
          <div className="relative group">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-medium text-white"
            >
              <span className="devicon-github-original text-4xl" />
            </a>
             {/* Tooltip */}
            <span className="absolute top-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
             {project.backEnd ? "Frontend" : "Código Fuente"}
            </span>
          </div>
        )}

        {project.backEnd && (
          <div className="relative group">
            <a
              href={project.backEnd}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium"
            >
              <span className="devicon-github-original text-4xl" />
            </a>

            {/* Tooltip */}
            <span className="absolute top-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              Backend
            </span>
          </div>
        )}

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md font-medium text-white"
          >
            Ver demo
          </a>
        )}
      </div>

     
    </div>
  );
}
