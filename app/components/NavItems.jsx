import { useRef } from "react";

export default function NavItems({
  direction,
  setActiveSections,
  activeSections,
  SECTIONS,
  setToggle,
}) {
  const scrollToSection = (items) => {
    const element = document.getElementById(items);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`flex ${direction ? "flex-col block" : "items-center"} gap-4 text-[#627084] text-base cursor-pointer`}
    >
      {SECTIONS.map((items, i) => (
        <span
          key={i}
          onClick={() => {
            setActiveSections(items);
            scrollToSection(items);
            setToggle(false);
          }}
          className={`${activeSections == items && "bg-[#1d25301a] text-black rounded-lg font-semibold"} px-2 py-1`}
        >
          {items}
        </span>
      ))}
    </div>
  );
}
