"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { BorderBeam } from "@/registry/magicui/border-beam";

export const EducationSection = () => {
  const { education } = PERSONAL_INFO;

  return (
    <section className="py-20 relative overflow-hidden bg-[#0d111a] text-slate-100 bg-grid-pattern border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -3 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 20 }}
          className="relative rounded-3xl bg-[#121824] p-6 sm:p-10 border border-white/[0.1] space-y-6 shadow-xl shadow-black/25 overflow-hidden cursor-pointer w-full"
        >
          <BorderBeam duration={8} size={100} colorFrom="#6366f1" colorTo="#8b5cf6" />

          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="p-3.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-400/20 shrink-0"
            >
              <GraduationCap size={32} />
            </motion.div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block font-mono">
                Academic Background
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Education & Credentials
              </h2>
            </div>
          </div>

          <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <h3 className="text-xl font-extrabold text-white leading-snug">
                {education.degree}
              </h3>
              <p className="text-sm font-semibold text-slate-400">
                {education.institution}
              </p>
            </div>

            <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 text-xs text-slate-300 font-medium shrink-0">
              <motion.span whileHover={{ scale: 1.05 }} className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.1] font-bold text-slate-200 font-mono">
                <Calendar size={14} className="text-indigo-400" />
                <span>{education.period}</span>
              </motion.span>
              <motion.span whileHover={{ scale: 1.05 }} className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold font-mono">
                <Award size={14} className="text-emerald-400" />
                <span>CGPA: {education.cgpa}</span>
              </motion.span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
