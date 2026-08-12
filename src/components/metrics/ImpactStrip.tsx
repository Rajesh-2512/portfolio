"use client";

import React from "react";
import { motion } from "framer-motion";
import { IMPACT_METRICS } from "@/data/portfolioData";

export const ImpactStrip = () => {
  return (
    <section className="relative py-12 bg-[#0d1117] border-y border-white/[0.06]">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-indigo-600/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {IMPACT_METRICS.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-indigo-500/20 transition-all duration-300 overflow-hidden"
            >
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 tracking-tight">
                  {metric.value}
                </span>
                <h3 className="text-sm font-semibold text-white">
                  {metric.label}
                </h3>
                {metric.sublabel && (
                  <p className="text-[11px] text-slate-500 font-medium">
                    {metric.sublabel}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
