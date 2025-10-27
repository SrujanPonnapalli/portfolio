"use client";
import styles from "./AnimatedGradient.module.css";

interface AnimatedGradientProps {
  theme?: string;
}

export default function AnimatedGradient({ theme = "dark" }: AnimatedGradientProps) {
  const isDark = theme === "dark";
  const gradient1 = isDark 
    ? "radial-gradient(circle at 40% 50%, rgba(26,26,26,0.9) 0%, rgba(10,10,10,1) 70%)"
    : "radial-gradient(circle at 40% 50%, rgba(240,240,240,0.9) 0%, rgba(245,245,245,1) 70%)";
  
  const gradient2 = isDark
    ? "radial-gradient(circle at 60% 45%, rgba(42,42,42,0.6) 0%, rgba(10,10,10,0.8) 70%)"
    : "radial-gradient(circle at 60% 45%, rgba(208,208,208,0.6) 0%, rgba(245,245,245,0.8) 70%)";

  return (
    <div className={styles.gradient}>
      <div 
        className={styles.gradientLayer1}
        style={{ 
          background: gradient1 
        }}
      />
      <div 
        className={styles.gradientLayer2}
        style={{ 
          background: gradient2 
        }}
      />
    </div>
  );
}
