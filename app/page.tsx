"use client";

import { useState, useEffect } from "react";
import { Project } from "@/types/portfolio";
import { projectsData, experiencesData, notesData, awardsData } from "@/data/portfolioData";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import WorksSection from "@/components/WorksSection";
import AwardsSection from "@/components/AwardsSection";
import NotesSection from "@/components/NotesSection";
import ProjectModal from "@/components/ProjectModal";
import Footer from "@/components/Footer";
import ToastNotification from "@/components/ToastNotification";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Set default theme to light theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    document.documentElement.classList.remove("dark");
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("vexykrwn@gmail.com");
    setToastMessage("Copied email address: vexykrwn@gmail.com");
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Toast Notification */}
      <ToastNotification message={toastMessage} />

      {/* TopAppBar Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="max-w-container-max mx-auto px-gutter flex-1 w-full">
        {/* Hero Section */}
        <div className="animate-slide-up">
          <Hero onCopyEmail={copyEmail} />
        </div>

        <hr className="border-t border-outline-variant w-full" />

        {/* 01: Experience Section */}
        <div className="animate-slide-up delay-1">
          <ExperienceSection experiences={experiencesData} />
        </div>

        <hr className="border-t border-outline-variant w-full" />

        {/* 02: Selected Works Section */}
        <div className="animate-slide-up delay-2">
          <WorksSection projects={projectsData} onSelectProject={setSelectedProject} />
        </div>

        <hr className="border-t border-outline-variant w-full" />

        {/* 03: Awards & Recognition Section */}
        <div className="animate-slide-up delay-3">
          <AwardsSection awards={awardsData} />
        </div>

        <hr className="border-t border-outline-variant w-full" />

        {/* 04: Latest Notes Section */}
        <div className="animate-slide-up delay-4">
          <NotesSection notes={notesData} />
        </div>
      </main>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
