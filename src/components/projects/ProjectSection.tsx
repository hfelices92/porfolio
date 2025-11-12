import { GradientText } from "../ui/shadcn-io/gradient-text";

import ProjectsDisplay from "./ProjectsDisplay";
import { projects } from "@/data/projects";



export default function ProjectsSection() {
 
  return (
    <section id="projects" className="py-20 mt-10 flex flex-col items-center">
     
        <GradientText
          text="Proyectos"
          className=" text-3xl text-center font-bold"
          gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)"
          neon={true}
        />
    
      <ProjectsDisplay projects={projects} />
    </section>
  );
}
