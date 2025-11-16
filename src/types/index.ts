export type Skill = {
  name: string;
  icon: string; // Clase de icono (por ejemplo, para FontAwesome)
  src: string; // URL del icono
  category: string; // Categoría opcional del skill
};

export type Project = {
  id: string;
  title: string;
  description: string;
  images: {
    src: string;
    caption: string;
  }[];
  skills: Skill[];
  url?: string;
  adminUrl?: string;
  extraUrl?: string;
  github: string;
  backEnd?: string;
  details?: string;
};
