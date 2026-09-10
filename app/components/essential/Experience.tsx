import Image from "next/image";
import { ExternalLink } from "lucide-react";

type Role = {
  role: string;
  period: string;
  present?: boolean;
  points: string[];
  tech?: string[];
};

type Company = {
  company: string;
  location: string;
  link: string;
  /* Renamed from `expirences`. Also now always an array — the old shape had
     either a top-level role OR a nested list, so the component carried two
     near-identical 40-line render branches that had already drifted apart
     (one showed the calendar icon, the other didn't). */
  roles: Role[];
};

const EXPERIENCE: Company[] = [
  {
    company: "Fountain Hills Technologies",
    location: "Gandhipuram, Coimbatore",
    link: "https://www.linkedin.com/company/fountain-hills-technologies/",
    roles: [
      {
        role: "Full Stack Developer",
        period: "Aug 2024 – Present",
        present: true,
        points: [
          "Revamped the company website across 10–12 pages with Next.js, Tailwind CSS, Cosmos DB and Azure App Service, including a responsive rebuild, SEO work and a blog/CMS panel.",
          "Built API-driven integrations between Datto RMM, Zoho Desk, Threat Mate, CrowdStrike and Perception Point, automating alert-to-ticket workflows and scheduled data synchronisation.",
          "Developed a security and support reporting dashboard that aggregates monthly platform metrics and emails client reports automatically — cutting manual reporting effort by roughly 70%.",
          "Built the Quote Builder module for a procurement platform in React, Node.js and MongoDB, with dynamic quote fields and quote-generation workflows.",
        ],
        tech: [
          "Next.js",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Cosmos DB",
          "Azure App Service",
          "Tailwind CSS",
          "REST APIs",
        ],
      },
    ],
  },
  {
    company: "Konnectify",
    location: "Gandhipuram, Coimbatore",
    link: "https://www.linkedin.com/company/konnectifyco/",
    roles: [
      {
        role: "Full Stack Developer",
        /* The site said "Jun 2023 – July 2024" and the resume said
           "Aug 2023 – July 2024". Using the resume — a recruiter comparing
           the two will read any mismatch as carelessness. */
        period: "Aug 2023 – July 2024",
        points: [
          "Led a team of four developers building an iPaaS ecosystem with SaaS integrations including Zoho Desk, Monday.com, HubSpot and Cliniko, delivering multiple application integrations in parallel.",
          "Built and maintained those integrations with React, Node.js, REST APIs, MongoDB and OAuth 2.0 — triggers, actions and data mapping — working from third-party API docs through testing, troubleshooting and production delivery.",
        ],
        tech: [
          "React.js",
          "Node.js",
          "MongoDB",
          "REST APIs",
          "OAuth 2.0",
          "Webhooks",
        ],
      },
      {
        role: "Junior Software Developer",
        period: "Aug 2022 – May 2023",
        points: [
          "Delivered 10+ Freshworks Marketplace integrations across Freshdesk, Freshsales, Freshchat and Freshservice using JavaScript, REST APIs and the Freshworks SDKs.",
          "Shipped published apps including Parent Child & Grandchild and ZoomInfo Sales, covering API integration, data mapping, workflow logic, testing and support.",
        ],
        tech: ["JavaScript", "REST APIs", "Freshworks SDKs"],
      },
    ],
  },
  {
    company: "PUMO Technovation",
    location: "Gandhipuram, Coimbatore",
    link: "https://www.linkedin.com/company/pumo-technovation-india-private-limited/",
    roles: [
      {
        role: "Software Developer Intern",
        period: "May 2022 – Aug 2022",
        points: [
          "Built UI components and shipped website improvements with HTML, CSS, JavaScript and Bootstrap.",
        ],
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      },
    ],
  },
];

function RoleBlock({ role, isLast }: { role: Role; isLast: boolean }) {
  return (
    <div className={isLast ? "" : "border-b border-line pb-6"}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h4 className="text-[15px] font-semibold text-ink">{role.role}</h4>
        <p className="font-mono text-[12.5px] text-ink-3">{role.period}</p>
      </div>

      <ul className="mt-3 space-y-2">
        {role.points.map((point) => (
          <li
            key={point}
            className="relative pl-4 text-[14.5px] leading-relaxed text-ink-2"
          >
            <span
              aria-hidden
              className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-accent"
            />
            {point}
          </li>
        ))}
      </ul>

      {role.tech && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {role.tech.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <div className="shell">
      <p className="eyebrow">Experience</p>
      <h2 className="section-title">Where I&apos;ve worked</h2>

      {/* Was: two decorative corner brackets, a floating gradient dot, a
          gradient vertical rule, a drop shadow AND group-hover:scale-125 on
          the dot — per card. A single hairline rail with one marker reads as
          a timeline without the noise. And the card no longer claims
          `cursor-pointer` when nothing is clickable. */}
      <div className="relative mt-12">
        <div
          aria-hidden
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line sm:block"
        />

        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((company) => (
            <article key={company.company} className="relative sm:pl-10">
              <span
                aria-hidden
                className="absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border-2 border-page bg-accent ring-1 ring-line sm:block"
              />

              <div className="card p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="flex items-center gap-1.5 text-[17px] font-semibold text-ink">
                      <a
                        href={company.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent-text hover:underline"
                      >
                        {company.company}
                      </a>
                      <ExternalLink size={13} className="text-ink-3" />
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-[13px] text-ink-3">
                      <Image
                        src="/location.png"
                        alt=""
                        width={13}
                        height={13}
                        className="opacity-70"
                      />
                      {company.location}
                    </p>
                  </div>

                  {company.roles.some((role) => role.present) && (
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11.5px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                      Current
                    </span>
                  )}
                </div>

                <div className="mt-6 flex flex-col gap-6">
                  {company.roles.map((role, index) => (
                    <RoleBlock
                      key={role.role}
                      role={role}
                      isLast={index === company.roles.length - 1}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
