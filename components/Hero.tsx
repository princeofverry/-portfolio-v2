"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  onCopyEmail: () => void;
}

export default function Hero({ onCopyEmail }: HeroProps) {
  const [currentTimeShort, setCurrentTimeShort] = useState<string>("");
  const [currentTimeFull, setCurrentTimeFull] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const optionsShort: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      const optionsFull: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTimeShort(new Intl.DateTimeFormat("en-US", optionsShort).format(now));
      setCurrentTimeFull(new Intl.DateTimeFormat("en-US", optionsFull).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-36 md:pb-24 border-b border-outline-variant">
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="font-label-mono text-secondary flex items-center gap-2 text-xs">
            <span className="material-symbols-outlined text-base shrink-0">
              location_on
            </span>
            {/* Mobile View: Concise Location & Time */}
            <span className="sm:hidden">
              JKT, ID {currentTimeShort ? `— ${currentTimeShort}` : ""}
            </span>
            {/* Desktop View: Full Location & Time */}
            <span className="hidden sm:inline">
              JAKARTA, INDONESIA {currentTimeFull ? `— ${currentTimeFull} WIB` : ""}
            </span>
          </span>

          <h1 className="font-display-xl text-primary leading-tight">
            Verry{" "}
            <span className="font-normal text-secondary text-2xl md:text-3xl block md:inline md:ml-2">
              (ヴェリー)
            </span>
          </h1>
        </div>

        <p className="font-label-mono text-secondary text-sm md:text-base tracking-wide">
          SOFTWARE ENGINEER
        </p>

        <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          I build robust, scalable software systems, enterprise Java backends, and high-performance real-time applications. Focused on clean architecture, performance engineering, and minimalist design.
        </p>

        {/* Social Action Links */}
        <div className="flex flex-wrap gap-6 pt-4">
          <a
            href="https://linkedin.com/in/verry-kurniawan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 font-label-mono text-primary border-b border-primary pb-0.5 hover:text-secondary hover:border-secondary transition-colors"
          >
            LINKEDIN{" "}
            <span className="material-symbols-outlined text-[14px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              arrow_outward
            </span>
          </a>
          <a
            href="https://github.com/princeofverry"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 font-label-mono text-primary border-b border-primary pb-0.5 hover:text-secondary hover:border-secondary transition-colors"
          >
            GITHUB{" "}
            <span className="material-symbols-outlined text-[14px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              arrow_outward
            </span>
          </a>
          <button
            onClick={onCopyEmail}
            className="group inline-flex items-center gap-1 font-label-mono text-primary border-b border-primary pb-0.5 hover:text-secondary hover:border-secondary transition-colors cursor-pointer"
          >
            EMAIL{" "}
            <span className="material-symbols-outlined text-[14px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              content_copy
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
