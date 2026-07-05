"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

const NAV_LINKS = [
  { label: "Practice", href: "#practice" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-line/60 bg-ink/80 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-[72px] md:px-10"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="Elena Marchetti, home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-moss/50 font-display text-base italic text-moss-strong">
            EM
          </span>
          <span className="font-display text-lg tracking-tight text-bone">
            Elena Marchetti
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-bone-muted transition-colors duration-150 hover:text-bone"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-moss px-5 py-2.5 text-sm font-semibold text-ink transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-moss-strong md:inline-block"
        >
          Book Consult
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-line text-bone md:hidden"
        >
          {isOpen ? <X size={20} weight="light" /> : <List size={20} weight="light" />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-nav"
          className="border-t border-ink-line/60 bg-ink px-6 pb-8 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-bone-muted transition-colors duration-150 hover:bg-ink-raised hover:text-bone"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 block rounded-full bg-moss px-5 py-3 text-center text-sm font-semibold text-ink"
          >
            Book Consult
          </a>
        </div>
      )}
    </header>
  );
}
