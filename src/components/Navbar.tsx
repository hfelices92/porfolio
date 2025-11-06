import { useNavigate } from "react-router-dom";
import { GradientText } from "./ui/shadcn-io/gradient-text";

type NavbarProps = {
  scrollToSection: {
    about: () => void;
    projects: () => void;
    contact: () => void;
  };
};

export default function Navbar({ scrollToSection }: NavbarProps) {
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
      <div className="text-2xl font-bold mx-auto md:mx-0">
        <GradientText
          neon={true}
          text="Héctor Felices González"
          gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
        />
      </div>

      {/* Menú escritorio */}
      <ul className="hidden md:flex gap-6 text-xl">
        <li
          className="hover-underline cursor-pointer"
          onClick={scrollToSection.about}
        >
          <GradientText
            neon={true}
            text="About Me"
            gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
          />
        </li>
        <span className="text-slate-500">|</span>
        <li
          className="hover-underline cursor-pointer"
          onClick={scrollToSection.projects}
        >
          <GradientText
            neon={true}
            text="Projects"
            gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
          />
        </li>
        <span className="text-slate-500">|</span>
        <li
          className="hover-underline cursor-pointer"
          onClick={scrollToSection.contact}
        >
          <GradientText
            neon={true}
            text="Contact"
            gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
          />
        </li>
        <span className="text-slate-500">|</span>
        <li
          className="hover-underline cursor-pointer"
          onClick={() => navigate("/space")}
        >
          <GradientText
            neon={true}
            text="Ir al espacio"
            gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
          />
        </li>
      </ul>
    </nav>
  );
}
