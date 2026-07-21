"use client";
import Intro from "./components/essential/Intro";
import Skills from "./components/essential/Skills";
import Experience from "./components/essential/Experience";
import Projects from "./components/essential/Projects";
import ContactUs from "./components/essential/ContactUs";
import Education from "./components/essential/Education";
import { useEffect, useRef } from "react";
import { useActiveSection } from "./context/ActiveSectionContext";
import AchievementAndCertifications from "./components/essential/Achievement-Certification";
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
    <div ref={ref} className="min-h-screen bg-[#f7f8fc]">
      <section id="Home">
        <Intro />
      </section>

      <section id="Skills" className="border-b border-[#e7e9f0] bg-linear-to-br from-white via-[#fbfaff] to-[#f4f1ff] py-14">
        <Skills />
      </section>

      <section
        id="Experience"
        className="border-b border-[#e7e9f0] bg-linear-to-b from-[#f9fbff] via-white to-[#f5f8ff] py-14"
      >
        <Experience />
      </section>

      <section
        id="Academics"
        className="border-b border-[#e7e9f0] bg-linear-to-br from-white via-[#fcfbff] to-[#f4f2ff] py-14"
      >
        <Education />
      </section>

      <section
        id="Projects"
        className="border-b border-[#e7e9f0] bg-linear-to-b from-[#f7faff] via-white to-[#faf8ff] py-14"
      >
        <Projects />
      </section>

      <section id="Achievements" className="border-b border-[#e7e9f0] bg-linear-to-br from-white via-[#fbfaff] to-[#f3f7ff] py-14">
        <AchievementAndCertifications />
      </section>
      {/*  Upcoming Features 
      
      <section id="Github" className="py-8 border-b-[0.25px] border-[#e0e0e0]">
        <GitHubMetrics />
      </section>
      
      <TechNews /> 
           <section
        id="Inspirations"
        className="py-12 border-b-[0.25px] border-[#e0e0e0]"
      >
        <Inspirations />
      </section>
       */}

      <section
        id="Contact"
        className="bg-linear-to-b from-[#f8faff] via-white to-[#f3f0ff] pt-14"
      >
        <ContactUs />
      </section>
    </div>
  );
}
