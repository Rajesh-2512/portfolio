"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Search, CheckCircle2, Copy, Check, Play, RefreshCw, Sparkles, Layers, ShieldCheck, ArrowRight, CornerDownLeft } from "lucide-react";
import { SKILL_GROUPS } from "@/data/portfolioData";
import { BorderBeam } from "@/components/ui/BorderBeam";

export interface SkillItem {
  id: string;
  name: string;
  description?: string;
  highlight?: boolean;
  groupTitle?: string;
  proficiency: string;
  proficiencyScore: number;
  projectMapping: string;
  codeSnippet: string;
  bulletPoints: string[];
}

export const SkillsArsenal = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [copied, setCopied] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command: string; output: string | React.ReactNode }>>([]);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  // Build full enriched skills dataset
  const allSkills: SkillItem[] = useMemo(() => {
    const list: SkillItem[] = [];
    SKILL_GROUPS.forEach((group) => {
      group.skills.forEach((skill) => {
        let proj = "Enterprise Web Platforms";
        let score = 92;
        let snippet = `import { useState } from 'react';\n// ${skill.name} implementation in production`;
        let bullets = ["Production-ready component architecture", "High-performance execution path", "Strict TypeScript contract compliance"];

        if (skill.name.includes("React") || skill.name.includes("Next")) {
          proj = "Sri Arumugam E-Commerce & Real-Time Dashboards";
          score = 98;
          snippet = `// Next.js App Router & React 19 Server Components\nexport default async function CatalogPage() {\n  const products = await fetchProductCatalog();\n  return <ProductGrid data={products} />;\n}`;
          bullets = ["Server-Side Rendering (SSR) & Static Site Generation (SSG)", "App Router layout nesting & parallel routes", "Custom hooks & optimized state re-render scoping"];
        } else if (skill.name.includes("WebSocket")) {
          proj = "500+ GPS Telemetry Vehicles & School Bus Attender Scanner";
          score = 95;
          snippet = `const socket = new WebSocket('wss://telemetry.logistics.io');\nsocket.onmessage = (event) => {\n  const { vehicleId, lat, lng, speed } = JSON.parse(event.data);\n  updateLiveMapMarker(vehicleId, { lat, lng, speed });\n};`;
          bullets = ["High-frequency WebSocket event stream listeners", "State batching to prevent UI thread lag", "Auto-reconnect & offline socket message queue"];
        } else if (skill.name.includes("Redux") || skill.name.includes("Zustand")) {
          proj = "Corporate Cab Route Optimizer & HRM Timesheet System";
          score = 96;
          snippet = `import { create } from 'zustand';\nexport const useCartStore = create((set) => ({\n  cart: [],\n  addItem: (item) => set((state) => ({ cart: [...state.cart, item] })),\n  clearCart: () => set({ cart: [] }),\n}));`;
          bullets = ["Atomic lightweight state stores", "Optimistic state updates for instant UI feedback", "Normalized cache state slicing"];
        } else if (skill.name.includes("Lighthouse") || skill.name.includes("Splitting")) {
          proj = "Sub-Second LCP Mobile Optimization";
          score = 96;
          snippet = `// Dynamic Lazy Component Loading for Core Web Vitals Optimization\nconst TelemetryGraph = dynamic(() => import('./TelemetryGraph'), {\n  loading: () => <SkeletonLoader />,\n  ssr: false,\n});`;
          bullets = ["Lighthouse 95+ score tuning (LCP, CLS, INP)", "Code splitting & dynamic chunk loading", "WebP image optimization & lazy loading"];
        } else if (skill.name.includes("TypeScript")) {
          proj = "Strict Type Contracts & Dynamic Form Schema Builder";
          score = 98;
          snippet = `export interface SystemState<T extends Record<string, unknown>> {\n  id: string;\n  status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';\n  payload: T;\n}`;
          bullets = ["Strict generic type definitions", "Zod schema validation engine integration", "Zero implicit any type safety enforcement"];
        }

        list.push({
          id: skill.name.toLowerCase().replace(/[^a-z0-9]/g, ""),
          name: skill.name,
          description: skill.description,
          highlight: skill.highlight,
          groupTitle: group.title,
          proficiency: skill.highlight ? "Mastery Stack" : "Production Tested",
          proficiencyScore: score,
          projectMapping: proj,
          codeSnippet: snippet,
          bulletPoints: bullets,
        });
      });
    });
    return list;
  }, []);

  const [activeSkill, setActiveSkill] = useState<SkillItem>(allSkills[0]);

  // Filter skills by selected domain tag
  const displayedSkills = useMemo(() => {
    if (selectedCategory === "ALL") return allSkills;
    if (selectedCategory === "HIGHLIGHTED") return allSkills.filter((s) => s.highlight);
    if (selectedCategory === "FRONTEND") return allSkills.filter((s) => s.groupTitle === "Frontend Core & UI");
    if (selectedCategory === "STATE") return allSkills.filter((s) => s.groupTitle === "State & Data Fetching");
    if (selectedCategory === "APIS") return allSkills.filter((s) => s.groupTitle === "APIs & WebSockets");
    if (selectedCategory === "PERF") return allSkills.filter((s) => s.groupTitle === "Performance & Optimization");
    return allSkills;
  }, [allSkills, selectedCategory]);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSkill.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const query = inputVal.trim().toLowerCase();
    setInputVal("");

    if (query === "clear") {
      setTerminalHistory([]);
      return;
    }

    if (query === "help") {
      setTerminalHistory((prev) => [
        ...prev,
        {
          command: query,
          output: "Available commands:\n  inspect <skill> - Run live diagnostics (e.g. inspect react)\n  list            - List all 35+ technologies\n  clear           - Clear terminal log output",
        },
      ]);
      return;
    }

    if (query === "list") {
      setTerminalHistory((prev) => [
        ...prev,
        {
          command: query,
          output: `Available Skills (${allSkills.length}): ` + allSkills.map((s) => s.name).join(", "),
        },
      ]);
      return;
    }

    // Try finding skill match
    const match = allSkills.find(
      (s) => s.name.toLowerCase().includes(query) || s.id.includes(query) || query.includes(s.id)
    );

    if (match) {
      setActiveSkill(match);
      setTerminalHistory((prev) => [
        ...prev,
        {
          command: query,
          output: `[SUCCESS] Loaded diagnostics for ${match.name} (${match.proficiencyScore}% score).`,
        },
      ]);
    } else {
      setTerminalHistory((prev) => [
        ...prev,
        {
          command: query,
          output: `[ERROR] Command or skill "${query}" not found. Type "help" or click a skill chip below.`,
        },
      ]);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0a0d15] text-slate-100 bg-grid-pattern border-y border-white/[0.08]">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/10 border border-emerald-400/20">
            <Terminal size={14} className="text-emerald-600 animate-pulse" />
            <span>Developer Engineering Terminal</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Technical Arsenal CLI
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Click any command chip or type in the CLI prompt to run live diagnostics across all {allSkills.length} engineering capabilities.
          </p>
        </div>

        {/* Domain Filter Pills Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto">
          {[
            { id: "ALL", label: `All (${allSkills.length})` },
            { id: "HIGHLIGHTED", label: `Mastery Stack (${allSkills.filter(s=>s.highlight).length})` },
            { id: "FRONTEND", label: "Frontend Core" },
            { id: "STATE", label: "State & Data" },
            { id: "APIS", label: "APIs & WebSockets" },
            { id: "PERF", label: "Performance Vitals" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-slate-900 text-emerald-400 border border-slate-800 shadow-md"
                  : "bg-white/[0.05] text-slate-300 border border-white/[0.1] hover:bg-white/[0.1] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Interactive Developer CLI Window */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs text-slate-200">
          
          {/* Mac/Linux Terminal Window Titlebar */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity" />
              <div className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity" />
              <div className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity" />
              <span className="text-slate-400 text-xs font-bold ml-2">rajesh@engineering-cli:~ (zsh)</span>
            </div>

            <div className="flex items-center space-x-2 text-[10px] font-bold">
              <span className="flex items-center space-x-1 text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>ONLINE</span>
              </span>
              <span className="text-slate-500 font-normal">v19.4.0</span>
            </div>
          </div>

          {/* Interactive Technology Command Chips Grid */}
          <div className="p-4 bg-slate-900/60 border-b border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-bold">
              <span>// CLICK COMMAND TO RUN DIAGNOSTICS:</span>
              <span className="text-emerald-400">{displayedSkills.length} Commands Available</span>
            </div>

            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto pr-1 scrollbar-thin">
              {displayedSkills.map((skill) => {
                const isActive = activeSkill.id === skill.id;
                return (
                  <button
                    key={skill.id}
                    onClick={() => setActiveSkill(skill)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all cursor-pointer flex items-center space-x-1.5 border ${
                      isActive
                        ? "bg-emerald-500 text-slate-950 font-extrabold border-emerald-400 shadow-md shadow-emerald-500/20 scale-[1.02]"
                        : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span>npx inspect --{skill.id}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Terminal Diagnostic Content View */}
          <div className="p-6 space-y-6">
            
            {/* Command Input Prompt */}
            <form onSubmit={handleRunCommand} className="flex items-center space-x-2 text-emerald-400 font-bold text-xs bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              <span className="text-emerald-500">$</span>
              <span className="text-slate-400">rajesh-cli</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder='Type "help", "list", or skill name e.g. "inspect react"...'
                className="bg-transparent text-emerald-400 focus:outline-none flex-1 font-mono placeholder:text-slate-600 text-xs"
              />
              <button type="submit" className="text-slate-500 hover:text-emerald-400 cursor-pointer">
                <CornerDownLeft size={14} />
              </button>
            </form>

            {/* Custom Log History */}
            {terminalHistory.length > 0 && (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2 border-b border-slate-800 pb-4 text-[11px]">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-slate-400">$ {item.command}</p>
                    <pre className="text-emerald-400 whitespace-pre-wrap font-mono">{item.output}</pre>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>
            )}

            {/* Active Skill Detailed Inspection Console Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 relative overflow-hidden">
              
              {/* Left Column: Diagnostics Metadata */}
              <div className="lg:col-span-6 space-y-5">
                
                {/* Header */}
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Cpu size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                      {activeSkill.groupTitle}
                    </span>
                    <h3 className="text-xl font-extrabold text-white tracking-tight">{activeSkill.name}</h3>
                  </div>
                </div>

                {/* Proficiency Gauge Progress Bar */}
                <div className="space-y-1.5 bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center text-[10px] font-bold">
                    <span className="text-slate-400 uppercase">Proficiency Level</span>
                    <span className="text-emerald-400">{activeSkill.proficiencyScore}% ({activeSkill.proficiency})</span>
                  </div>

                  {/* Terminal Styled Green Progress Bar */}
                  <div className="flex items-center space-x-2 pt-1 font-mono text-[10px] text-emerald-400">
                    <div className="flex-1 h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <motion.div
                        key={activeSkill.id}
                        initial={{ width: 0 }}
                        animate={{ width: `${activeSkill.proficiencyScore}%` }}
                        transition={{ duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Production Impact Mapping */}
                <div className="space-y-1 bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-bold text-amber-400 uppercase block">// Production Deployment Impact</span>
                  <p className="text-xs font-bold text-slate-200">{activeSkill.projectMapping}</p>
                </div>

                {/* Competencies List */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">// Key Technical Capabilities</span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {activeSkill.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-medium text-[11px]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Right Column: Code Snippet Preview */}
              <div className="lg:col-span-6 flex flex-col justify-between bg-slate-950 rounded-xl border border-slate-800 p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                    <Terminal size={12} className="text-emerald-400" />
                    <span>Live Code Pattern Preview</span>
                  </span>

                  <button
                    onClick={handleCopy}
                    className="flex items-center space-x-1 text-[10px] font-bold px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check size={11} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={11} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="text-[11px] text-sky-300 font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed flex-1 p-2 bg-slate-900/50 rounded-lg border border-slate-800/60">
                  {activeSkill.codeSnippet}
                </pre>

                <div className="text-[10px] text-slate-500 flex items-center justify-between pt-1 border-t border-slate-900">
                  <span>Engine: Node v20.x / Next.js 16</span>
                  <span className="text-emerald-400 font-bold">100% Type Safe</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
