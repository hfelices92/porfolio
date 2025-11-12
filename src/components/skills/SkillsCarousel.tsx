
import { skills } from "../../data/skills";

import SkillItem from "./SkillItem";
import "./skills.css";

export default function SkillsCaroussel() {
  return (
   
     
      <div className=" w-11/12 h-30 flex items-center justify-around overflow-x-auto px-4 my-skills-carousel mx-auto ">
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
    
  );
}
