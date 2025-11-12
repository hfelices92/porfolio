import type { Project } from "@/types";
import { skillsMap } from "./skills";

export const projects: Project[] = [
  {
    id: "1",
    title: "Task Manager",
    description:
      "Aplicación full-stack para gestionar proyectos y tareas, con autenticación JWT y API REST en Node.js + Express. El frontend en React ofrece una experiencia fluida con React Query, React Hook Form y un diseño limpio en Tailwind CSS. Permite crear proyectos, asignar tareas por estado y añadir notas colaborativas en tiempo real.",
    images: [
      "/images/taskmanager/task_manager_miniature.png",
      "/images/taskmanager/task1.png",
      "/images/taskmanager/task2.png",
      "/images/taskmanager/task3.png",
      "/images/taskmanager/task4.png",
    ],
    captions: ["Tablero Kanban", "Creación de Tareas", "Drag&Drop", "Notas en Tiempo Real", "Proyectos Colaborativos"],
    skills: [
      skillsMap.react,
      skillsMap.typescript,
      skillsMap.tailwindcss,
      skillsMap.tanstack,
      skillsMap.zod,
      skillsMap.zustand,
      skillsMap.vscode,
      skillsMap.nodejs,
      skillsMap.express,
      skillsMap.mongodb,
      skillsMap.mongoose,
  
    ],

    url: "https://task-manager-frontend-dusky-ten.vercel.app/auth/demo",
    github: "https://github.com/hfelices92/task-manager-frontend",
    backEnd: "https://github.com/hfelices92/task-manager-backend",
    details:
      "Aplicación full-stack para la gestión de proyectos y tareas, con autenticación JWT y API REST en Node.js + Express. El frontend en React ofrece una experiencia fluida y moderna gracias a React Query, React Hook Form y Tailwind CSS. Permite crear proyectos, asignar tareas por estado y añadir notas colaborativas en tiempo real, con actualizaciones instantáneas y un diseño adaptable y profesional.",
  },
  {
    id: "2",
    title: "Fresh Coffee",
    description: "Aplicación Next .",
    images: [
      "/images/freshcoffee/fresh_coffee_miniature.png",
      "/images/freshcoffee/fresh_coffee_miniature.png",
      "/images/freshcoffee/fresh_coffee_miniature.png",
    ],
    captions: [],
    skills: [
      skillsMap.nextjs,
      skillsMap.react,
      skillsMap.typescript,
      skillsMap.tailwindcss,
      skillsMap.prisma,
      skillsMap.zustand,
      skillsMap.zod,
    ],

    // url: "https://tusitio.com/dental",
    github: "https://github.com/hfelices92/task-manager-frontend",
  },
  {
    id: "3",
    title: "Laravel Blog",
    description:
      "Aplicación full-stack para gestionar proyectos y tareas, con autenticación JWT y API REST en Node.js + Express. El frontend en React ofrece una experiencia fluida con React Query, React Hook Form y un diseño limpio en Tailwind CSS. Permite crear proyectos, asignar tareas por estado y añadir notas colaborativas en tiempo real.",
    images: ["/images/taskmanager/task_manager_miniature.png"],
    captions: [],
    skills: [
      skillsMap.php,
      skillsMap.laravel,
      skillsMap.mysql,
      skillsMap.phpstorm,
    ],

    url: "https://tusitio.com/dental",
    github: "https://github.com/hfelices92/task-manager-frontend",
    backEnd: "https://github.com/hfelices92/task-manager-backend",
  },
  {
    id: "4",
    title: "Portfolio ",
    description:
      "Aplicación full-stack para gestionar proyectos y tareas, con autenticación JWT y API REST en Node.js + Express. El frontend en React ofrece una experiencia fluida con React Query, React Hook Form y un diseño limpio en Tailwind CSS. Permite crear proyectos, asignar tareas por estado y añadir notas colaborativas en tiempo real.",
    images: ["/images/taskmanager/task_manager_miniature.png"],
    captions: [],
    skills: [
      skillsMap.react,
      skillsMap.typescript,
      skillsMap.tailwindcss,
      skillsMap.zustand,
      skillsMap.zod,
    ],

    url: "https://tusitio.com/dental",
    github: "https://github.com/hfelices92/task-manager-frontend",
    backEnd: "https://github.com/hfelices92/task-manager-backend",
  },
  {
    id: "5",
    title: "Drinks App",
    description:
      "Aplicación full-stack para gestionar proyectos y tareas, con autenticación JWT y API REST en Node.js + Express. El frontend en React ofrece una experiencia fluida con React Query, React Hook Form y un diseño limpio en Tailwind CSS. Permite crear proyectos, asignar tareas por estado y añadir notas colaborativas en tiempo real.",
    images: ["/images/taskmanager/task_manager_miniature.png"],
    captions: [],
    skills: [
      skillsMap.react,
      skillsMap.typescript,
      skillsMap.tailwindcss,
      skillsMap.zustand,
      skillsMap.zod,
    ],

    url: "https://tusitio.com/dental",
    github: "https://github.com/hfelices92/task-manager-frontend",
    backEnd: "https://github.com/hfelices92/task-manager-backend",
  },
];
