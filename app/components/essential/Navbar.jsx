"use client";
import { useState } from "react";
import Image from "next/image";
import NavItems from "../NavItems";
import { usePathname } from "next/navigation";

const SECTIONS = [
  "Home",
  "Skills",
  "Experience",
  "Academics",
  "Projects",
  "Achievements",
  "Contact",
  "Tools",
];

export default function NavBar() {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  if (pathname === "/dsa-visualizer") return null;

  return (
    <div className="flex max-lg:flex-col max-lg:gap-4 justify-between bg-[#f2f4f7] text-black  shadow-2xl fixed z-40 w-full items-center">
      <div className="flex items-center justify-between p-4 w-full">
        <div className="text-xl font-bold text-primary">{"<ST />"}</div>
        <Image
          src={toggle ? "/cancel.png" : "/hamburger-menu.svg"}
          alt={toggle ? "cancel" : "menu"}
          width={24}
          height={24}
          className={"lg:hidden cursor-pointer"}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className="max-lg:hidden">
          <NavItems
            direction={false}
            SECTIONS={SECTIONS}
            setToggle={setToggle}
          />
        </div>
      </div>

      {toggle && (
        <div className="flex flex-col border-t-2 border-[#dadfe7] py-6 shadow-[#dadfe7] shadow-lg p-4 w-full lg:hidden">
          <NavItems
            direction={true}
            SECTIONS={SECTIONS}
            setToggle={setToggle}
          />
        </div>
      )}
    </div>
  );
}
