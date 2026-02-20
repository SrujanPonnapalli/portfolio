"use client";

import styles from "./GradientNoiseOverlay.module.css";

export default function GradientNoiseOverlay() {
  return (
    <div className={styles.overlay} aria-hidden="true">
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg">
        <filter id="gradientNoiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="4"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="saturate"
            values="0"
            result="monoNoise"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          fill="white"
          filter="url(#gradientNoiseFilter)"
          opacity="0.08"
        />
      </svg>
    </div>
  );
}
