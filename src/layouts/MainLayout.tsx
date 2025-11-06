import Footer from "@/components/Footer";
import { Particles } from "@/components/ui/shadcn-io/particles";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-gray-900 via-gray-800 to-black">
      <Particles
        className="fixed inset-0 z-0"
        quantity={200}
        ease={80}
        staticity={80}
        color="#a855f7"
        size={1}
      />

      <div className="relative z-10">
        {children}

        <Footer />
      </div>
    </div>
  );
}
