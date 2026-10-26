"use client";

import { useEffect } from "react";
import { useActiveSection } from "../context/ActiveSectionContext";
const SectionObserver = () => {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.2 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [setActiveSection]);

  return null;
};

export default SectionObserver;
