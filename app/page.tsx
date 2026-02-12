import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import Education from "./components/Education";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section id="Home">
        <Intro />
      </section>

      <section id="Skills">
        <Skills />
      </section>
      <section id="Experience">
        <Experience />
      </section>

      <section id="Academics">
        <Education />
      </section>

      <section id="Projects">
        <Projects />
      </section>

      {/* Upcoming Features 
      <GithubMetrics />
      <TechNews /> 
      <Inspirations /> */}
      <section id="Contact">
        <ContactUs />
      </section>
    </div>
  );
}
