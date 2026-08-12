"use client";

import React, { useState } from "react";
import { Users, Calendar, MapPin, Car, Navigation, ShieldCheck, ArrowRight } from "lucide-react";

export const CabRouteDemo = () => {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    { id: 1, title: "Shift Roster Upload", desc: "200+ Employee Pickups" },
    { id: 2, title: "Route Clustering", desc: "Multi-stop Optimization" },
    { id: 3, title: "Cab Allocation", desc: "Seating Capacity Match" },
    { id: 4, title: "Driver App Navigation", desc: "Live Turn-by-Turn ETA" },
  ];

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-4 text-slate-900 text-xs space-y-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center space-x-2">
          <Car size={14} className="text-indigo-600" />
          <span className="font-bold text-slate-900">Enterprise Transport & Cab Allocation Pipeline</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 text-[10px] font-bold">
          ~20% Utilization Boost
        </span>
      </div>

      {/* Interactive Step Pipeline */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
              activeStep === step.id
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
          >
            <span className={`text-[10px] font-mono block font-bold ${activeStep === step.id ? "text-indigo-100" : "text-indigo-600"}`}>Step 0{step.id}</span>
            <span className="font-bold block text-[11px]">{step.title}</span>
            <span className={`text-[9px] ${activeStep === step.id ? "text-indigo-100" : "text-slate-500"}`}>{step.desc}</span>
          </button>
        ))}
      </div>

      {/* Pipeline Preview Pane */}
      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
        {activeStep === 1 && (
          <div className="space-y-1">
            <span className="font-bold text-indigo-600">Roster Ingestion Matrix:</span>
            <p className="text-slate-600">Imports 200+ employee shift locations across 5 corporate clients & 1 major MNC.</p>
          </div>
        )}
        {activeStep === 2 && (
          <div className="space-y-1">
            <span className="font-bold text-indigo-600">Route Clustering Engine:</span>
            <p className="text-slate-600">Groups pickup coordinates by proximity, reducing route duration by 24 minutes per cab.</p>
          </div>
        )}
        {activeStep === 3 && (
          <div className="space-y-1">
            <span className="font-bold text-indigo-600">Cab Capacity Allocator:</span>
            <p className="text-slate-600">Automatically matches 4-seater and 7-seater vehicles to optimize passenger density.</p>
          </div>
        )}
        {activeStep === 4 && (
          <div className="space-y-1">
            <span className="font-bold text-indigo-600">Driver Mobile App Dispatch:</span>
            <p className="text-slate-600">Dispatches real-time turn-by-turn routes with automated OTP verification at each stop.</p>
          </div>
        )}
      </div>
    </div>
  );
};
