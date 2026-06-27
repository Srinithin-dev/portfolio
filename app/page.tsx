"use client";
import Intro from "./components/essential/Intro";
import Skills from "./components/essential/Skills";
import Experience from "./components/essential/Experience";
import Projects from "./components/essential/Projects";
import ContactUs from "./components/essential/ContactUs";
import Education from "./components/essential/Education";
import { useEffect, useRef } from "react";
import { useActiveSection } from "./context/ActiveSectionContext";
import Inspirations from "./components/essential/Inspiration";
import { useRouter } from "next/navigation";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { activeSection, setActiveSection } = useActiveSection();
  const router = useRouter();

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            setActiveSection(id);

            router.replace(`/#${id}`, {
              scroll: false,
            });
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-screen bg-white">
      <section id="Home">
        <Intro />
      </section>

      <section id="Skills" className="py-12 border-b-[0.25px] border-[#e0e0e0]">
        <Skills />
      </section>

      <section
        id="Experience"
        className="py-12 border-b-[0.25px] border-[#e0e0e0]"
      >
        <Experience />
      </section>

      <section
        id="Academics"
        className="py-12 border-b-[0.25px] border-[#e0e0e0]"
      >
        <Education />
      </section>

      <section
        id="Projects"
        className="py-12 border-b-[0.25px] border-[#e0e0e0]"
      >
        <Projects />
      </section>
      {/*<section id="Github" className="py-8 border-b-[0.25px] border-[#e0e0e0]">
        <GitHubMetrics />
      </section>
       Upcoming Features 
      <TechNews /> 
       */}
      <section
        id="Inspirations"
        className="py-12 border-b-[0.25px] border-[#e0e0e0]"
      >
        <Inspirations />
      </section>

      <section
        id="Contact"
        className="pt-10 border-b-[0.25px] border-[#e0e0e0]"
      >
        <ContactUs />
      </section>
    </div>
  );
}
