"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  LayoutGrid, 
  ShoppingBag, 
  Truck, 
  GraduationCap, 
  Car, 
  ShieldCheck
} from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";
import { Project } from "@/types/portfolio";
import { CaseStudyModal } from "./CaseStudyModal";
import { VehicleTrackingDemo } from "./demos/VehicleTrackingDemo";
import { StudentTrackingDemo } from "./demos/StudentTrackingDemo";
import { CabRouteDemo } from "./demos/CabRouteDemo";
import { ComplianceDemo } from "./demos/ComplianceDemo";
import { HrmDemo } from "./demos/HrmDemo";
import { CrackersShopDemo } from "./demos/CrackersShopDemo";
import { BorderBeam } from "@/registry/magicui/border-beam";

const CATEGORIES = [
  { id: "all", label: "All Systems", icon: LayoutGrid },
  { id: "ecommerce", label: "E-Commerce & Admin", icon: ShoppingBag },
  { id: "telematics", label: "Fleet Telematics", icon: Truck },
  { id: "safety", label: "Student Mobility", icon: GraduationCap },
  { id: "transport", label: "Corporate Logistics", icon: Car },
  { id: "enterprise", label: "Enterprise Workflows", icon: ShieldCheck },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "ecommerce") return project.id === "crackers-ecommerce";
    if (activeCategory === "telematics") return project.id === "vehicle-tracking";
    if (activeCategory === "safety") return project.id === "student-tracking";
    if (activeCategory === "transport") return project.id === "cab-route-assignment";
    if (activeCategory === "enterprise") return project.id === "compliance-management" || project.id === "hrm-timesheet";
    return true;
  });

  return (
    <section id="projects" className="relative overflow-hidden bg-[#070a12] py-24 sm:py-32 border-b border-white/[0.08]">
      {/* Background Gradients & Mesh */}
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.05)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
            <Sparkles size={14} className="text-indigo-400" />
            <span>Featured Portfolio Systems</span>
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Production Systems & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-400">
              Real-World Applications
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
            Production web platforms engineered with React.js, Next.js, and TypeScript — transforming complex operational requirements into intuitive UI architectures.
          </p>
        </motion.header>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer select-none ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/30 font-bold"
                    : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
                }`}
              >
                <Icon size={14} className={isActive ? "text-white" : "text-slate-400"} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Perfectly Aligned 3-Column Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectBentoCard
                key={project.id}
                project={project}
                index={index}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

function ProjectBentoCard({ 
  project, 
  index, 
  onOpen 
}: { 
  project: Project; 
  index: number; 
  onOpen: () => void 
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group relative flex flex-col justify-between h-full overflow-hidden rounded-3xl border border-white/[0.1] bg-[#0c101a] p-5 sm:p-6 shadow-2xl transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#0f1422]"
    >
      <BorderBeam duration={8} size={100} colorFrom="#6366f1" colorTo="#38bdf8" />

      {/* Top Header & Title Block (Fixed Height Structure) */}
      <div className="space-y-3 z-10">
        <div className="flex items-center justify-between gap-2 h-7">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 truncate">
            {project.category}
          </span>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 hover:bg-emerald-500/20 transition-colors shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE DEMO</span>
              <ExternalLink size={10} className="ml-0.5" />
            </a>
          )}
        </div>

        <div className="min-h-[72px] space-y-1.5 flex flex-col justify-start">
          <h3 className="text-lg font-extrabold text-white tracking-tight group-hover:text-indigo-300 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs text-slate-300/90 leading-relaxed font-normal line-clamp-2">
            {project.shortDesc}
          </p>
        </div>
      </div>

      {/* Interactive Demo Visual Area (Fixed Height Container) */}
      <div className="relative my-4 h-48 sm:h-52 w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-black/30 z-10 shrink-0">
        {renderProjectDemo(project.id)}
      </div>

      {/* Footer Area: Tech Tags & Impact + CTA (Baseline Aligned) */}
      <div className="space-y-3 pt-2 border-t border-white/[0.08] z-10 mt-auto">
        {/* Tech Stack List */}
        <div className="flex flex-wrap gap-1.5 h-7 overflow-hidden items-center">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impact Badge & Case Study CTA */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <div className="flex items-center space-x-1.5 text-[11px] font-semibold text-emerald-400 min-w-0 flex-1">
            <CheckCircle2 size={13} className="shrink-0 text-emerald-400" />
            <span className="truncate">{project.keyImpact}</span>
          </div>

          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all shrink-0 cursor-pointer"
          >
            <span>Case Study</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function renderProjectDemo(projectId: string) {
  switch (projectId) {
    case "crackers-ecommerce":
      return <CrackersShopDemo />;
    case "vehicle-tracking":
      return <VehicleTrackingDemo />;
    case "student-tracking":
      return <StudentTrackingDemo />;
    case "cab-route-assignment":
      return <CabRouteDemo />;
    case "compliance-management":
      return <ComplianceDemo />;
    case "hrm-timesheet":
      return <HrmDemo />;
    default:
      return null;
  }
}
