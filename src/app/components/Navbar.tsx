"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Главная", href: "/" },
    { name: "Обо мне", href: "/about" },
    { name: "Проекты", href: "/projects" },
    { name: "Статьи", href: "/articles" },
    { name: "Контакты", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-100">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between gap-3">

        <Link
          href="/"
          className="text-sm font-semibold text-neutral-900 shrink-0"
          onClick={() => setMobileMenuOpen(false)}
        >
          Борисова Натали
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* MOBILE QUICK LINKS */}
        <div className="flex md:hidden items-center gap-3 ml-auto">

          <Link
            href="/projects"
            className="text-sm font-medium text-neutral-700"
          >
            Проекты
          </Link>

          <Link
            href="/articles"
            className="text-sm font-medium text-neutral-700"
          >
            Статьи
          </Link>

          <Link
            href="/contact"
            className="px-3 py-2 rounded-lg bg-neutral-900 text-white text-xs font-semibold whitespace-nowrap"
          >
            Написать
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-9 w-9 flex items-center justify-center rounded-lg border border-neutral-200 bg-white"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* DESKTOP BUTTON */}
        <Link
          href="/contact"
          className="hidden md:inline-flex px-5 py-2 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition"
        >
          Написать мне
        </Link>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-16 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-b border-neutral-100">
            <div className="px-4 py-4 flex flex-col gap-3">

              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-neutral-700"
              >
                Главная
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-neutral-700"
              >
                Обо мне
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-neutral-700"
              >
                Контакты
              </Link>

            </div>
          </div>
        </>
      )}
    </nav>
  );
}