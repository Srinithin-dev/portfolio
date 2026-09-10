const facts = [
  { label: "Experience", value: "4 years" },
  { label: "Currently", value: "Fountain Hills Technologies" },
  /* Was "Integrations & internal tools" — too narrow to sit next to a
     full-stack claim in the hero. */
  { label: "Role", value: "Full-stack (React / Node)" },
  { label: "Based in", value: "Coimbatore, India" },
];

export default function About() {
  return (
    <div className="shell">
      <p className="eyebrow">About</p>
      <h2 className="section-title">How I got here, and what I&apos;m after</h2>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        {/* First person, specific, and it admits to something. Generic
            third-person "passionate developer" copy is the fastest way to
            make a portfolio read as templated. */}
        <div className="max-w-2xl space-y-5 text-[16.5px] leading-relaxed text-ink-2">
          <p>
            I work across the stack. On the front end that&apos;s React and
            Next.js with TypeScript and Redux Toolkit — responsive rebuilds,
            SEO work, a blog and CMS panel, a procurement module with dynamic
            form logic. On the back end it&apos;s Node and Express against
            MongoDB and Cosmos DB, deployed on Azure App Service. I&apos;m
            comfortable owning a feature from the component down to the query.
          </p>
          <p>
            I started at Konnectify in 2022 shipping Freshworks Marketplace
            apps, and ten of those later I was leading a team of four on an
            iPaaS platform — Zoho Desk, Monday.com, HubSpot, Cliniko. At
            Fountain Hills I built a reporting dashboard that aggregates
            metrics from five security platforms and mails clients their
            monthly report on a schedule, replacing a process that used to eat
            most of a week.
          </p>
          <p>
            That path means I&apos;m unusually comfortable with the seams —
            retries, partial syncs, rate limits, the upstream field that
            silently changed shape. It&apos;s not the only thing I do, but
            it&apos;s the part most people would rather not, and I&apos;ve
            learned it&apos;s where most production bugs actually live.
          </p>
          <p>
            Outside work I go back over fundamentals deliberately. I finished
            Namaste JavaScript, React and Node, and CineGPT below came out of
            those — I wanted somewhere to actually use the patterns rather
            than just watch them. The DSA visualizers were the same idea:
            easier to understand a structure when you can watch it move.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-7 self-start lg:grid-cols-1 lg:border-l lg:border-line lg:pl-8">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-ink-3">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-[15px] font-medium text-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
