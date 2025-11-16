import { useEffect, useMemo, useRef, useState } from "react";

type CryptTextEffectProps = {
  paragraphs: string[];
  randCar?: string[];
  tickCambioLetra?: number;
  className?: string;
  glitchActive?: boolean;
  glitchMinDelayMs?: number;
  glitchMaxDelayMs?: number;
  glitchDurationMs?: number;
  glitchTickMs?: number;
  initialDecrypt?: boolean;
};

export default function CryptTextEffect({
  paragraphs,
  randCar,
  tickCambioLetra = 50,
  className = "",
  glitchActive = false,
  glitchMinDelayMs = 500,
  glitchMaxDelayMs = 1500,
  glitchDurationMs = 400,
  glitchTickMs = 50,
  initialDecrypt = true,
}: CryptTextEffectProps) {

  const caracteresRandom = useMemo(
    () =>
      randCar?.length
        ? randCar
        : ["$", "x", "*", "@", "#", "%", "&", "=", "+", "-"],
    [randCar]
  );

  // Estados por párrafo
  const [displays, setDisplays] = useState<string[][]>(
    paragraphs.map((p) => Array.from(p))
  );
  const [revealedCounts, setRevealedCounts] = useState<number[]>(
    paragraphs.map(() => 0)
  );

  // 🔥 GLITCH GLOBAL
  const [glitchState, setGlitchState] = useState<{
    pIndex: number | null;
    cIndex: number | null;
  }>({ pIndex: null, cIndex: null });

  const revealIntervals = useRef<Record<number, ReturnType<typeof setInterval> | null>>({});
  const glitchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const glitchTickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const randomInt = (a: number, b: number) =>
    Math.floor(Math.random() * (b - a + 1)) + a;

  function clearAll() {
    Object.values(revealIntervals.current).forEach((i) => i && clearInterval(i));
    if (glitchTimeoutRef.current) clearTimeout(glitchTimeoutRef.current);
    if (glitchTickTimeoutRef.current) clearTimeout(glitchTickTimeoutRef.current);
  }

  // 🔥 UN SOLO GLITCH GLOBAL
  function glitchOnce() {
    const validParagraphs = displays
      .map((p, i) => (p.length > 0 ? i : null))
      .filter((i) => i !== null) as number[];

    if (validParagraphs.length === 0) return;

    const pIndex = validParagraphs[randomInt(0, validParagraphs.length - 1)];
    const row = displays[pIndex];

    const validIndexes = row
      .map((c, i) => (c.trim() !== "" ? i : null))
      .filter((i) => i !== null) as number[];

    if (validIndexes.length === 0) return;

    const cIndex = validIndexes[randomInt(0, validIndexes.length - 1)];
    const original = paragraphs[pIndex][cIndex];

    const cycles = Math.max(1, Math.floor(glitchDurationMs / glitchTickMs));
    let c = 0;

    setGlitchState({ pIndex, cIndex });

    const tick = () => {
      setDisplays((prev) => {
        const updated = [...prev];
        updated[pIndex] = [...updated[pIndex]];
        updated[pIndex][cIndex] =
          caracteresRandom[randomInt(0, caracteresRandom.length - 1)];
        return updated;
      });

      if (++c < cycles) {
        glitchTickTimeoutRef.current = setTimeout(tick, glitchTickMs);
      } else {
        setDisplays((prev) => {
          const updated = [...prev];
          updated[pIndex] = [...updated[pIndex]];
          updated[pIndex][cIndex] = original;
          return updated;
        });

        setGlitchState({ pIndex: null, cIndex: null });
      }
    };

    tick();
  }

  // 🔁 Programar glitch global recurrente
  function scheduleGlitch() {
    if (!glitchActive) return;

    const delay = randomInt(glitchMinDelayMs, glitchMaxDelayMs);

    glitchTimeoutRef.current = setTimeout(() => {
      glitchOnce();
      scheduleGlitch();
    }, delay);
  }

  // ⬇️ Efecto de desencriptado inicial por párrafo
  useEffect(() => {
    clearAll();

    paragraphs.forEach((p, pIndex) => {
      if (!initialDecrypt) {
        setDisplays((prev) => {
          const updated = [...prev];
          updated[pIndex] = Array.from(p);
          return updated;
        });

        setRevealedCounts((prev) => {
          const updated = [...prev];
          updated[pIndex] = p.length;
          return updated;
        });

        return;
      }

      let revealed = 0;

      revealIntervals.current[pIndex] = setInterval(() => {
        setDisplays((prev) => {
          const updated = [...prev];
          const chars = [...updated[pIndex]];

          for (let i = revealed; i < p.length; i++) {
            if (p[i] === " ") {
              chars[i] = " ";
            } else if (i === revealed) {
              chars[i] = p[i];
            } else {
              chars[i] =
                caracteresRandom[randomInt(0, caracteresRandom.length - 1)];
            }
          }

          updated[pIndex] = chars;
          return updated;
        });

        revealed++;

        setRevealedCounts((prev) => {
          const updated = [...prev];
          updated[pIndex] = revealed;
          return updated;
        });

        if (revealed > p.length) {
          clearInterval(revealIntervals.current[pIndex]!);

          setDisplays((prev) => {
            const updated = [...prev];
            updated[pIndex] = Array.from(p);
            return updated;
          });
        }
      }, tickCambioLetra);
    });

    // Una vez terminado el decrypt, activar glitch global
    if (glitchActive) scheduleGlitch();

    return () => clearAll();
  }, [paragraphs, glitchActive, initialDecrypt]);

  return (
    <div className={className}>
      {displays.map((chars, pIndex) => (
        <p key={pIndex} className="mb-4">
          {chars.map((char, i) => {
            const isEncrypted =
              i >= revealedCounts[pIndex] ||
              (glitchState.pIndex === pIndex && glitchState.cIndex === i);

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
      ))}
    </div>
  );
}
