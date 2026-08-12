"use client";
import React, { useId, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
  speed?: number;
}

export const SparklesCore: React.FC<SparklesProps> = ({
  id,
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  className,
  particleColor = "#38bdf8",
  speed = 1,
}) => {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; opacity: number; speedX: number; speedY: number }>
  >([]);
  const generatedId = useId();
  const canvasId = id || generatedId;

  useEffect(() => {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const count = Math.floor(((canvas.width * canvas.height) / 10000) * (particleDensity / 100));
      const temp: typeof particles = [];
      for (let i = 0; i < count; i++) {
        temp.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          opacity: Math.random(),
          speedX: (Math.random() - 0.5) * 0.5 * speed,
          speedY: (Math.random() - 0.5) * 0.5 * speed,
        });
      }
      setParticles(temp);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setParticles((prevParticles) =>
        prevParticles.map((p) => {
          let newX = p.x + p.speedX;
          let newY = p.y + p.speedY;

          if (newX < 0) newX = canvas.width;
          if (newX > canvas.width) newX = 0;
          if (newY < 0) newY = canvas.height;
          if (newY > canvas.height) newY = 0;

          ctx.fillStyle = particleColor;
          ctx.globalAlpha = p.opacity;
          ctx.beginPath();
          ctx.arc(newX, newY, p.size, 0, Math.PI * 2);
          ctx.fill();

          return { ...p, x: newX, y: newY };
        })
      );

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasId, maxColorVal(particleColor), minSize, maxSize, particleDensity, speed]);

  function maxColorVal(col: string) {
    return col;
  }

  return (
    <canvas
      id={canvasId}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      style={{ background }}
    />
  );
};
