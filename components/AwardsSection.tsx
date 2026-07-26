"use client";

import { useState } from "react";
import { AwardItem } from "@/types/portfolio";

interface AwardsSectionProps {
  awards: AwardItem[];
}

export default function AwardsSection({ awards }: AwardsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "ROBOTIC",
    "SOFTWARE ENGINEERING",
    "IOT",
    "UI UX",
  ];

  const filteredAwards =
    activeCategory === "ALL"
      ? awards
      : awards.filter((a) => a.category === activeCategory);

  return (
    <section id="awards" className="py-20 md:py-28">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <span className="font-label-mono text-secondary text-xs block mb-1">
            RECOGNITION // 03
          </span>
          <h2 className="font-headline-lg text-primary">Awards & Competitions</h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-label-mono text-xs px-3.5 py-1.5 rounded-DEFAULT border transition-colors cursor-pointer ${
                activeCategory === cat
                  ? "border-primary bg-primary text-on-primary font-bold"
                  : "border-outline-variant text-secondary hover:text-primary hover:border-outline"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Awards Table / List */}
      <div className="space-y-6">
        {filteredAwards.map((award) => (
          <div
            key={award.id}
            className="group border border-outline-variant rounded-DEFAULT p-6 md:p-8 bg-surface hover:bg-surface-container-lowest transition-colors flex flex-col md:flex-row md:items-start justify-between gap-6"
          >
            {/* Left Metadata & Badge */}
            <div className="space-y-3 md:w-1/3 shrink-0">
              <div className="flex items-center gap-3">
                <span className="font-label-mono text-xs text-secondary">
                  {award.date}
                </span>
                {award.badge && (
                  <span className="font-label-mono text-[10px] font-bold px-2 py-0.5 rounded-DEFAULT border border-primary text-primary bg-surface-container-low uppercase">
                    {award.badge}
                  </span>
                )}
              </div>

              <span className="font-label-mono text-xs text-secondary block font-semibold">
                {award.category}
              </span>

              {award.association && (
                <div className="inline-flex items-center gap-1.5 font-label-mono text-xs text-secondary border border-outline-variant px-2.5 py-1 rounded-DEFAULT">
                  <span className="material-symbols-outlined text-xs">group</span>
                  {award.association}
                </div>
              )}
            </div>

            {/* Right Title, Issuer & Description */}
            <div className="space-y-2 flex-1">
              <h3 className="font-headline-mobile text-xl text-primary group-hover:underline decoration-1 underline-offset-4 leading-snug">
                {award.title}
              </h3>

              <p className="font-label-mono text-xs text-secondary font-medium pb-1">
                Issued by {award.issuer}
              </p>

              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
