import CryptTextEffect from "../CryptTextEffect";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import "./about.css";
import BackgroundLetters from "../background/BackgroundLetters";

export default function About() {
  return (
    <div className="relative overflow-hidden">
      {/* Contenido principal */}
      <div className="md:max-w-5xl mx-auto mb-20 mt-30 p-2 bg-[#111929]/80 rounded-lg shadow-[0_0_15px_2px_rgba(168,85,247,0.4)]  overflow-x-hidden lg:p-8">
        <TypingText
          text={["¡Hola, soy Héctor!", "<Desarrollador Web/>"]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-4xl font-bold bg-linear-to-r from-[#3b82f6] via-[#8b5cf6] to-[#FF5ECA] bg-clip-text text-transparent"
          variableSpeed={{ min: 50, max: 120 }}
        />

        <div className="flex flex-col md:flex-row mt-6 mb-6 gap-6 items-center">
          <div className="flex-col items-center">
            <img
              src={"/images/profile.jpg"}
              alt="About Me"
              className="w-72 h-72 object-cover  rounded-full shadow-[0_0_15px_2px_rgba(168,85,247,0.4)] "
            />
            <div className="flex justify-center gap-5 mt-4 ">
              <a
                href="https://github.com/hfelices92"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={
                    "devicon-github-plain text-3xl text-center text-slate-200"
                  }
                ></i>
              </a>
             
              <a
                href="https://www.linkedin.com/in/hectorfelices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={
                    "devicon-linkedin-plain text-3xl text-center text-slate-200"
                  }
                ></i>
              </a>
            </div>
          </div>

          <div className="md:w-7/12 text-lg md:ml-5 leading-relaxed">
            <CryptTextEffect
              glitchActive
              decryptActive
              tickCambioLetra={8}
              className="text-slate-200 text-glow-purple"
              text="Hello! I'm a passionate developer with a love for creating innovative solutions. With a strong background in web development, I enjoy building applications that are both functional and visually appealing. Hello! I'm a passionate developer with a love for creating innovative solutions. With a strong background in web development, I enjoy building applications that are both functional and visually appealing."
            />
          </div>
        </div>

        <p className="text-slate-200 mt-4 text-glow-purple">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad labore et
          pariatur temporibus voluptas architecto alias. Perspiciatis facilis.
        </p>
      </div>
      {/* Fondo animado */}
      <BackgroundLetters />
    </div>
  );
}
