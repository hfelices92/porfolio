import { skills } from "@/data/skills";
import { motion } from "framer-motion";

import { FileDown, MapPin, Mail, Phone } from "lucide-react";

export default function Curriculum() {
  return (
    <div className="relative w-full h-[90vh] overflow-y-auto bg-[#0e1117] text-slate-200 rounded-lg shadow-[0_0_15px_2px_rgba(168,85,247,0.4)] p-6 md:p-10">
      {/* ENCABEZADO */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center border-b border-slate-700 pb-6 mb-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
          Héctor Felices González
        </h1>
        <p className="text-lg text-slate-400">Full-Stack Developer</p>
        <div className="flex justify-center gap-4 mt-3 text-sm text-slate-400 flex-wrap">
          <span className="flex items-center gap-1">
            <MapPin size={16} /> Barcelona
          </span>
          <span className="flex items-center gap-1">
            <Mail size={16} /> hefeligo@gmail.com
          </span>
          <span className="flex items-center gap-1">
            <Phone size={16} /> +34 676 103 138
          </span>
        </div>
        <div className="flex justify-center gap-5 mt-4">
          <a
            href="https://github.com/hfelices92"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-2xl devicon-github-original hover:text-purple-400 transition" />
          </a>
          <a
            href="https://linkedin.com/in/hectorfelices"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-2xl devicon-linkedin-plain  hover:text-purple-400 transition" />
          </a>
          <a
            href="/CV-Hector-Felices.pdf"
            download="CV_Hector_Felices.pdf"
            className="flex items-center gap-1 text-sm hover:text-purple-400 transition"
          >
            <FileDown size={16} /> Descargar PDF
          </a>
        </div>
      </motion.div>

      <div className="flex-col md:flex-row md:flex gap-5">
        <div className="w-full md:w-1/2 pr-0 md:pr-10 md:border-r border-slate-700">
          {/* COMPETENCIAS */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-purple-400 mb-3">
              Competencias técnicas
            </h2>
            <div className="flex flex-wrap gap-2 text-sm">
              {skills.map((skill) => (
                <div className="flex gap-1 items-center px-3 py-1 rounded-full bg-purple-500/70 border border-slate-700">
                  <img src={skill.src} alt={skill.name} className="h-4 w-4 hidden md:block" />
                  <span
                    key={skill.name}
                    className=" text-slate-200 text-md"
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
          {/* ESTUDIOS */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-purple-400 mb-3">
              Formación
            </h2>
            <ul className="list-disc list-inside text-slate-300">
              <li>📘 Grado en Ingeniería Informática · UOC (en curso)</li>
              <li>
                💻 CFGS Desarrollo de Aplicaciones Web · Ins Joaquim Mir
                (2022-2024)
              </li>
              <li>🎓 Full Stack Bootcamp · Neoland School (2019 · 432h)</li>
            </ul>
          </section>
          {/* IDIOMAS */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-purple-400 mb-3">
              Idiomas
            </h2>
            <ul className="list-disc list-inside text-slate-300">
              <li>Catalán — Nativo</li>
              <li>Castellano — Nativo</li>
              <li>Inglés — B2</li>
            </ul>
          </section>
        </div>

        <div className="w-full md:w-1/2 pl-0 md:pl-10">
          {/* EXPERIENCIA LABORAL */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-purple-400 mb-3">
              Experiencia laboral
            </h2>
            {/* Mir */}
            <div className="mb-4">
              <h3 className="font-semibold text-slate-100">
                Profesor — Ins Joaquim Mir
              </h3>
              <p className="text-slate-400 text-sm">
                2025 · Docencia en DAW, ASIR y SMR
              </p>
              <p className="text-slate-300 text-sm mt-1">
                Desempeño de labores docentes en ciclos formativos de grado medio y
                superior, impartiendo módulos relacionados con programación,
                administración de sistemas y entornos web. Promoviendo un enfoque
                práctico basado en proyectos reales para desarrollar la
                autonomía técnica y la capacidad de resolución de problemas en
                el alumnado.
              </p>
            </div>
            {/* Clicko */}
            <div className="mb-4">
              <h3 className="font-semibold text-slate-100">
                Full-Stack Developer — Clicko
              </h3>
              <p className="text-slate-400 text-sm">2023 - 2024</p>
              <ul className="list-disc list-inside text-slate-300 text-sm mt-1">
                <li>
                  Desarrollo de aplicaciones web profesionales con{" "}
                  <strong>Laravel</strong> y <strong>PHP</strong>, aplicando
                  principios de arquitectura limpia y buenas prácticas.
                </li>
                <li>
                  Control de versiones y flujos de trabajo colaborativos con{" "}
                  <strong>Bitbucket</strong>, asegurando una integración
                  continua eficiente.
                </li>
                <li>
                  Diseño e implementación de herramientas de{" "}
                  <strong>backoffice</strong> dentro del marco del programa Kit
                  Digital, permitiendo la gestión de contenidos y métricas en
                  tiempo real.
                </li>
              </ul>
            </div>
            {/* SororidApp */}
            <div className="mb-4">
              <h3 className="font-semibold text-slate-100">
                Full-Stack Developer — SororidApp <span className="text-xs">PP</span>
              </h3>
              <p className="text-slate-400 text-sm">2024</p>
              <ul className="list-disc list-inside text-slate-300 text-sm mt-1">
                <li>
                  Diseño y desarrollo integral de una aplicación
                  Android enfocada en la comunidad y el bienestar digital.
                </li>
                <li>
                  Backend desarrollado con <strong>Laravel</strong>,
                  implementando endpoints RESTful seguros y escalables.
                </li>
                <li>
                  Frontend construido con <strong>Ionic</strong> y{" "}
                  <strong>React</strong>, priorizando la usabilidad y la
                  experiencia de usuario.
                </li>
                <li>
                  Gestión de base de datos SQL mediante{" "}
                  <strong>phpMyAdmin</strong>, optimizando consultas y
                  relaciones entre entidades.
                </li>
              </ul>
            </div>

            <h2 className="text-md font-semibold text-purple-400 mb-3">
              Otras experiencias laborales
            </h2>
            <div className="mb-4">
              <h3 className="font-semibold text-slate-100">
                Mozo de almacén — Mercadona
              </h3>
              <p className="text-slate-400 text-sm">2020 - 2023</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-100">
                Gerente-Encargado — 100 Montaditos
              </h3>
              <p className="text-slate-400 text-sm">2011 - 2019</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
