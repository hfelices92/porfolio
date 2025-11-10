import { useState } from "react";
import { GradientText } from "../ui/shadcn-io/gradient-text";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // 📨 Aquí se enviará el formulario (ver más abajo)
      const response = await fetch("https://formspree.io/f/mkgknwdo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" md:p-6 rounded-xl md:min-w-lg w-full shadow-lg space-y-5 md:max-w-lg mx-auto text-white"
    >
      <div>
        <label className="block mb-1 text-sm text-slate-300">Nombre</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-[#1B1C2A]/10 border border-[rgba(168,85,247,0.3)] focus:outline-none focus:ring focus:ring-[rgba(168,85,247,0.7)]"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm text-slate-300">Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-[#1B1C2A]/10 border border-[rgba(168,85,247,0.3)] focus:outline-none focus:ring focus:ring-[rgba(168,85,247,0.7)]"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm text-slate-300">Mensaje</label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-[#1B1C2A]/10 border border-[rgba(168,85,247,0.3)] focus:outline-none focus:ring focus:ring-[rgba(168,85,247,0.7)] resize-none"
        />
      </div>
        <input type="text" name="_gotcha" style={{ display: "none" }} />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full border-2 border-[rgba(168,85,247,0.3)]  hover:border-[rgba(168,85,247,0.7)] shadow-md 
        transition font-semibold py-2 rounded-md hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <GradientText
          text={status === "sending" ? "Enviando..." : "Enviar Mensaje"}
          className="text-xl "
        />
      </button>
      
      {status === "success" && (
        <p className="text-border-[rgba(168,85,247,0.7)] text-sm text-center mt-2">
          ✅ ¡Mensaje enviado con éxito!
        </p>
      )}

      
      {status === "error" && (
        <p className="text-red-500/80 text-sm mt-2 text-center">
          ❌ Hubo un problema al enviar tu mensaje
        </p>
      )}
    </form>
  );
}
