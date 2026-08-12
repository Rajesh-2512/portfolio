"use client";

import React, { useState } from "react";
import { ShoppingBag, ExternalLink, Plus, Sparkles, MessageCircle } from "lucide-react";

export const CrackersShopDemo = () => {
  const [activeTab, setActiveTab] = useState<"storefront" | "admin">("storefront");
  const [cartCount, setCartCount] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { id: 1, name: "10 cm Electric Sparklers", category: "Sparklers", price: "₹120", originalPrice: "₹240", discount: "50% OFF" },
    { id: 2, name: "Ground Chakkars (10 Pcs)", category: "Chakkars", price: "₹180", originalPrice: "₹360", discount: "50% OFF" },
    { id: 3, name: "Deluxe Flower Pots (5 Pcs)", category: "Flower Pots", price: "₹290", originalPrice: "₹580", discount: "50% OFF" },
    { id: 4, name: "Diwali Family Combo Box", category: "Combos", price: "₹2,499", originalPrice: "₹4,999", discount: "50% OFF" },
  ];

  return (
    <div className="rounded-2xl bg-[#080c14] border border-slate-800 p-3.5 text-slate-100 text-xs space-y-3 shadow-xl h-full flex flex-col justify-between">
      
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
        <div className="flex items-center space-x-2">
          <div className="p-1 rounded-lg bg-gradient-to-tr from-amber-500 to-rose-500 text-white shadow-sm">
            <Sparkles size={12} />
          </div>
          <div>
            <span className="font-extrabold text-white text-xs block leading-none">Sri Arumugam Pyro Park</span>
            <span className="text-[9px] text-slate-400 font-mono">E-Commerce & Admin Portal</span>
          </div>
        </div>

        <div className="flex items-center space-x-1.5">
          {/* Mode Switcher */}
          <div className="p-0.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center">
            <button
              onClick={() => setActiveTab("storefront")}
              className={`px-2 py-0.5 rounded text-[9px] font-bold transition-all cursor-pointer ${
                activeTab === "storefront" ? "bg-indigo-600 text-white shadow-xs" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Storefront
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`px-2 py-0.5 rounded text-[9px] font-bold transition-all cursor-pointer ${
                activeTab === "admin" ? "bg-indigo-600 text-white shadow-xs" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Admin
            </button>
          </div>

          <a
            href="https://crackers-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-[9px] font-bold flex items-center space-x-1 hover:bg-emerald-600/30 transition-colors"
          >
            <span>Live Site</span>
            <ExternalLink size={9} />
          </a>
        </div>
      </div>

      {/* Tab 1: Customer Shop Storefront */}
      {activeTab === "storefront" && (
        <div className="space-y-2.5 flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center space-x-1 overflow-x-auto">
              {["All", "Sparklers", "Chakkars", "Combos"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2 py-0.5 rounded-full text-[9px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-1 bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded-lg border border-amber-500/20 font-bold shrink-0 text-[10px]">
              <ShoppingBag size={10} className="text-amber-400" />
              <span>Cart ({cartCount})</span>
            </div>
          </div>

          {/* Interactive Products Grid */}
          <div className="grid grid-cols-2 gap-2">
            {products
              .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
              .slice(0, 2)
              .map((prod) => (
                <div key={prod.id} className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="text-[8px] font-extrabold uppercase text-indigo-400 block">{prod.category}</span>
                    <span className="px-1 py-0.5 rounded text-[8px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      {prod.discount}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-[11px] truncate">{prod.name}</h4>

                  <div className="flex items-center justify-between pt-0.5">
                    <span className="font-extrabold text-slate-100 text-xs">{prod.price}</span>
                    <button
                      onClick={() => setCartCount(cartCount + 1)}
                      className="px-1.5 py-0.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[9px] font-bold flex items-center space-x-0.5 cursor-pointer"
                    >
                      <Plus size={9} />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-1.5 text-emerald-400 text-[10px] font-medium truncate">
              <MessageCircle size={12} className="text-emerald-400 shrink-0" />
              <span className="truncate">WhatsApp Order Booking & Invoice Generator</span>
            </div>
            <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded border border-emerald-500/30 shrink-0">
              Enabled
            </span>
          </div>
        </div>
      )}

      {/* Tab 2: Admin Dashboard */}
      {activeTab === "admin" && (
        <div className="space-y-2 flex-1 flex flex-col justify-between">
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <span className="text-[8px] font-mono text-slate-400 uppercase block">Orders</span>
              <span className="text-xs font-mono font-extrabold text-white">482+</span>
            </div>
            <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-center">
              <span className="text-[8px] font-mono text-indigo-400 uppercase block">Revenue</span>
              <span className="text-xs font-mono font-extrabold text-indigo-300">₹4.2L</span>
            </div>
            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
              <span className="text-[8px] font-mono text-emerald-400 uppercase block">Products</span>
              <span className="text-xs font-mono font-extrabold text-emerald-300">120+ SKU</span>
            </div>
          </div>

          <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-2 space-y-1 font-mono text-[10px]">
            <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-1 text-[9px]">
              <span>SKU</span>
              <span>Stock Status</span>
              <span>Price</span>
            </div>
            {[
              { sku: "SPK-10CM", stock: "In Stock (450)", price: "₹120" },
              { sku: "FPT-DLX", stock: "In Stock (120)", price: "₹290" },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center text-[10px] text-slate-200 py-0.5">
                <span>{item.sku}</span>
                <span className="text-[9px] text-emerald-400 font-bold">{item.stock}</span>
                <span className="font-bold text-white">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
