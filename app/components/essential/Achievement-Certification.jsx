import AchievementCard from "../AchievementCard";

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Smart India Hackathon",
    organization: "National Innovation Competition",
    year: "2023",
    description:
      "Selected to compete in India's largest national hackathon, collaborating on innovative software solutions for real-world problems.",
    status: "Participant",
    icon: "/sih_Logo.png",
    certificate:
      "https://81sk9hpdjh3qhjxz.public.blob.vercel-storage.com/SIH_Finalist",
    color: "purple",
  },
  {
    id: 2,
    title: "Nehru College Hackathon",
    organization: "Inter-College Competition",
    year: "2022",
    description:
      "Built an innovative software solution under time pressure and secured First Place among participating teams.",
    status: "1st Place Winner",
    icon: "/bio-Ideathon_logo.png",
    certificate:
      "https://81sk9hpdjh3qhjxz.public.blob.vercel-storage.com/Bio-Ideathon%20Certificate",
    color: "yellow",
  },
  {
    id: 3,
    title: "Pumo Technovation",
    organization: "Software Developer Intern",
    year: "2022",
    description:
      "Completed a software development internship, contributing to web applications using HTML, CSS, JavaScript and Bootstrap.",
    status: "Completed",
    icon: "/pumo_Logo.png",
    certificate:
      "https://81sk9hpdjh3qhjxz.public.blob.vercel-storage.com/Pumo%20Technovation%20Certificate",
    color: "green",
  },
  {
    id: 4,
    title: "Namaste JavaScript",
    organization: "Akshay Saini",
    year: "2023",
    description:
      "Successfully completed the JavaScript deep-dive course covering execution context, closures, async JavaScript and advanced concepts.",
    status: "Certified",
    icon: "/namasteDev_Logo.png",
    certificate:
      "https://81sk9hpdjh3qhjxz.public.blob.vercel-storage.com/namaste-javascript.webp",
    color: "blue",
  },
];
export default function AchievementAndCertifications() {
  return (
    <div className="bg-transparent text-black p-6 flex flex-col items-center gap-6 w-full">
      <div className="flex text-sm gap-2 justify-center items-center p-2 px-4 rounded-2xl bg-[#af47ff1a] font-medium text-[#af47ff]">
        <span>Recognition</span>
      </div>
      <div className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight bg-linear-to-r from-[#1d2530] to-[#af47ff] bg-clip-text text-transparent text-center">
        Achievements & Certifications
      </div>
      <p className="text-base sm:text-lg leading-7 text-[#627084] mb-10 text-center max-w-2xl">
        Recognition earned through competitions, internships and continuous
        learning.
      </p>

      <div className="grid gap-8 max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-4">
        {ACHIEVEMENTS.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}
