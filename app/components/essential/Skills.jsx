import Image from "next/image";

const GROUPS = [
  {
    name: "Frontend",
    items: [
      { label: "React.js", src: "/react.gif" },
      { label: "Next.js", src: "/next.gif", rotate: "-rotate-90" },
      { label: "TypeScript", src: "/typescript.png" },
      { label: "JavaScript", src: "/javascript.gif" },
      { label: "Redux Toolkit", src: "/redux.png" },
      { label: "Tailwind CSS", src: "/tailwind.png" },
      { label: "HTML5", src: "/html.gif" },
      { label: "CSS", src: "/css.png" },
    ],
  },
  {
    name: "Backend & APIs",
    items: [
      { label: "Node.js", src: "/node.png" },
      { label: "Express.js", src: "/express.png" },
      { label: "REST APIs", src: "/rest.png" },
      { label: "OAuth 2.0", src: "/oauth.png" },
      { label: "Webhooks", src: "/webhook.png" },
    ],
  },
  {
    name: "Data",
    items: [
      { label: "MongoDB", src: "/mongodb.png" },
      { label: "Cosmos DB", src: "/space.png" },
    ],
  },
  {
    name: "Tooling & Cloud",
    items: [
      { label: "Azure App Service", src: "/azure.png" },
      { label: "Git", src: "/git.png" },
      { label: "GitHub", src: "/github.png" },
      { label: "Postman", src: "/postman.png" },
      { label: "Jira", src: "/jira.png" },
      { label: "VS Code", src: "/vs-code.png" },
    ],
  },
];

const isGif = (src = "") => src.toLowerCase().endsWith(".gif");

function SkillChip({ item }) {
  return (
    <li className="flex items-center gap-2.5 rounded-xl border border-line bg-surface px-3 py-2.5 transition-colors hover:border-line-strong">
      {item.src ? (
        <Image
          src={item.src}
          alt=""
          width={20}
          height={20}
          unoptimized={isGif(item.src)}
          className={`h-5 w-5 shrink-0 object-contain ${item.rotate ?? ""}`}
        />
      ) : (
        <span
          aria-hidden
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
        />
      )}
      <span className="text-[13.5px] font-medium text-ink">{item.label}</span>
    </li>
  );
}

export default function Skills() {
  return (
    <div className="shell">
      <p className="eyebrow">Stack</p>
      <h2 className="section-title">What I work with</h2>
      <p className="section-lead">
        Day-to-day tools on the left of each row. I&apos;m strongest in the
        React/Node half of this list — the cloud and tooling side I know well
        enough to ship with, not to architect from scratch.
      </p>

      <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((group) => (
          <div key={group.name}>
            <h3 className="border-b border-line pb-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-3">
              {group.name}
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {group.items.map((item) => (
                <SkillChip key={item.label} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
