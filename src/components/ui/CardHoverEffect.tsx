"use client";

import { useState, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    badge?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const layoutId = useId();

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 gap-4", className)}>
      {items.map((item, idx) => (
        <div
          key={item.title + idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-sky-500/10 dark:bg-sky-500/20 block rounded-3xl"
                layoutId={`hoverBackground-${layoutId}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="rounded-2xl h-full w-full p-6 overflow-hidden bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 group-hover:border-sky-500/50 relative z-20 transition-colors shadow-md">
            <div className="relative z-50 space-y-3">
              {item.icon && <div className="p-2.5 rounded-xl bg-sky-500/10 w-fit text-sky-500 dark:text-sky-400">{item.icon}</div>}
              <h4 className="text-lg font-bold tracking-wide text-slate-900 dark:text-slate-100">{item.title}</h4>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
              {item.badge && (
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-sky-500/20 text-sky-600 dark:text-sky-300 border border-sky-500/30">
                  {item.badge}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
