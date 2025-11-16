import CryptTextEffect from "../CryptTextEffect";
import TypingText from "../ui/shadcn-io/typing-text";
import "./about.css";
import BackgroundLetters from "../background/BackgroundLetters";
import { GradientText } from "../ui/shadcn-io/gradient-text";
import { AnimatePresence } from "framer-motion";
import CurriculumModal from "./CurriculumModal";
import { useEffect, useState } from "react";
import Curriculum from "./Curriculum";

export default function About() {
  const [showCV, setShowCV] = useState(false);

  const handleExpand = () => {
    setShowCV(true);
  };

  const handleClose = () => {
    setShowCV(false);
  };

  // 🧠 Bloquear scroll del body cuando hay card expandida
  useEffect(() => {
    if (showCV) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCV]);
  return (
    <div className="relative overflow-hidden mx-4 md:mx-0 md:mt-15">
      {/* Contenido principal */}
      <div className="md:max-w-5xl mx-auto mb-20 mt-30 p-2 bg-[#111929]/40 rounded-lg  overflow-x-hidden lg:px-8 lg:py-12 ">
        <TypingText
          text={["¡Hola, soy Héctor!", "<Desarrollador Web/>"]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="md:text-4xl text-3xl font-bold bg-linear-to-r from-[#3b82f6] via-[#8b5cf6] to-[#FF5ECA] bg-clip-text text-transparent"
          variableSpeed={{ min: 50, max: 120 }}
        />

        <div className="flex flex-col md:flex-row mt-6 mb-6 gap-6 items-center">
          <div className="flex-col items-center">
            <img
              src={"/images/profile.png"}
              alt="About Me"
              className="w-72 h-72 object-cover bg-[#121A2A]/60  rounded-full shadow-[0_0_15px_2px_rgba(168,85,247,0.4)] "
            />
            <div className="flex justify-center gap-5 mt-6">
              <a
                href="https://github.com/hfelices92"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <i
                  className="devicon-github-plain text-3xl text-center text-slate-200 
               transition-all duration-200 text-glow-purple
               hover:text-[rgba(168,85,247,0.7)]"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/hectorfelices/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <i
                  className="devicon-linkedin-plain text-3xl text-center text-slate-200 
               transition-all duration-200 text-glow-purple
               hover:text-[rgba(168,85,247,0.8)] "
                />
              </a>
            </div>
          </div>
          <div className="md:w-7/12 text-lg md:ml-5">
            <CryptTextEffect
              glitchActive
              tickCambioLetra={8}
              initialDecrypt={false}
              className="text-slate-200 text-glow-purple text-justify"
              paragraphs={[
                "Desarrollador Full-Stack con experiencia en Laravel, Node.js y React, desarrollando aplicaciones web y APIs REST. Trabajo con TypeScript, PHP y manejo MySQL, PostgreSQL y MongoDB.",
                "He participado en proyectos reales en entornos profesionales y también he sido docente de ciclos formativos de informática.",
                "Sigo formándome mientras avanzo en el grado de Ingeniería Informática y busco entornos donde pueda seguir creciendo y aportar valor desde el primer día.",
              ]}
            />
          </div>
          
        </div>

        <div className="flex items-center justify-center mt-6 mb-3 md:mb-0">
          <button
            onClick={handleExpand}
            className="border-2 border-[rgba(168,85,247,0.3)]  hover:border-[rgba(168,85,247,0.7)] 
        transition font-semibold py-2 px-4 rounded-md hover:cursor-pointer "
          >
            <GradientText text="Currículum Vitae" neon className="text-xl " />
          </button>
        </div>
      </div>
      {/* Fondo animado */}
      <BackgroundLetters />
      {/* ✅ Overlay del proyecto expandido */}
      <AnimatePresence>
        {showCV && (
          <CurriculumModal onClose={handleClose}>
            <Curriculum />
          </CurriculumModal>
        )}
      </AnimatePresence>
    </div>
  );
}
