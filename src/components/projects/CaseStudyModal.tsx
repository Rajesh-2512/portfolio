"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Layers, ShieldCheck } from "lucide-react";
import { Project } from "@/types/portfolio";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Dialog Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111722] border border-white/[0.1] text-slate-100 shadow-2xl shadow-black/50 p-6 sm:p-8 space-y-8 z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.12] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="space-y-2 border-b border-white/[0.08] pb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-400/20">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">{project.title}</h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">{project.shortDesc}</p>
          </div>

          {/* Case Study Section Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Problem Statement */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/[0.08] space-y-2">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                01. Business Problem
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">{caseStudy.problem}</p>
            </div>

            {/* System Overview */}
            <div className="p-5 rounded-2xl bg-black/20 border border-white/[0.08] space-y-2">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                02. End-to-End System
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">{caseStudy.system}</p>
            </div>

          </div>

          {/* Frontend Architecture Highlights */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-100 flex items-center space-x-2">
              <Layers className="text-indigo-600" size={18} />
              <span>Frontend Engineering Architecture</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.architecture.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-black/20 border border-white/[0.08] flex items-start space-x-2.5">
                  <CheckCircle2 size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Impact & measured metrics */}
          <div className="p-5 rounded-2xl bg-indigo-500/10 border border-indigo-400/20 space-y-3">
            <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wider flex items-center space-x-2">
              <ShieldCheck size={16} />
              <span>Verified Measured Impact</span>
            </h3>
            <ul className="space-y-2">
              {caseStudy.impact.map((imp, idx) => (
                <li key={idx} className="text-sm text-slate-200 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold">{imp}</span>
                </li>
              ))}
            </ul>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
