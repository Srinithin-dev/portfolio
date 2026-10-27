import { getYearsOfExperience } from "@/app/lib/profile";

export default function About() {
  const years = getYearsOfExperience();
  const facts = [
    { label: "Experience", value: `${years} years` },
    { label: "Currently", value: "Fountain Hills Technologies" },
    { label: "Role", value: "Full-stack (React / Node)" },
    { label: "Based in", value: "Coimbatore, India" },
  ];
  return (
    <div className="shell">
      <p className="eyebrow">About</p>
      <h2 className="section-title">How I got here, and what I&apos;m after</h2>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="max-w-2xl space-y-5 text-[16.5px] leading-relaxed text-ink-2">
          <p>
            I work across the stack and like owning a feature end to end, from
            the React component to the API and the database query behind it.
            Most of my work is in React, Next.js and TypeScript on the front
            end, and Node.js, Express, MongoDB and Cosmos DB on the back end,
            deployed on Azure App Service.
          </p>
          <p>
            I started at Konnectify in 2022, building Freshworks Marketplace
            apps. After shipping 10+ of them, I went on to lead a team
            of four on Konnectify&apos;s iPaaS platform, building integrations
            with Zoho Desk, Monday.com, HubSpot and Cliniko. At Fountain Hills
            Technologies, I built a reporting dashboard that pulls metrics from
            five security platforms and emails clients their monthly reports
            automatically, cutting manual reporting effort by about 70%.
          </p>
          <p>
            Integration work taught me to design for the edge cases: retries,
            partial syncs, rate limits, and upstream APIs that change without
            warning. That&apos;s where many production bugs come from, and
            it&apos;s the part of the job I&apos;ve become most comfortable
            with.
          </p>
          <p>
            Outside work, I keep strengthening my fundamentals. I&apos;ve
            completed Namaste JavaScript, React and Node.js, and built CineGPT
            (below) to put those patterns into practice, including calling an
            LLM API to turn plain-language requests into results. Right now
            I&apos;m going deeper into what happens beneath the abstractions:
            how a platform like Vercel builds, caches and serves a Next.js app,
            and how LLMs work inside, from tokens and embeddings to attention
            and the transformer architecture.
          </p>
          <p>
            I&apos;ve also recently started mentoring at Error Makes Clever, an
            edtech platform, where I teach full-stack development. Explaining a concept to learners is
            the best test I&apos;ve found of whether I really understand it.
          </p>
          <p>
            Next, I&apos;m looking for a full-stack role where I can own
            features end to end and work on systems at a larger scale.
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
