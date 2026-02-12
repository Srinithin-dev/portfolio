import Image from "next/image";
import Stack from "../../public/icons/stack";

export default function Skills() {
  const frontend = [
    { src: "/react.gif", label: "React.js" },
    { src: "/next.gif", label: "Next.js", rotate: "-rotate-90" },
    { src: "/typescript.png", label: "Typescript" },
    { src: "/javascript.gif", label: "Javascript" },
    { src: "/tailwind.png", label: "Tailwind CSS" },
    { src: "/html.gif", label: "HTML5" },
    { src: "/css.png", label: "CSS" },
    { src: "/redux.png", label: "Redux" },
  ];
  const backend = [
    { src: "/node.png", label: "Node.js" },
    { src: "/express.png", label: "Express.js" },
    { src: "/mongodb.png", label: "MongoDB" },
    { src: "/rest.png", label: "Rest Api" },
  ];
  const tools = [
    { src: "/git.png", label: "Git" },
    { src: "/github.gif", label: "GitHub" },
    { src: "/postman.png", label: "Postman" },
    { src: "/jira.png", label: "Jira" },
    { src: "/vs-code.png", label: "VS Code" },
  ];

  return (
    <div className="bg-white text-black p-6 flex flex-col justify-center items-center gap-4 w-full">
      <div className="flex text-sm gap-2 justify-center items-center p-2 px-4 w-fit rounded-2xl bg-[#af47ff1a] font-medium text-[#af47ff]">
        <Stack />
        <span>Technical Arsenal</span>
      </div>

      <div className="text-4xl md:text-5xl font-bold  bg-linear-to-r from-[#1d2530] to-[#af47ff] bg-clip-text text-transparent text-center">
        Skills & Technologies
      </div>

      <div className="text-lg text-center mb-4 px-4">
        Building modern web applications with cutting-edge tools
      </div>
      <div className="flex flex-col gap-4 w-full lg:px-16">
        <div className="flex items-center gap-4">
          <div className="h-1 w-12 rounded-full bg-linear-to-r from-[#af47ff] to-[#af47ff]/30"></div>
          <div className="text-2xl font-bold">Frontend</div>
          <div className="h-1 flex-1 bg-linear-to-r from-[#af47ff] to-[#af47ff]/4 rounded-full"></div>
        </div>
        <div className="flex flex-wrap max-lg:justify-center gap-6 p-2 w-full">
          {frontend.map((skill, index) => (
            <div
              key={index}
              className="bg-white w-32 h-26 p-6 border border-[#dadfe7] hover:border-[#af47ff]
              flex flex-col items-center justify-center rounded-2xl 
              hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Image
                src={skill.src}
                alt={skill.label}
                width={32}
                height={32}
                className={skill.rotate ? skill.rotate : ""}
              />
              <span className="mt-2 text-sm font-semibold text-gray-700 text-center">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full lg:px-16">
        <div className="flex items-center gap-4">
          <div className="h-1 w-12 rounded-full bg-linear-to-r from-[#af47ff] to-[#af47ff]/30"></div>
          <div className="text-2xl font-bold">Backend</div>
          <div className="h-1 flex-1 bg-linear-to-r from-[#af47ff] to-[#af47ff]/4 rounded-full"></div>
        </div>
        <div className="flex flex-wrap max-lg:justify-center gap-6  p-2 w-full">
          {backend.map((skill, index) => (
            <div
              key={index}
              className="bg-white w-32 h-26 p-6 border border-[#dadfe7] hover:border-[#af47ff]
              flex flex-col items-center justify-center rounded-2xl 
              hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Image src={skill.src} alt={skill.label} width={32} height={32} />
              <span className="mt-2 text-sm font-semibold text-gray-700 text-center">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full lg:px-16">
        <div className="flex items-center gap-4">
          <div className="h-1 w-12 rounded-full bg-linear-to-r from-[#af47ff] to-[#af47ff]/30"></div>
          <div className="text-2xl font-bold">Tools & Platforms</div>
          <div className="h-1 flex-1 bg-linear-to-r from-[#af47ff] to-[#af47ff]/4 rounded-full"></div>
        </div>
        <div className="flex flex-wrap max-lg:justify-center gap-6  p-2 w-full">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white w-32 h-26 p-6 border border-[#dadfe7] hover:border-[#af47ff]
              flex flex-col items-center justify-center rounded-2xl 
              hover:scale-105 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Image src={tool.src} alt={tool.label} width={32} height={32} />
              <span className="mt-2 text-sm font-semibold text-gray-700 text-center">
                {tool.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 justify-center items-center p-2 px-4 w-fit rounded-2xl bg-[#af47ff1a]">
        <Image src={"/dev.png"} alt={"code"} width={16} height={16} />
        <span className="text-sm font-medium text-[#627084]">
          Continuously learning ands exploring new technologies
        </span>
      </div>
    </div>
  );
}
