# Verry Kurniawan — Minimalist Editorial Portfolio (v2)

![CI Pipeline](https://github.com/princeofverry/-portfolio-v2/actions/workflows/ci.yml/badge.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

High-contrast, magazine-grade engineering portfolio designed with atomic component architecture, dark/light theme switching, responsive bottom sheet drawer, and dynamic notes routing.

---

## 🌟 Key Highlights

- **Stitch Minimalist Editorial System**: Strict monochromatic color palette, high-contrast typography, and architectural grid background overlays.
- **Atomic Architecture**: Decoupled, single-responsibility components (`Navbar`, `Hero`, `ExperienceSection`, `WorksSection`, `AwardsSection`, `NotesSection`, `ProjectModal`, `Footer`).
- **Dynamic Notes Engine**: High-density article hubs with live search, tag filtering, lead quotes, takeaways, clap counter, and dynamic slug routing (`/notes/[slug]`).
- **Theme Engine**: Theme switcher supporting Light, Dark, and System preference states driven via CSS custom variables (`var(--color-surface)`).
- **Mobile Bottom Sheet Drawer**: Responsive bottom sheet pop-up drawer for mobile navigation and theme settings.
- **CI/CD Automation**: Integrated GitHub Actions workflow for automated production bundle verification on every push and pull request.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) with Turbopack
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & CSS Custom Properties (`tokens.css`)
- **Icons & Fonts**: Google Fonts (`Inter`, `JetBrains Mono`, `Material Symbols Outlined`)
- **CI/CD**: GitHub Actions (`.github/workflows/ci.yml`)

---

## 💻 Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/princeofverry/-portfolio-v2.git
   cd -portfolio-v2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 📦 Production Build Verification

To verify TypeScript types and generate the optimized production static bundle:

```bash
npm run build
```

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.
