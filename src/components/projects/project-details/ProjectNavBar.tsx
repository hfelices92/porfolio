import { GradientText } from "@/components/ui/shadcn-io/gradient-text";
import { useNavigate } from "react-router-dom";

export default function ProjectNavBar() {
  const navigate = useNavigate();
  return (
    <nav
      className="
        fixed top-0 left-0 z-50 w-full
        bg-[#161F2F]/80 backdrop-blur-xs
        border-b border-slate-700/30
        flex justify-between items-center
        md:px-16 md:py-6 p-4
        transition-all duration-300
      "
    >
      <GradientText
        neon={true}
        className="md:text-2xl font-bold"
        text="Héctor Felices González"
        gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
      />{" "}
      <GradientText
        neon={true}
        className="md:text-3xl text-2xl font-bold hover:cursor-pointer hover:scale-110 transition-transform duration-500"
        text="Volver"
        gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
        onClick={() => navigate(-1)}
      />
    </nav>
  );
}
