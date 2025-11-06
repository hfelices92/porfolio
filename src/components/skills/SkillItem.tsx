import type { Skill } from "../../types";

type SkillItemProps = {
  skill: Skill;
};
export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 pr-5 w-24 h-24">
       <img src={skill.src} alt={skill.name} className="w-8/12 h-/12 mb-2" />
      <p className="whitespace-nowrap text-center  text-slate-200">{skill.name}</p>
    </div>
  );
}
