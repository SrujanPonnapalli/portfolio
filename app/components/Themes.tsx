"use client";
import styles from "./Themes.module.css";

interface ThemesProps {
  activeTheme: string;
  setTheme: (theme: string) => void;
  isMonospace: boolean;
  setIsMonospace: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function Themes({
  activeTheme,
  setTheme,
  isMonospace,
  setIsMonospace,
}: ThemesProps) {
  return (
    <div className={styles.themes}>
      <button
        onClick={() => setTheme("light")}
        className={activeTheme === "light" ? styles.activeTheme : ""}
      >
        <span className={styles.square}>{activeTheme === "light" ? "■" : "□"}</span>
        <span className={styles.label}>LIGHT</span>
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={activeTheme === "dark" ? styles.activeTheme : ""}
      >
        <span className={styles.square}>{activeTheme === "dark" ? "■" : "□"}</span>
        <span className={styles.label}>DARK</span>
      </button>
      <button
        onClick={() => setIsMonospace((prev) => !prev)}
        className={isMonospace ? styles.activeTheme : ""}
      >
        <span className={styles.square}>{isMonospace ? "■" : "□"}</span>
        <span className={styles.label}>MONOSPACE</span>
      </button>
    </div>
  );
}