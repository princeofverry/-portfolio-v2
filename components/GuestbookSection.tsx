"use client";

import { useState, useEffect } from "react";
import { GuestbookEntry } from "@/types/portfolio";

interface GuestbookSectionProps {
  initialEntries: GuestbookEntry[];
  onShowToast?: (msg: string) => void;
}

export default function GuestbookSection({
  initialEntries,
  onShowToast,
}: GuestbookSectionProps) {
  const [entries, setEntries] = useState<GuestbookEntry[]>(initialEntries);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch live signatures from API (Upstash Redis) and merge with localStorage on mount
  useEffect(() => {
    async function loadGuestbook() {
      setIsLoading(true);
      let serverData: GuestbookEntry[] = [];
      try {
        const res = await fetch("/api/guestbook");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            serverData = data;
          }
        }
      } catch {
        // Ignore API fetch error
      }

      let localData: GuestbookEntry[] = [];
      try {
        const saved = localStorage.getItem("verry_guestbook_entries");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            // Filter out old dummy entries if any exist
            localData = parsed.filter(
              (item: GuestbookEntry) =>
                item.id !== "gb-1" && item.id !== "gb-2" && item.id !== "gb-3"
            );
          }
        }
      } catch {
        // Ignore localStorage error
      }

      // Merge local and server entries by id (local user submissions take priority)
      const mergedMap = new Map<string, GuestbookEntry>();
      localData.forEach((item) => mergedMap.set(item.id, item));
      serverData.forEach((item) => {
        if (
          item.id !== "gb-1" &&
          item.id !== "gb-2" &&
          item.id !== "gb-3" &&
          !mergedMap.has(item.id)
        ) {
          mergedMap.set(item.id, item);
        }
      });

      const finalEntries = Array.from(mergedMap.values());
      setEntries(finalEntries);
      localStorage.setItem("verry_guestbook_entries", JSON.stringify(finalEntries));
      setIsLoading(false);
    }

    loadGuestbook();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || isSubmitting) return;

    setIsSubmitting(true);

    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })
      .format(now)
      .toUpperCase();

    const newEntry: GuestbookEntry = {
      id: `gb-${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      date: formattedDate,
    };

    // Immediately update local state & localStorage
    const updated = [newEntry, ...entries];
    setEntries(updated);
    try {
      localStorage.setItem("verry_guestbook_entries", JSON.stringify(updated));
    } catch {
      // Ignore
    }

    // Try posting to API / Upstash Redis
    try {
      await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      });
    } catch {
      // Ignore API post error (already saved to local state and localStorage)
    } finally {
      setIsSubmitting(false);
      setName("");
      setMessage("");

      if (onShowToast) {
        onShowToast("Thank you for signing the guestbook! ✍️");
      }
    }
  };

  return (
    <section id="guestbook" className="py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <span className="font-label-mono text-secondary text-xs block mb-1">
            GUESTBOOK // PUBLIC WALL
          </span>
          <h2 className="font-headline-lg text-primary">Developer Signature Wall</h2>
        </div>
        <p className="font-label-mono text-xs text-secondary max-w-sm">
          Leave a note, feedback, or say hello! Signatures are stored in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left Form: Sign Guestbook */}
        <form
          onSubmit={handleSubmit}
          className="border border-outline-variant rounded-DEFAULT p-6 md:p-8 bg-surface space-y-5 lg:col-span-1 shadow-sm"
        >
          <h3 className="font-headline-mobile text-xl text-primary font-bold border-b border-outline-variant pb-3">
            Sign Guestbook
          </h3>

          <div className="space-y-2">
            <label className="font-label-mono text-xs text-secondary uppercase block font-semibold">
              Your Name / Handle
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Rivera (@alexdev)"
              className="w-full px-3.5 py-2.5 rounded-DEFAULT border border-outline-variant text-primary text-sm focus:outline-none focus:border-primary transition-colors font-body"
              style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
            />
          </div>

          <div className="space-y-2">
            <label className="font-label-mono text-xs text-secondary uppercase block font-semibold">
              Message / Note
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message, reaction, or feedback..."
              className="w-full px-3.5 py-2.5 rounded-DEFAULT border border-outline-variant text-primary text-sm focus:outline-none focus:border-primary transition-colors font-body resize-none"
              style={{ backgroundColor: "var(--color-surface-container-lowest)" }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-primary text-on-primary font-label-mono text-xs rounded-DEFAULT hover:opacity-90 transition-opacity uppercase font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <span>{isSubmitting ? "SIGNING..." : "SIGN WALL"}</span>
            <span className="material-symbols-outlined text-sm">edit_note</span>
          </button>
        </form>

        {/* Right Wall: Signatures List */}
        <div className="lg:col-span-2 space-y-4">
          {isLoading ? (
            /* Skeleton Loading State */
            <div className="space-y-4">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="border border-outline-variant/60 rounded-DEFAULT p-6 bg-surface animate-pulse space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-outline-variant/40" />
                      <div className="w-28 h-3.5 bg-outline-variant/40 rounded-sm" />
                    </div>
                    <div className="w-20 h-3 bg-outline-variant/40 rounded-sm" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-3.5 bg-outline-variant/30 rounded-sm" />
                    <div className="w-4/5 h-3.5 bg-outline-variant/30 rounded-sm" />
                  </div>
                </div>
              ))}
            </div>
          ) : entries.length === 0 ? (
            /* Empty State */
            <div className="border border-outline-variant rounded-DEFAULT p-12 bg-surface text-center space-y-3">
              <span className="material-symbols-outlined text-4xl text-secondary">
                edit_note
              </span>
              <h4 className="font-headline-mobile text-lg font-bold text-primary">
                No Signatures Yet
              </h4>
              <p className="font-body text-sm text-secondary max-w-sm mx-auto">
                Be the first developer to sign the public wall! Fill out the form on the left to leave your note.
              </p>
            </div>
          ) : (
            /* Real Signatures List */
            entries.map((entry) => (
              <article
                key={entry.id}
                className="border border-outline-variant rounded-DEFAULT p-6 bg-surface hover:bg-surface-container-lowest transition-colors space-y-3"
              >
                <div className="flex items-center justify-between font-label-mono text-xs text-secondary border-b border-outline-variant/40 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-[10px]">
                      {entry.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="font-bold text-primary">{entry.name}</span>
                  </div>
                  <time>{entry.date}</time>
                </div>

                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  "{entry.message}"
                </p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
