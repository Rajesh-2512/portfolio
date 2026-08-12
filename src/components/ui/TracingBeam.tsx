"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(600);

  useEffect(() => {
    if (!contentRef.current) return;
    
    const updateHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(() => updateHeight());
    resizeObserver.observe(contentRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });

  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <motion.div ref={ref} className={cn("relative w-full max-w-7xl mx-auto h-full", className)}>
      <div className="absolute -left-4 md:-left-10 top-3 z-20">
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{
            boxShadow: scrollYProgress.get() > 0 ? "none" : "rgba(56, 189, 248, 0.24) 0px 0px 0px 6px",
          }}
          className="ml-[27px] h-4 w-4 rounded-full border border-sky-400 flex items-center justify-center p-1 shadow-sm bg-white dark:bg-slate-900"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "#0284c7" : "#38bdf8",
              borderColor: scrollYProgress.get() > 0 ? "#0284c7" : "#38bdf8",
            }}
            className="h-2 w-2 rounded-full border border-sky-500 bg-sky-500"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V ${svgHeight}`}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="1.25"
            className="text-slate-400 dark:text-slate-700"
            transition={{ duration: 10 }}
          />
          <motion.path
            d={`M 1 0V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient-tracing)"
            strokeWidth="2.5"
            className="motion-reduce:hidden"
            transition={{ duration: 10 }}
          />
          <defs>
            <motion.linearGradient
              id="gradient-tracing"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#38bdf8" stopOpacity="0" />
              <stop stopColor="#38bdf8" />
              <stop offset="0.325" stopColor="#818cf8" />
              <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
