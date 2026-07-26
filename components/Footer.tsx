import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-outline-variant bg-surface">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-mono text-xs text-secondary">
          © 2026 VERRY · MINIMALIST EDITORIAL PORTFOLIO
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 font-label-mono text-xs text-secondary">
          <Link href="/#experience" className="hover:text-primary transition-colors">
            EXPERIENCE
          </Link>
          <Link href="/#works" className="hover:text-primary transition-colors">
            WORKS
          </Link>
          <Link href="/#awards" className="hover:text-primary transition-colors">
            AWARDS
          </Link>
          <Link href="/#skills" className="hover:text-primary transition-colors">
            SKILLS
          </Link>
          <Link href="/notes" className="hover:text-primary transition-colors">
            NOTES
          </Link>
          <a
            href="#"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            TOP <span className="material-symbols-outlined text-sm">arrow_upward</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
