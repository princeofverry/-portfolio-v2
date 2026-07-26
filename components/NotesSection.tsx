import Link from "next/link";
import { NoteItem } from "@/types/portfolio";

interface NotesSectionProps {
  notes: NoteItem[];
}

export default function NotesSection({ notes }: NotesSectionProps) {
  return (
    <section id="notes" className="py-20 md:py-28">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
        <div>
          <span className="font-label-mono text-secondary text-xs block mb-1">
            ESSAYS // 05
          </span>
          <h2 className="font-headline-lg text-primary">Latest Notes</h2>
        </div>

        <Link
          href="/notes"
          className="inline-flex items-center gap-1 font-label-mono text-xs uppercase text-secondary hover:text-primary transition-colors border-b border-secondary pb-0.5"
        >
          VIEW ALL NOTES PAGE <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {notes.map((note, idx) => (
          <Link
            key={idx}
            href={`/notes/${note.slug}`}
            className="group border border-outline-variant p-6 rounded-DEFAULT bg-surface hover:bg-surface-container-lowest transition-colors flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between font-label-mono text-xs text-secondary mb-3">
                <time>{note.date}</time>
                <span>{note.readTime}</span>
              </div>
              <h3 className="font-headline-mobile text-lg text-primary mb-3 group-hover:underline decoration-1 underline-offset-4 leading-snug">
                {note.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                {note.excerpt}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-variant/50">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-outline-variant px-2 py-0.5 rounded-DEFAULT font-label-mono text-[10px] text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
