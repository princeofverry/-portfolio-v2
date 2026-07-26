"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastNotification from "@/components/ToastNotification";

export default function DesignSystemPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("colors");
  const [selectedTag, setSelectedTag] = useState<string>("NEXTJS");
  const [showGridOverlay, setShowGridOverlay] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label} to clipboard: ${text}`);
  };

  // Color Tokens Data
  const colorTokens = [
    {
      name: "Surface (Background)",
      varName: "--color-surface",
      utility: "bg-surface",
      light: "#f9f9f9",
      dark: "#0a0b0d",
      description: "Default canvas background color across pages.",
    },
    {
      name: "Surface Container Low",
      varName: "--color-surface-container-low",
      utility: "bg-surface-container-low",
      light: "#f3f3f3",
      dark: "#111318",
      description: "Subtle background fill for cards, inputs, and code blocks.",
    },
    {
      name: "Surface Container",
      varName: "--color-surface-container",
      utility: "bg-surface-container",
      light: "#eeeeee",
      dark: "#1a1c23",
      description: "Container fill for hovered elements and active states.",
    },
    {
      name: "Surface Container High",
      varName: "--color-surface-container-high",
      utility: "bg-surface-container-high",
      light: "#e8e8e8",
      dark: "#242731",
      description: "Higher contrast container state for active dropdowns.",
    },
    {
      name: "Primary Text / Ink",
      varName: "--color-primary",
      utility: "text-primary",
      light: "#000000",
      dark: "#ffffff",
      description: "High-contrast headings, active text, and primary actions.",
    },
    {
      name: "Secondary Text / Muted",
      varName: "--color-secondary",
      utility: "text-secondary",
      light: "#5e5e5e",
      dark: "#94a3b8",
      description: "Metadata labels, timestamps, and secondary captions.",
    },
    {
      name: "On Surface Variant",
      varName: "--color-on-surface-variant",
      utility: "text-on-surface-variant",
      light: "#4c4546",
      dark: "#9ca3af",
      description: "Standard body text color for high legibility.",
    },
    {
      name: "Outline Variant (Hairline)",
      varName: "--color-outline-variant",
      utility: "border-outline-variant",
      light: "#cfc4c5",
      dark: "rgba(255,255,255,0.08)",
      description: "Hair-thin 1px borders for cards, dividers, and tables.",
    },
    {
      name: "Outline (Solid)",
      varName: "--color-outline",
      utility: "border-outline",
      light: "#7e7576",
      dark: "rgba(255,255,255,0.2)",
      description: "Hover and focused state border color.",
    },
    {
      name: "Grid Line",
      varName: "--color-grid-line",
      utility: "bg-grid-line",
      light: "rgba(0,0,0,0.035)",
      dark: "rgba(255,255,255,0.035)",
      description: "Subtle 96px background architectural grid line overlay.",
    },
  ];

  // Navigation Items
  const navSections = [
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "spacing", label: "Spacing & Radius" },
    { id: "cards", label: "Cards" },
    { id: "navbar", label: "Navbar" },
    { id: "links", label: "Links" },
    { id: "tags", label: "Tags & Chips" },
    { id: "buttons", label: "Buttons & Inputs" },
    { id: "patterns", label: "Page Structure" },
    { id: "grid", label: "Grid Background" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Navbar offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 relative">
      <ToastNotification message={toastMessage} />
      <Navbar />

      {/* Optional Architectural Grid Line Highlight Layer for Page Demo */}
      {showGridOverlay && (
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-75"
          style={{
            backgroundImage: `linear-gradient(to right, var(--color-grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-grid-line) 1px, transparent 1px)`,
            backgroundSize: "96px 96px",
            maskImage: "radial-gradient(circle at center, black 40%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 90%)",
          }}
        />
      )}

      <main className="max-w-container-max mx-auto px-gutter flex-1 w-full py-12 md:py-20 z-10">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-label-mono text-xs text-secondary hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            BACK TO HOME
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-4 mb-12 border-b border-outline-variant pb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="font-label-mono text-secondary text-xs uppercase tracking-wider block">
              FOUNDATIONS & COMPONENTS // SPECIFICATION
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowGridOverlay(!showGridOverlay)}
                className={`font-label-mono text-xs px-3 py-1.5 rounded-DEFAULT border transition-colors cursor-pointer flex items-center gap-1.5 ${
                  showGridOverlay
                    ? "border-primary bg-primary text-on-primary font-bold"
                    : "border-outline-variant text-secondary hover:text-primary"
                }`}
              >
                <span className="material-symbols-outlined text-sm">grid_view</span>
                GRID OVERLAY: {showGridOverlay ? "ON" : "OFF"}
              </button>
            </div>
          </div>

          <h1 className="font-display-xl text-primary leading-tight">
            Design System
          </h1>
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Design tokens, typography scale, component specs, and structural layout patterns for{" "}
            <code className="font-mono text-xs bg-surface-container px-2 py-0.5 rounded-DEFAULT text-primary">
              verry.dev
            </code>{" "}
            (Stitch Minimalist Editorial Spec).
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 font-label-mono text-xs text-secondary">
            <span className="border border-outline-variant px-2.5 py-1 rounded-DEFAULT bg-surface-container-low">
              Next.js 16 (App Router)
            </span>
            <span className="border border-outline-variant px-2.5 py-1 rounded-DEFAULT bg-surface-container-low">
              React 19
            </span>
            <span className="border border-outline-variant px-2.5 py-1 rounded-DEFAULT bg-surface-container-low">
              Tailwind CSS 4
            </span>
            <span className="border border-outline-variant px-2.5 py-1 rounded-DEFAULT bg-surface-container-low">
              Framer Motion
            </span>
          </div>
        </div>

        {/* Mobile Sticky Horizontal Index Nav Bar */}
        <div className="lg:hidden sticky top-16 z-30 -mx-gutter px-gutter py-3 bg-surface/90 backdrop-blur-md border-y border-outline-variant mb-8 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
          <div className="flex items-center gap-2 whitespace-nowrap min-w-max">
            <span className="font-label-mono text-[10px] uppercase font-bold text-secondary tracking-wider pr-1">
              INDEX:
            </span>
            {navSections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`font-label-mono text-xs px-3 py-1.5 rounded-DEFAULT transition-all cursor-pointer border ${
                    isActive
                      ? "bg-primary text-on-primary border-primary font-bold shadow-xs"
                      : "bg-surface-container-low text-secondary border-outline-variant hover:text-primary"
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sticky Table of Contents & Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
          {/* Left Sidebar Table of Contents (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-1 sticky top-24 z-20 space-y-4">
            <div className="p-4 border border-outline-variant rounded-DEFAULT bg-surface-container-lowest shadow-xs">
              <h3 className="font-label-mono text-xs uppercase font-bold text-secondary tracking-wider mb-3">
                INDEX // GUIDELINE
              </h3>
              <nav className="space-y-1 font-label-mono text-xs">
                {navSections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-3 py-2 rounded-DEFAULT transition-all cursor-pointer flex items-center justify-between ${
                        isActive
                          ? "bg-primary text-on-primary font-bold"
                          : "text-secondary hover:text-primary hover:bg-surface-container-low"
                      }`}
                    >
                      <span>{sec.label}</span>
                      {isActive && (
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Right Main Content Sections */}
          <div className="lg:col-span-3 space-y-16">
            {/* 1. FOUNDATIONS: COLORS */}
            <section id="colors" className="space-y-6 scroll-mt-24">
              <div className="border-b border-outline-variant pb-4">
                <span className="font-label-mono text-xs text-secondary uppercase block mb-1">
                  FOUNDATIONS // 01
                </span>
                <h2 className="font-headline-lg text-primary">Colors</h2>
                <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Semantic tokens via CSS custom properties. Each token dynamically adapts between light and dark themes as defined in{" "}
                  <code className="font-mono text-xs bg-surface-container px-1.5 py-0.5 rounded-DEFAULT text-primary">
                    tokens.css
                  </code>
                  .
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {colorTokens.map((token) => (
                  <div
                    key={token.varName}
                    className="border border-outline-variant p-4 rounded-DEFAULT bg-surface-container-lowest hover:border-outline transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-headline-mobile text-base font-semibold text-primary">
                          {token.name}
                        </span>
                        <button
                          onClick={() => copyToClipboard(token.varName, "Variable")}
                          className="font-label-mono text-[10px] text-secondary hover:text-primary border border-outline-variant px-2 py-0.5 rounded-DEFAULT cursor-pointer flex items-center gap-1 bg-surface"
                          title="Click to copy CSS variable"
                        >
                          <span className="material-symbols-outlined text-xs">content_copy</span>
                          COPY
                        </button>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-12 h-12 rounded-DEFAULT border border-outline-variant shadow-xs shrink-0"
                          style={{ backgroundColor: `var(${token.varName})` }}
                        />
                        <div className="space-y-0.5 font-label-mono text-xs">
                          <p className="text-primary font-bold">{token.utility}</p>
                          <p className="text-secondary font-mono text-[11px]">{token.varName}</p>
                        </div>
                      </div>

                      <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                        {token.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-outline-variant/60 flex items-center justify-between font-label-mono text-[11px] text-secondary">
                      <span>Light: {token.light}</span>
                      <span>Dark: {token.dark}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Code Snippet for Theme CSS */}
              <div className="border border-outline-variant rounded-DEFAULT bg-surface-container-low p-4">
                <div className="flex items-center justify-between mb-2 border-b border-outline-variant pb-2">
                  <span className="font-label-mono text-xs text-secondary font-semibold">
                    tokens.css — Color Token Definitions
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `:root {\n  --color-surface: #f9f9f9;\n  --color-on-surface: #1b1b1b;\n  --color-primary: #000000;\n}\n.dark {\n  --color-surface: #0a0b0d;\n  --color-on-surface: #f3f4f6;\n  --color-primary: #ffffff;\n}`,
                        "CSS Snippet"
                      )
                    }
                    className="font-label-mono text-xs text-secondary hover:text-primary cursor-pointer flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                    COPY SNIPPET
                  </button>
                </div>
                <pre className="font-mono text-xs text-primary overflow-x-auto p-2">
                  <code>{`:root {
  --color-surface: #f9f9f9;
  --color-surface-container-low: #f3f3f3;
  --color-on-surface: #1b1b1b;
  --color-primary: #000000;
  --color-secondary: #5e5e5e;
  --color-outline-variant: #cfc4c5;
}

.dark, [data-theme="dark"] {
  --color-surface: #0a0b0d;
  --color-surface-container-low: #111318;
  --color-on-surface: #f3f4f6;
  --color-primary: #ffffff;
  --color-secondary: #94a3b8;
  --color-outline-variant: rgba(255, 255, 255, 0.08);
}`}</code>
                </pre>
              </div>
            </section>

            {/* 2. FOUNDATIONS: TYPOGRAPHY */}
            <section id="typography" className="space-y-6 scroll-mt-24">
              <div className="border-b border-outline-variant pb-4">
                <span className="font-label-mono text-xs text-secondary uppercase block mb-1">
                  FOUNDATIONS // 02
                </span>
                <h2 className="font-headline-lg text-primary">Typography</h2>
                <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">
                  <strong className="text-primary font-semibold">Inter</strong> for body and headings.{" "}
                  <strong className="text-primary font-semibold">JetBrains Mono</strong> for technical labels, code, and metadata. High-contrast apertures for an architectural editorial feel.
                </p>
              </div>

              <div className="space-y-6">
                {/* H1 / Display XL */}
                <div className="border border-outline-variant p-6 rounded-DEFAULT bg-surface-container-lowest space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2 font-label-mono text-xs text-secondary border-b border-outline-variant pb-2">
                    <span className="font-bold text-primary">DISPLAY XL / H1</span>
                    <span className="font-mono text-[11px]">font-display-xl (clamp 2.5rem - 4.5rem, weight 800)</span>
                  </div>
                  <h1 className="font-display-xl text-primary leading-tight">
                    Editorial Portfolio
                  </h1>
                  <p className="font-label-mono text-xs text-secondary">
                    Used for primary hero title and impact statements.
                  </p>
                </div>

                {/* H2 / Headline Large */}
                <div className="border border-outline-variant p-6 rounded-DEFAULT bg-surface-container-lowest space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2 font-label-mono text-xs text-secondary border-b border-outline-variant pb-2">
                    <span className="font-bold text-primary">HEADLINE LARGE / H2</span>
                    <span className="font-mono text-[11px]">font-headline-lg (clamp 2rem - 3rem, weight 700)</span>
                  </div>
                  <h2 className="font-headline-lg text-primary">
                    Selected Works & Architecture
                  </h2>
                  <p className="font-label-mono text-xs text-secondary">
                    Used for major section titles and essay headers.
                  </p>
                </div>

                {/* H3 / Headline Mobile */}
                <div className="border border-outline-variant p-6 rounded-DEFAULT bg-surface-container-lowest space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2 font-label-mono text-xs text-secondary border-b border-outline-variant pb-2">
                    <span className="font-bold text-primary">HEADLINE MOBILE / H3</span>
                    <span className="font-mono text-[11px]">font-headline-mobile (1.5rem - 2rem, weight 700)</span>
                  </div>
                  <h3 className="font-headline-mobile text-primary">
                    Spring Boot Enterprise Backends
                  </h3>
                  <p className="font-label-mono text-xs text-secondary">
                    Used for card headlines and modal titles.
                  </p>
                </div>

                {/* Body Text */}
                <div className="border border-outline-variant p-6 rounded-DEFAULT bg-surface-container-lowest space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2 font-label-mono text-xs text-secondary border-b border-outline-variant pb-2">
                    <span className="font-bold text-primary">BODY TEXT</span>
                    <span className="font-mono text-[11px]">font-body text-base leading-relaxed</span>
                  </div>
                  <p className="font-body text-base leading-relaxed text-on-surface-variant">
                    Software Engineer based in Jakarta, Indonesia. Specializing in high-concurrency Spring Boot microservices, computer vision pipelines, and minimalist user interfaces built with performance and architectural rigor.
                  </p>
                </div>

                {/* Label Mono */}
                <div className="border border-outline-variant p-6 rounded-DEFAULT bg-surface-container-lowest space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2 font-label-mono text-xs text-secondary border-b border-outline-variant pb-2">
                    <span className="font-bold text-primary">LABEL MONO / METADATA</span>
                    <span className="font-mono text-[11px]">font-label-mono text-xs uppercase tracking-wider</span>
                  </div>
                  <p className="font-label-mono text-xs text-secondary uppercase tracking-wider">
                    FEATURED CASE STUDY // SPRING BOOT 3 & REDIS EDGE CACHE
                  </p>
                </div>

                {/* Inline Code */}
                <div className="border border-outline-variant p-6 rounded-DEFAULT bg-surface-container-lowest space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2 font-label-mono text-xs text-secondary border-b border-outline-variant pb-2">
                    <span className="font-bold text-primary">CODE INLINE</span>
                    <span className="font-mono text-[11px]">font-mono text-xs bg-surface-container px-2 py-1</span>
                  </div>
                  <div>
                    <code className="font-mono text-xs bg-surface-container text-primary px-2 py-1 rounded-DEFAULT">
                      const design = &quot;minimalist-editorial&quot;;
                    </code>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. FOUNDATIONS: SPACING & RADIUS */}
            <section id="spacing" className="space-y-6 scroll-mt-24">
              <div className="border-b border-outline-variant pb-4">
                <span className="font-label-mono text-xs text-secondary uppercase block mb-1">
                  FOUNDATIONS // 03
                </span>
                <h2 className="font-headline-lg text-primary">Spacing & Border Radius</h2>
                <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Responsive spacing tokens and architectural soft corners (0.25rem per Stitch spec).
                </p>
              </div>

              {/* Spacing Table */}
              <div className="border border-outline-variant rounded-DEFAULT overflow-hidden bg-surface-container-lowest">
                <table className="w-full text-left border-collapse font-label-mono text-xs">
                  <thead>
                    <tr className="border-b border-outline-variant bg-surface-container-low text-primary">
                      <th className="p-3.5 font-bold">TOKEN / USAGE</th>
                      <th className="p-3.5 font-bold">MOBILE</th>
                      <th className="p-3.5 font-bold">DESKTOP</th>
                      <th className="p-3.5 font-bold">CSS VARIABLE / CLASS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/60 text-secondary">
                    <tr>
                      <td className="p-3.5 text-primary font-medium">Container Max Width</td>
                      <td className="p-3.5">100%</td>
                      <td className="p-3.5 font-bold text-primary">1100px</td>
                      <td className="p-3.5 font-mono text-[11px]">max-w-container-max</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-primary font-medium">Page Gutter Padding</td>
                      <td className="p-3.5">16px</td>
                      <td className="p-3.5 font-bold text-primary">24px</td>
                      <td className="p-3.5 font-mono text-[11px]">px-gutter</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-primary font-medium">Section Gap</td>
                      <td className="p-3.5">64px</td>
                      <td className="p-3.5 font-bold text-primary">120px</td>
                      <td className="p-3.5 font-mono text-[11px]">py-section-gap / mb-section-gap</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-primary font-medium">Element Gap</td>
                      <td className="p-3.5">20px</td>
                      <td className="p-3.5 font-bold text-primary">32px</td>
                      <td className="p-3.5 font-mono text-[11px]">gap-element-gap</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 text-primary font-medium">Card Padding</td>
                      <td className="p-3.5">p-5 (20px)</td>
                      <td className="p-3.5 font-bold text-primary">p-6 to p-8 (24px - 32px)</td>
                      <td className="p-3.5 font-mono text-[11px]">p-6 md:p-8</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Radius Demo */}
              <div className="space-y-3">
                <h3 className="font-label-mono text-xs uppercase font-bold text-secondary tracking-wider">
                  BORDER RADIUS SCALE
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "rounded-sm", val: "0.125rem (2px)", class: "rounded-sm" },
                    { label: "rounded-DEFAULT", val: "0.25rem (4px)", class: "rounded-DEFAULT" },
                    { label: "rounded-md", val: "0.375rem (6px)", class: "rounded-md" },
                    { label: "rounded-lg", val: "0.5rem (8px)", class: "rounded-lg" },
                  ].map((r) => (
                    <div
                      key={r.label}
                      className={`border border-outline-variant p-4 bg-surface-container-low text-center font-label-mono text-xs ${r.class}`}
                    >
                      <p className="text-primary font-bold">{r.label}</p>
                      <p className="text-secondary text-[11px] mt-1">{r.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. COMPONENTS: CARDS */}
            <section id="cards" className="space-y-6 scroll-mt-24">
              <div className="border-b border-outline-variant pb-4">
                <span className="font-label-mono text-xs text-secondary uppercase block mb-1">
                  COMPONENTS // 01
                </span>
                <h2 className="font-headline-lg text-primary">Cards</h2>
                <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Flat card design without heavy drop-shadows. Defined by a 1px hairline border (
                  <code className="font-mono text-xs bg-surface-container px-1.5 py-0.5 rounded-DEFAULT text-primary">
                    border-outline-variant
                  </code>
                  ) that subtly darkens on hover.
                </p>
              </div>

              {/* Live Interactive Card Component Demo */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ y: -3 }}
                  className="group border border-outline-variant p-6 md:p-8 rounded-DEFAULT bg-surface hover:bg-surface-container-lowest transition-all cursor-pointer shadow-xs"
                >
                  <div className="flex items-center justify-between font-label-mono text-xs text-secondary mb-4">
                    <span>CASE STUDY // BACKEND</span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">schedule</span> 5 MIN READ
                    </span>
                  </div>

                  <h3 className="font-headline-mobile text-xl text-primary mb-3 group-hover:underline decoration-1 underline-offset-4 leading-snug">
                    High-Concurrency Redis Edge Caching Layer
                  </h3>

                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                    Optimizing API latency from 450ms down to 18ms using upstash Redis caching, distributed locks, and Spring Boot webflux non-blocking I/O pipelines.
                  </p>

                  <div className="pt-4 border-t border-outline-variant/60 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="border border-outline-variant px-2.5 py-1 rounded-DEFAULT font-label-mono text-[11px] text-secondary bg-surface-container-low">
                        #SPRING-BOOT
                      </span>
                      <span className="border border-outline-variant px-2.5 py-1 rounded-DEFAULT font-label-mono text-[11px] text-secondary bg-surface-container-low">
                        #REDIS
                      </span>
                    </div>

                    <span className="font-label-mono text-xs text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      VIEW PROJECT <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  </div>
                </motion.div>

                {/* Card Code Snippet */}
                <div className="border border-outline-variant rounded-DEFAULT bg-surface-container-low p-4">
                  <div className="flex items-center justify-between mb-2 border-b border-outline-variant pb-2">
                    <span className="font-label-mono text-xs text-secondary font-semibold">
                      Card Markup Specification
                    </span>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          `<div className="group border border-outline-variant p-6 rounded-DEFAULT bg-surface hover:bg-surface-container-lowest transition-all">...</div>`,
                          "Card Markup"
                        )
                      }
                      className="font-label-mono text-xs text-secondary hover:text-primary cursor-pointer flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-sm">content_copy</span>
                      COPY MARKUP
                    </button>
                  </div>
                  <pre className="font-mono text-xs text-primary overflow-x-auto p-2">
                    <code>{`<div className="group border border-outline-variant p-6 rounded-DEFAULT bg-surface hover:bg-surface-container-lowest transition-all">
  <div className="flex items-center justify-between font-label-mono text-xs text-secondary mb-3">
    <span>CATEGORY // METADATA</span>
    <span>DATE / READ TIME</span>
  </div>
  <h3 className="font-headline-mobile text-lg text-primary group-hover:underline">Title</h3>
  <p className="font-body text-sm text-on-surface-variant mt-2">Description</p>
</div>`}</code>
                  </pre>
                </div>
              </div>
            </section>

            {/* 5. COMPONENTS: NAVBAR */}
            <section id="navbar" className="space-y-6 scroll-mt-24">
              <div className="border-b border-outline-variant pb-4">
                <span className="font-label-mono text-xs text-secondary uppercase block mb-1">
                  COMPONENTS // 02
                </span>
                <h2 className="font-headline-lg text-primary">Navbar</h2>
                <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Sticky top bar with backdrop blur (
                  <code className="font-mono text-xs bg-surface-container px-1.5 py-0.5 rounded-DEFAULT text-primary">
                    backdrop-blur-md
                  </code>
                  ), brand logo with Anya avatar emblem, desktop navigation links, theme switcher dropdown, and mobile bottom sheet drawer menu.
                </p>
              </div>

              {/* Navbar Mini Mockup Preview */}
              <div className="border border-outline-variant rounded-DEFAULT bg-surface-container-lowest p-4 space-y-4">
                <div className="border border-outline-variant rounded-DEFAULT p-3 bg-surface/80 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-primary text-on-primary font-bold text-xs flex items-center justify-center font-mono">
                      VK
                    </div>
                    <span className="font-label-mono text-xs font-semibold text-primary">
                      verry.dev
                    </span>
                  </div>

                  <div className="hidden md:flex items-center gap-4 font-label-mono text-xs text-secondary">
                    <span className="text-primary font-bold">EXPERIENCE</span>
                    <span className="hover:text-primary">WORKS</span>
                    <span className="hover:text-primary">AWARDS</span>
                    <span className="hover:text-primary">NOTES</span>
                    <span className="hover:text-primary">GUESTBOOK</span>
                    <span className="hover:text-primary">DESIGN</span>
                  </div>

                  <div className="font-label-mono text-xs border border-outline-variant px-2 py-1 rounded-DEFAULT text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">light_mode</span>
                    <span>THEME</span>
                  </div>
                </div>

                <div className="font-label-mono text-xs text-secondary space-y-1">
                  <p>• Desktop: Inline navigation links with hover opacity transitions.</p>
                  <p>• Mobile: Bottom-sheet popup drawer triggered by the MENU button.</p>
                  <p>• Theme: Toggle between Light, Dark, and System preferences seamlessly.</p>
                </div>
              </div>
            </section>

            {/* 6. COMPONENTS: LINKS */}
            <section id="links" className="space-y-6 scroll-mt-24">
              <div className="border-b border-outline-variant pb-4">
                <span className="font-label-mono text-xs text-secondary uppercase block mb-1">
                  COMPONENTS // 03
                </span>
                <h2 className="font-headline-lg text-primary">Links</h2>
                <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Clean link styles with subtle underline offsets. External links feature an outbound arrow indicator (
                  <code className="font-mono text-xs bg-surface-container px-1.5 py-0.5 rounded-DEFAULT text-primary">
                    ↗
                  </code>
                  ).
                </p>
              </div>

              <div className="border border-outline-variant p-6 rounded-DEFAULT bg-surface-container-lowest space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-body text-sm">
                  {/* Internal Link */}
                  <div className="space-y-2">
                    <span className="font-label-mono text-xs font-bold text-secondary block">
                      INTERNAL LINK
                    </span>
                    <Link
                      href="/notes"
                      className="text-primary font-medium underline underline-offset-4 decoration-outline-variant hover:decoration-primary transition-colors"
                    >
                      Read Essays &amp; Reflections
                    </Link>
                    <p className="font-label-mono text-xs text-secondary">
                      underline decoration-outline-variant underline-offset-4 hover:decoration-primary
                    </p>
                  </div>

                  {/* External Link */}
                  <div className="space-y-2">
                    <span className="font-label-mono text-xs font-bold text-secondary block">
                      EXTERNAL LINK
                    </span>
                    <a
                      href="https://github.com/princeofverry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium underline underline-offset-4 decoration-outline-variant hover:decoration-primary transition-colors inline-flex items-center gap-1"
                    >
                      GitHub Profile <span className="material-symbols-outlined text-sm">north_east</span>
                    </a>
                    <p className="font-label-mono text-xs text-secondary">
                      inline-flex items-center gap-1 + north_east icon
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. COMPONENTS: TAGS & CHIPS */}
            <section id="tags" className="space-y-6 scroll-mt-24">
              <div className="border-b border-outline-variant pb-4">
                <span className="font-label-mono text-xs text-secondary uppercase block mb-1">
                  COMPONENTS // 04
                </span>
                <h2 className="font-headline-lg text-primary">Tags & Chips</h2>
                <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Monospaced chips with 1px hairline borders for technology tags, filters, and topic indicators.
                </p>
              </div>

              {/* Interactive Tag Filter Playground */}
              <div className="border border-outline-variant p-6 rounded-DEFAULT bg-surface-container-lowest space-y-4">
                <span className="font-label-mono text-xs text-secondary font-bold uppercase block">
                  INTERACTIVE TAG FILTER DEMO (CLICK TO SELECT)
                </span>
                <div className="flex flex-wrap gap-2">
                  {["SPRING-BOOT", "NEXTJS", "REACT", "TAILWIND", "REDIS", "DOCKER"].map((tag) => {
                    const isActive = selectedTag === tag;
                    return (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`relative font-label-mono text-xs px-3 py-1.5 rounded-DEFAULT transition-colors cursor-pointer border ${
                          isActive
                            ? "border-primary text-on-primary font-bold"
                            : "border-outline-variant text-secondary hover:text-primary hover:border-outline"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeTagIndicatorDesign"
                            className="absolute inset-0 bg-primary rounded-DEFAULT -z-10"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10">#{tag}</span>
                      </button>
                    );
                  })}
                </div>
                <p className="font-label-mono text-xs text-secondary pt-2">
                  Currently Active Filter Token: <span className="text-primary font-bold">#{selectedTag}</span>
                </p>
              </div>
            </section>

            {/* 8. COMPONENTS: BUTTONS & INPUTS */}
            <section id="buttons" className="space-y-6 scroll-mt-24">
              <div className="border-b border-outline-variant pb-4">
                <span className="font-label-mono text-xs text-secondary uppercase block mb-1">
                  COMPONENTS // 05
                </span>
                <h2 className="font-headline-lg text-primary">Buttons & Inputs</h2>
                <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">
                  High-contrast solid and hairline buttons along with subtle input search boxes.
                </p>
              </div>

              <div className="border border-outline-variant p-6 rounded-DEFAULT bg-surface-container-lowest space-y-6">
                {/* Button Variations */}
                <div className="space-y-3">
                  <span className="font-label-mono text-xs font-bold text-secondary uppercase block">
                    BUTTON VARIANTS
                  </span>
                  <div className="flex flex-wrap gap-4 items-center">
                    <button
                      onClick={() => showToast("Clicked Primary Action Button")}
                      className="px-5 py-2.5 bg-primary text-on-primary font-label-mono text-xs font-bold rounded-DEFAULT hover:opacity-85 transition-opacity cursor-pointer shadow-xs"
                    >
                      PRIMARY ACTION
                    </button>

                    <button
                      onClick={() => showToast("Clicked Secondary Outline Button")}
                      className="px-5 py-2.5 border border-outline-variant bg-surface text-primary font-label-mono text-xs font-medium rounded-DEFAULT hover:bg-surface-container-low hover:border-outline transition-colors cursor-pointer"
                    >
                      SECONDARY OUTLINE
                    </button>

                    <button
                      onClick={() => showToast("Clicked Icon Button")}
                      className="p-2.5 border border-outline-variant bg-surface text-primary rounded-DEFAULT hover:bg-surface-container-low transition-colors cursor-pointer flex items-center justify-center"
                      title="Icon Button"
                    >
                      <span className="material-symbols-outlined text-lg">download</span>
                    </button>
                  </div>
                </div>

                {/* Input Fields */}
                <div className="space-y-3 pt-4 border-t border-outline-variant/60">
                  <span className="font-label-mono text-xs font-bold text-secondary uppercase block">
                    INPUT FIELD & SEARCH BAR
                  </span>
                  <div className="relative max-w-md">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-secondary text-base">
                      search
                    </span>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Type keyword to test input state..."
                      className="w-full pl-9 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body text-sm text-primary placeholder:text-secondary focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 9. PATTERNS: PAGE STRUCTURE */}
            <section id="patterns" className="space-y-6 scroll-mt-24">
              <div className="border-b border-outline-variant pb-4">
                <span className="font-label-mono text-xs text-secondary uppercase block mb-1">
                  PATTERNS // 01
                </span>
                <h2 className="font-headline-lg text-primary">Page Structure</h2>
                <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">
                  Standard template structure for building new pages in this portfolio.
                </p>
              </div>

              <div className="border border-outline-variant rounded-DEFAULT bg-surface-container-low p-4">
                <div className="flex items-center justify-between mb-2 border-b border-outline-variant pb-2">
                  <span className="font-label-mono text-xs text-secondary font-semibold">
                    Page Template Blueprint (React / Next.js App Router)
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `import Navbar from "@/components/Navbar";\nimport Footer from "@/components/Footer";\n\nexport default function NewPage() {\n  return (\n    <div className="min-h-screen flex flex-col">\n      <Navbar />\n      <main className="max-w-container-max mx-auto px-gutter flex-1 w-full py-16 md:py-24">\n        <div className="space-y-4 mb-12 border-b border-outline-variant pb-8">\n          <span className="font-label-mono text-secondary text-xs uppercase">SECTION // CATEGORY</span>\n          <h1 className="font-display-xl text-primary">Page Title</h1>\n          <p className="font-body text-base text-on-surface-variant">Description text goes here...</p>\n        </div>\n      </main>\n      <Footer />\n    </div>\n  );\n}`,
                        "Page Blueprint"
                      )
                    }
                    className="font-label-mono text-xs text-secondary hover:text-primary cursor-pointer flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                    COPY TEMPLATE
                  </button>
                </div>
                <pre className="font-mono text-xs text-primary overflow-x-auto p-2">
                  <code>{`import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NewPage() {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="max-w-container-max mx-auto px-gutter flex-1 w-full py-16 md:py-24">
        {/* Header Section */}
        <div className="space-y-4 mb-12 border-b border-outline-variant pb-8">
          <span className="font-label-mono text-secondary text-xs uppercase">
            CATEGORY // SECTION
          </span>
          <h1 className="font-display-xl text-primary">
            Page Title
          </h1>
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Description of the page content.
          </p>
        </div>

        {/* Content Section: mt-12 sm:mt-16 */}
      </main>
      <Footer />
    </div>
  );
}`}</code>
                </pre>
              </div>
            </section>

            {/* 10. PATTERNS: GRID BACKGROUND */}
            <section id="grid" className="space-y-6 scroll-mt-24">
              <div className="border-b border-outline-variant pb-4">
                <span className="font-label-mono text-xs text-secondary uppercase block mb-1">
                  PATTERNS // 02
                </span>
                <h2 className="font-headline-lg text-primary">Grid Background Overlay</h2>
                <p className="font-body text-sm text-on-surface-variant mt-2 leading-relaxed">
                  The portfolio uses a signature 96px x 96px architectural grid line overlay background with radial center masking implemented in{" "}
                  <code className="font-mono text-xs bg-surface-container px-1.5 py-0.5 rounded-DEFAULT text-primary">
                    globals.css
                  </code>
                  .
                </p>
              </div>

              <div className="border border-outline-variant rounded-DEFAULT bg-surface-container-low p-4">
                <div className="flex items-center justify-between mb-2 border-b border-outline-variant pb-2">
                  <span className="font-label-mono text-xs text-secondary font-semibold">
                    globals.css Grid CSS Pattern Definition
                  </span>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `body::before {\n  content: "";\n  position: fixed;\n  inset: 0;\n  pointer-events: none;\n  z-index: -1;\n  background-image: \n    linear-gradient(to right, var(--color-grid-line) 1px, transparent 1px),\n    linear-gradient(to bottom, var(--color-grid-line) 1px, transparent 1px);\n  background-size: 96px 96px;\n  mask-image: radial-gradient(circle at center, black 30%, transparent 90%);\n  -webkit-mask-image: radial-gradient(circle at center, black 30%, transparent 90%);\n}`,
                        "Grid Overlay CSS"
                      )
                    }
                    className="font-label-mono text-xs text-secondary hover:text-primary cursor-pointer flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                    COPY GRID CSS
                  </button>
                </div>
                <pre className="font-mono text-xs text-primary overflow-x-auto p-2">
                  <code>{`body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  background-image: 
    linear-gradient(to right, var(--color-grid-line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--color-grid-line) 1px, transparent 1px);
  background-size: 96px 96px;
  mask-image: radial-gradient(circle at center, black 30%, transparent 90%);
  -webkit-mask-image: radial-gradient(circle at center, black 30%, transparent 90%);
}`}</code>
                </pre>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
