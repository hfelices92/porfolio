import { useNavigate } from "react-router-dom";
import { GradientText } from "./ui/shadcn-io/gradient-text";

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center  py-10">
      <hr className="w-8/12 border-t border-slate-500 mb-2" />
      <p className="text-center text-slate-200 mt-2">
         © {currentYear} Héctor Felices González
      </p>
      <GradientText text="Ir al Espacio" className="md:hidden" onClick={()=>navigate('/space')}/>
    </div>
  );
}
