import Image from "next/image";
import { ExternalLink, Github, Lock } from "lucide-react";

type Project = {
  title: string;
  blurb: string;
  detail?: string;
  stack: string[];
  cover?: string;
  demoLink?: string;
  repoLink?: string;
  /* Work built inside a company — no public link, and saying so is better
     than a dead "Live Demo" button. */
  internal?: boolean;
  context?: string;
};

const FEATURED: Project = {
  title: "CineGPT",
  blurb: "AI-powered movie discovery, for the searches genre filters can't do.",
  detail:
    "A Netflix-style browse experience with a second search mode on top: describe a mood, a genre mashup, or a scene you half-remember, and Gemini resolves it into real titles via TMDB. Firebase auth with protected routes, Redux Toolkit for state, and a multi-language UI (English, Hindi, Tamil).",
  stack: [
    "React.js",
    "Redux Toolkit",
    "Firebase Auth",
    "Firestore",
    "TMDB API",
    "Gemini API",
    "Tailwind CSS",
  ],
  cover: "/cinegpt.png",
  demoLink: "https://cine-gpt-srinithin.vercel.app",
  repoLink: "https://github.com/Srinithin-dev/netflix-GPT",
};

const WORK: Project[] = [
  {
    title: "Security & Support Reporting Dashboard",
    blurb:
      "Aggregates monthly metrics across five security platforms and emails client reports on a schedule.",
    stack: ["Next.js", "Node.js", "Cosmos DB", "REST APIs", "Azure"],
    internal: true,
    context: "Fountain Hills Technologies",
  },
  {
    title: "Quote Builder",
    blurb:
      "Procurement module with dynamic quote fields and a quote-generation workflow, built for vendor approvals.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    internal: true,
    context: "Fountain Hills Technologies",
  },
  {
    title: "Freshworks Marketplace Apps",
    blurb:
      "Two published integrations — Parent Child & Grandchild, and ZoomInfo Sales — plus eight more across the Freshworks suite.",
    stack: ["JavaScript", "Freshworks SDK", "REST APIs"],
    demoLink: "https://www.freshworks.com/apps/",
    context: "Konnectify",
  },
];

function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-1.5">
      {stack.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  return (
    <div className="shell">
      <p className="eyebrow">Projects</p>
      <h2 className="section-title">Things I&apos;ve built</h2>
      <p className="section-lead">
        One side project I keep extending, and a few pieces of work from the
        day job. The company work is closed-source, so those are descriptions
        rather than links.
      </p>

      {/* Featured: two-column so CineGPT gets room to be explained rather
          than compressed into a 300px card. The old grid was
          `lg:grid-cols-3` holding a single item, which left two empty
          columns and made the section look unfinished. */}
      <article className="card mt-10 overflow-hidden lg:grid lg:grid-cols-[1.05fr_1fr]">
        <div className="relative aspect-[16/10] w-full border-b border-line bg-surface-2 lg:aspect-auto lg:border-b-0 lg:border-r">
          {FEATURED.cover ? (
            <Image
              src={FEATURED.cover}
              alt={`${FEATURED.title} screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-left-top"
            />
          ) : (
            <div className="grid h-full place-items-center text-[13px] text-ink-3">
              Screenshot coming
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-accent-wash px-2.5 py-1 text-[11.5px] font-semibold text-accent-text">
              Featured
            </span>
            <span className="text-[12.5px] text-ink-3">Side project</span>
          </div>

          <h3 className="mt-4 text-[22px] font-semibold text-ink">
            {FEATURED.title}
          </h3>
          <p className="mt-1.5 text-[15px] font-medium text-ink-2">
            {FEATURED.blurb}
          </p>
          <p className="mt-4 text-[14.5px] leading-relaxed text-ink-2">
            {FEATURED.detail}
          </p>

          <StackList stack={FEATURED.stack} />

          <div className="mt-7 flex flex-wrap gap-2.5">
            <a
              href={FEATURED.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-[13.5px] font-semibold text-white transition hover:bg-accent-text"
            >
              Live demo <ExternalLink size={14} />
            </a>
            <a
              href={FEATURED.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-4 py-2.5 text-[13.5px] font-semibold text-ink-2 transition hover:border-accent-text hover:text-accent-text"
            >
              <Github size={14} /> Source
            </a>
          </div>
        </div>
      </article>

      <h3 className="mt-14 border-b border-line pb-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-3">
        Professional work
      </h3>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WORK.map((project) => (
          <article
            key={project.title}
            className="card flex flex-col p-6 transition-colors hover:border-line-strong"
          >
            {project.context && (
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-ink-3">
                {project.context}
              </p>
            )}
            <h4 className="mt-2 text-[16px] font-semibold leading-snug text-ink">
              {project.title}
            </h4>
            <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-2">
              {project.blurb}
            </p>

            <StackList stack={project.stack} />

            <div className="mt-5">
              {project.internal ? (
                <p className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-3">
                  <Lock size={12} /> Internal — not publicly available
                </p>
              ) : (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent-text hover:underline"
                >
                  View on Marketplace <ExternalLink size={13} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
