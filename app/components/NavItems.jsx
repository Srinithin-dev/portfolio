"use client";

import { useActiveSection } from "../context/ActiveSectionContext";

/**
 * Real <a href="#id"> elements, not <span onClick>.
 *
 * The previous version used spans with onClick + router.push, which meant:
 * keyboard users couldn't tab to or activate them, screen readers didn't
 * announce them as links, and cmd-click / middle-click did nothing. Native
 * anchors get all of that for free, and the browser handles the smooth
 * scroll via `scroll-behavior` in globals.css — no router involved.
 */
export default function NavItems({ sections, stacked = false, onNavigate }) {
  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <ul
      className={
        stacked ? "flex flex-col gap-1" : "flex items-center gap-0.5"
      }
    >
      {sections.map(({ id, label }) => {
        const active = activeSection === id;
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active ? "true" : undefined}
              onClick={() => {
                // Optimistic highlight so the nav responds instantly instead
                // of waiting for the observer to catch up mid-scroll.
                setActiveSection(id);
                onNavigate?.();
              }}
              className={[
                "block rounded-lg px-3 py-1.5 text-[13.5px] transition",
                stacked ? "text-[15px]" : "",
                active
                  ? "bg-surface-2 font-medium text-ink"
                  : "text-ink-2 hover:bg-surface-2 hover:text-ink",
              ].join(" ")}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
