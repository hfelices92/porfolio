
import ProjectCard from "./ProjectCard";
import type { Project } from "../../types";
import "./projects.css";

export type ProjectDisplayProps = {
  projects: Project[];
};

export default function ProjectsDisplay({ projects }: ProjectDisplayProps) {
 

  return (
    <div className="md:w-10/12 mx-auto">
      <div
        
        className="grid md:grid-cols-3 gap-6 md:gap-14 px-10 py-10"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
