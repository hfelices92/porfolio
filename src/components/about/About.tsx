import CryptTextEffect from "../CryptTextEffect";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import "./about.css";
import BackgroundLetters from "../background/BackgroundLetters";

export default function About() {
  return (
    <div className="relative overflow-hidden">
      

      {/* Contenido principal */}
      <div className="md:max-w-5xl mx-auto my-20 p-2 bg-slate-50/80 rounded-lg shadow-lg  overflow-x-hidden lg:p-8">
        <TypingText
          text={["Web Developer", "React Enthusiast", "Laravel Lover"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-4xl font-bold"
          textColors={["#3b82f6", "#8b5cf6", "#06b6d4"]}
          variableSpeed={{ min: 50, max: 120 }}
        />

        <div className="flex flex-col md:flex-row mt-6 mb-6 gap-6 items-center">
          <img
            src={"/images/profile.jpg"}
            alt="About Me"
            className="w-72 h-72 object-cover  rounded-full shadow-slate-400 shadow-lg"
          />
          <p className="md:w-7/12 text-lg leading-relaxed">
            <CryptTextEffect
              glitchActive
              decryptActive
              tickCambioLetra={10}
              className="text-green-700"
              text="Hello! I'm a passionate developer with a love for creating innovative solutions. With a strong background in web development, I enjoy building applications that are both functional and visually appealing. Hello! I'm a passionate developer with a love for creating innovative solutions. With a strong background in web development, I enjoy building applications that are both functional and visually appealing."
            />
          </p>
        </div>

        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad labore et
          pariatur temporibus voluptas architecto alias. Perspiciatis facilis.
        </p>
      </div>
      {/* Fondo animado */}
      <BackgroundLetters />
    </div>
  );
}
