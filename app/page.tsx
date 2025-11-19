import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black p-6 flex flex-col gap-12 items-center justify-center">
      <div className="flex flex-col gap-6 items-center text-center relative">
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-92 h-92 md:w-75 md:h-80 
                        bg-[#af47ff] rounded-full blur-3xl opacity-40 animate-pulse"
        ></div>

        <Image
          alt="profile"
          src="/profile.png"
          width={260}
          height={260}
          className="object-cover cursor-pointer rounded-full z-10 
                     hover:ring-4 hover:ring-[#af47ff] hover:scale-105 
                     transition-all duration-300"
        />

        <h1 className="text-4xl md:text-5xl font-bold z-10 leading-tight">
          Hi, I'm <span className="text-[#af47ff]">Srinithin Thangadurai</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-600 z-10">
          Full-Stack Web Developer
        </p>

        <p className="text-base md:text-xl max-w-3xl text-gray-700 leading-relaxed z-10 px-2">
          3+ years of experience delivering responsive, scalable, and
          high-performance web applications. Built dynamic UIs using React.js,
          Next.js, TypeScript, and Tailwind CSS, and developed robust backends
          with Node.js, Express.js, and MongoDB. Experienced in API
          integrations, authentication flows, dashboard development, and
          real-time features. Skilled in optimizing performance, accessibility,
          and cross-browser compatibility in Agile teams.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 z-10 w-1/2 md:w-auto">
        <button
          className="hover:scale-105 transition-transform bg-[#af47ff] rounded-2xl px-6 py-3 
                           text-white cursor-pointer flex items-center justify-center gap-2 w-full md:w-auto"
        >
          <span>View My Work</span>
          <Image
            src="/icons8-arrow-64.png"
            alt="arrow"
            width={28}
            height={28}
          />
        </button>

        <button
          className="hover:scale-105 transition-transform border border-[#dadfe7] 
                           rounded-2xl px-6 py-3 hover:bg-[#af47ff] hover:text-white text-[#af47ff] cursor-pointer w-full md:w-auto"
        >
          Get In Touch
        </button>

        <button
          className="hover:scale-105 transition-transform text-[#af47ff] border border-[#dadfe7]
                           rounded-2xl px-6 py-3 cursor-pointer flex items-center justify-center gap-2 
                           w-full md:w-auto hover:bg-[#af47ff] hover:text-white"
        >
          <span>Download Resume</span>
          <Image
            src="/icons8-download-100.png"
            alt="download"
            width={28}
            height={28}
          />
        </button>
      </div>

      <div className="flex gap-4">
        <Link href="https://github.com/Srinithin-dev" target="blank">
          <Image
            src="/icons8-github.gif"
            alt="github"
            width={28}
            height={28}
            className="cursor-pointer"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/srinithin-thangadurai-1b237a23b/"
          target="blank"
        >
          <Image
            src="/icons8-linkedin-30.png"
            alt="linkedin"
            width={28}
            height={28}
            className="cursor-pointer"
          />
        </Link>
        <Link href="" target="blank">
          <Image
            src="/icons8-mail-24.png"
            alt="mail"
            width={28}
            height={28}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
