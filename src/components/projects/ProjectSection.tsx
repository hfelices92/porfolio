import { GradientText } from "../ui/shadcn-io/gradient-text";
import { motion, useAnimation } from "motion/react";
import ProjectsDisplay from "./ProjectsDisplay";
import { projects } from "@/data/projects";



export default function ProjectsSection() {
  const controls = useAnimation();
  return (
    <section id="projects" className="py-20 mt-10 ">
      <motion.h2
        initial={{ opacity: 0, scale: 0.5, x: 0, y: 200 }}
        animate={controls}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
        onViewportLeave={() =>
          controls.start({
            opacity: 0,
            scale: 0.5,
            y: 100,
            transition: { duration: 1.5, ease: "easeInOut" },
          })
        }
        viewport={{ amount: 0.4, once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-xl font-bold text-center mb-8 "
      >
        <GradientText
          text="Proyectos"
          className="uppercase text-5xl"
          gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)"
          neon={true}
        />
      </motion.h2>
      <ProjectsDisplay projects={projects} />
    </section>
  );
}
