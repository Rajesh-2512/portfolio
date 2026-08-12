"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, GraduationCap, Car, ShieldCheck, Users, Cpu, Radio, Layout, Zap } from "lucide-react";
import { REAL_WORLD_SYSTEMS } from "@/data/portfolioData";
import { BlurText } from "@/components/ui/BlurText";
import { Magnet } from "@/components/ui/Magnet";

export const RealWorldSystems = () => {
  const [activeSystemId, setActiveSystemId] = useState<string>("fleet");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Truck": return <Truck className="w-5 h-5" />;
      case "GraduationCap": return <GraduationCap className="w-5 h-5" />;
      case "Car": return <Car className="w-5 h-5" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5" />;
      case "Users": return <Users className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  const activeSystem = REAL_WORLD_SYSTEMS.find((s) => s.id === activeSystemId) || REAL_WORLD_SYSTEMS[0];

  return (
    <section id="systems" className="py-24 relative bg-[#0a0a0f] overflow-hidden">
      <div className="section-divider" />
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <Zap size={14} className="text-indigo-400" />
            <span>Signature Engineering Domain</span>
          </span>
          <BlurText
            text="Interfaces for Complex Systems"
            delay={50}
            animateBy="words"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white justify-center"
          />
          <p className="text-base sm:text-lg text-slate-400">
            Select a domain below to explore operational workflows, real-time telemetry requirements, and frontend challenges.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {REAL_WORLD_SYSTEMS.map((system) => {
            const isSelected = system.id === activeSystemId;
            return (
              <Magnet key={system.id} magnetStrength={0.15} className="w-full">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveSystemId(system.id)}
                  className={`relative w-full flex items-center space-x-3 p-4 rounded-2xl border transition-all text-left cursor-pointer ${
                    isSelected
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/25"
                      : "bg-white/[0.03] border-white/[0.08] text-slate-300 hover:bg-white/[0.06] hover:border-white/[0.12]"
                  }`}
                >
                  <motion.div
                    animate={isSelected ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`p-2.5 rounded-xl ${isSelected ? "bg-white/20 text-white" : "bg-indigo-500/10 text-indigo-400"}`}
                  >
                    {getIcon(system.iconName)}
                  </motion.div>
                  <div>
                    <h4 className="text-xs font-bold line-clamp-1">{system.title}</h4>
                    <span className={`text-[10px] block line-clamp-1 ${isSelected ? "text-indigo-100" : "text-slate-500"}`}>{system.subtitle}</span>
                  </div>
                </motion.button>
              </Magnet>
            );
          })}
        </div>

        {/* Active System Detail Pane */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSystem.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative rounded-3xl bg-white/[0.03] border border-white/[0.08] p-6 sm:p-10 shadow-2xl shadow-black/30 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                  >
                    {getIcon(activeSystem.iconName)}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{activeSystem.title}</h3>
                    <p className="text-xs text-indigo-400 font-semibold">{activeSystem.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.015, x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Target End Users</span>
                    <p className="text-sm font-semibold text-white">{activeSystem.users}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.015, x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Main Operational Workflow</span>
                    <p className="text-sm text-slate-400 leading-relaxed">{activeSystem.mainWorkflow}</p>
                  </motion.div>
                </div>
              </div>

              {/* Right */}
              <div className="lg:col-span-5 space-y-6">
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/15 space-y-1"
                >
                  <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <Radio size={14} className="animate-pulse text-indigo-400" />
                    <span>Real-time Requirements</span>
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">{activeSystem.realtimeReqs}</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.015 }}
                  className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/15 space-y-1"
                >
                  <span className="text-[11px] font-bold text-violet-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <Layout size={14} className="text-violet-400" />
                    <span>Frontend Engineering Challenge</span>
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">{activeSystem.frontendChallenges}</p>
                </motion.div>

                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">Key Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {activeSystem.techStack.map((tech) => (
                      <Magnet key={tech} magnetStrength={0.2}>
                        <motion.span
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/[0.04] text-indigo-400 border border-white/[0.08] inline-block"
                        >
                          {tech}
                        </motion.span>
                      </Magnet>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
