"use client";

import React, { useState } from "react";
import { Navigation, ShieldAlert, Fuel, Play, Pause, Activity } from "lucide-react";

export const VehicleTrackingDemo = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedVehicle, setSelectedVehicle] = useState("TN-38-AX-1024");

  const vehicles = [
    { id: "TN-38-AX-1024", driver: "Ramesh Kumar", speed: "54 km/h", status: "Moving", fuel: 78 },
    { id: "TN-38-BZ-4091", driver: "Senthil Nathan", speed: "0 km/h", status: "Idle", fuel: 42 },
  ];

  const activeV = vehicles.find((v) => v.id === selectedVehicle) || vehicles[0];

  return (
    <div className="rounded-2xl bg-[#080c14] border border-slate-800 p-3.5 text-slate-100 text-xs space-y-3 shadow-xl h-full flex flex-col justify-between">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold text-white text-xs">Telemetry Stream (500+ GPS Assets)</span>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-2 py-0.5 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 flex items-center space-x-1 font-mono text-[9px] font-bold cursor-pointer"
        >
          {isPlaying ? <Pause size={10} /> : <Play size={10} />}
          <span>{isPlaying ? "Live" : "Paused"}</span>
        </button>
      </div>

      {/* Main Interactive Fleet Grid */}
      <div className="space-y-2 flex-1 flex flex-col justify-between">
        {/* Mock Map Area */}
        <div className="h-28 rounded-xl bg-slate-900/90 border border-slate-800 relative overflow-hidden flex flex-col justify-between p-2.5 bg-grid-pattern">
          <div className="flex justify-between items-center text-[9px] font-mono">
            <span className="text-slate-400">Coimbatore Sector 4 Vector Map</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              Teltonika Active
            </span>
          </div>

          <div className="flex items-center justify-around py-1">
            {vehicles.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVehicle(v.id)}
                className={`px-2 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${
                  selectedVehicle === v.id
                    ? "bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {v.id} ({v.status})
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
            <span>Lat: 11.0168° N</span>
            <span className="text-indigo-400 font-semibold">Speed: {activeV.speed}</span>
          </div>
        </div>

        {/* Vehicle Telematics Panel */}
        <div className="bg-slate-900/90 rounded-xl p-2.5 border border-slate-800 flex items-center justify-between text-[11px] font-mono">
          <div className="space-y-0.5">
            <span className="text-[9px] text-slate-400 block">ACTIVE ASSET</span>
            <span className="font-bold text-white block">{activeV.id}</span>
            <span className="text-[10px] text-slate-300">Driver: {activeV.driver}</span>
          </div>

          <div className="text-right space-y-1">
            <div className="flex items-center space-x-1 text-cyan-400 font-bold">
              <Fuel size={12} />
              <span>Omnicomm Fuel: {activeV.fuel}%</span>
            </div>
            <div className="w-24 bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${activeV.fuel}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
