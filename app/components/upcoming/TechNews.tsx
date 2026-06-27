import Growth from "../../public/icons/growth";
import Image from "next/image";
import Slider from "./Slider";
export default function TechNews() {
  const content = [
    {
      website: "dev.to",
      title: "Understanding Server Actions in Next.js",
      description: "A breakdown of how server actions improve performance.",
      tags: ["Next.js", "React", "Backend"],
      publishedDate: "2h ago",
      link: "#",
    },
    {
      website: "reddit",
      title: "React 19 New Features",
      description: "The new version introduces major performance upgrades.",
      tags: ["React", "Frontend"],
      publishedDate: "5h ago",
      link: "#",
    },
    {
      website: "dev.to",
      title: "Node.js Performance Tips",
      description: "How to improve backend API speed by 60%.",
      tags: ["Node.js", "API"],
      publishedDate: "1d ago",
      link: "#",
    },
    {
      website: "dev.to",
      title: "Node.js Performance Tips",
      description: "How to improve backend API speed by 60%.",
      tags: ["Node.js", "API"],
      publishedDate: "1d ago",
      link: "#",
    },
    {
      website: "dev.to",
      title: "Node.js Performance Tips",
      description: "How to improve backend API speed by 60%.",
      tags: ["Node.js", "API"],
      publishedDate: "1d ago",
      link: "#",
    },
    {
      website: "dev.to",
      title: "Node.js Performance Tips",
      description: "How to improve backend API speed by 60%.",
      tags: ["Node.js", "API"],
      publishedDate: "1d ago",
      link: "#",
    },
  ];

  return (
    <div className="bg-white text-black p-6 flex flex-col justify-center items-center gap-4">
      <div className="flex text-sm gap-2 justify-center items-center p-2 px-4 w-fit rounded-2xl bg-[#af47ff1a] font-medium text-[#af47ff]">
        <Growth />
        <span>Latest Updates</span>
      </div>

      <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#1d2530] to-[#af47ff] bg-clip-text text-transparent">
        Tech News & Insights
      </div>

      <div className="text-lg text-center px-6 text-[#627084]">
        Stay updated with the latest in web development and technology
      </div>

      <div className="flex items-center gap-4 mt-6">
        <button className="p-2 rounded-full border border-[#dadfe7] hover:border-[#af47ff] hover:bg-[#af47ff1a] transition">
          <Image
            src="/left.png"
            alt="left arrow"
            width={18}
            height={18}
            className="invert-[0.4] hover:invert-0 transition"
          />
        </button>

        <Slider content={content} />

        <button className="p-2 rounded-full border border-[#dadfe7] hover:border-[#af47ff] hover:bg-[#af47ff1a] transition">
          <Image
            src="/right.png"
            alt="right arrow"
            width={18}
            height={18}
            className="invert-[0.4] hover:invert-0 transition"
          />
        </button>
      </div>
    </div>
  );
}
