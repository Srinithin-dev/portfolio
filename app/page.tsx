import Intro from "./components/essential/Intro";
import Skills from "./components/essential/Skills";
import Experience from "./components/essential/Experience";
import Projects from "./components/essential/Projects";
import ContactUs from "./components/essential/ContactUs";
import Education from "./components/essential/Education";

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
