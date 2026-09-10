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

    /* The old observer also called router.replace(`/#${id}`) on every
       intersection. That pushed a router update on basically every scroll
       tick — it fights the browser's own scroll restoration, adds history
       churn, and re-renders the page tree while the user is mid-scroll.
       The nav highlight only needs local state; the URL doesn't have to
       track it.

       KNOWN LIMITATION (yours to decide on): `threshold` is a fraction of
       the ELEMENT, so a section taller than the viewport can never reach
       0.2 visibility and will never fire. Experience is already close.
       A rootMargin band near the top of the viewport is the usual fix:
         { rootMargin: "-45% 0px -55% 0px", threshold: 0 }
       That reports whichever section crosses the middle of the screen. */
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
      {/* Sections are flat now. Each one previously carried its own
          bg-linear-to-br gradient in a slightly different direction, so
          scrolling produced a faint stripe effect and no two section edges
          matched. One page colour, dividers where a break is needed. */}
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

      {/* Footer was rendered *inside* ContactUs, i.e. inside a <section>.
          It's page furniture, not contact content — the observer was also
          counting it as part of the Contact section's height. */}
      <Footer />
    </main>
  );
}
