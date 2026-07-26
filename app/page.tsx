"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
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

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <Hero onCopyEmail={copyEmail} />
        </motion.div>

        <hr className="border-t border-outline-variant w-full" />

        {/* 01: Experience Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <ExperienceSection experiences={experiencesData} />
        </motion.div>

        <hr className="border-t border-outline-variant w-full" />

        {/* 02: Selected Works Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <WorksSection projects={projectsData} onSelectProject={setSelectedProject} />
        </motion.div>

        <hr className="border-t border-outline-variant w-full" />

        {/* 03: Awards & Recognition Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <AwardsSection awards={awardsData} />
        </motion.div>

        <hr className="border-t border-outline-variant w-full" />

        {/* 04: Latest Notes Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
        >
          <NotesSection notes={notesData} />
        </motion.div>

        {/* 05: Developer Guestbook Teaser Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionVariants}
          className="py-20 border-t border-outline-variant"
        >
          <div className="border border-outline-variant rounded-DEFAULT p-8 md:p-12 bg-surface flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="font-label-mono text-secondary text-xs block">
                PUBLIC WALL // 05
              </span>
              <h2 className="font-headline-lg text-primary text-2xl md:text-3xl">
                Developer Guestbook
              </h2>
              <p className="font-body text-sm text-on-surface-variant max-w-xl">
                Want to leave a note, reaction, or hello? Sign the public signature wall on our dedicated Guestbook page!
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="shrink-0">
              <Link
                href="/guestbook"
                className="px-6 py-3.5 bg-primary text-on-primary font-label-mono text-xs rounded-DEFAULT hover:opacity-90 transition-opacity inline-flex items-center gap-2 font-bold uppercase"
              >
                <span>EXPLORE & SIGN GUESTBOOK</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
