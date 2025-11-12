import type { Skill } from "../types";

export const skills: Skill[] = [
  { name: "HTML5", icon: "devicon-html5-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "devicon-css3-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "devicon-react-original colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "devicon-nextjs-plain", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React Native", icon: "devicon-react-original colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Ionic", icon: "devicon-ionic-original colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "devicon-express-original", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Laravel", icon: "devicon-laravel-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "PHP", icon: "devicon-php-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "phpMyAdmin", icon: "devicon-phpstorm-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/phpstorm/phpstorm-original.svg" },
  { name: "Python", icon: "devicon-python-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Flask", icon: "devicon-flask-original text-slate-100", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Mongoose", icon: "devicon-mongodb-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "devicon-mysql-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Prisma", icon: "devicon-prisma-original text-slate-600", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "Git", icon: "devicon-git-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", icon: "devicon-github-original", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  { name: "Bitbucket", icon: "devicon-bitbucket-original colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg" },
  { name: "Vite", icon: "devicon-vitejs-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "TanStack", icon: "devicon-react-original colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "VS Code", icon: "devicon-vscode-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "PhpStorm", icon: "devicon-phpstorm-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/phpstorm/phpstorm-original.svg" },
  { name: "Redux", icon: "devicon-redux-original colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
  { name: "Zustand", icon: "devicon-zustand-plain", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg" },
  { name: "Zod", icon: "devicon-typescript-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Postman", icon: "devicon-postman-plain colored", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Linux", icon: "devicon-linux-plain text-orange-300", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Bash", icon: "devicon-bash-plain text-slate-300", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },
];



export const skillsMap = skills.reduce((acc, skill) => {
  const key = skill.name
    .toLowerCase()
    .replace(/\s|\./g, ""); // ej: "Node.js" → "nodejs"
  acc[key] = skill;
  return acc;
}, {} as Record<string, Skill>);