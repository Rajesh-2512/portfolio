"use client";

import React from "react";
import { Car, Navigation, Layers, ShieldCheck } from "lucide-react";

export const CabRouteDemo = () => {
  return (
    <div className="rounded-2xl bg-[#080c14] border border-slate-800 p-3.5 text-slate-100 text-xs space-y-3 shadow-xl h-full flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
        <div className="flex items-center space-x-2">
          <Car size={14} className="text-indigo-400" />
          <span className="font-bold text-white text-xs">Enterprise Cab Allocation Pipeline</span>
        </div>
        <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          ~20% Utilization Boost
        </span>
      </div>

      <div className="grid grid-cols-4 gap-1.5 text-center font-mono text-[9px]">
        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
          <span className="text-slate-400 block font-bold">Step 01</span>
          <span className="text-white block font-semibold">Shift Roster</span>
          <span className="text-slate-500 text-[8px]">200+ Uploads</span>
        </div>
        <div className="p-2 rounded-lg bg-indigo-600/30 border border-indigo-500/40 space-y-1 text-indigo-300">
          <span className="font-bold block">Step 02</span>
          <span className="font-bold block text-white">Route Clustering</span>
          <span className="text-[8px]">Multi-stop</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
          <span className="text-slate-400 block font-bold">Step 03</span>
          <span className="text-white block font-semibold">Cab Alloc</span>
          <span className="text-slate-500 text-[8px]">Seating Match</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
          <span className="text-slate-400 block font-bold">Step 04</span>
          <span className="text-white block font-semibold">Driver App</span>
          <span className="text-slate-500 text-[8px]">Live Turn ETA</span>
        </div>
      </div>

      <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 space-y-1 text-[10px] font-mono">
        <div className="flex items-center justify-between text-indigo-400 font-bold">
          <span>Route Clustering Engine</span>
          <span className="text-emerald-400">-24 mins / cab</span>
        </div>
        <p className="text-[10px] text-slate-300">
          Groups employee pickup coordinates by proximity, reducing overall route duration.
        </p>
      </div>
    </div>
  );
};
