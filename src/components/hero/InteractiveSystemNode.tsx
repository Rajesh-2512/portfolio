"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, FileCode2, Layers, Cpu, Database, RefreshCw, CheckCircle2 } from "lucide-react";
import { ShinyText } from "@/components/ui/ShinyText";

interface NodeData {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  highlights: string[];
}

import { BorderBeam } from "@/components/ui/BorderBeam";

interface NodeData {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  highlights: string[];
}

export const InteractiveSystemNode = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>("react");

  const nodes: NodeData[] = [
    {
      id: "react",
      name: "React.js 19",
      category: "UI Core",
      icon: <Code2 className="w-4 h-4 text-indigo-600" />,
      description: "Concurrent Rendering, Custom Hooks, Micro-frontends, Component Lifecycle",
      highlights: ["React 19 Actions & Hooks", "Atomic Component Modularity", "Virtual DOM Optimization"],
    },
    {
      id: "javascript",
      name: "JavaScript ES6+",
      category: "Core Engine",
      icon: <FileCode2 className="w-4 h-4 text-amber-500" />,
      description: "Modern ES6+ Syntax, Async/Await, Closures, Event Loop, High-Performance DOM",
      highlights: ["Async Event Loop Architecture", "ESNext Features & Modules", "Memory & Performance Tuning"],
    },
    {
      id: "nextjs",
      name: "Next.js",
      category: "Framework",
      icon: <Layers className="w-4 h-4 text-violet-600" />,
      description: "App Router, Server Components, SSR/SSG Hybrid Strategy, Turbopack Bundler",
      highlights: ["Server-Side Rendering (SSR)", "Static Site Generation (SSG)", "Optimized Route Handlers"],
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "Type System",
      icon: <Cpu className="w-4 h-4 text-blue-600" />,
      description: "Strict Static Typing, Advanced Generics, Union/Intersection Types, DX",
      highlights: ["Compile-time Bug Prevention", "Strict Interface Contracts", "Autocomplete Developer Experience"],
    },
    {
      id: "state",
      name: "Redux / Zustand",
      category: "State Management",
      icon: <Database className="w-4 h-4 text-purple-600" />,
      description: "Global Store Architecture, Redux Toolkit Slices, Atomic Zustand Stores",
      highlights: ["Predictable State Flow", "Optimistic Cache Updates", "Middleware & Action Dispatchers"],
    },
    {
      id: "query",
      name: "TanStack Query",
      category: "Server Caching",
      icon: <RefreshCw className="w-4 h-4 text-emerald-600" />,
      description: "Server State Caching, Background Refetching, Parallel Queries & Invalidation",
      highlights: ["Zero-Flicker Data Loading", "Optimistic Mutations", "Cache Hydration Policies"],
    },
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <div
      className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between overflow-hidden shadow-2xl shadow-indigo-500/5 space-y-4 text-slate-900 cursor-pointer"
    >
      {/* Infinite Border Beam Loop */}
      <BorderBeam size={180} duration={8} colorFrom="#6366f1" colorTo="#8b5cf6" />

      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/50 via-violet-50/30 to-cyan-50/20 pointer-events-none" />

      {/* Header Bar */}
      <div className="flex justify-between items-center z-10 border-b border-slate-100 pb-3">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-xs font-mono font-bold text-slate-700">
            Frontend Architecture Canvas
          </span>
        </div>
        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 shadow-xs">
          <ShinyText text="Interactive 6-Core Graph" speed={3} />
        </span>
      </div>

      {/* Hexagonal Radial Canvas with Animated SVG Data Beams */}
      <div className="relative my-2 h-72 w-full flex items-center justify-center">
        
        {/* Animated SVG Signal Lines Connecting Center to 6 Nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="activeBeamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="inactiveBeamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Lines from Center (50%, 50%) to 6 Node position coordinates */}
          {/* 1. React (top-left) */}
          <line
            x1="50%" y1="50%" x2="22%" y2="18%"
            stroke={activeNodeId === "react" ? "url(#activeBeamGradient)" : "url(#inactiveBeamGradient)"}
            strokeWidth={activeNodeId === "react" ? "2.5" : "1.5"}
            strokeDasharray={activeNodeId === "react" ? "6 3" : "4 4"}
            className={activeNodeId === "react" ? "animate-pulse" : ""}
          />
          {/* 2. JS (top-right) */}
          <line
            x1="50%" y1="50%" x2="78%" y2="18%"
            stroke={activeNodeId === "javascript" ? "url(#activeBeamGradient)" : "url(#inactiveBeamGradient)"}
            strokeWidth={activeNodeId === "javascript" ? "2.5" : "1.5"}
            strokeDasharray={activeNodeId === "javascript" ? "6 3" : "4 4"}
            className={activeNodeId === "javascript" ? "animate-pulse" : ""}
          />
          {/* 3. Next.js (mid-left) */}
          <line
            x1="50%" y1="50%" x2="18%" y2="50%"
            stroke={activeNodeId === "nextjs" ? "url(#activeBeamGradient)" : "url(#inactiveBeamGradient)"}
            strokeWidth={activeNodeId === "nextjs" ? "2.5" : "1.5"}
            strokeDasharray={activeNodeId === "nextjs" ? "6 3" : "4 4"}
            className={activeNodeId === "nextjs" ? "animate-pulse" : ""}
          />
          {/* 4. TS (mid-right) */}
          <line
            x1="50%" y1="50%" x2="82%" y2="50%"
            stroke={activeNodeId === "typescript" ? "url(#activeBeamGradient)" : "url(#inactiveBeamGradient)"}
            strokeWidth={activeNodeId === "typescript" ? "2.5" : "1.5"}
            strokeDasharray={activeNodeId === "typescript" ? "6 3" : "4 4"}
            className={activeNodeId === "typescript" ? "animate-pulse" : ""}
          />
          {/* 5. Redux/Zustand (bottom-left) */}
          <line
            x1="50%" y1="50%" x2="22%" y2="82%"
            stroke={activeNodeId === "state" ? "url(#activeBeamGradient)" : "url(#inactiveBeamGradient)"}
            strokeWidth={activeNodeId === "state" ? "2.5" : "1.5"}
            strokeDasharray={activeNodeId === "state" ? "6 3" : "4 4"}
            className={activeNodeId === "state" ? "animate-pulse" : ""}
          />
          {/* 6. TanStack Query (bottom-right) */}
          <line
            x1="50%" y1="50%" x2="78%" y2="82%"
            stroke={activeNodeId === "query" ? "url(#activeBeamGradient)" : "url(#inactiveBeamGradient)"}
            strokeWidth={activeNodeId === "query" ? "2.5" : "1.5"}
            strokeDasharray={activeNodeId === "query" ? "6 3" : "4 4"}
            className={activeNodeId === "query" ? "animate-pulse" : ""}
          />
        </svg>
        
        {/* Central Core Engine Node with pulse glow */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="z-20 w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-cyan-500 p-0.5 shadow-xl shadow-indigo-500/25 cursor-pointer"
        >
          <div className="w-full h-full rounded-[14px] bg-white flex flex-col items-center justify-center text-center p-2 shadow-inner">
            <Code2 size={24} className="text-indigo-600 animate-bounce" />
            <span className="text-[10px] font-extrabold text-slate-900 mt-1">Frontend Engine</span>
          </div>
        </motion.div>

        {/* 6 Radial Node Cards with Float Motion & Cursor Pointer */}
        {/* Top-Left: React.js 19 */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2 left-2 z-10"
        >
          <button
            onClick={() => setActiveNodeId("react")}
            className={`group flex items-center space-x-2 px-3 py-2 rounded-xl border transition-all cursor-pointer ${
              activeNodeId === "react"
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/25 scale-105"
                : "bg-white/90 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-xs"
            }`}
          >
            <div className={`p-1.5 rounded-lg ${activeNodeId === "react" ? "bg-white/20 text-white" : "bg-indigo-50 text-indigo-600"}`}>
              {nodes[0].icon}
            </div>
            <span className="text-xs font-bold whitespace-nowrap">{nodes[0].name}</span>
          </button>
        </motion.div>

        {/* Top-Right: JavaScript ES6+ */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-2 right-2 z-10"
        >
          <button
            onClick={() => setActiveNodeId("javascript")}
            className={`group flex items-center space-x-2 px-3 py-2 rounded-xl border transition-all cursor-pointer ${
              activeNodeId === "javascript"
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/25 scale-105"
                : "bg-white/90 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-xs"
            }`}
          >
            <div className={`p-1.5 rounded-lg ${activeNodeId === "javascript" ? "bg-white/20 text-white" : "bg-amber-50 text-amber-600"}`}>
              {nodes[1].icon}
            </div>
            <span className="text-xs font-bold whitespace-nowrap">{nodes[1].name}</span>
          </button>
        </motion.div>

        {/* Mid-Left: Next.js */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10"
        >
          <button
            onClick={() => setActiveNodeId("nextjs")}
            className={`group flex items-center space-x-2 px-3 py-2 rounded-xl border transition-all cursor-pointer ${
              activeNodeId === "nextjs"
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/25 scale-105"
                : "bg-white/90 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-xs"
            }`}
          >
            <div className={`p-1.5 rounded-lg ${activeNodeId === "nextjs" ? "bg-white/20 text-white" : "bg-violet-50 text-violet-600"}`}>
              {nodes[2].icon}
            </div>
            <span className="text-xs font-bold whitespace-nowrap">{nodes[2].name}</span>
          </button>
        </motion.div>

        {/* Mid-Right: TypeScript */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-10"
        >
          <button
            onClick={() => setActiveNodeId("typescript")}
            className={`group flex items-center space-x-2 px-3 py-2 rounded-xl border transition-all cursor-pointer ${
              activeNodeId === "typescript"
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/25 scale-105"
                : "bg-white/90 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-xs"
            }`}
          >
            <div className={`p-1.5 rounded-lg ${activeNodeId === "typescript" ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"}`}>
              {nodes[3].icon}
            </div>
            <span className="text-xs font-bold whitespace-nowrap">{nodes[3].name}</span>
          </button>
        </motion.div>

        {/* Bottom-Left: Redux / Zustand */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          className="absolute bottom-2 left-2 z-10"
        >
          <button
            onClick={() => setActiveNodeId("state")}
            className={`group flex items-center space-x-2 px-3 py-2 rounded-xl border transition-all cursor-pointer ${
              activeNodeId === "state"
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/25 scale-105"
                : "bg-white/90 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-xs"
            }`}
          >
            <div className={`p-1.5 rounded-lg ${activeNodeId === "state" ? "bg-white/20 text-white" : "bg-purple-50 text-purple-600"}`}>
              {nodes[4].icon}
            </div>
            <span className="text-xs font-bold whitespace-nowrap">{nodes[4].name}</span>
          </button>
        </motion.div>

        {/* Bottom-Right: TanStack Query */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute bottom-2 right-2 z-10"
        >
          <button
            onClick={() => setActiveNodeId("query")}
            className={`group flex items-center space-x-2 px-3 py-2 rounded-xl border transition-all cursor-pointer ${
              activeNodeId === "query"
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/25 scale-105"
                : "bg-white/90 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-xs"
            }`}
          >
            <div className={`p-1.5 rounded-lg ${activeNodeId === "query" ? "bg-white/20 text-white" : "bg-emerald-50 text-emerald-600"}`}>
              {nodes[5].icon}
            </div>
            <span className="text-xs font-bold whitespace-nowrap">{nodes[5].name}</span>
          </button>
        </motion.div>

      </div>

      {/* Active Selected Node Details Pane */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative z-10 rounded-2xl bg-slate-50 border border-slate-200/90 p-4 space-y-2.5 shadow-sm text-slate-900 cursor-pointer overflow-hidden"
        >
          <BorderBeam size={100} duration={6} colorFrom="#6366f1" colorTo="#8b5cf6" />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-white shadow-xs border border-slate-200">
                {activeNode.icon}
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-slate-900">{activeNode.name}</h4>
                <span className="text-[10px] text-indigo-600 font-semibold">{activeNode.category}</span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-slate-600 bg-white px-2 py-0.5 rounded-full border border-slate-200 shadow-xs">
              Active Focus
            </span>
          </div>

          <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
            {activeNode.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {activeNode.highlights.map((item, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white text-slate-700 border border-slate-200 shadow-xs flex items-center space-x-1"
              >
                <CheckCircle2 size={10} className="text-emerald-500 shrink-0" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  );
};
