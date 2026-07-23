"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";

export default function Intro() {
  const router = useRouter();
  const socialMedia = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/srinithin-thangadurai-1b237a23b/",
      image: "/linkedin.png",
    },
    { name: "Email", href: "mailto:nithinsri53@gmail.com", image: "/mail.png" },
    {
      name: "GitHub",
      href: "https://github.com/Srinithin-dev",
      image: "/github.png",
    },
  ];

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "srinithin-resume.pdf";
    link.click();
  };

  return (
    <div className="relative isolate overflow-hidden bg-[#f5f6fa] px-5 pb-16 pt-28 text-[#1d2530] sm:px-8 sm:pb-24 sm:pt-32">
      <div className="absolute -left-40 top-24 -z-10 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl" />
      <div className="absolute -right-28 top-12 -z-10 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Available
            for opportunities
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Building thoughtful{" "}
            <span className="text-[#af47ff]">web experiences</span> that
            perform.
          </h1>
          <p className="mt-6 text-lg font-semibold text-slate-600 sm:text-xl">
            Hi, I&apos;m Srinithin — Full-Stack Web Developer.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 lg:mx-0">
            I create responsive, scalable web applications with React, Next.js,
            TypeScript, Node.js, and MongoDB. I care about clean interfaces,
            reliable systems, and the small details that make products feel
            effortless.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <button
              onClick={() => router.push("/#Projects", { scroll: true })}
              className="inline-flex items-center gap-2 rounded-xl bg-[#1d2530] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-[#af47ff]"
            >
              View my work <ArrowRight size={17} />
            </button>
            <button
              onClick={() => router.push("/#Contact", { scroll: true })}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
            >
              <Mail size={17} /> Get in touch
            </button>
            <button
              onClick={downloadResume}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-slate-600 transition hover:bg-white hover:text-slate-900"
            >
              <Download size={17} /> Resume
            </button>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-medium text-slate-500 lg:justify-start">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-[#af47ff]" /> Coimbatore, India
            </span>
            <span className="hidden h-4 w-px bg-slate-300 sm:block" />
            <span>3+ years building for the web</span>
          </div>

          <div className="mt-6 flex justify-center gap-3 lg:justify-start">
            {socialMedia.map((media) => (
              <Link
                key={media.name}
                href={media.href}
                target="_blank"
                aria-label={media.name}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md"
              >
                <Image
                  src={media.image}
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-md">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.25rem] bg-linear-to-br from-violet-300/60 via-transparent to-sky-200/70 blur-xl" />
            <div className="relative rounded-4xl border border-white/80 bg-white p-3 shadow-2xl shadow-slate-300/60">
              <div className="relative overflow-hidden rounded-[1.45rem] bg-slate-200">
                <Image
                  alt="Srinithin Thangadurai"
                  src="/ada.png"
                  width={520}
                  height={430}
                  priority
                  className="aspect-[1.08] w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950/70 to-transparent px-5 pb-5 pt-16 text-white">
                  <p className="text-sm font-semibold">Full-stack developer</p>
                  <p className="mt-1 text-xs text-white/75">
                    React · Next.js · Node.js · TypeScript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
