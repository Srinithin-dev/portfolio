import Image from "next/image";

/* Grouped to match the resume so the two documents agree. `src` is optional —
   a skill with no logo renders as a text chip instead of a broken image. */
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
      { label: "OAuth 2.0" },
      { label: "Webhooks" },
    ],
  },
  {
    name: "Data",
    items: [{ label: "MongoDB", src: "/mongodb.png" }, { label: "Cosmos DB" }],
  },
  {
    name: "Tooling & Cloud",
    items: [
      { label: "Azure App Service" },
      { label: "Git", src: "/git.png" },
      { label: "GitHub", src: "/github.png" },
      { label: "Postman", src: "/postman.png" },
      { label: "Jira", src: "/jira.png" },
      { label: "VS Code", src: "/vs-code.png" },
    ],
  },
];

/* BUG THIS REPLACES:
     unoptimized={skill.src.split(".")[0] == "gif"}
   For "/react.gif", split(".")[0] is "/react" — never the string "gif". So
   the condition was always false, every .gif went through the Next image
   optimizer, and animated GIFs came out as a single static frame. */
const isGif = (src = "") => src.toLowerCase().endsWith(".gif");

function SkillChip({ item }) {
  return (
    /* No cursor-pointer and no hover:scale. These aren't interactive — a
       pointer cursor on a non-clickable card teaches people to distrust
       every other cursor on the page. */
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

      {/* Four labelled columns instead of three full-width bands of 32px
          icons in 128px boxes. Same information, a third of the height, and
          the groups can be compared side by side. */}
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
