import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GradientText } from "./ui/shadcn-io/gradient-text";

type NavbarProps = {
  scrollToSection: {
    about: () => void;
    projects: () => void;
    contact: () => void;
  };
};

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent flex justify-between items-center md:px-16 md:py-6 p-4 w-full top-0 left-0 relative">
      <p className="text-2xl font-bold">
        <GradientText
          neon={true}
          text="Héctor Felices González"
          gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
        />
      </p>

      {/* Botón hamburguesa */}
      <button
        className={`md:hidden flex flex-col justify-between w-8 h-6 relative group transition-all duration-600 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 bg-slate-200 rounded transition-all duration-600 ${
            isOpen ? "translate-y-2.5 rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block h-1 bg-slate-200 rounded transition-all duration-600 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-1 bg-slate-200 rounded transition-all duration-600 ${
            isOpen ? "-translate-y-2.5 -rotate-45" : ""
          }`}
        ></span>
      </button>

      {/* Menú escritorio */}
      <ul className="hidden md:flex gap-6 text-xl">
        <li
          className="hover:underline cursor-pointer"
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
          className="hover:underline cursor-pointer"
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
          className="hover:underline cursor-pointer"
          onClick={scrollToSection.contact}
        >
          <GradientText
            neon={true}
            text="Contact"
            gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
          />
        </li>
      </ul>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute z-20 top-full left-0 w-full bg-white backdrop-blur-md md:hidden shadow-md overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-6 text-lg">
              <li
                className="hover:underline cursor-pointer"
                onClick={() => {
                  scrollToSection.about();
                  setIsOpen(false);
                }}
              >
                <GradientText
                  neon={true}
                  text="About Me"
                  gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
                />
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => {
                  scrollToSection.projects();
                  setIsOpen(false);
                }}
              >
                <GradientText
                  neon={true}
                  text="Projects"
                  gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
                />
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => {
                  scrollToSection.contact();
                  setIsOpen(false);
                }}
              >
                <GradientText
                  neon={true}
                  text="Contact"
                  gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
                />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
