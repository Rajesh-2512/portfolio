"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layout, Database, Radio, Cpu, Sparkles, ArrowDown, Activity } from "lucide-react";
import { AnimatedBeam } from "@/components/ui/AnimatedBeam";
import { BorderBeam } from "@/components/ui/BorderBeam";

export const ArchitectureDiagram = () => {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  const layers = [
    {
      id: 1,
      title: "UI Layer",
      sub: "React.js / Next.js / Tailwind CSS",
      desc: "Component rendering, micro-frontends, responsive layouts, 60fps animations.",
      icon: <Layout className="text-sky-400" size={22} />,
    },
    {
      id: 2,
      title: "State & Caching Layer",
      sub: "Redux Toolkit / Zustand / TanStack Query",
      desc: "Client state normalization, optimistic updates, query caching, telemetry batching.",
      icon: <Database className="text-indigo-400" size={22} />,
    },
    {
      id: 3,
      title: "API & Realtime Layer",
      sub: "REST APIs / WebSockets / tRPC",
      desc: "High-frequency telemetry streams, auto-reconnecting socket listeners, payload serialization.",
      icon: <Radio className="text-emerald-400" size={22} />,
    },
    {
      id: 4,
      title: "Services & IoT Hardware",
      sub: "Teltonika GPS / Omnicomm Fuel Sensors / Backends",
      desc: "Raw telematics data emission, GPS coordinate calculation, server events.",
      icon: <Cpu className="text-cyan-400" size={22} />,
    },
  ];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-[#0a0d15] text-slate-100 bg-grid-pattern border-y border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-400/20">
            <Activity size={14} className="text-indigo-600" />
            <span>Frontend Architecture Thinking</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Requirement to Interface
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            How data flows seamlessly from raw IoT sensors and APIs down into predictable client state and high-performance UI components.
          </p>
        </div>

        {/* Stacked Layer Pipeline Cards */}
        <div className="space-y-4 relative">
          {layers.map((layer, index) => {
            return (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-[#121824] border border-white/[0.1] shadow-md shadow-black/20 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <BorderBeam size={140} duration={8} colorFrom="#6366f1" colorTo="#8b5cf6" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 shrink-0">
                      {layer.icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono font-extrabold text-indigo-600">LAYER 0{layer.id}</span>
                        <h3 className="text-lg font-extrabold text-slate-100">{layer.title}</h3>
                      </div>
                      <span className="text-xs font-semibold text-slate-400 block mt-0.5">
                        {layer.sub}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-slate-400 max-w-xs leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
