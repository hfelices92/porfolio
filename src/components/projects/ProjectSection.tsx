import type { Project } from "../../types";
import { GradientText } from "../ui/shadcn-io/gradient-text";
import ProjectsDisplay from "./ProjectsDisplay";

const projects: Project[] = [
  {
    id: 1,
    title: "Task Manager",
    description:
      "Aplicación full-stack para gestionar proyectos y tareas, con autenticación JWT y API REST en Node.js + Express. El frontend en React ofrece una experiencia fluida con React Query, React Hook Form y un diseño limpio en Tailwind CSS. Permite crear proyectos, asignar tareas por estado y añadir notas colaborativas en tiempo real.",
    image: "/images/taskmanager/task_manager_miniature.png",
    url: "https://tusitio.com/dental",
  },
  {
    id: 2,
    title: "Fresh Coffee",
    description: "Aplicación Next .",
    image: "/images/freshcoffee/fresh_coffee_miniature.png",
    url: "https://xiri-next.vercel.app/order/cafe",
  },
  {
    id: 3,
    title: "Blog Personal",
    description: "Blog desarrollado en Next.js con CMS.",
    image: "/images/blog.jpg",
    url: "https://tusitio.com/blog",
  },
  {
    id: 4,
    title: "E-commerce",
    description: "Tienda online con pasarela de pagos.",
    image: "/images/ecommerce.jpg",
    url: "https://tusitio.com/shop",
  },
  {
    id: 5,
    title: "Portfolio",
    description: "Mi portfolio personal en React.",
    image: "/images/portfolio.jpg",
    url: "https://tusitio.com/portfolio",
  },
  {
    id: 6,
    title: "Clínica Dental",
    description: "Sitio web en Laravel con panel de gestión.",
    image: "/images/dental.jpg",
    url: "https://tusitio.com/dental",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 mt-10 ">
      <h2 className="text-3xl font-bold text-center mb-8 ">
        <GradientText
          text="Proyectos"
          className=""
          gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)"
          neon={true}
        />
      </h2>
      <ProjectsDisplay projects={projects} />
    </section>
  );
}
