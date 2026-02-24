import Image from "next/image";

export default function Projects() {
  const projectObj = [
    {
      title: "Portfolio Website",
      description:
        "A modern, fast, and fully responsive personal portfolio built with Next.js and Tailwind CSS. Includes GitHub metrics, tech news feed, animations, and a clean UI.",
      language_Used: ["Next.js", "React", "Tailwind CSS", "Rest Api"],
      demoLink: "#",
      repoLink: "#",
      comingSoon: false,
      coverImage: "/coverImage.png",
    },
    {
      title: "Job Tracker Tool",
      description:
        "A simple dashboard to track all job applications with stages, notes, resume uploads, and reminders.",
      language_Used: ["Next.js", "Node.js", "Rest Api", "MongoDb"],
      comingSoon: true,
      demoLink: "",
      repoLink: "",
      coverImage: "",
    },
    {
      title: "Integrations Dashboard",
      description:
        "A private dashboard built for personal tools — integrates GitHub API, Reddit & Dev.to feeds, and other utilities.",
      language_Used: ["Next.js", , "Rest Api", "API Integrations", "MongoDb"],
      comingSoon: true,
      demoLink: "",
      repoLink: "",
      coverImage: "",
    },
  ];

  return (
    <div className="bg-white text-black w-full flex flex-col items-center py-12">
      <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#1d2530] to-[#af47ff] bg-clip-text text-transparent text-center">
        Featured Projects
      </div>
      <p className="text-lg text-[#627084] mb-10 text-center max-w-2xl">
        A selection of recent work showcasing my development expertise
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full lg:px-20 px-4">
        {projectObj.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border border-[#dadfe7] hover:border-[#af47ff]
                       shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center"
          >
            <div
              className={`w-full ${
                !project.coverImage.length && "h-full"
              } bg-[#f3e8ff] rounded-xl h-full flex items-center justify-center overflow-hidden`}
            >
              {project.comingSoon ? (
                <span className="text-[#af47ff] font-semibold text-lg">
                  Coming Soon
                </span>
              ) : (
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="object-cover rounded-xl"
                />
              )}
            </div>

            <h3 className="mt-4 text-xl font-bold text-center">
              {project.title}
            </h3>

            <p className="text-sm text-[#627084] text-center mt-1 h-full">
              {project.description}
            </p>

            <div className="flex gap-2 flex-wrap mt-4">
              {project.language_Used.map((lang, i) => (
                <span
                  key={i}
                  className="text-xs text-black px-3 py-1 rounded-full bg-[#e7eaef] font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>

            {project.comingSoon ? (
              <div className="px-4 py-2 bg-[#e7eaef] text-[#818181] rounded-xl text-sm cursor-not-allowed w-full text-center mt-5">
                Under Development
              </div>
            ) : (
              <div className="mt-5 flex gap-3 items-center w-full justify-around">
                <a
                  href={project.demoLink}
                  className="px-4 py-2 bg-[#e7eaef] text-black rounded-xl text-sm hover:bg-[#9e3fe6] hover:text-white w-full text-center"
                >
                  Live Demo
                </a>

                <a href={project.repoLink}>
                  <Image
                    src="/github.gif"
                    alt="github"
                    width={28}
                    height={28}
                    className="cursor-pointer hover:scale-110 transition"
                  />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
