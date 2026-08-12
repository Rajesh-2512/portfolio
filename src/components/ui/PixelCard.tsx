"use client";

import React, { useState, useRef } from "react";

interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  gridSize?: number;
  pixelColor?: string;
}

export const PixelCard: React.FC<PixelCardProps> = ({
  children,
  className = "",
  pixelColor = "rgba(56, 189, 248, 0.15)",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 transition-colors duration-300 hover:border-sky-500/40 ${className}`}
    >
      {/* Dynamic Cursor Grid Pixel Glow */}
      {mousePos && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${pixelColor}, transparent 80%)`,
          }}
        />
      )}

      {/* Subtle Pixel Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"
      />

      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
};
