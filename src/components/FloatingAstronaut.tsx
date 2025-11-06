import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from "framer-motion"

interface FloatingAstronautProps {
  src: string;
  size?: number;
  speed?: number;
}

/**
 * Astronauta flotante con movimiento libre y rebote en bordes.
 */
export default function FloatingAstronaut({
  src,
  size = 180,
  speed = 1.2,
}: FloatingAstronautProps) {
  const x = useMotionValue(Math.random() * window.innerWidth);
  const y = useMotionValue(Math.random() * window.innerHeight);
  const vx = useMotionValue((Math.random() - 0.5) * speed);
  const vy = useMotionValue((Math.random() - 0.5) * speed);

  const smoothX = useSpring(x, { stiffness: 40, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 40, damping: 15 });

  // Animación de movimiento flotante continuo
  useAnimationFrame(() => {
    let newX = x.get() + vx.get();
    let newY = y.get() + vy.get();

    // Rebote en bordes horizontales
    if (newX < 0 || newX > window.innerWidth - size) {
      vx.set(-vx.get());
      newX = Math.max(0, Math.min(newX, window.innerWidth - size));
    }

    // Rebote en bordes verticales
    if (newY < 0 || newY > window.innerHeight - size) {
      vy.set(-vy.get());
      newY = Math.max(0, Math.min(newY, window.innerHeight - size));
    }

  

    x.set(newX);
    y.set(newY);
  });

  return (
    <motion.img
      src={src}
      alt="Astronauta flotando"
      style={{
        position:"fixed",
        top: 0,
        left: 0,
        width: size,
        height: "auto",
        x: smoothX,
        y: smoothY,
        zIndex: 0,
        pointerEvents: "none",
        userSelect: "none",
      }}
    />
  );
}