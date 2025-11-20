import Growth from "../../public/icons/growth";
import Image from "next/image";

const experiences = [
  {
    company: "Fountain Hills Technologies",
    location: "Gandhipuram, Coimbatore",
    role: "Full Stack Developer",
    period: "Aug 2024 – Present",
    current: true,
    link: "https://www.linkedin.com/company/fountain-hills-technologies/",
    points: [
      "Developed and optimized the company's main website and blog using Next.js, Tailwind CSS, and Cosmos DB, boosting SEO traffic by 30%.",
      "Built a procurement app (Quote Manager) using React.js, Node.js, and MongoDB, streamlining vendor approvals.",
      "Integrated Datto RMM, Rubrik, and Dark Web Monitoring into Zoho Desk using Node.js, Express, and REST APIs—improving response efficiency by 40%.",
    ],
    tech: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cosmos DB",
      "Tailwind CSS",
      "REST APIs",
      "Zoho Desk",
    ],
  },
  {
    company: "Konnectify",
    location: "Gandhipuram, Coimbatore",
    link: "https://www.linkedin.com/company/konnectifyco/",
    expirences: [
      {
        role: "Full Stack Developer",
        period: "Jun 2023 – July 2024",
        points: [
          "Built & maintained integrations for the iPaaS platform using React, Node.js, REST APIs, and MongoDB.",
          "Developed automation workflows enabling smooth data sync across 3rd-party tools.",
        ],
      },
      {
        role: "Junior Software Developer",
        period: "Aug 2022 – May 2023",
        points: [
          "Delivered 10+ Freshworks integrations (Freshdesk, Freshsales, Freshchat, Freshservice).",
          "Worked with Freshworks SDKs to solve complex customer workflows and enhance automation.",
        ],
        tech: [
          "JavaScript",
          "REST APIs",
          "Freshdesk",
          "Freshsales",
          "Freshchat",
          "Freshservice",
          "Freshworks SDKs",
        ],
      },
    ],
  },
  {
    company: "PUMO Technovation",
    location: "Gandhipuram, Coimbatore",
    role: "Software Developer Intern",
    period: "May 2022 – Aug 2022",
    link: "https://www.linkedin.com/company/pumo-technovation-india-private-limited/",
    points: [
      "Built UI components & contributed to website improvements using HTML, CSS, JavaScript, and Bootstrap.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

export default function Experience() {
  return (
    <div className="bg-white text-black p-6 flex flex-col items-center gap-6 w-full">
      <div className="flex text-sm gap-2 justify-center items-center p-2 px-4 rounded-2xl bg-[#af47ff1a] font-medium text-[#af47ff]">
        <Growth />
        <span>Career Journey</span>
      </div>

      <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#1d2530] to-[#af47ff] bg-clip-text text-transparent">
        Work Experience
      </div>

      <div className="text-lg text-center px-6">
        My professional journey in web development
      </div>

      <div className=" w-full max-w-4xl flex flex-col gap-8">
        {experiences.map((exp, i) => (
          <div key={i} className="relative group cursor-pointer">
            <span
              className="absolute top-0 left-0 w-16 h-20 
               border-t-2 border-l-2 border-[#af47ff4d] group-hover:border-[#af47ff]/50 rounded-tl-2xl"
            ></span>

            <span
              className="absolute bottom-0 right-0 w-16 h-20
               border-b-2 border-r-2 border-[#af47ff4d] group-hover:border-[#af47ff]/50 rounded-br-2xl"
            ></span>
            <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-linear-to-br from-[#8003e180] to-[#8003e180]/50 shadow-lg flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
            <div className="absolute -left-4 top-16 bottom-0 w-0.5 bg-linear-to-b from-[#af47ff]/50 to-[#af47ff]/10"></div>
            <div className="bg-white border border-[#dadfe780]/50 hover:border-[#af47ff]/30 rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all flex flex-col gap-2 ">
              <div className="flex justify-between items-center">
                <div className="text-xl md:text-2xl font-bold text-[#af47ff]">
                  {exp.company}
                </div>

                {exp.current && (
                  <div className="text-xs p-2 px-4 rounded-full font-bold text-white bg-[#af47ff]">
                    Current
                  </div>
                )}
              </div>

              <div className="text-sm text-gray-600 flex gap-1 items-center">
                <Image
                  src="/location.png"
                  alt="location"
                  width={18}
                  height={18}
                />
                <span>{exp.location}</span>
              </div>
              {exp.expirences ? (
                exp.expirences.map((exps, i) => (
                  <div key={i}>
                    <div className="flex items-center  justify-between">
                      <div className="font-semibold">{exps.role}</div>
                      <div className="flex text-center gap-2 items-center">
                        <Image
                          src="/calendar.png"
                          alt="calendar"
                          width={24}
                          height={24}
                        />
                        <div className="text-sm  text-gray-500 ">
                          {exps.period}
                        </div>
                      </div>
                    </div>

                    <ul className="list-disc pl-5 marker:text-[#af47ff] space-y-2 text-gray-700 border-b border-[#dadfe780] pb-6 mb-4">
                      {exps.points.map((p, index) => (
                        <li key={index}>{p}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exps.tech &&
                        exps.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-xs text-black px-3 py-1 rounded-full bg-[#af47ff1a] font-medium"
                          >
                            {t}
                          </span>
                        ))}
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <div className="flex items-center  justify-between">
                    <div className="font-semibold">{exp.role}</div>
                    <div className="flex text-center gap-2 items-center">
                      <Image
                        src="/calendar.png"
                        alt="calendar"
                        width={24}
                        height={24}
                      />
                      <div className="text-sm  text-gray-500 ">
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  <ul className="list-disc pl-5 marker:text-[#af47ff]  space-y-2 text-gray-700 border-b border-[#dadfe780] pb-6 mb-1">
                    {exp.points.map((p, index) => (
                      <li key={index}>{p}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech &&
                      exp.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-black px-3 py-1 rounded-full bg-[#af47ff1a] font-medium"
                        >
                          {t}
                        </span>
                      ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
