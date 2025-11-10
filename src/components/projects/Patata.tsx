import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Patata() {
 const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.div
        layout
        className="bg-[#1e1e2f] rounded-2xl p-6 shadow-lg text-white cursor-pointer w-80"
        onClick={() => setExpanded(true)}
      >
        <motion.img layout src="/css3.png" className="w-40 mx-auto" />
        <motion.h3 layout className="mt-4 text-xl font-bold">
          Task Manager
        </motion.h3>
      </motion.div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            layout
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              layout
              className="bg-[#1e1e2f] rounded-2xl p-8 max-w-3xl w-[90%] text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
              <p className="text-gray-300">
                Aquí van los detalles del proyecto, capturas, tecnologías,
                enlaces, etc.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}