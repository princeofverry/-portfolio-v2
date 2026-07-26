"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export type ThemeMode = "light" | "dark" | "system";

interface NavbarProps {
  themeMode?: ThemeMode;
  onChangeThemeMode?: (mode: ThemeMode) => void;
  showReadingProgress?: boolean;
}

export default function Navbar({
  themeMode: externalThemeMode,
  onChangeThemeMode,
  showReadingProgress = false,
}: NavbarProps) {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Local theme state
  const [currentMode, setCurrentMode] = useState<ThemeMode>(
    externalThemeMode || "light"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync external theme mode if passed
  useEffect(() => {
    if (externalThemeMode) {
      setCurrentMode(externalThemeMode);
    }
  }, [externalThemeMode]);

  // Apply theme to document element
  const applyTheme = (mode: ThemeMode) => {
    setCurrentMode(mode);
    if (onChangeThemeMode) {
      onChangeThemeMode(mode);
    }

    let activeTheme: "light" | "dark" = "light";
    if (mode === "system") {
      const isSystemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      activeTheme = isSystemDark ? "dark" : "light";
    } else {
      activeTheme = mode;
    }

    document.documentElement.setAttribute("data-theme", activeTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", mode);
    }
    if (activeTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // System preference change listener
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      if (currentMode === "system") {
        applyTheme("system");
      }
    };
    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [currentMode]);

  // Smart Hide-on-Scroll & Reading Progress Calculation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos < 20) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(prevScrollPos > currentScrollPos);
      }
      setPrevScrollPos(currentScrollPos);

      // Scroll Progress %
      if (showReadingProgress) {
        const totalHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        if (totalHeight > 0) {
          const currentProgress = (currentScrollPos / totalHeight) * 100;
          setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, showReadingProgress]);

  // Get active icon
  const getThemeIcon = () => {
    if (currentMode === "light") return "light_mode";
    if (currentMode === "dark") return "dark_mode";
    return "desktop_windows";
  };

  return (
    <>
      {/* Fixed Top Reading Scroll Progress Bar (Only visible when showReadingProgress is true, e.g. /notes/[slug]) */}
      {showReadingProgress && (
        <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
          <div
            className="h-[3px] bg-primary transition-all duration-75 ease-out shadow-sm"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}

      <header
        className={`sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant transition-transform duration-300 ease-out ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-container-max mx-auto px-gutter flex items-center justify-between h-16">
          {/* Logo with Anya Image Emblem */}
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 group cursor-pointer"
          >
            <Image
              src="/anya.jpg"
              width={28}
              height={28}
              alt="Logo"
              className="rounded-md object-cover border border-outline-variant transition-transform group-hover:scale-105 shadow-sm shrink-0"
            />
            <span className="font-label-mono text-sm font-semibold tracking-tight text-primary group-hover:opacity-75 transition-opacity leading-none translate-y-[0.5px]">
              verry.dev
            </span>
          </Link>

          {/* Right Group: Desktop Nav Links & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 font-label-mono text-xs text-primary">
              <Link
                href="/#experience"
                className="opacity-60 hover:opacity-100 hover:font-bold border-b-2 border-transparent hover:border-primary py-1 transition-all duration-150"
              >
                EXPERIENCE
              </Link>
              <Link
                href="/#works"
                className="opacity-60 hover:opacity-100 hover:font-bold border-b-2 border-transparent hover:border-primary py-1 transition-all duration-150"
              >
                WORKS
              </Link>
              <Link
                href="/#awards"
                className="opacity-60 hover:opacity-100 hover:font-bold border-b-2 border-transparent hover:border-primary py-1 transition-all duration-150"
              >
                AWARDS
              </Link>
              <Link
                href="/notes"
                className="opacity-60 hover:opacity-100 hover:font-bold border-b-2 border-transparent hover:border-primary py-1 transition-all duration-150"
              >
                NOTES
              </Link>
              <Link
                href="/guestbook"
                className="opacity-60 hover:opacity-100 hover:font-bold border-b-2 border-transparent hover:border-primary py-1 transition-all duration-150"
              >
                GUESTBOOK
              </Link>
            </nav>

            {/* Thin vertical divider (Desktop) */}
            <span
              className="hidden md:block h-5 w-[1px] bg-outline-variant"
              aria-hidden="true"
            />

            {/* Desktop Theme Dropdown Container */}
            <div className="hidden md:block relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-1.5 rounded-DEFAULT border border-outline-variant hover:bg-surface-container transition-colors text-primary flex items-center gap-1 cursor-pointer"
                title="Select Theme (Light / Dark / System)"
                aria-label="Select Theme"
              >
                <span className="material-symbols-outlined text-base">
                  {getThemeIcon()}
                </span>
                <span className="material-symbols-outlined text-xs text-secondary">
                  arrow_drop_down
                </span>
              </button>

              {/* Desktop Dropdown Menu Popup */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 mt-2 w-36 border border-outline-variant rounded-md shadow-2xl py-1.5 z-50 font-label-mono text-xs"
                    style={{
                      backgroundColor: "var(--color-surface-container-lowest)",
                      color: "var(--color-primary)",
                    }}
                  >
                    {(
                      [
                        { mode: "light", label: "Light", icon: "light_mode" },
                        { mode: "dark", label: "Dark", icon: "dark_mode" },
                        { mode: "system", label: "System", icon: "desktop_windows" },
                      ] as const
                    ).map((item) => {
                      const isSelected = currentMode === item.mode;
                      return (
                        <button
                          key={item.mode}
                          onClick={() => {
                            applyTheme(item.mode);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-3.5 py-2 text-left flex items-center justify-between transition-colors cursor-pointer ${
                            isSelected
                              ? "font-bold text-primary"
                              : "text-secondary hover:text-primary"
                          }`}
                          style={{
                            backgroundColor: isSelected
                              ? "var(--color-surface-container-high)"
                              : "transparent",
                          }}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="material-symbols-outlined text-base">
                              {item.icon}
                            </span>
                            <span>{item.label}</span>
                          </div>
                          {isSelected && (
                            <span className="material-symbols-outlined text-sm font-bold">
                              check
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Bottom Sheet Trigger Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-DEFAULT border border-outline-variant hover:bg-surface-container text-primary flex items-center gap-1.5 cursor-pointer font-label-mono text-xs"
              aria-label="Open Navigation & Theme Menu"
            >
              <span className="material-symbols-outlined text-lg">menu</span>
              <span>MENU</span>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Sheet Popup Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 md:hidden backdrop-blur-xs"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Bottom Sheet Drawer Container */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-surface-container-lowest border-t border-outline-variant rounded-t-2xl p-6 space-y-6 shadow-2xl text-primary max-h-[85vh] overflow-y-auto"
              style={{
                backgroundColor: "var(--color-surface-container-lowest)",
                color: "var(--color-primary)",
              }}
            >
              {/* Top Drag Handle & Header */}
              <div>
                <div className="w-12 h-1 bg-outline-variant rounded-full mx-auto mb-4" />
                <div className="flex items-center justify-between border-b border-outline-variant pb-3">
                  <span className="font-label-mono text-xs font-bold uppercase text-secondary tracking-wider">
                    NAVIGATION // MENU
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 rounded-DEFAULT border border-outline-variant hover:bg-surface-container text-primary cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-xl">close</span>
                  </motion.button>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-2 font-label-mono text-sm">
                {[
                  { href: "/#experience", label: "EXPERIENCE" },
                  { href: "/#works", label: "WORKS" },
                  { href: "/#awards", label: "AWARDS" },
                  { href: "/notes", label: "NOTES" },
                  { href: "/guestbook", label: "GUESTBOOK" },
                ].map((item) => (
                  <motion.div whileTap={{ scale: 0.98 }} key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-3 border border-outline-variant rounded-DEFAULT bg-surface hover:bg-surface-container flex items-center justify-between transition-colors"
                    >
                      <span>{item.label}</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Theme Switcher Selector */}
              <div className="space-y-3 pt-2 border-t border-outline-variant">
                <span className="font-label-mono text-xs font-bold uppercase text-secondary tracking-wider block">
                  THEME SETTINGS
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { mode: "light", label: "Light", icon: "light_mode" },
                      { mode: "dark", label: "Dark", icon: "dark_mode" },
                      { mode: "system", label: "System", icon: "desktop_windows" },
                    ] as const
                  ).map((item) => {
                    const isSelected = currentMode === item.mode;
                    return (
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        key={item.mode}
                        onClick={() => applyTheme(item.mode)}
                        className={`p-3 rounded-DEFAULT border font-label-mono text-xs flex flex-col items-center gap-1.5 transition-colors cursor-pointer ${
                          isSelected
                            ? "border-primary font-bold text-primary bg-surface-container-high"
                            : "border-outline-variant text-secondary hover:text-primary hover:border-outline"
                        }`}
                      >
                        <span className="material-symbols-outlined text-lg">
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
