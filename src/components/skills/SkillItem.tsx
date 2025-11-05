import type { Skill } from "../../types";

type SkillItemProps = {
  skill: Skill;
};
export default function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 pr-5">
      <i className={skill.icon + " md:text-7xl text-5xl text-center"}></i>
      <p className="whitespace-nowrap text-center md:block hidden text-slate-200">{skill.name}</p>
    </div>
  );
}
