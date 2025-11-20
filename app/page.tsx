import Image from "next/image";
import Link from "next/link";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#f2f4f7] text-black p-6 flex flex-col gap-12 items-center justify-center">
        <div className="flex flex-col gap-6 items-center text-center relative">
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
            Hi, I'm{" "}
            <span className="text-[#af47ff]">Srinithin Thangadurai</span>
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
            real-time features. Skilled in optimizing performance,
            accessibility, and cross-browser compatibility in Agile teams.
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
              width={26}
              height={26}
            />
          </button>

          <button
            className="hover:scale-105 transition-transform border border-[#dadfe7] 
                           rounded-2xl px-6 py-3  text-black cursor-pointer w-full md:w-auto"
          >
            Get In Touch
          </button>

          <button
            className="hover:scale-105 transition-transform  text-black border border-[#dadfe7]
                           rounded-2xl px-6 py-3 cursor-pointer flex items-center justify-center gap-2 
                           w-full md:w-auto"
          >
            <span>Download Resume</span>
            <Image src="/download.png" alt="download" width={26} height={26} />
          </button>
        </div>

        <div className="flex gap-4">
          <Link href="https://github.com/Srinithin-dev" target="blank">
            <Image
              src="/github.png"
              alt="github"
              width={26}
              height={26}
              className="cursor-pointer"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/srinithin-thangadurai-1b237a23b/"
            target="blank"
          >
            <Image
              src="/Linkedin.png"
              alt="linkedin"
              width={26}
              height={26}
              className="cursor-pointer"
            />
          </Link>
          <Link href="" target="blank">
            <Image
              src="/Mail.png"
              alt="mail"
              width={26}
              height={26}
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <Skills />
      <Experience />
      <ContactUs />
    </div>
  );
}
