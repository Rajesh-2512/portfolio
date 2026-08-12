"use client";

import React, { useState } from "react";
import { QrCode, Bus, Bell, CheckCircle2 } from "lucide-react";

export const StudentTrackingDemo = () => {
  const [scanned, setScanned] = useState(true);

  return (
    <div className="rounded-2xl bg-[#080c14] border border-slate-800 p-3.5 text-slate-100 text-xs space-y-3 shadow-xl h-full flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
        <div className="flex items-center space-x-2">
          <Bus size={14} className="text-indigo-400" />
          <span className="font-bold text-white text-xs">15,000+ Student Tracking Engine</span>
        </div>
        <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          WebSocket Active
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 flex-1">
        <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 space-y-2 flex flex-col justify-between">
          <span className="text-[9px] font-mono font-bold text-indigo-400 uppercase block">Parent Bus Tracker</span>
          <div className="space-y-1">
            <span className="text-[10px] text-slate-300 block font-semibold">Bus Arriving in 4 mins (ETA)</span>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full rounded-full w-3/4 animate-pulse" />
            </div>
          </div>
          <div className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-mono font-bold flex items-center space-x-1">
            <Bell size={10} />
            <span>Parent SMS & Push Alert</span>
          </div>
        </div>

        <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 space-y-2 flex flex-col justify-between">
          <span className="text-[9px] font-mono font-bold text-cyan-400 uppercase block">Attender QR Roster</span>
          <button
            onClick={() => setScanned(!scanned)}
            className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-[9px] font-bold flex items-center justify-center space-x-1.5 cursor-pointer transition-colors"
          >
            <QrCode size={12} />
            <span>{scanned ? "QR Scanned OK" : "Scan Student QR"}</span>
          </button>
          <div className="text-[9px] font-mono text-slate-400 text-center">
            <span>Roster: <strong className="text-white">48/50 Boarded</strong></span>
          </div>
        </div>
      </div>

      <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono text-indigo-300 flex items-center justify-between">
        <span>Attendance Errors Reduced:</span>
        <strong className="text-emerald-400">~30% Error Reduction</strong>
      </div>
    </div>
  );
};
