"use client";

import React from "react";
import { Users, Clock, CheckSquare, BarChart2 } from "lucide-react";

export const HrmDemo = () => {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-4 text-slate-900 text-xs space-y-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center space-x-2">
          <Users size={14} className="text-indigo-600" />
          <span className="font-bold text-slate-900">HRM & Timesheet Effort Allocation Tracker</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-bold">
          Zustand Grid State
        </span>
      </div>

      {/* Timesheet Effort Allocation Table Preview */}
      <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-2">
        <div className="flex justify-between text-[10px] text-slate-500 font-bold border-b border-slate-200 pb-1.5">
          <span>Project Code</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Total</span>
        </div>

        {[
          { code: "PRJ-TELEMATICS", hours: ["8h", "8h", "8h", "8h", "8h"], total: "40h", status: "Approved" },
          { code: "PRJ-COMPLIANCE", hours: ["4h", "4h", "2h", "4h", "4h"], total: "18h", status: "Approved" },
        ].map((row, i) => (
          <div key={i} className="flex justify-between text-[10px] items-center text-slate-700 font-medium">
            <span className="font-bold text-slate-900 font-mono">{row.code}</span>
            {row.hours.map((h, idx) => (
              <span key={idx} className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-600 shadow-2xs font-semibold">{h}</span>
            ))}
            <span className="font-bold text-indigo-700">{row.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
