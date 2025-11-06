import ProjectNavBar from "@/components/projects/project-details/ProjectNavBar";
import MainLayout from "@/layouts/MainLayout";
import {
  motion
} from "framer-motion";
import { Link } from "react-router-dom";
import { GradientText } from "@/components/ui/shadcn-io/gradient-text";
import FloatingAstronaut from "@/components/FloatingAstronaut";



export default function NotFound() {
  return (
    <MainLayout>

      {/* Astronautas flotantes */}
      <FloatingAstronaut src="/images/notfound/astro1.png" size={180} speed={1.4} />
      <FloatingAstronaut src="/images/notfound/astro2.png" size={220} speed={1.1} />

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center py-60  text-center relative z-10 px-4">
        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <GradientText
            neon
            text="404"
            gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
            className="font-normal text-8xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl font-medium mb-2"
        >
          
          <GradientText
            
            text="¡Ups! Parece que te has perdido en el espacio."
            gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)"
            className="font-normal text-2xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-slate-300 max-w-md mx-auto mb-8"
        >
          Parece que el enlace que buscabas no existe. 
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded-full  shadow-[0_0_15px_2px_rgba(168,85,247,0.3)] hover:shadow-[0_0_15px_2px_rgba(168,85,247,0.7)] transition duration-300"
          >
            
            <span className="text-slate-200">Volver al Portfolio</span>
          </Link>
        </motion.div>
      </div>
    </MainLayout>
  );
}
