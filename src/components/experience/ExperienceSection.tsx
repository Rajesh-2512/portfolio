"use client";

import React, { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { EXPERIENCE_LIST } from "@/data/portfolioData";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { BlurText } from "@/components/ui/BlurText";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const bulletVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0a0a0f] bg-dot-pattern">
      <div className="section-divider" />
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <Briefcase size={14} className="text-indigo-400" />
            <span>Career History & Roles</span>
          </span>
          <BlurText
            text="Professional Experience"
            delay={50}
            animateBy="words"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white justify-center"
          />
          <p className="text-base sm:text-lg text-slate-400">
            4+ years of building enterprise real-time telematics dashboards, complex data visualizations, and high-performance React/Next.js architectures.
          </p>
        </div>

        {/* Left-Right Alternating Timeline Container */}
        <div className="relative max-w-5xl mx-auto px-2">
          
          {/* Central Vertical Guide Line */}
          {/* Desktop: Centered line */}
          <div className="hidden md:block absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 via-violet-400 to-indigo-300 rounded-full opacity-70 shadow-xs" />
          {/* Mobile: Left line */}
          <div className="block md:hidden absolute top-4 bottom-4 left-5 w-1 bg-gradient-to-b from-indigo-500 via-violet-400 to-indigo-300 rounded-full opacity-70" />

          {/* Experience Cards Staggered List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12 md:space-y-16"
          >
            {EXPERIENCE_LIST.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.company + index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Node Indicator */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0d1117] border-2 border-indigo-500 shadow-md shadow-indigo-500/20 flex items-center justify-center z-20 group">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Job Card Wrapper */}
                  <div
                    className={`w-full pl-14 md:pl-0 ${
                      isEven
                        ? "md:w-[calc(50%-2.5rem)] md:mr-auto"
                        : "md:w-[calc(50%-2.5rem)] md:ml-auto"
                    }`}
                  >
                    <ExperienceCard exp={exp} index={index} isEven={isEven} />
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

interface ExperienceCardProps {
  exp: (typeof EXPERIENCE_LIST)[0];
  index: number;
  isEven: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index, isEven }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className="group relative rounded-3xl bg-white/[0.03] p-6 sm:p-8 border border-white/[0.06] hover:border-indigo-500/30 shadow-xl shadow-black/20 hover:shadow-2xl hover:bg-white/[0.05] transition-all overflow-hidden space-y-6 cursor-pointer"
      >
        <BorderBeam size={160} duration={8} colorFrom="#6366f1" colorTo="#8b5cf6" />

        {/* Card Header Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-5 [transform:translateZ(25px)]">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
                {exp.company}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-indigo-400 transition-colors">
              {exp.role}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-1 font-semibold px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08]"
            >
              <Calendar size={13} className="text-indigo-400" />
              <span>{exp.period}</span>
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-1 font-semibold px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08]"
            >
              <MapPin size={13} className="text-indigo-400" />
              <span>{exp.location}</span>
            </motion.span>
          </div>
        </div>

        {/* Bullet Points with Framer Motion Stagger */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3 [transform:translateZ(30px)]"
        >
          {exp.highlights.map((item, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={bulletVariants}
              whileHover={{ x: 4 }}
              className="flex items-start space-x-3 text-xs sm:text-sm text-slate-400 leading-relaxed cursor-default transition-colors hover:text-white"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              </motion.div>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Key Tech Stack Pills for role */}
        {exp.skills && exp.skills.length > 0 && (
          <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-1.5 [transform:translateZ(20px)]">
            {exp.skills.map((skill: string) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white/[0.04] text-slate-300 border border-white/[0.08]"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

