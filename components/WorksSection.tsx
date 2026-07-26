"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/portfolio";

interface WorksSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export default function WorksSection({ projects, onSelectProject }: WorksSectionProps) {
  const [activeTab, setActiveTab] = useState<"all" | "ai" | "be" | "fullstack">("all");

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  const tabs = [
    { key: "all", label: "ALL" },
    { key: "ai", label: "AI" },
    { key: "be", label: "BE" },
    { key: "fullstack", label: "FULLSTACK" },
  ] as const;

  return (
    <section id="works" className="py-20 md:py-28">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <span className="font-label-mono text-secondary text-xs block mb-1">
            PORTFOLIO // 02
          </span>
          <h2 className="font-headline-lg text-primary">Selected Works</h2>
        </div>

        {/* Category Filter Tabs with sliding active layoutId */}
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative font-label-mono text-xs px-3.5 py-1.5 rounded-DEFAULT transition-colors cursor-pointer border ${
                  isActive
                    ? "border-primary text-on-primary font-bold"
                    : "border-outline-variant text-secondary hover:text-primary hover:border-outline"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-primary rounded-DEFAULT -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Cards Grid with layout transition */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group border border-outline-variant rounded-DEFAULT bg-surface hover:bg-surface-container-lowest transition-colors cursor-pointer flex flex-col h-full overflow-hidden"
            >
              {/* Clean Image Thumbnail */}
              <div className="w-full h-64 border-b border-outline-variant overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-outline-variant px-2 py-0.5 rounded-DEFAULT font-label-mono text-[11px] text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title, Year & Role */}
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-headline-mobile text-primary group-hover:underline decoration-1 underline-offset-4 leading-snug">
                      {project.title}
                    </h3>
                    <span className="font-label-mono text-xs text-secondary shrink-0">
                      {project.period}
                    </span>
                  </div>
                  <p className="font-label-mono text-xs text-secondary">{project.role}</p>
                </div>

                <p className="font-body text-sm text-on-surface-variant leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-outline-variant/50">
                  <span className="font-label-mono text-xs text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    EXPLORE DETAILS <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
