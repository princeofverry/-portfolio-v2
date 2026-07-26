"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notesData } from "@/data/portfolioData";

export default function NotesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("ALL");

  const tags = ["ALL", "ARCHITECTURE", "BACKEND", "DESIGN", "CSS", "PERFORMANCE"];

  const filteredNotes = notesData.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag =
      selectedTag === "ALL" ||
      note.tags.some((t) => t.toUpperCase() === selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />

      <main className="max-w-container-max mx-auto px-gutter flex-1 w-full py-16 md:py-24">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-label-mono text-xs text-secondary hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            BACK TO HOME
          </Link>
        </div>

        {/* Header Title */}
        <div className="space-y-4 mb-12 border-b border-outline-variant pb-8">
          <span className="font-label-mono text-secondary text-xs block uppercase">
            ESSAYS // JOURNAL & REFLECTIONS
          </span>
          <h1 className="font-display-xl text-primary leading-tight">
            Notes & Essays
          </h1>
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Perspectives on monolithic scaling, structural CSS grid, real-time edge telemetry, and software engineering discipline.
          </p>
        </div>

        {/* Search & Tag Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-12">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-secondary text-base">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays by keyword..."
              className="w-full pl-9 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-DEFAULT font-body text-sm text-primary placeholder:text-secondary focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`font-label-mono text-xs px-3 py-1.5 rounded-DEFAULT border transition-colors cursor-pointer ${
                  selectedTag === tag
                    ? "border-primary bg-primary text-on-primary"
                    : "border-outline-variant text-secondary hover:text-primary hover:border-outline"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Notes Grid */}
        {filteredNotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredNotes.map((note, idx) => (
              <Link
                key={idx}
                href={`/notes/${note.slug}`}
                className="group border border-outline-variant p-6 rounded-DEFAULT bg-surface hover:bg-surface-container-lowest transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-label-mono text-xs text-secondary mb-3">
                    <time>{note.date}</time>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      {note.readTime}
                    </span>
                  </div>

                  <h2 className="font-headline-mobile text-lg text-primary mb-3 group-hover:underline decoration-1 underline-offset-4 leading-snug">
                    {note.title}
                  </h2>

                  <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                    {note.excerpt}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-outline-variant/50">
                  <div className="flex flex-wrap gap-2">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-outline-variant px-2 py-0.5 rounded-DEFAULT font-label-mono text-[10px] text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="font-label-mono text-xs text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      READ FULL ESSAY <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-outline-variant rounded-DEFAULT bg-surface-container-low">
            <span className="material-symbols-outlined text-3xl text-secondary mb-2">
              find_in_page
            </span>
            <p className="font-label-mono text-sm text-secondary">
              No essays match your search query. Try resetting filters.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
