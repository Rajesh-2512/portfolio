"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";
import { Project } from "@/types/portfolio";
import { CaseStudyModal } from "./CaseStudyModal";
import { VehicleTrackingDemo } from "./demos/VehicleTrackingDemo";
import { StudentTrackingDemo } from "./demos/StudentTrackingDemo";
import { CabRouteDemo } from "./demos/CabRouteDemo";
import { ComplianceDemo } from "./demos/ComplianceDemo";
import { HrmDemo } from "./demos/HrmDemo";
import { CrackersShopDemo } from "./demos/CrackersShopDemo";

const themes = [
  { accent: "#67e8f9", glow: "rgba(34, 211, 238, 0.16)" },
  { accent: "#c4b5fd", glow: "rgba(139, 92, 246, 0.18)" },
  { accent: "#f9a8d4", glow: "rgba(236, 72, 153, 0.16)" },
  { accent: "#86efac", glow: "rgba(34, 197, 94, 0.16)" },
  { accent: "#fcd34d", glow: "rgba(245, 158, 11, 0.16)" },
  { accent: "#93c5fd", glow: "rgba(59, 130, 246, 0.16)" },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden bg-[#080b13] py-24 sm:py-32">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(148,163,184,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.05)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center lg:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-200/5 px-3 py-1 text-[10px] font-black uppercase tracking-[.2em] text-cyan-200">
            <Sparkles size={13} /> Selected systems
          </span>
          <h2 className="text-4xl font-black tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
            Built for the <span className="text-slate-500">messy real world.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-400">
            Production systems that turn complex operational workflows into intuitive product experiences.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>

      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const theme = themes[index % themes.length];
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: Math.min(index, 2) * 0.08 }}
      className="group relative flex min-w-0 flex-col overflow-hidden rounded-[1.6rem] border border-white/[0.09] bg-[#111722] p-4 shadow-xl shadow-black/25 transition-colors hover:border-white/20 sm:p-5"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100" style={{ background: theme.glow }} />
      <div className="relative mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[.18em]" style={{ color: theme.accent }}>0{index + 1} / {project.category}</p>
          <h3 className="mt-2 text-xl font-black leading-tight tracking-[-0.035em] text-white">{project.title}</h3>
        </div>
        <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: theme.accent, boxShadow: `0 0 16px ${theme.accent}` }} />
      </div>

      <div className="relative min-h-[220px] overflow-hidden rounded-xl border border-white/[0.08] bg-black/20">
        {renderProjectDemo(project.id)}
      </div>

      <p className="relative mt-4 text-sm leading-5 text-slate-400">{project.shortDesc}</p>
      <div className="relative mt-4 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 3).map((tech) => <span key={tech} className="rounded-full border border-white/[0.09] bg-black/20 px-2 py-1 text-[10px] font-medium text-slate-300">{tech}</span>)}
      </div>
      <div className="relative mt-5 flex items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
        <span className="text-[11px] font-semibold leading-4 text-slate-300">{project.keyImpact}</span>
        <button type="button" onClick={onOpen} aria-label={`View ${project.title} case study`} className="shrink-0 rounded-xl p-2 text-[#091019] transition-transform hover:-translate-y-0.5" style={{ backgroundColor: theme.accent }}>
          <ArrowUpRight size={16} />
        </button>
      </div>
    </motion.article>
  );
}

function renderProjectDemo(id: string) {
  switch (id) {
    case "crackers-ecommerce": return <CrackersShopDemo />;
    case "vehicle-tracking": return <VehicleTrackingDemo />;
    case "student-tracking": return <StudentTrackingDemo />;
    case "cab-route-assignment": return <CabRouteDemo />;
    case "compliance-management": return <ComplianceDemo />;
    case "hrm-timesheet": return <HrmDemo />;
    default: return null;
  }
}
