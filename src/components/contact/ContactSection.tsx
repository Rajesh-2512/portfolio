"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, FileText, Copy, Check, ArrowUpRight, Sparkles } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/SocialIcons";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { SparklesCore } from "@/components/ui/Sparkles";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0a0d15] text-slate-100 border-t border-white/[0.08]">
      {/* Background Beams */}
      <BackgroundBeams />

      {/* Sparkles Particles */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="contact-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#6366f1"
          speed={0.6}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-400/20">
            <Sparkles size={14} className="text-indigo-600" />
            <span>Get in Touch</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Have a complex frontend problem?
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            I'm interested in building scalable products, real-time interfaces, and thoughtful frontend systems.
          </p>
        </div>

        {/* Action Card */}
        <BackgroundGradient className="p-8 rounded-3xl bg-[#111722] border border-white/[0.1] shadow-2xl shadow-black/30 space-y-6 overflow-hidden">
          <BorderBeam size={160} duration={8} colorFrom="#6366f1" colorTo="#8b5cf6" />

          {/* Email Box with Copy */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-black/20 border border-white/[0.08] max-w-xl mx-auto">
            <div className="flex items-center space-x-3 text-left">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-400/20">
                <Mail size={20} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase block">Direct Email</span>
                <span className="text-sm sm:text-base font-bold text-slate-100 font-mono">{PERSONAL_INFO.email}</span>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 border border-white/[0.1] flex items-center space-x-1.5 transition-colors shrink-0"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a href={`mailto:${PERSONAL_INFO.email}`}>
              <MagneticButton className="px-6 py-3.5 rounded-2xl text-sm font-semibold bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 text-white shadow-xl shadow-indigo-500/25 flex items-center space-x-2">
                <Mail size={16} />
                <span>Email Me</span>
              </MagneticButton>
            </a>

            <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noreferrer">
              <MagneticButton className="px-6 py-3.5 rounded-2xl text-sm font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-slate-100 border border-white/[0.1] flex items-center space-x-2">
                <LinkedinIcon size={16} className="text-indigo-600" />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} />
              </MagneticButton>
            </a>

            <Link href="/resume" target="_blank">
              <MagneticButton className="px-6 py-3.5 rounded-2xl text-sm font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-slate-100 border border-white/[0.1] flex items-center space-x-2">
                <FileText size={16} className="text-indigo-600" />
                <span>Download Resume</span>
              </MagneticButton>
            </Link>
          </div>
        </BackgroundGradient>

      </div>
    </section>
  );
};
