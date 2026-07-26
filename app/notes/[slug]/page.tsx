"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastNotification from "@/components/ToastNotification";
import { notesData } from "@/data/portfolioData";

export default function NoteDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const noteIndex = notesData.findIndex((n) => n.slug === slug);
  const note = notesData[noteIndex];

  const prevNote = noteIndex > 0 ? notesData[noteIndex - 1] : null;
  const nextNote = noteIndex < notesData.length - 1 ? notesData[noteIndex + 1] : null;

  const [claps, setClaps] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleClap = () => {
    setClaps((prev) => prev + 1);
    setToastMessage(`Applauded essay! (${claps + 1} claps)`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  if (!note) {
    return (
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Navbar />
        <main className="max-w-container-max mx-auto px-gutter flex-1 w-full py-32 text-center">
          <span className="material-symbols-outlined text-4xl text-secondary mb-4">
            article_shortcut
          </span>
          <h1 className="font-headline-lg text-primary mb-4">Essay Not Found</h1>
          <p className="font-body text-secondary mb-8">
            The requested essay "{slug}" could not be located in our publication index.
          </p>
          <Link
            href="/notes"
            className="px-6 py-3 bg-primary text-on-primary font-label-mono text-xs rounded-DEFAULT hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            BACK TO ALL NOTES
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <ToastNotification message={toastMessage} />
      <Navbar />

      <main className="max-w-container-max mx-auto px-gutter flex-1 w-full py-16 md:py-24">
        {/* Back Navigation */}
        <div className="mb-10">
          <Link
            href="/notes"
            className="inline-flex items-center gap-1.5 font-label-mono text-xs text-secondary hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            BACK TO ALL NOTES
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-3xl space-y-8">
          <div className="space-y-4 border-b border-outline-variant pb-8">
            <div className="flex flex-wrap items-center gap-4 font-label-mono text-xs text-secondary">
              <time>{note.date}</time>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">schedule</span>
                {note.readTime}
              </span>
            </div>

            <h1 className="font-headline-lg text-3xl md:text-5xl text-primary leading-tight">
              {note.title}
            </h1>

            <div className="flex flex-wrap gap-2 pt-2">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-outline-variant px-2.5 py-1 rounded-DEFAULT font-label-mono text-xs text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Excerpt Lead Quote */}
          <blockquote className="p-6 border-l-4 border-primary bg-surface-container-low font-serif text-lg md:text-xl text-primary italic leading-relaxed rounded-r-DEFAULT">
            "{note.excerpt}"
          </blockquote>

          {/* Body Content */}
          <div className="space-y-6 font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
            {note.content?.split("\n\n").map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph.trim()}</p>
            ))}
          </div>

          {/* Key Takeaways Box */}
          {note.takeaways && note.takeaways.length > 0 && (
            <div className="p-6 border border-outline-variant rounded-DEFAULT bg-surface-container-low space-y-4">
              <h3 className="font-label-mono text-xs font-bold text-primary uppercase tracking-wider">
                Key Architectural Takeaways
              </h3>
              <ul className="space-y-3 font-body text-sm text-on-surface-variant">
                {note.takeaways.map((item, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Author Badge */}
          <div className="p-4 border border-outline-variant rounded-DEFAULT bg-surface flex items-center gap-4">
            <img
              src="/anya.jfif"
              alt="Verry Kurniawan"
              className="w-12 h-12 rounded-md object-cover border border-outline-variant"
            />
            <div>
              <p className="font-headline-mobile text-sm font-bold text-primary">
                Verry Kurniawan
              </p>
              <p className="font-label-mono text-xs text-secondary">
                Software Engineer · Jakarta, Indonesia
              </p>
            </div>
          </div>

          {/* Article Actions */}
          <div className="pt-8 border-t border-outline-variant flex items-center justify-between">
            <button
              onClick={handleClap}
              className="px-5 py-2.5 border border-outline-variant hover:border-primary rounded-DEFAULT font-label-mono text-xs text-primary transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>👏 APPLAUD ESSAY</span>
              <span className="px-2 py-0.5 bg-surface-container-high rounded-DEFAULT font-bold">
                {claps}
              </span>
            </button>

            <Link
              href="/notes"
              className="px-5 py-2.5 bg-primary text-on-primary font-label-mono text-xs rounded-DEFAULT hover:opacity-90 transition-opacity"
            >
              EXPLORE MORE NOTES
            </Link>
          </div>

          {/* Next / Previous Article Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12 border-t border-outline-variant">
            {prevNote ? (
              <Link
                href={`/notes/${prevNote.slug}`}
                className="group p-4 border border-outline-variant rounded-DEFAULT hover:bg-surface-container-lowest transition-colors space-y-1"
              >
                <span className="font-label-mono text-[10px] text-secondary flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">arrow_back</span>
                  PREVIOUS ESSAY
                </span>
                <p className="font-headline-mobile text-sm text-primary group-hover:underline line-clamp-1">
                  {prevNote.title}
                </p>
              </Link>
            ) : (
              <div></div>
            )}

            {nextNote && (
              <Link
                href={`/notes/${nextNote.slug}`}
                className="group p-4 border border-outline-variant rounded-DEFAULT hover:bg-surface-container-lowest transition-colors space-y-1 text-right sm:ml-auto w-full"
              >
                <span className="font-label-mono text-[10px] text-secondary flex items-center justify-end gap-1">
                  NEXT ESSAY
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </span>
                <p className="font-headline-mobile text-sm text-primary group-hover:underline line-clamp-1">
                  {nextNote.title}
                </p>
              </Link>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
