"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { BorderBeam } from "@/components/ui/BorderBeam";

export const EducationSection = () => {
  const { education } = PERSONAL_INFO;

  return (
    <section className="py-20 relative overflow-hidden bg-[#0d111a] text-slate-100 bg-grid-pattern border-y border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ y: -4, scale: 1.01 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 20 }}
          className="relative rounded-3xl bg-[#121824] p-6 sm:p-10 border border-white/[0.1] space-y-6 shadow-xl shadow-black/25 overflow-hidden cursor-pointer"
        >
          <BorderBeam size={140} duration={8} colorFrom="#6366f1" colorTo="#8b5cf6" />

          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-300 border border-indigo-400/20"
            >
              <GraduationCap size={28} />
            </motion.div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block">
                Academic Background
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Education & Credentials
              </h2>
            </div>
          </div>

          <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-extrabold text-slate-100">
                {education.degree}
              </h3>
              <p className="text-sm font-semibold text-slate-400">
                {education.institution}
              </p>
            </div>

            <div className="flex flex-col sm:items-end space-y-1.5 text-xs text-slate-600 font-medium">
              <motion.span whileHover={{ scale: 1.05 }} className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-white/[0.06] border border-white/[0.1] font-bold text-slate-200">
                <Calendar size={13} className="text-indigo-600" />
                <span>{education.period}</span>
              </motion.span>
              <motion.span whileHover={{ scale: 1.05 }} className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold shadow-2xs">
                <Award size={13} className="text-emerald-600" />
                <span>CGPA: {education.cgpa}</span>
              </motion.span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
