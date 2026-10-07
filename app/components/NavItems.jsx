"use client";

import { useActiveSection } from "../context/ActiveSectionContext";

export default function NavItems({ sections, stacked = false, onNavigate }) {
  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <ul
      className={stacked ? "flex flex-col gap-1" : "flex items-center gap-0.5"}
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
