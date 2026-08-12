"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Layout, Layers, Zap, Briefcase, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { BlurText } from "@/components/ui/BlurText";
import { Magnet } from "@/components/ui/Magnet";

export const AboutSection = () => {
  const highlights = [
    { icon: <Layers size={18} />, title: "Component Architecture", desc: "Atomic design & reusable systems" },
    { icon: <Zap size={18} />, title: "Real-time Telematics", desc: "WebSocket GPS streams & sensor data" },
    { icon: <Cpu size={18} />, title: "State & Data Management", desc: "Redux Toolkit, Zustand, TanStack Query" },
    { icon: <Layout size={18} />, title: "Enterprise Dashboards", desc: "Complex workflow UIs & dynamic forms" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dot-pattern">
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none animate-float-glow" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-violet-600/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 shadow-xs">
              <Code size={14} className="text-indigo-400" />
              <span>About Engineering Philosophy</span>
            </div>

            <BlurText
              text={PERSONAL_INFO.aboutTitle}
              delay={40}
              animateBy="words"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
            />

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              I turn complex operational requirements into reliable, intuitive interfaces that people can actually use. Rather than writing isolated React code, I focus on the complete frontend lifecycle — from data ingestion to smooth rendering.
            </p>

            {/* Currently Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white overflow-hidden shadow-xl shadow-black/20 hover:border-indigo-500/20 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold tracking-wider text-indigo-400 uppercase block">
                    Current Focus
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {PERSONAL_INFO.currentlyCard.role}
                  </h3>
                  <p className="text-xs text-slate-400 flex items-center space-x-2">
                    <Briefcase size={12} className="text-indigo-400" />
                    <span>{PERSONAL_INFO.currentlyCard.company}</span>
                    <span>·</span>
                    <MapPin size={12} className="text-indigo-400" />
                    <span>{PERSONAL_INFO.currentlyCard.location}</span>
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20 flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Active</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Magnet key={item.title} magnetStrength={0.15} className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.1,
                  }}
                  className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] shadow-lg shadow-black/10 hover:shadow-xl hover:border-indigo-500/20 hover:bg-white/[0.06] space-y-3 h-full cursor-pointer transition-all overflow-hidden"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                    className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold border border-indigo-500/20"
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="text-base font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </Magnet>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
