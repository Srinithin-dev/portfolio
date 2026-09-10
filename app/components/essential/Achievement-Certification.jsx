import AchievementCard from "../AchievementCard";

/* Corrected against the resume. The site previously said:
     "Smart India Hackathon — 2023 — Participant"
   The resume says national-level finalist in 2020 AND 2nd place in 2022.
   "Participant" was underselling the single strongest line on the CV.

   Also: "Nehru College Hackathon … First Place" vs the resume's
   "Nehru Bio Hackathon — Winner". Same event, two names, two phrasings. */
const ACHIEVEMENTS = [
  {
    id: "sih",
    title: "Smart India Hackathon",
    organization: "Government of India — national competition",
    year: "2020 & 2022",
    status: "2nd place · National finalist",
    description:
      "National finalist in 2020, then placed 2nd in 2022 — India's largest hackathon, building software solutions for problem statements submitted by government ministries.",
    icon: "/sih_Logo.png",
    certificate:
      "https://81sk9hpdjh3qhjxz.public.blob.vercel-storage.com/SIH_Finalist",
  },
  {
    id: "nehru",
    title: "Nehru Bio Ideathon",
    organization: "Nehru College — inter-college competition",
    year: "2022",
    status: "Winner",
    description:
      "Won first place, designing and building a working solution under a fixed time limit against other college teams.",
    icon: "/bio-Ideathon_logo.png",
    certificate:
      "https://81sk9hpdjh3qhjxz.public.blob.vercel-storage.com/Bio-Ideathon%20Certificate",
  },
  {
    id: "namaste-js",
    title: "Namaste JavaScript",
    organization: "NamasteDev — Akshay Saini",
    year: "2023",
    status: "Certified",
    description:
      "Deep-dive on execution context, the call stack, closures, hoisting and async JavaScript.",
    icon: "/namasteDev_Logo.png",
    certificate:
      "https://81sk9hpdjh3qhjxz.public.blob.vercel-storage.com/namaste-javascript.webp",
  },
  {
    id: "namaste-react",
    title: "Namaste React",
    organization: "NamasteDev — Akshay Saini",
    year: "2026",
    status: "Certified",
    description:
      "Hooks, reconciliation, custom hooks, code splitting, Redux Toolkit and testing — built CineGPT alongside the course.",
    icon: "/namasteDev_Logo.png",
    certificate: "https://namastedev.com/srinithin8910/certificates/namaste-react",
  },
  {
    id: "namaste-node",
    title: "Namaste Node.js",
    organization: "NamasteDev — Akshay Saini",
    year: "2026",
    status: "Certified",
    description:
      "Node internals, the event loop, Express, MongoDB with Mongoose, auth and API design from first principles.",
    icon: "/namasteDev_Logo.png",
    certificate: "https://namastedev.com/srinithin8910/certificates/namaste-node",
  },
  {
    id: "pumo",
    title: "PUMO Technovation Internship",
    organization: "Software Developer Intern",
    year: "2022",
    status: "Completed",
    description:
      "Three-month internship building UI components and shipping website improvements with HTML, CSS, JavaScript and Bootstrap.",
    icon: "/pumo_Logo.png",
    certificate:
      "https://81sk9hpdjh3qhjxz.public.blob.vercel-storage.com/Pumo%20Technovation%20Certificate",
  },
];

export default function AchievementAndCertifications() {
  return (
    <div className="shell">
      <p className="eyebrow">Recognition</p>
      <h2 className="section-title">Awards & certifications</h2>
      <p className="section-lead">
        Competitions, an internship, and the courses I actually finished.
      </p>

      {/* Was `max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-4` — a
          max-width-first stack, which is the inverse of how Tailwind is
          meant to be read and breaks at the 640–1024 range. Standard
          mobile-first ladder instead.

          3 columns, not 4: with six cards a 4-wide grid leaves two empty
          cells on the second row, which reads as unfinished. */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}
