"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import NavItems from "../NavItems";

export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (pathName === "/dsa-visualizer") return null;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-40 transition-colors duration-200",
        scrolled
          ? "border-b border-line bg-page/85 backdrop-blur-md"
          : "border-b border-transparent bg-page/60 backdrop-blur-sm",
      ].join(" ")}
    >
      <nav
        aria-label="Main"
        className="shell flex h-16 items-center justify-between gap-4"
      >
        <a
          href="#top"
          className="font-mono text-[15px] font-semibold tracking-tight text-ink"
        >
          {"<ST />"}
        </a>

        <div className="hidden lg:block">
          <NavItems sections={SECTIONS} onNavigate={() => setOpen(false)} />
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download="Srinithin-Thangadurai-Resume.pdf"
            className="hidden items-center gap-1.5 rounded-lg border border-line-strong bg-surface px-3 py-1.5 text-[13px] font-medium text-ink-2 transition hover:border-accent-text hover:text-accent-text sm:flex"
          >
            <Download size={14} />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-lg text-ink-2 transition hover:bg-surface-2 lg:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-line bg-page/95 backdrop-blur-md lg:hidden"
        >
          <div className="shell py-4">
            <NavItems
              sections={SECTIONS}
              stacked
              onNavigate={() => setOpen(false)}
            />
            <a
              href="/resume.pdf"
              download="Srinithin-Thangadurai-Resume.pdf"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-1.5 rounded-lg border border-line-strong bg-surface px-3 py-2.5 text-sm font-medium text-ink-2 sm:hidden"
            >
              <Download size={15} />
              Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
