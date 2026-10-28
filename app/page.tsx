import Intro from "./components/essential/Intro";
import About from "./components/essential/About";
import Skills from "./components/essential/Skills";
import Experience from "./components/essential/Experience";
import Projects from "./components/essential/Projects";
import Education from "./components/essential/Education";
import AchievementAndCertifications from "./components/essential/Achievement-Certification";
import ContactUs from "./components/essential/ContactUs";
import Footer from "./components/essential/Footer";
import SectionObserver from "./components/SectionObserver";
import {
  NAME,
  ROLE,
  EMAIL,
  SITE_URL,
  LINKEDIN_URL,
  GITHUB_URL,
} from "./lib/profile";
export const revalidate = 86400;

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: NAME,
    url: SITE_URL,
    image: `${SITE_URL}/srinithin.png`,
    jobTitle: ROLE,
    email: `mailto:${EMAIL}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    worksFor: [
      { "@type": "Organization", name: "Fountain Hills Technologies" },
      {
        "@type": "Organization",
        name: "Error Makes Clever",
        url: "https://www.errormakesclever.com/",
      },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Sri Krishna College of Arts and Science",
    },
    award: [
      "Smart India Hackathon 2022 — 2nd place",
      "Smart India Hackathon 2020 — National finalist",
      "Nehru Bio Ideathon 2022 — Winner",
    ],
    sameAs: [LINKEDIN_URL, GITHUB_URL],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "OAuth 2.0",
      "API integrations",
    ],
  },
};

export default function Home() {
  return (
    <main id="top" className="bg-page">
      <SectionObserver />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
        id="achievements"
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
