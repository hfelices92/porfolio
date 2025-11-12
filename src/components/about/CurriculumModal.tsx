import {  useRef } from "react";
import { motion } from "framer-motion";

export default function CurriculumModal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    // Si el clic fue fuera del contenido, cierra el modal
    if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={handleClickOutside}
    >
      <motion.div
        ref={cardRef}
        key="expanded-card"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-[#24253D] text-white w-full max-w-[90vw] h-[95vh] overflow-y-auto rounded-xl shadow-2xl p-8 relative scrollbar-hide"
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-purple-400 text-2xl font-bold hover:cursor-pointer"
        >
          ✕
        </button>

        {children}
      </motion.div>
      
    </motion.div>
  );
}
