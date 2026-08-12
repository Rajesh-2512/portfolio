"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  Building2, 
  Cpu, 
  CheckCircle2, 
  Zap, 
  Radio
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { HeroDeveloperConsole } from "./HeroDeveloperConsole";

// ReactBits UI Components
import { Spotlight } from "@/components/ui/Spotlight";
import { SparklesCore } from "@/components/ui/Sparkles";
import { ClickSpark } from "@/components/ui/ClickSpark";
import { DecryptedText } from "@/components/ui/DecryptedText";
import { ShinyText } from "@/components/ui/ShinyText";
import { Magnet } from "@/components/ui/Magnet";

export const Hero = () => {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-12 flex flex-col justify-between overflow-hidden bg-[#080c14] text-white">
      {/* 1. ReactBits Spotlight Ambient Lights */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(99, 102, 241, 0.3)"
      />
      <Spotlight
        className="top-10 right-10 hidden lg:block"
        fill="rgba(56, 189, 248, 0.2)"
      />

      {/* 2. ReactBits Sparkles Interactive Particle Background Canvas */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={70}
          particleColor="#818cf8"
          speed={0.8}
          className="w-full h-full"
        />
        {/* Radial Mesh Glows & Fine Grid Pattern */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-violet-600/10 to-cyan-500/15 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Name & Headline */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Eyebrow Pill Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <Magnet magnetStrength={0.2}>
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/25 shadow-sm shadow-indigo-500/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  <DecryptedText
                    text="SENIOR FRONTEND ENGINEER · REACT.JS · NEXT.JS · TYPESCRIPT"
                    speed={30}
                    maxIterations={12}
                    sequential={true}
                    className="font-mono text-indigo-300"
                    animateOn="mount"
                  />
                </div>
              </Magnet>

              <Magnet magnetStrength={0.2}>
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/[0.05] text-slate-300 border border-white/[0.1] backdrop-blur-md">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>
                    Senior Software Engineer · <strong className="text-white font-semibold">LTM</strong>
                  </span>
                </div>
              </Magnet>
            </div>

            {/* Name & Headline Block */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Rajesh Kannan A
              </h1>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-400 tracking-tight">
                <ShinyText text="Frontend Engineer" speed={3.5} />
              </h2>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl font-normal leading-relaxed">
              <strong className="text-white font-semibold">4+ years</strong> of experience building scalable real-time dashboards, GPS telematics, enterprise UI design systems, and high-performance web applications serving <strong className="text-indigo-400 font-semibold">15,000+ active users</strong>.
            </p>

            {/* Meta Location Pill Only (URL Removed) */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 pt-1">
              <div className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-slate-300 font-medium">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* High-Contrast CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <ClickSpark sparkColor="#818cf8" sparkCount={10} sparkRadius={20}>
                <Magnet magnetStrength={0.35}>
                  <a
                    href="#projects"
                    className="group relative inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl font-bold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/45 transition-all duration-200 cursor-pointer overflow-hidden border border-indigo-400/30"
                  >
                    <span className="relative z-10 flex items-center space-x-2 text-white font-extrabold tracking-wide">
                      <span>Explore Production Projects</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </Magnet>
              </ClickSpark>

              <ClickSpark sparkColor="#38bdf8" sparkCount={8} sparkRadius={16}>
                <Magnet magnetStrength={0.35}>
                  <a
                    href="/resume"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.12] hover:border-white/[0.25] transition-all duration-200 cursor-pointer backdrop-blur-md"
                  >
                    <Download className="w-4 h-4 text-cyan-400" />
                    <span>Download Resume</span>
                  </a>
                </Magnet>
              </ClickSpark>
            </div>

            {/* Social Icons Row */}
            <div className="pt-4 flex items-center space-x-4 border-t border-white/[0.08]">
              <Magnet magnetStrength={0.25}>
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-slate-300 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                  <span>LinkedIn</span>
                </a>
              </Magnet>

              <Magnet magnetStrength={0.25}>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-slate-300 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-indigo-400" />
                  <span>GitHub</span>
                </a>
              </Magnet>

              <Magnet magnetStrength={0.25}>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-slate-300 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all"
                >
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </Magnet>
            </div>
          </motion.div>

          {/* Right Column: Interactive Console Deck */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <HeroDeveloperConsole />
          </motion.div>

        </div>
      </div>

      {/* Live System Telemetry Status Ticker */}
      <div className="relative z-10 w-full mt-8 border-t border-white/[0.08] bg-black/40 backdrop-blur-md py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEM OPERATIONAL</span>
            </div>
            
            <div className="hidden sm:flex items-center space-x-2">
              <Radio className="w-3.5 h-3.5 text-indigo-400" />
              <span>Telemetry: <strong className="text-slate-200">500+ Active GPS Nodes</strong></span>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Response: <strong className="text-slate-200">12ms WebSocket Stream</strong></span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 bg-white/[0.05] px-2.5 py-1 rounded border border-white/[0.08]">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>React 19 / Turbopack</span>
            </div>

            <div className="flex items-center space-x-1.5 bg-white/[0.05] px-2.5 py-1 rounded border border-white/[0.08]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Lighthouse Vitals: 99+</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
