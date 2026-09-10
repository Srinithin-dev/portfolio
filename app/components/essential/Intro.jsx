import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { EMAIL, LINKEDIN_URL, GITHUB_URL } from "../../lib/profile";

const socials = [
  { name: "LinkedIn", href: LINKEDIN_URL, image: "/linkedin.png" },
  { name: "GitHub", href: GITHUB_URL, image: "/github.png" },
  { name: "Email", href: `mailto:${EMAIL}`, image: "/mail.png" },
];

/* Breadth first. The previous version led with integrations, which reads as
   "integration specialist" — a narrower role than the one being applied for.
   Full-stack is the claim; integrations is the differentiator underneath it. */
const capabilities = [
  {
    label: "Front end",
    value: "React · Next.js · TypeScript · Redux Toolkit",
  },
  { label: "Back end", value: "Node.js · Express · REST APIs · OAuth 2.0" },
  { label: "Data", value: "MongoDB · Cosmos DB" },
];

export default function Intro() {
  return (
    <div className="relative isolate overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-36">
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[26rem] w-[46rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="shell grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[13px] font-medium text-ink-2">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
            />
            Open to full-stack roles
          </div>

          <h1 className="mt-6 text-[2.1rem] font-semibold leading-[1.1] sm:text-5xl lg:text-[3.35rem]">
            Full-stack developer taking features{" "}
            <span className="text-accent-text">from UI to database.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-2">
            I&apos;m Srinithin. Four years building web applications — React
            and Next.js on the front, Node, Express and MongoDB behind them.
            I&apos;ve shipped a 12-page site with a CMS panel, a procurement
            module, and a reporting dashboard. The layer I&apos;m unusually
            good at is where two systems have to agree with each other.
          </p>

          {/* Says "full-stack" with evidence rather than adjectives, and it
              echoes the facts strip in the About section so the page has a
              consistent pattern instead of a one-off hero treatment. */}
          <dl className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.label}>
                <dt className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-ink-3">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-[13.5px] leading-relaxed text-ink">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-text"
            >
              See my work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-surface px-5 py-3 text-sm font-semibold text-ink-2 transition hover:border-accent-text hover:text-accent-text"
            >
              <Mail size={16} /> Get in touch
            </a>
            <a
              href="/resume.pdf"
              download="Srinithin-Thangadurai-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-ink-3 transition hover:bg-surface-2 hover:text-ink"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-[13px] text-ink-3">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} className="text-accent-text" />
              Coimbatore, India
            </span>
            <span className="h-3.5 w-px bg-line-strong" />
            <span>4 years professional experience</span>
            <span className="h-3.5 w-px bg-line-strong" />
            <span>Currently at Fountain Hills Technologies</span>
          </div>

          <div className="mt-7 flex gap-2">
            {socials.map((media) => (
              <Link
                key={media.name}
                href={media.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={media.name}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface transition hover:-translate-y-0.5 hover:border-accent-text"
              >
                <Image
                  src={media.image}
                  alt=""
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* The new photo is a transparent-background cutout, so it needs
            something behind it or it floats. A tinted rounded panel with the
            subject bottom-aligned makes the chest crop read as deliberate —
            `object-bottom` is what does that. No dark gradient overlay this
            time; it was cropping the face on narrow screens. */}
        <div className="order-1 mx-auto w-full max-w-[320px] lg:order-2 lg:max-w-[400px]">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-linear-to-b from-accent-wash to-surface-2">
            <div
              aria-hidden
              className="absolute inset-x-8 bottom-0 top-10 rounded-t-full bg-surface/60"
            />
            <Image
              alt="Srinithin Thangadurai"
              src="/srinithin.png"
              width={1278}
              height={1230}
              priority
              sizes="(max-width: 1024px) 320px, 400px"
              className="relative aspect-[1/1.05] w-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
