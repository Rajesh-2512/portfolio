"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, FileText } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0d1117] border-t border-white/[0.06] text-slate-500 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base font-bold text-white">{PERSONAL_INFO.name}</h3>
            <p className="text-slate-400">{PERSONAL_INFO.positioning}</p>
            <p className="text-[11px] text-slate-600 pt-1">
              Built with Next.js, TypeScript & thoughtful UI architecture.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center space-x-1">
              <LinkedinIcon size={14} /><span>LinkedIn</span>
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors flex items-center space-x-1">
              <GithubIcon size={14} /><span>GitHub</span>
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-indigo-400 transition-colors flex items-center space-x-1">
              <Mail size={14} /><span>Email</span>
            </a>
            <Link href="/resume" target="_blank" className="hover:text-indigo-400 transition-colors flex items-center space-x-1">
              <FileText size={14} /><span>Resume</span>
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 border border-white/[0.08] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="border-t border-white/[0.06] pt-6 text-center text-[11px] text-slate-600">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
