import type { Project } from "../../types";
import { motion, useAnimation } from "framer-motion";
import ProjecImgSlider from "./ProjectImgSlider";

type ProjectCardProps = {
  project: Project;
  index: number;
  expandProject?: (id: Project["id"]) => void;
};

export default function ProjectCard({
  project,
  index,
  expandProject,
}: ProjectCardProps) {
  const controls = useAnimation();

  // 📍 Posiciones iniciales según el índice
  const getInitialPosition = (i: number) => {
    switch (i % 3) {
      case 0:
        return { x: -100 }; // entra desde la izquierda
      case 1:
        return { y: -50 }; // entra desde abajo
      case 2:
        return { x: 100 }; // entra desde la derecha
      default:
        return { x: 0 };
    }
  };

  // 📍 Posiciones de salida distintas
  const getExitPosition = (i: number) => {
    switch (i % 3) {
      case 0:
        return { x: 100, rotate: 4 }; // sale hacia el lado opuesto
      case 1:
        return { y: -50, scale: 0.8 }; // sale hacia arriba y reduce tamaño
      case 2:
        return { x: -100, rotate: -4 }; // sale hacia la izquierda
      default:
        return { opacity: 0 };
    }
  };

  const initialPos = getInitialPosition(index);
  const exitPos = getExitPosition(index);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, ...initialPos }}
        animate={controls}
        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }}
        onViewportLeave={() =>
          controls.start({
            opacity: 0,
            scale: 0.9,
            ...exitPos,
            transition: { duration: 0.5, ease: "easeIn" },
          })
        }
        viewport={{ amount: 0.3, once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col bg-[#24253D]/80 rounded-xl overflow-hidden min-h-80 p-3 border
                 border-[rgba(168,85,247,0.3)] hover:border-[rgba(168,85,247,0.7)] shadow-md"
      >
        <div className="mb-4 md:mb-0">
          <ProjecImgSlider images={project.images} />
        </div>

        <div className="flex flex-col  p-4  h-full">
          <h3 className="text-2xl text-slate-200 font-semibold mb-2">
            {project.title}
          </h3>
          <p className="text-slate-200 mb-4 text-sm">{project.description}</p>
          <div className="flex justify-end  h-full items-end">
            <p
              onClick={() => expandProject && expandProject(project.id)}
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-purple-500 font-medium hover:cursor-pointer "
            >
              Ver Detalles
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
