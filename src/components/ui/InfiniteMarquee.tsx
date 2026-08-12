"use client";

import React from "react";
import { motion } from "framer-motion";

interface InfiniteMarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
  itemClassName?: string;
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  items,
  direction = "left",
  speed = 30,
  className = "",
  itemClassName = "",
}) => {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap flex w-full relative ${className}`}>
      {/* Edge gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-[#080c14] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-[#080c14] to-transparent pointer-events-none" />

      <motion.div
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        className="flex items-center gap-3 shrink-0"
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={index}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-900/90 text-slate-200 border border-slate-800/80 shadow-sm transition-all hover:border-sky-500/50 hover:text-sky-300 ${itemClassName}`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
