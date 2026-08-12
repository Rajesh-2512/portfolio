"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBeamProps {
  className?: string;
  containerRef?: React.RefObject<HTMLElement | null>;
  fromRef?: React.RefObject<HTMLElement | null>;
  toRef?: React.RefObject<HTMLElement | null>;
  startX?: number;
  startY?: number;
  endX?: number;
  endY?: number;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  startX = 0,
  startY = 0,
  endX = 100,
  endY = 100,
  curvature = 0,
  reverse = false,
  duration = 4,
  delay = 0,
  pathColor = "rgba(56, 189, 248, 0.2)",
  pathWidth = 1.5,
  gradientStartColor = "#38bdf8",
  gradientStopColor = "#818cf8",
}) => {
  const id = React.useId();
  const [coords, setCoords] = useState({ sx: startX, sy: startY, ex: endX, ey: endY });

  useEffect(() => {
    if (!containerRef?.current || !fromRef?.current || !toRef?.current) return;

    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      const sx = fromRect.left + fromRect.width / 2 - containerRect.left;
      const sy = fromRect.top + fromRect.height / 2 - containerRect.top;
      const ex = toRect.left + toRect.width / 2 - containerRect.left;
      const ey = toRect.top + toRect.height / 2 - containerRect.top;

      setCoords({ sx, sy, ex, ey });
    };

    updatePath();
    const resizeObserver = new ResizeObserver(() => updatePath());
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [containerRef, fromRef, toRef]);

  const { sx, sy, ex, ey } = coords;
  const midX = (sx + ex) / 2;
  const midY = (sy + ey) / 2 - curvature;

  const pathD = `M ${sx} ${sy} Q ${midX} ${midY} ${ex} ${ey}`;

  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full stroke-2 overflow-visible",
        className
      )}
    >
      <path
        d={pathD}
        fill="none"
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeLinecap="round"
      />
      <motion.path
        d={pathD}
        fill="none"
        stroke={`url(#beam-gradient-${id})`}
        strokeWidth={pathWidth + 1}
        strokeLinecap="round"
        initial={{ strokeDasharray: "10 50", strokeDashoffset: reverse ? -60 : 60 }}
        animate={{ strokeDashoffset: reverse ? 60 : -60 }}
        transition={{
          repeat: Infinity,
          duration,
          delay,
          ease: "linear",
        }}
      />
      <defs>
        <linearGradient
          id={`beam-gradient-${id}`}
          gradientUnits="userSpaceOnUse"
          x1={sx}
          y1={sy}
          x2={ex}
          y2={ey}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop stopColor={gradientStartColor} stopOpacity="1" />
          <stop offset="32.5%" stopColor={gradientStopColor} stopOpacity="1" />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
