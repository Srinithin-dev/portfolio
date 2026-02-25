"use client";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  const socialMedia = [
    {
      name: "Linkedin",
      imageUrl: "https://www.linkedin.com/in/srinithin-thangadurai-1b237a23b/",
      alt: "linkedin",
      href: "/linkedin.png",
    },
    {
      name: "Mail",
      imageUrl: "",
      alt: "mail",
      href: "/mail.png",
    },
    {
      name: "Github",
      imageUrl: "https://github.com/Srinithin-dev",
      alt: "github",
      href: "/github.png",
    },
  ];

  const downloadResume = () => {
    const link = document.createElement("a");
    const href = "./resume.pdf";
    const downloadName = "srinithin's-Resume.pdf";
    link.href = href;
    link.download = downloadName;
    link.click();
  };

  return (
    <div className="pt-28 pb-12 bg-[#f2f4f7] text-black flex flex-col gap-6 items-center justify-center">
      <div className="flex flex-col gap-4 items-center text-center relative">
        <Image
          alt="profile"
          src="/profilePhoto.png"
          width={300}
          height={300}
          preload
          className="object-cover cursor-pointer rounded-full z-10 
                             hover:scale-105 
                             transition-all duration-300"
        />

        <h1 className="text-3xl lg:text-5xl font-bold z-10 leading-tight">
          Hi, I'm <span className="text-[#af47ff]">Srinithin Thangadurai</span>
        </h1>

        <p className="text-lg lg:text-2xl text-gray-600 z-10 font-semibold">
          Full-Stack Web Developer
        </p>

        <p className="text-base lg:text-lg max-w-3xl text-gray-700 leading-relaxed z-10 px-2">
          3+ years of experience delivering responsive, scalable, and
          high-performance web applications. Built dynamic UIs using React.js,
          Next.js, TypeScript, and Tailwind CSS, and developed robust backends
          with Node.js, Express.js, and MongoDB. Experienced in API
          integrations, authentication flows, dashboard development, and
          real-time features. Skilled in optimizing performance, accessibility,
          and cross-browser compatibility in Agile teams.
        </p>
      </div>

      <div className="flex flex-wrap lg:flex-row justify-center gap-4 lg:gap-8 z-10">
        <button
          className="hover:scale-105 transition-transform bg-[#af47ff] lg:rounded-2xl rounded-lg px-6 py-2 
                                   text-white cursor-pointer flex items-center justify-center gap-2 w-fit"
        >
          <span className="max-lg:text-sm">View My Work</span>
          <Image
            src="/icons8-arrow-64.webp"
            alt="arrow"
            width={26}
            height={26}
          />
        </button>

        <button
          className="hover:scale-105 transition-transform border border-[#dadfe7] 
                                   rounded-2xl px-6 py-3  text-black cursor-pointer w-fit"
        >
          Get In Touch
        </button>

        <button
          className="hover:scale-105 transition-transform  text-black border border-[#dadfe7]
                                   rounded-2xl px-6 py-3 cursor-pointer flex items-center justify-center gap-2 
                                   w-fit"
          onClick={downloadResume}
        >
          <span>Download Resume</span>
          <Image src="/download.png" alt="download" width={26} height={26} />
        </button>
      </div>

      <div className="flex gap-4">
        {socialMedia.map((media, i) => (
          <Link
            href={media.imageUrl}
            target="noopener noreferrer"
            key={media.alt}
          >
            <Image
              src={media.href}
              alt={media.alt}
              width={26}
              height={26}
              className="cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
