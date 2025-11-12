import { GradientText } from "../ui/shadcn-io/gradient-text";
import SkillsCaroussel from "./SkillsCarousel";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  // Agrupamos automáticamente por categoría
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section
      className="mt-8 space-y-10  flex flex-col items-center md:w-10/12 md:mx-auto mx-2"
      id="skills"
    >
      <GradientText
        text="Habilidades y Herramientas"
        className="text-3xl font-bold mb-10 hidden md:block text-center"
        neon
      />
      <div className="md:hidden flex flex-col items-center">
        <GradientText
          text="Habilidades"
          className="text-3xl font-bold text-center"
          neon
        />
        <GradientText
          text="y"
          className="text-3xl font-bold  text-center"
          neon
        />
        <GradientText
          text="Herramientas"
          className="text-3xl font-bold  text-center"
          neon
        />
      </div>

      <SkillsCaroussel />

      {/* Listado por categorías */}
      <div className="grid gap-10 md:w-8/12 mx-auto">
        {Object.entries(categories).map(([category, skillList]) => (
          <div key={category} className="space-y-4">
            {/* Título de categoría */}
            <h2 className="text-xl font-semibold capitalize border-b border-slate-500/60 pb-1 text-slate-300 first-letter:text-2xl first-letter:text-purple-500">
              {category}
            </h2>

            {/* Grid de skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillList.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-slate-900/50 p-3 rounded-lg hover:bg-slate-900 transition border border-slate-700/40"
                >
                  <img src={skill.src} alt={skill.name} className="w-6 h-6" />
                  <span className="text-slate-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
