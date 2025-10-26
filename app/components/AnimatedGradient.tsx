import styles from "./AnimatedGradient.module.css";

export default function AnimatedGradient() {
  return (
    <>
      <div className={styles.gradient} />
      <svg xmlns="http://www.w3.org/2000/svg" className={styles.svgFilter}>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
    </>
  );
}