"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Building2, ExternalLink } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { InteractiveSystemNode } from "./InteractiveSystemNode";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Background Gradients & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-indigo-600/10 via-violet-600/10 to-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-[100px]" />
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d0d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                <span>{PERSONAL_INFO.eyebrow}</span>
              </span>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>{PERSONAL_INFO.role} · <strong className="text-white font-semibold">{PERSONAL_INFO.company}</strong></span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              I build interfaces for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">
                complex systems.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* Meta badges: Location & Live portfolio */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 pt-1">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <a
                href={PERSONAL_INFO.existingPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>rajesh-dev.vercel.app</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/35 transition-all duration-200 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center space-x-5 border-t border-white/[0.06]">
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-2 text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive System Architecture Node Canvas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <InteractiveSystemNode />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
