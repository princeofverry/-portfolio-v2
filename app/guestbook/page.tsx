"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuestbookSection from "@/components/GuestbookSection";
import ToastNotification from "@/components/ToastNotification";
import { guestbookData } from "@/data/portfolioData";

export default function GuestbookPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <ToastNotification message={toastMessage} />
      <Navbar />

      <main className="max-w-container-max mx-auto px-gutter flex-1 w-full py-16 md:py-24">
        {/* Header Section */}
        <div className="space-y-4 mb-12 border-b border-outline-variant pb-8">
          <span className="font-label-mono text-secondary text-xs block">
            PUBLIC WALL // GUESTBOOK
          </span>
          <h1 className="font-headline-lg text-4xl md:text-6xl text-primary">
            Developer Guestbook
          </h1>
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Welcome to the public signature wall! Leave a message, reaction, or feedback for Verry Kurniawan. Your note will be displayed publicly on the wall.
          </p>
        </div>

        {/* Guestbook Interactive Section */}
        <GuestbookSection initialEntries={guestbookData} onShowToast={showToast} />
      </main>

      <Footer />
    </div>
  );
}
