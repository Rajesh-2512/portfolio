"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Systems", href: "#systems", id: "systems" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Arsenal", href: "#skills", id: "skills" },
    { name: "Architecture", href: "#architecture", id: "architecture" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1117]/80 backdrop-blur-xl border-b border-white/[0.06] py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#" className="flex items-center space-x-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            RK
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-tight text-base group-hover:text-indigo-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500">
              Frontend Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-white/[0.04] p-1.5 rounded-full border border-white/[0.08] shadow-sm backdrop-blur-md relative">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-semibold rounded-full transition-colors duration-200 ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full shadow-md shadow-indigo-500/25"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Resume Button */}
        <div className="hidden md:flex items-center space-x-3">
          <Link href="/resume" target="_blank">
            <button className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 text-white shadow-md shadow-indigo-500/20 transition-all flex items-center space-x-1.5 cursor-pointer">
              <FileText size={14} />
              <span>Resume</span>
              <ArrowUpRight size={14} />
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-white/[0.05] text-slate-300 border border-white/[0.08] shadow-sm focus:outline-none"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d1117]/95 backdrop-blur-xl border-b border-white/[0.06] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-semibold py-2 px-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-slate-400 hover:bg-white/[0.05] hover:text-indigo-400"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <Link
              href="/resume"
              target="_blank"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 rounded-xl text-center font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 text-white flex items-center justify-center space-x-2 shadow-md shadow-indigo-500/25"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
