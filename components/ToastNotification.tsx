"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ToastNotificationProps {
  message: string | null;
}

export default function ToastNotification({ message }: ToastNotificationProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary font-label-mono text-xs px-4 py-3 rounded-DEFAULT shadow-lg flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-sm">check_circle</span>
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
