import { skills } from "@/data/skills";
import ScrollVelocity from "../ui/shadcn-io/scroll-velocity";

export default function BackgroundLetters() {
  // Obtener los nombres
  const skillNames = skills.map((skill) => skill.name);

  // Calcular el punto medio del array
  const half = Math.ceil(skillNames.length / 2);

  // Dividir en dos mitades
  const firstHalf = skillNames.slice(0, half).join(" ");
  const secondHalf = skillNames.slice(half).join(" ");

  return (
    <div className="hidden lg:block lg:absolute lg:top-40 -z-10 pointer-events-none">
      <ScrollVelocity
        texts={[firstHalf, secondHalf]}
        velocity={60}
        className="lg:text-9xl font-bold text-glow-purple text-slate-300 opacity-20 select-none whitespace-nowrap"
      />
    </div>
  );
}
