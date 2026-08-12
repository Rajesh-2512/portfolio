"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Zap, Layout, Activity, Sparkles } from "lucide-react";
import { ENGINEERING_PRINCIPLES } from "@/data/portfolioData";
import { BentoCard } from "@/components/ui/BentoCard";
import { BlurText } from "@/components/ui/BlurText";

export const EngineeringPhilosophy = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Layers": return <Layers className="w-5 h-5 text-indigo-600" />;
      case "Zap": return <Zap className="w-5 h-5 text-violet-600" />;
      case "Layout": return <Layout className="w-5 h-5 text-emerald-600" />;
      case "Activity": return <Activity className="w-5 h-5 text-cyan-600" />;
      default: return <Sparkles className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#0d111a] text-slate-100 border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-400/20">
            <Sparkles size={14} className="text-indigo-600" />
            <span>Product Principles</span>
          </span>
          <BlurText
            text="How I Build"
            delay={50}
            animateBy="words"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white justify-center"
          />
          <p className="text-base sm:text-lg text-slate-400">
            Four core engineering tenets that guide software design, UI component modularity, and operational reliability.
          </p>
        </div>

        {/* 4 Framer Motion Animated Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGINEERING_PRINCIPLES.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1,
              }}
              className="h-full"
            >
              <BentoCard
                className="h-full min-h-[200px] bg-[#121824] border-white/[0.1] shadow-md shadow-black/20 hover:bg-white/[0.04] transition-colors hover:border-indigo-400 cursor-pointer"
                showBorderBeam={true}
                icon={
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {getIcon(principle.iconName)}
                  </motion.div>
                }
                title={
                  <span className="flex items-center space-x-3">
                    <span className="text-indigo-600 font-mono font-bold">{principle.number}</span>
                    <span className="text-slate-100">{principle.title}</span>
                  </span>
                }
                description={<span className="text-slate-400 leading-relaxed">{principle.description}</span>}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
