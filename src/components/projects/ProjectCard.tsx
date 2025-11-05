import type { Project } from "../../types";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="flex flex-col bg-white rounded-xl overflow-hidden min-h-80 p-3 shadow-[0_0_15px_2px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_4px_rgba(168,85,247,0.7)] transition-shadow duration-300 project-card"
      data-index={index}
    >
      <div className="mb-4 md:mb-0 md:mr-4">
        <img
          src={project.image}
          alt={project.title}
          className="md:w-full md:h-80"
        />
      </div>

      <div className="flex flex-col justify-between p-4">
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-purple-300 font-medium text-end"
        >
          Ver Detalles
        </a>
      </div>
    </div>
  );
}
