"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./Sidebar.module.css";

const DECODE_CHARS = "0123456789ABCDEF<>[]{}|";
const STAGGER_MS = 150;
const RANDOM_DELAY_MS = 80;
const GLITCH_DURATION_MS = 200;

function randomDecodeChar() {
  return DECODE_CHARS[Math.floor(Math.random() * DECODE_CHARS.length)];
}

function DecodingLine({ text, glitchTrigger, isMonospace }: { text: string; glitchTrigger: number; isMonospace: boolean }) {
  const final = text.split("");
  const [chars, setChars] = useState<string[]>(() => [...final]);
  const [isComplete, setIsComplete] = useState(false);
  const [decodeStarted, setDecodeStarted] = useState(false);

  useEffect(() => {
    setChars(final.map(() => randomDecodeChar()));
    setDecodeStarted(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps -- run once on mount

  useEffect(() => {
    if (!decodeStarted) return;
    const timeouts: NodeJS.Timeout[] = [];
    final.forEach((_, i) => {
      const delay =
        i * STAGGER_MS + Math.floor(Math.random() * RANDOM_DELAY_MS);
      timeouts.push(
        setTimeout(() => {
          setChars((prev) => {
            const next = [...prev];
            next[i] = final[i];
            return next;
          });
        }, delay)
      );
    });
    const completeDelay =
      final.length * STAGGER_MS + RANDOM_DELAY_MS + 50;
    timeouts.push(setTimeout(() => setIsComplete(true), completeDelay));
    return () => timeouts.forEach(clearTimeout);
  }, [text, decodeStarted]); // eslint-disable-line react-hooks/exhaustive-deps -- final from text

  useEffect(() => {
    if (!decodeStarted || isComplete) return;
    const id = setInterval(() => {
      setChars((prev) =>
        prev.map((c, i) => (c === final[i] ? c : randomDecodeChar()))
      );
    }, 60);
    return () => clearInterval(id);
  }, [decodeStarted, isComplete]); // eslint-disable-line react-hooks/exhaustive-deps -- final stable per line

  useEffect(() => {
    if (glitchTrigger === 0 || !isComplete || final.length === 0) return;
    const count = Math.min(1 + Math.floor(Math.random() * 2), final.length);
    const indices = new Set<number>();
    while (indices.size < count) {
      indices.add(Math.floor(Math.random() * final.length));
    }
    const idxs = Array.from(indices);
    setChars((prev) => {
      const next = [...prev];
      idxs.forEach((i) => {
        next[i] = randomDecodeChar();
      });
      return next;
    });
    const t = setTimeout(() => {
      setChars([...final]);
    }, GLITCH_DURATION_MS);
    return () => clearTimeout(t);
  }, [glitchTrigger]); // eslint-disable-line react-hooks/exhaustive-deps -- final stable per line

  const glitchFont = isMonospace
    ? { fontFamily: "system-ui, sans-serif" }
    : { fontFamily: "ui-monospace, monospace" };

  return (
    <span className={styles.nameLine}>
      {chars.map((c, i) => (
        <span
          key={i}
          style={c === final[i] ? {} : { opacity: 0.85, ...glitchFont }}
        >
          {c}
        </span>
      ))}
    </span>
  );
}

const HOVER_GLITCH_INTERVAL_MS = 1500;

interface DecodingNameProps {
  isMonospace: boolean;
}

export default function DecodingName({ isMonospace }: DecodingNameProps) {
  const [glitchTrigger, setGlitchTrigger] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const onMouseEnter = useCallback(() => {
    setGlitchTrigger((k) => k + 1);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setGlitchTrigger((k) => k + 1);
    }, HOVER_GLITCH_INTERVAL_MS);
  }, []);

  const onMouseLeave = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  return (
    <h1
      className={styles.name}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <DecodingLine text="Srujan" glitchTrigger={glitchTrigger} isMonospace={isMonospace} />
      <br />
      <DecodingLine text="Ponnapalli" glitchTrigger={glitchTrigger} isMonospace={isMonospace} />
    </h1>
  );
}
