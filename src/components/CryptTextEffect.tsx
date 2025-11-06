import { useEffect, useMemo, useRef, useState } from "react";

type CryptTextEffectProps = {
  text: string;
  randCar?: string[];
  tickCambioLetra?: number;
  className?: string;

  /** Efectos opcionales */
  decryptActive?: boolean; // efecto de desencriptado inicial
  glitchActive?: boolean;  // efecto de glitch continuo

  /** Configuración del glitch */
  glitchMinDelayMs?: number;
  glitchMaxDelayMs?: number;
  glitchDurationMs?: number;
  glitchTickMs?: number;
};

export default function CryptTextEffect({
  text,
  randCar,
  tickCambioLetra = 100,
  className = "",
  decryptActive = false,
  glitchActive = false,
  glitchMinDelayMs = 500,
  glitchMaxDelayMs = 1000,
  glitchDurationMs = 400,
  glitchTickMs = 100,
}: CryptTextEffectProps) {
  const caracteresRandom = useMemo(
    () =>
      randCar && randCar.length
        ? randCar
        : ["$", "x", "*", "e", "R", "H", "A", "4", "p", "0", "O", "F"],
    [randCar]
  );

  const [newText, setNewText] = useState(
    decryptActive
      ? Array.from(text)
          .map(() => caracteresRandom[Math.floor(Math.random() * caracteresRandom.length)])
          .join("") // 👈 arranca encriptado
      : text
  );

  const min = 0;
  const max = caracteresRandom.length - 1;
const revealIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
const glitchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
const glitchTickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const baseCharsRef = useRef<string[]>(Array.from(text));

  const randomInt = (a: number, b: number) =>
    Math.floor(Math.random() * (b - a + 1)) + a;

  function clearAll() {
    if (revealIntervalRef.current) clearInterval(revealIntervalRef.current);
    if (glitchTimeoutRef.current) clearTimeout(glitchTimeoutRef.current);
    if (glitchTickTimeoutRef.current) clearTimeout(glitchTickTimeoutRef.current);
  }

  // 💚 Efecto glitch sobre un carácter aleatorio
  function glitchOnce() {
    const chars = [...baseCharsRef.current];
    if (!chars.length) return;
    const i = randomInt(0, chars.length - 1);
    const original = chars[i];
    const cycles = Math.max(1, Math.floor(glitchDurationMs / glitchTickMs));
    let c = 0;

    const tick = () => {
      chars[i] = caracteresRandom[randomInt(min, max)];
      setNewText(chars.join(""));
      if (++c < cycles) {
        glitchTickTimeoutRef.current = setTimeout(tick, glitchTickMs);
      } else {
        chars[i] = original;
        setNewText(chars.join(""));
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

  // 🔓 Efecto de desencriptado progresivo
  useEffect(() => {
    clearAll();
    baseCharsRef.current = Array.from(text);

    if (!decryptActive) {
      setNewText(text);
      if (glitchActive) scheduleGlitch();
      return () => clearAll();
    }

    let contCiclos = 0;
    let tempChars = Array.from(newText); // empieza ya encriptado

    revealIntervalRef.current = setInterval(() => {
      // cada paso desencripta un carácter adicional desde el principio
      if (contCiclos < text.length) {
        tempChars[contCiclos] = text[contCiclos];
        for (let i = contCiclos + 1; i < text.length; i++) {
          tempChars[i] = caracteresRandom[randomInt(min, max)];
        }
        setNewText(tempChars.join(""));
        contCiclos++;
      } else {
        clearInterval(revealIntervalRef.current!);
        setNewText(text);
        baseCharsRef.current = Array.from(text);
        if (glitchActive) scheduleGlitch();
      }
    }, tickCambioLetra);

    return () => clearAll();
  }, [
    text,
    decryptActive,
    glitchActive,
    tickCambioLetra,
    caracteresRandom,
    glitchMinDelayMs,
    glitchMaxDelayMs,
    glitchDurationMs,
    glitchTickMs,
  ]);

  return <p className={className}>{newText}</p>;
}
