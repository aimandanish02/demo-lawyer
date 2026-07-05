const FOOTER_LINKS = [
  { label: "Practice", href: "#practice" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-line/60 bg-ink-raised">
      <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-moss/50 font-display text-base italic text-moss-strong">
                EM
              </span>
              <span className="font-display text-lg tracking-tight text-bone">
                Elena Marchetti
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-bone-muted">
              Trial attorney serving Cedar Falls and the surrounding county
              in personal injury, business, family, and estate matters.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
              {FOOTER_LINKS.map((link) => (
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
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink-line/60 pt-6 text-xs text-bone-muted/70 sm:flex-row sm:items-center sm:justify-between">
          <p>Demo portfolio. Not a real law firm or legal offer.</p>
          <p>Attorney advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
}
