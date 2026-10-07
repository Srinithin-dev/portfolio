"use client";

import { useEffect } from "react";
import Intro from "./components/essential/Intro";
import About from "./components/essential/About";
import Skills from "./components/essential/Skills";
import Experience from "./components/essential/Experience";
import Projects from "./components/essential/Projects";
import Education from "./components/essential/Education";
import AchievementAndCertifications from "./components/essential/Achievement-Certification";
import ContactUs from "./components/essential/ContactUs";
import Footer from "./components/essential/Footer";
import { useActiveSection } from "./context/ActiveSectionContext";

export default function Home() {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

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

  return (
    <main id="top" className="bg-page">
      <section id="hero">
        <Intro />
      </section>

      <section id="about" className="border-t border-line py-20 sm:py-24">
        <About />
      </section>

      <section id="skills" className="border-t border-line py-20 sm:py-24">
        <Skills />
      </section>

      <section id="experience" className="border-t border-line py-20 sm:py-24">
        <Experience />
      </section>

      <section
        id="projects"
        className="border-t border-line bg-surface-2/60 py-20 sm:py-24"
      >
        <Projects />
      </section>

      <section id="education" className="border-t border-line py-20 sm:py-24">
        <Education />
      </section>

      <section
        id="awards"
        className="border-t border-line bg-surface-2/60 py-20 sm:py-24"
      >
        <AchievementAndCertifications />
      </section>

      <section id="contact" className="border-t border-line py-20 sm:py-24">
        <ContactUs />
      </section>

      <Footer />
    </main>
  );
}
