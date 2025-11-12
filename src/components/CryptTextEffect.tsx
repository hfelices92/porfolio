import { useEffect, useMemo, useRef, useState } from "react";

type CryptTextEffectProps = {
  text: string;
  randCar?: string[];
  tickCambioLetra?: number;
  className?: string;
  glitchActive?: boolean;
  glitchMinDelayMs?: number;
  glitchMaxDelayMs?: number;
  glitchDurationMs?: number;
  glitchTickMs?: number;
};

export default function CryptTextEffect({
  text,
  randCar,
  tickCambioLetra = 50,
  className = "",
  glitchActive = false,
  glitchMinDelayMs = 500,
  glitchMaxDelayMs = 1500,
  glitchDurationMs = 400,
  glitchTickMs = 50,
}: CryptTextEffectProps) {
  const caracteresRandom = useMemo(
    () =>
      randCar && randCar.length
        ? randCar
        : ["$", "x", "*", "@", "#", "%", "&", "=", "+", "-"],
    [randCar]
  );

  const [displayChars, setDisplayChars] = useState<string[]>(Array.from(text));
  const [glitchingIndex, setGlitchingIndex] = useState<number | null>(null);
  const [revealedCount, setRevealedCount] = useState(0);

  const revealIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const glitchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const glitchTickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const randomInt = (a: number, b: number) =>
    Math.floor(Math.random() * (b - a + 1)) + a;

  function clearAll() {
    if (revealIntervalRef.current) clearInterval(revealIntervalRef.current);
    if (glitchTimeoutRef.current) clearTimeout(glitchTimeoutRef.current);
    if (glitchTickTimeoutRef.current)
      clearTimeout(glitchTickTimeoutRef.current);
  }

  // 💚 Efecto glitch en un solo carácter aleatorio
  function glitchOnce() {
    const validIndexes = displayChars
      .map((c, i) => (c.trim() !== "" ? i : null))
      .filter((i) => i !== null) as number[];
    if (validIndexes.length === 0) return;

    const i = validIndexes[randomInt(0, validIndexes.length - 1)];
    const original = text[i];
    const cycles = Math.max(1, Math.floor(glitchDurationMs / glitchTickMs));
    let c = 0;
    setGlitchingIndex(i);

    const tick = () => {
      setDisplayChars((prev) => {
        const updated = [...prev];
        updated[i] = caracteresRandom[randomInt(0, caracteresRandom.length - 1)];
        return updated;
      });

      if (++c < cycles) {
        glitchTickTimeoutRef.current = setTimeout(tick, glitchTickMs);
      } else {
        setDisplayChars((prev) => {
          const updated = [...prev];
          updated[i] = original;
          return updated;
        });
        setGlitchingIndex(null);
      }
    };

    tick();
  }

  // 🔄 Programa glitches periódicos
  function scheduleGlitch() {
    if (!glitchActive) return;
    const delay = randomInt(glitchMinDelayMs, glitchMaxDelayMs);
    glitchTimeoutRef.current = setTimeout(() => {
      glitchOnce();
      scheduleGlitch();
    }, delay);
  }

  // 🔓 Efecto de desencriptado inicial
  useEffect(() => {
    clearAll();
    
    let revealed = 0;

    revealIntervalRef.current = setInterval(() => {
      setDisplayChars((prev) => {
        const updated = [...prev];
        for (let i = revealed; i < text.length; i++) {
          if (text[i] === " ") {
            updated[i] = " ";
          } else if (i === revealed) {
            updated[i] = text[i];
          } else {
            updated[i] =
              text[i] === " "
                ? " "
                : caracteresRandom[randomInt(0, caracteresRandom.length - 1)];
          }
        }
        return updated;
      });
      revealed++;
      setRevealedCount(revealed);
      if (revealed > text.length) {
        clearInterval(revealIntervalRef.current!);
        setDisplayChars(Array.from(text));
        if (glitchActive) scheduleGlitch();
      }
    }, tickCambioLetra);

    return () => clearAll();
  }, [
    text,
    glitchActive,
    tickCambioLetra,
    caracteresRandom,
    glitchMinDelayMs,
    glitchMaxDelayMs,
    glitchDurationMs,
    glitchTickMs,
  ]);

  return (
    <p className={className}>
      {displayChars.map((char, i) => {
        const isEncrypted =
          i >= revealedCount || (glitchingIndex !== null && glitchingIndex === i);
        return (
          <span
            key={i}
            className={
              isEncrypted
                ? "glitch-char text-transparent bg-clip-text animate-glowGradient"
                : ""
            }
          >
            {char}
          </span>
        );
      })}
    </p>
  );
}
