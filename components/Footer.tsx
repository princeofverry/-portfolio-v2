import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 border-t border-outline-variant bg-surface text-primary">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row items-center md:justify-between gap-8 text-center md:text-left">
        {/* Left Branding & Copyright */}
        <div className="space-y-1">
          <p className="font-headline-mobile text-lg font-bold text-primary">
            Verry Kurniawan
          </p>
          <p className="font-label-mono text-xs text-secondary">© 2026</p>
        </div>

        {/* Navigation Links Grid / Flex */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-3 font-label-mono text-xs text-secondary">
          <Link
            href="/#experience"
            className="hover:text-primary transition-colors py-1"
          >
            EXPERIENCE
          </Link>
          <Link
            href="/#works"
            className="hover:text-primary transition-colors py-1"
          >
            WORKS
          </Link>
          <Link
            href="/#awards"
            className="hover:text-primary transition-colors py-1"
          >
            AWARDS
          </Link>
          <Link
            href="/notes"
            className="hover:text-primary transition-colors py-1"
          >
            NOTES
          </Link>
          <Link
            href="/guestbook"
            className="hover:text-primary transition-colors py-1"
          >
            GUESTBOOK
          </Link>
          <a
            href="#"
            className="hover:text-primary transition-colors inline-flex items-center gap-1 border border-outline-variant px-3 py-1 rounded-DEFAULT text-primary bg-surface-container-low"
          >
            TOP{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_upward
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
