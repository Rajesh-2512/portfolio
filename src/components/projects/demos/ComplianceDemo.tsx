"use client";

import React from "react";
import { ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";

export const ComplianceDemo = () => {
  return (
    <div className="rounded-2xl bg-[#080c14] border border-slate-800 p-3.5 text-slate-100 text-xs space-y-3 shadow-xl h-full flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
        <div className="flex items-center space-x-2">
          <ShieldCheck size={14} className="text-emerald-400" />
          <span className="font-bold text-white text-xs">Configurable Compliance Engine</span>
        </div>
        <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          100% Audit-Ready
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 flex-1">
        <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 space-y-1.5 flex flex-col justify-between">
          <span className="text-[9px] font-mono font-bold text-indigo-400 uppercase block">JSON Schema Builder</span>
          <div className="space-y-1 font-mono text-[9px] text-slate-300">
            <div>Form Rule: <strong className="text-white">Document Expiry Validation</strong></div>
            <div className="text-emerald-400">Workflow: notify(manager)</div>
          </div>
        </div>

        <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 text-center flex flex-col justify-between">
          <span className="text-[9px] font-mono text-slate-400 uppercase block">Compliance Score</span>
          <span className="text-2xl font-mono font-extrabold text-emerald-400">98.4%</span>
          <span className="text-[9px] font-mono text-emerald-300 flex items-center justify-center space-x-1">
            <CheckCircle2 size={10} />
            <span>Audit Trail Verified</span>
          </span>
        </div>
      </div>

      <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-300 flex items-center justify-between">
        <span>Dynamic Form Engine:</span>
        <strong className="text-white">React Hook Form + Zod</strong>
      </div>
    </div>
  );
};
