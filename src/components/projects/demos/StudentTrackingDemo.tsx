"use client";

import React, { useState } from "react";
import { QrCode, CheckCircle, Clock, Bus, Bell, ShieldCheck } from "lucide-react";

export const StudentTrackingDemo = () => {
  const [scanned, setScanned] = useState(true);

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-4 text-slate-900 text-xs space-y-4 shadow-xl">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded bg-indigo-50 text-indigo-600 border border-indigo-100">
            <Bus size={14} />
          </div>
          <span className="font-bold text-slate-900">15,000+ Student Transport & QR Attendance Engine</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
          WebSocket Active
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        
        {/* Left: Parent Mobile Mock Screen */}
        <div className="md:col-span-5 max-w-xs mx-auto w-full rounded-2xl bg-slate-50 border-2 border-slate-200 p-3 space-y-3 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-bold text-indigo-600 text-[11px]">Parent Bus Tracker</span>
            <span className="text-[9px] text-slate-500 font-semibold">Route #4B · Morning Pickup</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-slate-500 font-medium">Bus Location (ETA)</span>
              <span className="font-bold text-emerald-600">Arriving in 4 mins</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full w-[80%]" />
            </div>
          </div>

          {/* Student QR Status Box */}
          <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-2xs">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100">
                <QrCode size={16} />
              </div>
              <div>
                <span className="font-bold text-slate-900 block text-[11px]">Aditya K.</span>
                <span className="text-[9px] text-slate-500 font-medium">ID: ST-89240</span>
              </div>
            </div>
            <button
              onClick={() => setScanned(!scanned)}
              className={`px-2 py-1 rounded text-[10px] font-semibold transition-all cursor-pointer ${
                scanned ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200"
              }`}
            >
              {scanned ? "Boarded (07:42 AM)" : "Pending Scan"}
            </button>
          </div>

          <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-200/80 text-[10px] text-indigo-700 font-semibold flex items-center space-x-1.5">
            <Bell size={12} className="shrink-0 text-indigo-600" />
            <span>Instant Parent SMS & Push Notification Sent</span>
          </div>
        </div>

        {/* Right: Admin Fleet Transport Roster */}
        <div className="md:col-span-7 rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-bold text-slate-900 text-[11px]">School Admin Fleet Roster</span>
            <span className="text-[10px] text-slate-500 font-semibold">30% Manual Error Reduction</span>
          </div>

          <div className="space-y-2">
            {[
              { route: "Route 04 - Peelamedu", bus: "Bus 12", count: "48 / 50 Students Boarded", status: "On Schedule" },
              { route: "Route 08 - Saravanampatti", bus: "Bus 07", count: "42 / 42 Students Boarded", status: "Completed" },
              { route: "Route 12 - RS Puram", bus: "Bus 19", count: "35 / 40 Students Boarded", status: "En Route" },
            ].map((r, i) => (
              <div key={i} className="p-2 rounded-lg bg-white border border-slate-200 flex justify-between items-center text-[10px] shadow-2xs">
                <div>
                  <span className="font-bold text-slate-900 block">{r.route} ({r.bus})</span>
                  <span className="text-slate-500 font-medium">{r.count}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200/60 font-semibold">{r.status}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
