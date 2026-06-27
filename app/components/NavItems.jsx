import { useRouter } from "next/navigation";
import { useActiveSection } from "../context/ActiveSectionContext";

export default function NavItems({ direction, SECTIONS, setToggle }) {
  const router = useRouter();
  const { activeSection, setActiveSection } = useActiveSection();
  const scrollToSection = (items) => {
    router.push("/#" + items, { scroll: true });
  };

  return (
    <div
      className={`flex ${direction ? "flex-col block" : "items-center"} gap-4 text-[#627084] text-base cursor-pointer`}
    >
      {SECTIONS.map((items, i) => (
        <span
          key={i}
          onClick={() => {
            setActiveSection(items);
            scrollToSection(items);
            setToggle(false);
          }}
          className={`${activeSection == items && "bg-[#1d25301a] text-black rounded-lg font-semibold"} px-2 py-1`}
        >
          {items}
        </span>
      ))}
    </div>
  );
}
