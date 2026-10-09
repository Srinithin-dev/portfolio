import AchievementCard from "../AchievementCard";
const ACHIEVEMENTS = [
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
    certificate:
      "https://namastedev.com/srinithin8910/certificates/namaste-react",
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
    certificate:
      "https://namastedev.com/srinithin8910/certificates/namaste-node",
  },
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

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}
