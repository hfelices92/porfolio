export type Skill = {
  name: string;
  icon: string; // Clase de icono (por ejemplo, para FontAwesome)
  src: string;  // URL del icono
};

export type Project = {
  id: string;
  title: string;
  description: string;
  images: string[];
  url: string;
};
