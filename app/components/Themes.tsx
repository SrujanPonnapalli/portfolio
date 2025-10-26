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
        {activeTheme === "light" ? "■" : "□"} LIGHT
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={activeTheme === "dark" ? styles.activeTheme : ""}
      >
        {activeTheme === "dark" ? "■" : "□"} DARK
      </button>
      <button
        onClick={() => setIsMonospace((prev) => !prev)}
        className={isMonospace ? styles.activeTheme : ""}
      >
        {isMonospace ? "■" : "□"} MONOSPACE
      </button>
    </div>
  );
}