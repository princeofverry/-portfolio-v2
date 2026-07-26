"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 relative shadow-2xl text-primary"
            style={{
              backgroundColor: "var(--color-surface-container-lowest)",
              color: "var(--color-primary)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="font-label-mono text-xs text-secondary block mb-1">
                  {project.period} · {project.role}
                </span>
                <h3 className="font-headline-lg text-2xl md:text-3xl text-primary">
                  {project.title}
                </h3>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-1 rounded-DEFAULT border border-outline-variant hover:bg-surface-container transition-colors text-primary cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </motion.button>
            </div>

            <div className="h-64 rounded-DEFAULT overflow-hidden border border-outline-variant bg-surface">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <h4 className="font-label-mono text-xs font-bold text-primary uppercase">
                Project Metrics & Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 border border-outline-variant rounded-DEFAULT bg-surface-container-low font-label-mono text-xs text-primary"
                    style={{ backgroundColor: "var(--color-surface-container-low)" }}
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-label-mono text-xs font-bold text-primary uppercase">
                Overview & Architecture
              </h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                {project.fullDetails}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-outline-variant px-2.5 py-1 rounded-DEFAULT font-label-mono text-xs text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-outline-variant flex justify-end">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-primary text-on-primary font-label-mono text-xs rounded-DEFAULT hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
              >
                VIEW SOURCE / DEMO <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
