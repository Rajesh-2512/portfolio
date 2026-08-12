"use client";

import React from "react";
import { motion } from "framer-motion";
import { Radio, ShieldCheck, Code2, Zap, Sparkles } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";

export const BentoCapabilities = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0d1117] bg-grid-pattern">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <Sparkles size={14} className="text-indigo-400" />
            <span>Engineering Pillars</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Core Engineering Strengths
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A modular bento grid showcasing specialized capabilities in real-time UI, state architecture, and web performance.
          </p>
        </div>

        {/* 4 Cards Aligned in a Single Line on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Real-time Systems */}
          <BentoCard
            className="min-h-[260px] flex flex-col justify-between"
            showBorderBeam={true}
            icon={<Radio size={24} />}
            title="Real-Time Systems & WebSockets"
            description="Specialized in building low-latency telemetry streaming dashboards, vehicle GPS map tracking, and instant QR attendance notifications."
          >
            <div className="mt-4 p-2.5 rounded-xl bg-white/[0.04] text-[11px] font-mono flex items-center justify-between border border-white/[0.08]">
              <span className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-bold text-slate-200">WebSocket Listener</span>
              </span>
              <span className="text-indigo-400 font-bold">500+ Assets</span>
            </div>
          </BentoCard>

          {/* Card 2: Strict TypeScript */}
          <BentoCard
            className="min-h-[260px] flex flex-col justify-between"
            showBorderBeam={true}
            icon={<ShieldCheck size={24} />}
            title="Strict TypeScript Contracts"
            description="End-to-end type safety with generics, strict schema validation (Zod), and robust contract interfaces."
          >
            <div className="mt-4 p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-mono border border-indigo-500/20 font-semibold text-center">
              interface SystemState &lt;T&gt;
            </div>
          </BentoCard>

          {/* Card 3: React & Next.js Architecture */}
          <BentoCard
            className="min-h-[260px] flex flex-col justify-between"
            showBorderBeam={true}
            icon={<Code2 size={24} />}
            title="React & Next.js Architecture"
            description="Clean feature-based directory structure, Server-Side Rendering (SSR), SSG, custom hooks, and state management."
          >
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="px-2 py-1 rounded text-[10px] font-bold bg-white/[0.04] text-slate-300 border border-white/[0.08]">App Router</span>
              <span className="px-2 py-1 rounded text-[10px] font-bold bg-white/[0.04] text-slate-300 border border-white/[0.08]">Redux Toolkit</span>
              <span className="px-2 py-1 rounded text-[10px] font-bold bg-white/[0.04] text-slate-300 border border-white/[0.08]">Zustand</span>
            </div>
          </BentoCard>

          {/* Card 4: Performance Engineering */}
          <BentoCard
            className="min-h-[260px] flex flex-col justify-between"
            showBorderBeam={true}
            icon={<Zap size={24} />}
            title="Performance & Web Vitals"
            description="Code splitting, lazy loading, image optimization, tree shaking, and Lighthouse 90+ tuning for instant page loads."
          >
            <div className="mt-4 grid grid-cols-2 gap-1.5 text-center text-[10px] font-mono">
              <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">Lighthouse 95+</div>
              <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-bold">60 FPS Render</div>
            </div>
          </BentoCard>

        </div>

      </div>
    </section>
  );
};
