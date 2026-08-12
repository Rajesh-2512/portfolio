"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Download, ArrowLeft, Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import jsPDF from "jspdf";
import { PERSONAL_INFO, EXPERIENCE_LIST, SKILL_GROUPS, PROJECTS } from "@/data/portfolioData";

export default function ResumePage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Filter out the crackers shop project from resume
  const resumeProjects = PROJECTS.filter((p) => p.id !== "crackers-ecommerce");

  const handleDownloadPDF = () => {
    setIsGenerating(true);
    setDownloadSuccess(false);

    try {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const primaryColor = "#4f46e5"; // Indigo-600
      const textColor = "#0f172a"; // Slate-900
      const subTextColor = "#475569"; // Slate-600

      let y = 18;

      // Header Name & Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(textColor);
      doc.text(PERSONAL_INFO.name, 15, y);

      y += 6;
      doc.setFontSize(10);
      doc.setTextColor(primaryColor);
      doc.text(PERSONAL_INFO.positioning, 15, y);

      // Contact Info Header Right Aligned
      doc.setFontSize(8);
      doc.setTextColor(subTextColor);
      doc.text(
        `${PERSONAL_INFO.location} | ${PERSONAL_INFO.email} | +91 ${PERSONAL_INFO.phone}`,
        195,
        y - 6,
        { align: "right" }
      );

      y += 6;
      doc.setDrawColor(226, 232, 240);
      doc.line(15, y, 195, y);
      y += 8;

      // Professional Summary Section
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(primaryColor);
      doc.text("PROFESSIONAL SUMMARY", 15, y);

      y += 5;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(textColor);
      const summaryText =
        "Frontend Engineer with 4+ years of experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, and modern frontend architecture. Experienced in real-time dashboards, GPS telemetry tracking, enterprise workflows, state management, API integration, and responsive UI systems.";
      const splitSummary = doc.splitTextToSize(summaryText, 180);
      doc.text(splitSummary, 15, y);
      y += splitSummary.length * 4.5 + 4;

      // Professional Experience Section
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(primaryColor);
      doc.text("PROFESSIONAL EXPERIENCE", 15, y);
      y += 6;

      EXPERIENCE_LIST.forEach((exp) => {
        if (y > 270) {
          doc.addPage();
          y = 15;
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(9.5);
        doc.setTextColor(textColor);
        doc.text(`${exp.role} - ${exp.company}`, 15, y);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor(subTextColor);
        doc.text(exp.period, 195, y, { align: "right" });

        y += 4.5;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(subTextColor);

        exp.highlights.forEach((item) => {
          const bulletText = `• ${item}`;
          const splitLines = doc.splitTextToSize(bulletText, 175);
          doc.text(splitLines, 18, y);
          y += splitLines.length * 4;
        });
        y += 3;
      });

      // Featured Enterprise Projects Section
      if (y > 240) {
        doc.addPage();
        y = 15;
      }

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(primaryColor);
      doc.text("FEATURED ENTERPRISE PROJECTS", 15, y);
      y += 6;

      resumeProjects.forEach((proj) => {
        if (y > 265) {
          doc.addPage();
          y = 15;
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(textColor);
        doc.text(proj.title, 15, y);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(7.5);
        doc.setTextColor(primaryColor);
        doc.text(proj.category, 195, y, { align: "right" });

        y += 4;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(subTextColor);
        const splitDesc = doc.splitTextToSize(proj.shortDesc, 180);
        doc.text(splitDesc, 15, y);
        y += splitDesc.length * 3.5;

        doc.setFont("helvetica", "bold");
        doc.setFontSize(7.5);
        doc.setTextColor("#047857"); // Emerald-700
        doc.text(`Impact: ${proj.keyImpact}`, 15, y);

        y += 6;
      });

      // Skills & Competencies Section
      if (y > 240) {
        doc.addPage();
        y = 15;
      }

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(primaryColor);
      doc.text("SKILLS & COMPETENCIES", 15, y);
      y += 6;

      SKILL_GROUPS.forEach((group) => {
        if (y > 275) {
          doc.addPage();
          y = 15;
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor(textColor);
        doc.text(`${group.title}:`, 15, y);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(subTextColor);
        const skillList = group.skills.map((s) => s.name).join(" · ");
        const splitSkills = doc.splitTextToSize(skillList, 130);
        doc.text(splitSkills, 65, y);
        y += Math.max(splitSkills.length * 4, 5);
      });

      // Education Section
      y += 4;
      if (y > 270) {
        doc.addPage();
        y = 15;
      }

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(primaryColor);
      doc.text("EDUCATION", 15, y);
      y += 5;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(textColor);
      doc.text(`${PERSONAL_INFO.education.degree} - ${PERSONAL_INFO.education.institution}`, 15, y);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(subTextColor);
      doc.text(`${PERSONAL_INFO.education.period} (CGPA: ${PERSONAL_INFO.education.cgpa})`, 205, y, { align: "right" });

      // Save PDF Directly
      doc.save("Rajesh_Kannan_A_Resume.pdf");
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (error) {
      console.error("Failed to generate native PDF with jsPDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-4 sm:p-8 font-sans">
      
      {/* Top Action Navigation Bar */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>

        {/* Native jsPDF Direct Download Button */}
        <button
          onClick={handleDownloadPDF}
          disabled={isGenerating}
          className="px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md flex items-center space-x-2 cursor-pointer transition-all disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <Loader2 size={16} className="animate-spin text-white" />
              <span>Generating PDF...</span>
            </>
          ) : downloadSuccess ? (
            <>
              <CheckCircle2 size={16} className="text-emerald-300" />
              <span>Saved PDF Resume!</span>
            </>
          ) : (
            <>
              <Download size={16} />
              <span>Download PDF Resume</span>
            </>
          )}
        </button>
      </div>

      {/* Main Resume Web Card */}
      <div className="max-w-4xl mx-auto bg-white border border-slate-200/90 rounded-2xl shadow-xl p-8 sm:p-12 space-y-8">
        
        {/* Header Section */}
        <div className="border-b border-slate-100 pb-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-bold text-indigo-600 mt-1">
                {PERSONAL_INFO.positioning}
              </p>
            </div>
            <div className="text-xs text-slate-600 font-semibold space-y-1">
              <p className="flex items-center space-x-1.5">
                <MapPin size={12} className="text-indigo-600" />
                <span>{PERSONAL_INFO.location}</span>
              </p>
              <p className="flex items-center space-x-1.5">
                <Mail size={12} className="text-indigo-600" />
                <span>{PERSONAL_INFO.email}</span>
              </p>
              <p className="flex items-center space-x-1.5">
                <Phone size={12} className="text-indigo-600" />
                <span>+91 {PERSONAL_INFO.phone}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-2">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">Professional Summary</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Frontend Engineer with 4+ years of experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, and modern frontend architecture. Experienced in real-time dashboards, GPS telemetry tracking, enterprise workflows, state management, API integration, and responsive UI systems.
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">Professional Experience</h2>
          <div className="space-y-6">
            {EXPERIENCE_LIST.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-extrabold text-slate-900">
                    {exp.role} <span className="font-semibold text-slate-500">at {exp.company}</span>
                  </h3>
                  <span className="text-xs text-slate-500 font-bold">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 font-medium">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Projects */}
        <div className="space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">Featured Enterprise Projects</h2>
          <div className="grid grid-cols-1 gap-4">
            {resumeProjects.map((proj) => (
              <div key={proj.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-extrabold text-slate-900">{proj.title}</h3>
                  <span className="text-[10px] text-indigo-600 font-bold">{proj.category}</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">{proj.shortDesc}</p>
                <p className="text-[11px] text-emerald-700 font-bold pt-0.5">Impact: {proj.keyImpact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Arsenal */}
        <div className="space-y-3">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">Skills & Competencies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {SKILL_GROUPS.map((group) => (
              <div key={group.id} className="space-y-1">
                <span className="font-extrabold text-slate-900 block text-[11px]">{group.title}</span>
                <p className="text-slate-600 font-medium">
                  {group.skills.map((s) => s.name).join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-2 border-t border-slate-100 pt-4">
          <h2 className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">Education</h2>
          <div className="flex justify-between items-center text-xs">
            <div>
              <span className="font-extrabold text-slate-900">{PERSONAL_INFO.education.degree}</span>
              <span className="text-slate-600 font-semibold block">{PERSONAL_INFO.education.institution}</span>
            </div>
            <span className="text-slate-600 font-bold">{PERSONAL_INFO.education.period} (CGPA: {PERSONAL_INFO.education.cgpa})</span>
          </div>
        </div>

      </div>
    </div>
  );
}
