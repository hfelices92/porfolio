import type { Project } from "../types";
import { skillsMap } from "./skills";

export const projects: Project[] = [
  {
    id: "1",
    title: "Task Manager",
    description:
      "Aplicación full-stack para gestionar proyectos y tareas, con autenticación JWT y API REST en Node.js + Express. El frontend en React ofrece una experiencia fluida con React Query, React Hook Form y un diseño limpio en Tailwind CSS. Permite crear proyectos, asignar tareas por estado y añadir notas colaborativas en tiempo real.",
    images: [
      {
        src: "/images/taskmanager/task_manager_miniature.png",
        caption: "Tablero Kanban",
      },
      { src: "/images/taskmanager/task1.png", caption: "Creación de Tareas" },
      { src: "/images/taskmanager/task2.png", caption: "Drag&Drop" },
      { src: "/images/taskmanager/task3.png", caption: "Notas en Tiempo Real" },
      {
        src: "/images/taskmanager/task4.png",
        caption: "Proyectos Colaborativos",
      },
    ],
    skills: [
      skillsMap.react,
      skillsMap.typescript,
      skillsMap.tailwind,
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
    description: "Fresh Coffee es una aplicación web desarrollada con Next.js que permite gestionar productos, categorías y pedidos de una cafetería en tiempo real. Incluye CRUD completo con Prisma ORM, base de datos PostgreSQL desplegada en Vercel, subida optimizada de imágenes con Cloudinary, manejo global de estado con Zustand, validación de formularios con Zod y actualización eficiente de datos mediante SWR. La interfaz está diseñada con Tailwind CSS para ofrecer una experiencia rápida, moderna y responsiva.",
    images: [
      {
        src: "/images/freshcoffee/coffee1.png",
        caption: "Vista Quiosco",
      },
     {
        src: "/images/freshcoffee/coffee2.png",
        caption: "Vista Administrador",
      },{
        src: "/images/freshcoffee/coffee3.png",
        caption: "Backoffice",
      },{
        src: "/images/freshcoffee/coffee4.png",
        caption: "Vista de creación de productos",
      },
      {
        src: "/images/freshcoffee/coffee5.png",
        caption: "Vista de recogida de pedidos",
      },
    ],
    "skills": [
    skillsMap.nextjs,
    skillsMap.react,
    skillsMap.typescript,
    skillsMap.tailwind,
    skillsMap.prisma,
    skillsMap.postgresql,
    skillsMap.zustand,
    skillsMap.zod,
    skillsMap.axios,
  ],

    url: "https://xiri-next.vercel.app/order/cafe",
    adminUrl: "https://xiri-next.vercel.app/admin/orders",
    extraUrl: "https://xiri-next.vercel.app/orders",
    github: "https://github.com/hfelices92/xiri-next",
  },
  {
    id: "3",
    title: "Laravel Blog",
    description:
      "Aplicación full-stack para gestionar proyectos y tareas, con autenticación JWT y API REST en Node.js + Express. El frontend en React ofrece una experiencia fluida con React Query, React Hook Form y un diseño limpio en Tailwind CSS. Permite crear proyectos, asignar tareas por estado y añadir notas colaborativas en tiempo real.",
    images: [
      {
        src: "/images/taskmanager/task_manager_miniature.png",
        caption: "Tablero Kanban",
      },
      { src: "/images/taskmanager/task1.png", caption: "Creación de Tareas" },
      { src: "/images/taskmanager/task2.png", caption: "Drag&Drop" },
      { src: "/images/taskmanager/task3.png", caption: "Notas en Tiempo Real" },
      {
        src: "/images/taskmanager/task4.png",
        caption: "Proyectos Colaborativos",
      },
    ],
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
    images: [
      {
        src: "/images/taskmanager/task_manager_miniature.png",
        caption: "Tablero Kanban",
      },
      { src: "/images/taskmanager/task1.png", caption: "Creación de Tareas" },
      { src: "/images/taskmanager/task2.png", caption: "Drag&Drop" },
      { src: "/images/taskmanager/task3.png", caption: "Notas en Tiempo Real" },
      {
        src: "/images/taskmanager/task4.png",
        caption: "Proyectos Colaborativos",
      },
    ],
    skills: [
      skillsMap.react,
      skillsMap.typescript,
      skillsMap.tailwind,
      skillsMap.zustand,
      skillsMap.zod,
    ],

    url: "https://tusitio.com/dental",
    github: "https://github.com/hfelices92/task-manager-frontend",
    backEnd: "https://github.com/hfelices92/task-manager-backend",
  },
  {
    id: "5",
    title: "Cocktail",
    description:
      "Aplicación web para explorar recetas de cócteles conectada a una API externa. Permite realizar búsquedas dinámicas, filtrar por categorías, gestionar una lista de favoritos y generar recetas nuevas mediante IA. El frontend está desarrollado en React, con un diseño moderno y responsivo construido con Tailwind CSS.",
    images: [
      { src: "/images/drinks/drinks1.png", caption: "Busqueda filtrada" },
      {
        src: "/images/drinks/drinks2.png",
        caption: "Lista de Recetas Obtenidas",
      },
      { src: "/images/drinks/drinks3.png", caption: "Detalle de la receta" },
      {
        src: "/images/drinks/drinks4.png",
        caption: "Generación de recetas con inteligencia artificial",
      },
       {
        src: "/images/drinks/drinks5.png",
        caption: "Favoritos",
      },
    ],
    skills: [
      skillsMap.react,
      skillsMap.typescript,
      skillsMap.tailwind,
      skillsMap.zustand,
      skillsMap.zod,
      skillsMap.axios,
    ],

    github: "https://github.com/hfelices92/drinks-AI-react",
  },
];
