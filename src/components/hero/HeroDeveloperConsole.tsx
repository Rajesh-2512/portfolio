"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Activity, 
  Layers, 
  Terminal, 
  Play, 
  Pause, 
  CheckCircle2, 
  Zap, 
  Radio, 
  Server,
  ShieldCheck,
  Truck,
  GraduationCap,
  Car
} from "lucide-react";
import { BorderBeam } from "@/registry/magicui/border-beam";
import { ShinyText } from "@/components/ui/ShinyText";

export const HeroDeveloperConsole = () => {
  const [activeTab, setActiveTab] = useState<"stream" | "systems" | "stack">("stream");
  const [isStreaming, setIsStreaming] = useState(true);
  const [packetCount, setPacketCount] = useState(15576);
  const [latency, setLatency] = useState(12);

  // Live WebSocket streaming telemetry counter simulation
  useEffect(() => {
    if (!isStreaming) return;
    const interval = setInterval(() => {
      setPacketCount((prev) => prev + Math.floor(Math.random() * 4) + 1);
      setLatency(Math.floor(Math.random() * 5) + 10);
    }, 1200);
    return () => clearInterval(interval);
  }, [isStreaming]);

  return (
    <div className="relative w-full max-w-xl rounded-2xl bg-[#0c101a] border border-slate-800 p-5 flex flex-col justify-between overflow-hidden shadow-2xl shadow-indigo-500/10 text-slate-200 z-20">
      {/* Infinite Border Beam Glow */}
      <BorderBeam duration={8} size={100} colorFrom="#6366f1" colorTo="#38bdf8" />

      {/* Radial Top Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* OS Window Top Navigation Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 z-20">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono font-semibold text-slate-300 flex items-center space-x-1.5">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span>rajesh-engineering-console</span>
          </span>
        </div>

        <div className="flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>SYSTEM OPERATIONAL</span>
        </div>
      </div>

      {/* Grid Tab Switcher Bar — Clean 3-Column Layout */}
      <div className="grid grid-cols-3 gap-1.5 bg-slate-950/90 p-1.5 rounded-xl border border-slate-800 z-20 my-3">
        <button
          type="button"
          onClick={() => setActiveTab("stream")}
          className={`flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer select-none whitespace-nowrap ${
            activeTab === "stream"
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/40 font-bold border border-indigo-400/30"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
          }`}
        >
          <Activity className="w-3.5 h-3.5 shrink-0" />
          <span>Live Telematics</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("systems")}
          className={`flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer select-none whitespace-nowrap ${
            activeTab === "systems"
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/40 font-bold border border-indigo-400/30"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
          }`}
        >
          <Layers className="w-3.5 h-3.5 shrink-0" />
          <span>Enterprise Impact</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("stack")}
          className={`flex items-center justify-center space-x-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer select-none whitespace-nowrap ${
            activeTab === "stack"
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/40 font-bold border border-indigo-400/30"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
          }`}
        >
          <Code2 className="w-3.5 h-3.5 shrink-0" />
          <span>Tech Stack</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="relative min-h-[230px] z-20 flex flex-col justify-between pt-1">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: Live Telematics Stream Visual */}
          {activeTab === "stream" && (
            <motion.div
              key="stream"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="space-y-3.5"
            >
              {/* Telemetry Stat Cards */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-center space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-mono uppercase">Telemetry Packets</span>
                  <p className="text-base font-mono font-bold text-indigo-400">
                    {packetCount.toLocaleString()}
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-center space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-mono uppercase">Stream Latency</span>
                  <p className="text-base font-mono font-bold text-cyan-400">
                    {latency} <span className="text-xs text-slate-400 font-normal">ms</span>
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-center space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-mono uppercase">UI Rendering</span>
                  <p className="text-base font-mono font-bold text-emerald-400">
                    60 <span className="text-xs text-slate-400 font-normal">FPS</span>
                  </p>
                </div>
              </div>

              {/* WebSocket Telemetry Feed */}
              <div className="bg-slate-950/90 rounded-xl p-3 border border-slate-800 space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/80 pb-1.5">
                  <div className="flex items-center space-x-2">
                    <Radio className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                    <span className="text-slate-300 font-semibold">Active WebSocket Channel</span>
                  </div>
                  <span className="text-[10px] text-indigo-400">wss://telematics.live</span>
                </div>

                <div className="space-y-1 text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3 inline shrink-0" />
                      <span>Teltonika GPS Unit #502 Ping OK</span>
                    </span>
                    <span className="text-slate-500 text-[10px]">10ms</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-indigo-300 flex items-center space-x-1">
                      <Zap className="w-3 h-3 inline text-amber-400 shrink-0" />
                      <span>Omnicomm Fuel Sensor Stream (+20L)</span>
                    </span>
                    <span className="text-slate-500 text-[10px]">14ms</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 flex items-center space-x-1">
                      <Server className="w-3 h-3 inline shrink-0" />
                      <span>QR Student Roster Sync Completed</span>
                    </span>
                    <span className="text-slate-500 text-[10px]">8ms</span>
                  </div>
                </div>
              </div>

              {/* Stream Control Buttons */}
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setIsStreaming(!isStreaming)}
                  className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-medium hover:bg-indigo-600/30 transition-colors cursor-pointer select-none"
                >
                  {isStreaming ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Pause Telemetry</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Resume Telemetry</span>
                    </>
                  )}
                </button>

                <span className="text-[11px] text-slate-400 font-mono flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero Packet Loss</span>
                </span>
              </div>
            </motion.div>
          )}

          {/* TAB 2: Enterprise Systems & Impact — Perfect Grid Alignment */}
          {activeTab === "systems" && (
            <motion.div
              key="systems"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="space-y-2.5"
            >
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0 mt-0.5">
                  <Truck className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs font-bold text-white truncate">Vehicle Tracking System</h4>
                    <span className="text-[10px] font-mono text-indigo-400 font-bold shrink-0 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                      500+ GPS Units
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Real-time fleet telematics & Omnicomm fuel sensors (~15% fuel cost reduction).
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs font-bold text-white truncate">Student Tracking & Attender</h4>
                    <span className="text-[10px] font-mono text-cyan-400 font-bold shrink-0 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      15,000+ Users
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Real-time bus tracking with instant QR attendance (~30% error reduction).
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                  <Car className="w-4 h-4" />
                </div>
                <div className="space-y-0.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs font-bold text-white truncate">Cab & Route Optimization</h4>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold shrink-0 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      200+ Employees
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Corporate cab scheduling & route optimization across 5 corporate clients.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: Tech Stack */}
          {activeTab === "stack" && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="space-y-3"
            >
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl space-y-1">
                  <span className="text-[10px] text-indigo-400 font-semibold">CORE FRAMEWORKS</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10 text-[10px]">React.js 19</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10 text-[10px]">Next.js App Router</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10 text-[10px]">TypeScript</span>
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl space-y-1">
                  <span className="text-[10px] text-cyan-400 font-semibold">STATE & CACHING</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10 text-[10px]">Redux Toolkit</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10 text-[10px]">Zustand</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10 text-[10px]">TanStack Query</span>
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl space-y-1">
                  <span className="text-[10px] text-emerald-400 font-semibold">UI & ANIMATION</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10 text-[10px]">Tailwind CSS</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10 text-[10px]">Framer Motion</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10 text-[10px]">shadcn/ui</span>
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl space-y-1">
                  <span className="text-[10px] text-amber-400 font-semibold">APIS & TELEMETRY</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10 text-[10px]">WebSockets</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10 text-[10px]">REST APIs</span>
                    <span className="px-2 py-0.5 rounded bg-white/5 text-slate-200 border border-white/10 text-[10px]">Leaflet Maps</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Footer Bar */}
      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 z-20 mt-2">
        <span className="flex items-center space-x-1 text-slate-400">
          <span>Target Architecture:</span>
          <strong className="text-indigo-400">Scalable Modular Micro-Frontends</strong>
        </span>
        <span className="text-emerald-400 font-semibold">
          <ShinyText text="Fully Interactive" speed={2.5} />
        </span>
      </div>
    </div>
  );
};
