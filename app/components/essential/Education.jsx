import Image from "next/image";

const EDUCATION = [
  {
    /* Resume spells this "Sri Krishna College of Arts and Science" — matched
       so the CV and the site don't disagree. */
    name: "Sri Krishna College of Arts and Science",
    course: "M.Sc Software Systems",
    period: "2018 – 2023",
    result: "CGPA 8.0",
    description:
      "Five-year integrated programme covering software development and system design.",
    image: "/education.png",
  },
  {
    name: "PSG Sarvajana Higher Secondary School",
    course: "Higher Secondary — Biology & Mathematics",
    period: "2016 – 2018",
    description: "Bio-Maths stream.",
    image: "/school.png",
  },
];

export default function Education() {
  return (
    <div className="shell">
      <p className="eyebrow">Education</p>
      <h2 className="section-title">Academic background</h2>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {EDUCATION.map((item) => (
          <article key={item.name} className="card flex gap-4 p-6">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line bg-surface-2">
              <Image
                src={item.image}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
            </div>

            <div className="min-w-0">
              <h3 className="text-[15.5px] font-semibold leading-snug text-ink">
                {item.name}
              </h3>
              <p className="mt-1 text-[13.5px] font-medium text-accent-text">
                {item.course}
              </p>

              {/* The calendar PNG next to the date was hidden below lg
                  (`max-lg:hidden`), so the row had a phantom gap on mobile
                  where an invisible image used to be. Plain text now. */}
              <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[12.5px] text-ink-3">
                <span>{item.period}</span>
                {item.result && (
                  <>
                    <span aria-hidden>·</span>
                    <span>{item.result}</span>
                  </>
                )}
              </p>

              <p className="mt-3 text-[14px] leading-relaxed text-ink-2">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
