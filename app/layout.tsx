import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verry Kurniawan — Software Engineer",
  description:
    "Software Engineer based in Jakarta, Indonesia. Enterprise Spring Boot backends, computer vision pipelines, and scalable software systems.",
  icons: {
    icon: "/anya.jfif",
    shortcut: "/anya.jfif",
    apple: "/anya.jfif",
  },
  openGraph: {
    title: "Verry Kurniawan — Software Engineer",
    description:
      "Minimalist Editorial Portfolio of Verry Kurniawan. Software Engineer based in Jakarta, Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/anya.jfif" type="image/jfif" />
        <link rel="shortcut icon" href="/anya.jfif" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-body transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
