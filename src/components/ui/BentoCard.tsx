"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./BorderBeam";

export const BentoCard = ({
  children,
  className,
  header,
  icon,
  title,
  description,
  showBorderBeam = true,
}: {
  children?: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  showBorderBeam?: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div className="w-full h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={cn(
          "group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300",
          "bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/30 shadow-lg shadow-black/10 hover:shadow-xl hover:bg-white/[0.06] cursor-pointer",
          className
        )}
      >
        {/* Radial Hover Spotlight */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.1), transparent 80%)`,
          }}
        />

        {showBorderBeam && <BorderBeam size={150} duration={8} colorFrom="#6366f1" colorTo="#8b5cf6" />}

        {header && <div className="mb-4 overflow-hidden rounded-xl">{header}</div>}

        <div className="relative z-10 space-y-2">
          {icon && <div className="inline-flex rounded-lg bg-indigo-500/10 p-2.5 text-indigo-400 border border-indigo-500/20">{icon}</div>}
          {title && <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>}
          {description && <p className="text-xs sm:text-sm leading-relaxed text-slate-400">{description}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};
