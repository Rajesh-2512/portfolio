"use client";

import React, { useState } from "react";
import { ShieldCheck, FileCheck, AlertTriangle, Clock, CheckCircle2 } from "lucide-react";

export const ComplianceDemo = () => {
  const [formFieldType, setFormFieldType] = useState("dynamic-select");

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-4 text-slate-900 text-xs space-y-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center space-x-2">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span className="font-bold text-slate-900">Configurable Compliance & Dynamic Form Engine</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
          100% Audit-Ready
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Left: Dynamic Form Field Simulator */}
        <div className="md:col-span-7 rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-slate-900 text-[11px]">JSON Form Schema Builder</span>
            <span className="text-[9px] text-slate-500 font-semibold">React Hook Form + Zod</span>
          </div>

          <div className="space-y-2">
            <div className="p-2 rounded bg-white border border-slate-200 flex justify-between items-center text-[10px] shadow-2xs">
              <span className="text-slate-700 font-medium">Form Rule: Document Expiry Validation</span>
              <span className="text-indigo-600 font-mono font-bold">Zod.date().min(now)</span>
            </div>
            <div className="p-2 rounded bg-white border border-slate-200 flex justify-between items-center text-[10px] shadow-2xs">
              <span className="text-slate-700 font-medium">Conditional Workflow: Escalation Trigger</span>
              <span className="text-amber-600 font-mono font-bold">if (days &lt; 7) notify(manager)</span>
            </div>
          </div>
        </div>

        {/* Right: Compliance Score Health Widget */}
        <div className="md:col-span-5 rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-2 text-center flex flex-col justify-between">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Enterprise Compliance Score</span>
          <div className="my-1">
            <span className="text-3xl font-extrabold text-emerald-600">98.4%</span>
            <span className="text-[10px] text-slate-500 font-medium block mt-0.5">0 Non-compliance breaches</span>
          </div>
          <div className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-semibold flex items-center justify-center space-x-1">
            <CheckCircle2 size={12} className="text-emerald-600" />
            <span>Audit Trail Logs Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};
