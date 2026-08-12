"use client";

import React, { useState } from "react";
import { ShoppingBag, ExternalLink, Plus, Sparkles, MessageCircle } from "lucide-react";

export const CrackersShopDemo = () => {
  const [activeTab, setActiveTab] = useState<"storefront" | "admin">("storefront");
  const [cartCount, setCartCount] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { id: 1, name: "10 cm Electric Sparklers", category: "Sparklers", price: "₹120", originalPrice: "₹240", discount: "50% OFF" },
    { id: 2, name: "Special Ground Chakkars (10 Pcs)", category: "Chakkars", price: "₹180", originalPrice: "₹360", discount: "50% OFF" },
    { id: 3, name: "Deluxe Flower Pots (5 Pcs)", category: "Flower Pots", price: "₹290", originalPrice: "₹580", discount: "50% OFF" },
    { id: 4, name: "Grand Diwali Family Combo Box", category: "Combos", price: "₹2,499", originalPrice: "₹4,999", discount: "50% OFF" },
  ];

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-4 text-slate-900 text-xs space-y-4 shadow-xl">
      
      {/* Top Navigation & Live Link Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white shadow-sm">
            <Sparkles size={14} />
          </div>
          <div>
            <span className="font-extrabold text-slate-900 text-xs block">Sri Arumugam Pyro Park</span>
            <span className="text-[10px] text-slate-500 font-semibold">Full-Stack E-Commerce & Admin Portal</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Mode Switcher */}
          <div className="p-0.5 rounded-lg bg-slate-100 border border-slate-200 flex items-center">
            <button
              onClick={() => setActiveTab("storefront")}
              className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                activeTab === "storefront" ? "bg-white text-indigo-700 shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Shop Storefront
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`px-2.5 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                activeTab === "admin" ? "bg-white text-indigo-700 shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Admin Dashboard
            </button>
          </div>

          <a
            href="https://crackers-rho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold flex items-center space-x-1 transition-colors cursor-pointer shadow-xs"
          >
            <span>Live Site</span>
            <ExternalLink size={10} />
          </a>
        </div>
      </div>

      {/* Tab 1: Customer Shop Storefront */}
      {activeTab === "storefront" && (
        <div className="space-y-3">
          {/* Category Filter Pills & Cart Count Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
              {["All", "Sparklers", "Chakkars", "Flower Pots", "Combos"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-1 bg-amber-50 text-amber-800 px-2 py-1 rounded-lg border border-amber-200 font-bold shrink-0">
              <ShoppingBag size={12} className="text-amber-600" />
              <span>Cart ({cartCount})</span>
            </div>
          </div>

          {/* Interactive Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {products
              .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
              .map((prod) => (
                <div key={prod.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[9px] font-extrabold uppercase text-indigo-600 block">{prod.category}</span>
                      <h4 className="font-bold text-slate-900 text-xs">{prod.name}</h4>
                    </div>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-rose-50 text-rose-700 border border-rose-200">
                      {prod.discount}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-baseline space-x-1.5">
                      <span className="font-extrabold text-slate-900 text-sm">{prod.price}</span>
                      <span className="text-[10px] text-slate-400 line-through font-medium">{prod.originalPrice}</span>
                    </div>

                    <button
                      onClick={() => setCartCount(cartCount + 1)}
                      className="px-2 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] font-bold flex items-center space-x-1 cursor-pointer transition-colors"
                    >
                      <Plus size={10} />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* Checkout Banner */}
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-emerald-800 text-[10px] font-bold">
              <MessageCircle size={14} className="text-emerald-600" />
              <span>Direct WhatsApp Order Booking & Invoice Generator Enabled</span>
            </div>
            <span className="text-[10px] font-extrabold text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-200 shadow-2xs">
              Fast Delivery
            </span>
          </div>
        </div>
      )}

      {/* Tab 2: Admin Dashboard */}
      {activeTab === "admin" && (
        <div className="space-y-3">
          {/* Sales Metric Highlights */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-[9px] font-bold text-slate-500 uppercase block">Total Orders</span>
              <span className="text-base font-extrabold text-slate-900">482+</span>
            </div>
            <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-center">
              <span className="text-[9px] font-bold text-indigo-700 uppercase block">Revenue Generated</span>
              <span className="text-base font-extrabold text-indigo-700">₹4.2L</span>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-[9px] font-bold text-emerald-700 uppercase block">Active Products</span>
              <span className="text-base font-extrabold text-emerald-700">120+ SKU</span>
            </div>
          </div>

          {/* Admin Product Management Table */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-2.5 space-y-2">
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-600 border-b border-slate-200 pb-1.5">
              <span>Product SKU</span>
              <span>Stock Status</span>
              <span>Price</span>
              <span>Action</span>
            </div>

            {[
              { sku: "SPK-10CM", name: "10 cm Sparklers", stock: "In Stock (450)", price: "₹120" },
              { sku: "FPT-DLX", name: "Deluxe Flower Pots", stock: "In Stock (120)", price: "₹290" },
              { sku: "CMB-FAM", name: "Diwali Combo Box", stock: "Low Stock (12)", price: "₹2,499" },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center text-[10px] bg-white p-2 rounded-lg border border-slate-200 shadow-2xs">
                <div>
                  <span className="font-bold text-slate-900 block">{item.name}</span>
                  <span className="text-[9px] text-slate-500 font-mono">{item.sku}</span>
                </div>
                <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  {item.stock}
                </span>
                <span className="font-bold text-slate-900">{item.price}</span>
                <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 cursor-pointer">
                  Edit
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
