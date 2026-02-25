import Intro from "./components/essential/Intro";
import Skills from "./components/essential/Skills";
import Experience from "./components/essential/Experience";
import Projects from "./components/essential/Projects";
import ContactUs from "./components/essential/ContactUs";
import Education from "./components/essential/Education";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section id="Home">
        <Intro />
      </section>

      <section id="Skills" className="py-8 border-b-[0.25px] border-[#e0e0e0]">
        <Skills />
      </section>
      <section
        id="Experience"
        className="py-8 border-b-[0.25px] border-[#e0e0e0]"
      >
        <Experience />
      </section>

      <section
        id="Academics"
        className="py-8 border-b-[0.25px] border-[#e0e0e0]"
      >
        <Education />
      </section>

      <section
        id="Projects"
        className="py-8 border-b-[0.25px] border-[#e0e0e0]"
      >
        <Projects />
      </section>

      {/* Upcoming Features 
      <GithubMetrics />
      <TechNews /> 
      <Inspirations /> */}
      <section id="Contact" className="pt-8 border-b-[0.25px] border-[#e0e0e0]">
        <ContactUs />
      </section>
      <ToastContainer />
    </div>
  );
}
