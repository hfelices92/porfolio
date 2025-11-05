import React from "react";

export default function Background({ children }: { children: React.ReactNode }) {
    
  return (
    <div className="relative">
      {/* Fondo fijo global detrás de todo */}
      <div id="controls" className="fixed inset-0 -z-50 bg-linear-to-b from-amber-300 to-yellow-100"></div>

      {/* Contenido principal */}
      <main className="relative z-10 min-h-screen">{children}</main>
    </div>
  );
}
