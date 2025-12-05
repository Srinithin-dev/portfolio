import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";
// import TechNews from "./components/TechNews";
// import Inspirations from "./components/Inspiration";
import Intro from "./components/Intro";
import Inspirations from "./components/Inspiration";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      {/* <TechNews /> */}
      <Inspirations />
      {/* <Inspirations /> */}
      <ContactUs />
    </div>
  );
}
