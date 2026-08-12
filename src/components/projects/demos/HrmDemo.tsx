"use client";

import React from "react";
import { Users, Clock, CheckCircle2 } from "lucide-react";

export const HrmDemo = () => {
  return (
    <div className="rounded-2xl bg-[#080c14] border border-slate-800 p-3.5 text-slate-100 text-xs space-y-3 shadow-xl h-full flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
        <div className="flex items-center space-x-2">
          <Users size={14} className="text-indigo-400" />
          <span className="font-bold text-white text-xs">HRM & Timesheet Effort Matrix</span>
        </div>
        <span className="text-[9px] font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
          Zustand Grid State
        </span>
      </div>

      <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 space-y-2 font-mono text-[10px] flex-1">
        <div className="grid grid-cols-6 gap-1 text-[8px] font-bold text-slate-400 border-b border-slate-800 pb-1 text-center">
          <span className="col-span-2 text-left">Project</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Total</span>
        </div>

        {[
          { code: "PRJ-TELEMATICS", mon: "8h", tue: "8h", wed: "8h", total: "40h" },
          { code: "PRJ-COMPLIANCE", mon: "4h", tue: "4h", wed: "2h", total: "18h" },
        ].map((row, idx) => (
          <div key={idx} className="grid grid-cols-6 gap-1 text-[9px] text-slate-200 text-center py-0.5 items-center">
            <span className="col-span-2 text-left font-bold text-indigo-300 truncate">{row.code}</span>
            <span>{row.mon}</span>
            <span>{row.tue}</span>
            <span>{row.wed}</span>
            <span className="font-bold text-emerald-400">{row.total}</span>
          </div>
        ))}
      </div>

      <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono text-indigo-300 flex items-center justify-between">
        <span>Timesheet Accuracy:</span>
        <strong className="text-emerald-400">100% Billing Accuracy</strong>
      </div>
    </div>
  );
};
