"use client";

import React, { useState } from "react";
import { Navigation, ShieldAlert, Fuel, Play, Pause, Activity } from "lucide-react";

export const VehicleTrackingDemo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedVehicle, setSelectedVehicle] = useState("TN-38-AX-1024");

  const vehicles = [
    { id: "TN-38-AX-1024", driver: "Ramesh Kumar", speed: "54 km/h", status: "Moving", fuel: 78, alert: null },
    { id: "TN-38-BZ-4091", driver: "Senthil Nathan", speed: "0 km/h", status: "Idle", fuel: 42, alert: "Refueling event (+15L)" },
    { id: "TN-37-CK-9902", driver: "Anand Raj", speed: "68 km/h", status: "Moving", fuel: 18, alert: "Fuel drain anomaly detected!" },
  ];

  const activeV = vehicles.find((v) => v.id === selectedVehicle) || vehicles[0];

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-4 text-slate-900 text-xs space-y-4 shadow-xl">
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-bold text-slate-900">Telemetry Stream (500+ GPS Assets)</span>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-2.5 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 flex items-center space-x-1 font-bold cursor-pointer transition-colors"
        >
          {isPlaying ? <Pause size={12} /> : <Play size={12} />}
          <span>{isPlaying ? "Live Stream" : "Paused"}</span>
        </button>
      </div>

      {/* Main Interactive Fleet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        
        {/* Mock Map Area */}
        <div className="md:col-span-8 h-48 rounded-xl bg-slate-50 border border-slate-200 relative overflow-hidden flex flex-col justify-between p-3 bg-grid-pattern">
          <div className="flex justify-between items-start">
            <span className="px-2 py-1 rounded bg-white text-[10px] text-slate-700 font-mono shadow-xs border border-slate-200">
              GPS Vector Map · Coimbatore Sector 4
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
              Teltonika FMB920 Active
            </span>
          </div>

          {/* Animated Map Marker */}
          <div className="relative my-auto flex items-center justify-center space-x-12">
            {vehicles.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVehicle(v.id)}
                className={`p-2 rounded-xl transition-all flex flex-col items-center cursor-pointer ${
                  selectedVehicle === v.id
                    ? "bg-indigo-600 text-white scale-110 ring-4 ring-indigo-500/20 shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-100 shadow-xs border border-slate-200"
                }`}
              >
                <Navigation size={14} className={v.status === "Moving" ? "animate-bounce" : ""} />
                <span className="text-[9px] font-mono mt-1 font-bold">{v.id.split("-")[2]}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 font-semibold">
            <span>Lat: 11.0168° N, Long: 76.9558° E</span>
            <span>Update Rate: 2.4s</span>
          </div>
        </div>

        {/* Selected Asset Details */}
        <div className="md:col-span-4 rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-slate-900">{activeV.id}</span>
              <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${
                activeV.status === "Moving" ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-amber-50 text-amber-700 border-amber-200"
              }`}>
                {activeV.status}
              </span>
            </div>
            <p className="text-[11px] text-slate-600 font-semibold">Driver: {activeV.driver}</p>
          </div>

          {/* Fuel Level Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="text-slate-600 flex items-center space-x-1 font-semibold">
                <Fuel size={12} className="text-indigo-600" />
                <span>Omnicomm Fuel Level</span>
              </span>
              <span className="font-bold text-indigo-700">{activeV.fuel}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full transition-all duration-500"
                style={{ width: `${activeV.fuel}%` }}
              />
            </div>
          </div>

          {/* Alert Highlight */}
          {activeV.alert ? (
            <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-[10px] font-bold flex items-center space-x-1.5">
              <ShieldAlert size={14} className="shrink-0 text-rose-600" />
              <span>{activeV.alert}</span>
            </div>
          ) : (
            <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-[10px] flex items-center space-x-1.5 font-medium shadow-2xs">
              <Activity size={14} className="text-emerald-500 shrink-0" />
              <span>Normal fuel consumption telemetry</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
