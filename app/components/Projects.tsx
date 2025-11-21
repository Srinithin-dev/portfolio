import Image from "next/image";

export default function Projects() {
  const projectObj = [
    {
      title: "Portfolio Website",
      description:
        "A modern, fast, and fully responsive personal portfolio built with Next.js and Tailwind CSS. Includes GitHub metrics, tech news feed, animations, and a clean UI.",
      language_Used: ["Next.js", "React", "Tailwind CSS"],
      demoLink: "#",
      repoLink: "#",
      comingSoon: false,
      coverImage: "/coverImage.png",
    },
    {
      title: "Job Tracker Tool",
      description:
        "A simple dashboard to track all job applications with stages, notes, resume uploads, and reminders.",
      language_Used: ["Next.js", "Node.js"],
      comingSoon: true,
      demoLink: "",
      repoLink: "",
      coverImage: "",
    },
    {
      title: "Integrations Dashboard",
      description:
        "A private dashboard built for personal tools — integrates GitHub API, Reddit & Dev.to feeds, and other utilities.",
      language_Used: ["Next.js", "API Integrations"],
      comingSoon: true,
      demoLink: "",
      repoLink: "",
      coverImage: "",
    },
  ];

  return (
    <div className="bg-white text-black w-full flex flex-col items-center py-16 px-4">
      <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
      <p className="text-lg text-[#627084] mb-10 text-center max-w-2xl">
        A selection of recent work showcasing my development expertise
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-4xl">
        {projectObj.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border border-[#dadfe7] hover:border-[#af47ff]
                       shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center"
          >
            <div
              className={`w-full ${
                !project.coverImage.length && "h-40"
              } bg-[#f3e8ff] rounded-xl flex items-center justify-center overflow-hidden`}
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

            <h3 className="mt-4 text-xl font-bold">{project.title}</h3>

            <p className="text-sm text-[#627084] text-center mt-1">
              {project.description}
            </p>

            <div className="flex gap-2 flex-wrap mt-4">
              {project.language_Used.map((lang, i) => (
                <span
                  key={i}
                  className="text-xs text-black px-3 py-1 rounded-full bg-[#af47ff1a] font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>

            {!project.comingSoon && (
              <div className="mt-5 flex gap-3 items-center">
                <a
                  href={project.demoLink}
                  className="px-4 py-2 bg-[#af47ff] text-white rounded-xl text-sm hover:bg-[#9e3fe6]"
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
