import type { Skill } from "@/types";

type ProjectSkillsProps = {
  skills: Skill[];
};

export default function ProjectSkills({ skills }: ProjectSkillsProps) {
  // Filtramos skills con src únicos
  const uniqueSkills = skills.filter(
    (skill, index, self) => index === self.findIndex((s) => s.src === skill.src)
  );

  return (
    <div className="flex mb-2">
      {uniqueSkills.map((skill) => (
        <img
          key={skill.name}
          src={skill.src}
          alt={skill.name}
          title={skill.name}
          className="w-6 h-6 mr-2"
        />
      ))}
    </div>
  );
}
