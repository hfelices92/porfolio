
import { skills } from "../../data/skills";
import { GradientText } from "../ui/shadcn-io/gradient-text";
import SkillItem from "./SkillItem";
import "./skills.css";

export default function SkillsCaroussel() {
  return (
    <div className="flex-col flex items-center md:mt-20">
      <GradientText
        text="Habilidades y Herramientas"
        className="text-3xl font-bold mb-10"
        neon
      />

      <div className="md:w-8/12 w-11/12 h-30 flex items-center justify-around overflow-x-auto px-4 my-skills-carousel mx-auto ">
        {/* Añadir la clase "parade-container" */}

        <div className="flex justify-center items-center pr-1 parade-container">
          {skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex justify-center items-center pr-1 parade-container"
        >
          {skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
