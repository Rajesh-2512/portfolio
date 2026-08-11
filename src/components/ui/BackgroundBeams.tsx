"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-30 dark:opacity-40",
        className
      )}
    >
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 600"
        fill="none"
      >
        <motion.path
          d="M100 0 C 300 200, 200 400, 500 600"
          stroke="url(#gradient-beam-1)"
          strokeWidth="2"
          strokeDasharray="10 15"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: 100 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M900 0 C 700 200, 800 400, 500 600"
          stroke="url(#gradient-beam-2)"
          strokeWidth="2"
          strokeDasharray="12 18"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M500 0 C 400 300, 600 300, 500 600"
          stroke="url(#gradient-beam-1)"
          strokeWidth="1.5"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient-beam-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient-beam-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
