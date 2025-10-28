"use client";
import { useEffect, useRef } from "react";
import styles from "./WebGLGradient.module.css";

// @ts-ignore - Gradient.js is a vanilla JS file
import { Gradient } from './Gradient';

interface WebGLGradientProps {
  theme?: string;
}

export default function WebGLGradient({ theme = "dark" }: WebGLGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gradientRef = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Very subtle mouse influence
    let mouseX = 0.5;
    let mouseY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;
    
    let targetX = 0.5;
    let targetY = 0.5;
    let currentX = 0.5;
    let currentY = 0.5;

    const subtleUpdate = () => {
      targetX = mouseX;
      targetY = mouseY;
      
      const smoothFactor = 0.02; // Very slow, barely noticeable
      currentX = lerp(currentX, targetX, smoothFactor);
      currentY = lerp(currentY, targetY, smoothFactor);
      
      if (gradientRef.current && gradientRef.current.uniforms?.u_vertDeform?.value) {
        // Extremely subtle influence on noise seed
        const subtleOffset = (currentX - 0.5) * 0.2 + (currentY - 0.5) * 0.2;
        gradientRef.current.uniforms.u_vertDeform.value.noiseSeed.value = gradientRef.current.seed + subtleOffset;
      }
      
      requestAnimationFrame(subtleUpdate);
    };

    subtleUpdate();
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize the Gradient
    const gradient = new Gradient() as any;
    gradientRef.current = gradient;
    
    gradient.initGradient('#gradient-canvas');

    return () => {
      // Cleanup
      window.removeEventListener('mousemove', handleMouseMove);
      if (gradientRef.current) {
        gradientRef.current.pause?.();
      }
    };
  }, []); // Run only once on mount

  // This effect will re-initialize the gradient colors when the theme changes.
  useEffect(() => {
    gradientRef.current?.initGradientColors();
  }, [theme]);

  return (
    <canvas
      id="gradient-canvas"
      ref={canvasRef}
      data-transition-in
      className={styles.gradient}
    />
  );
}
