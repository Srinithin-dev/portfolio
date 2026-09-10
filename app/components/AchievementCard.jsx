import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function AchievementCard({ achievement }) {
  return (
    /* `h-full` + `flex-col` + `flex-1` on the description is what keeps the
       four cards the same height and their buttons on one line. Without it
       the grid rows stretched to the tallest card but each card's footer
       floated wherever its own text ended. */
    <article className="card flex h-full flex-col p-6 transition-colors hover:border-line-strong">
      <div className="flex items-start gap-3">
        {/* Logos were rendering at 125×125 inside a card with ~250px of
            usable width, so they dominated the card and pushed the title
            below the fold of the visible area. */}
        <div className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-lg border border-line bg-surface-2">
          <Image
            src={achievement.icon}
            alt=""
            width={40}
            height={40}
            className="h-8 w-8 object-contain"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-[15.5px] font-semibold leading-snug text-ink">
            {achievement.title}
          </h3>
          <p className="mt-0.5 text-[12.5px] text-ink-3">
            {achievement.organization}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-accent-wash px-2.5 py-1 text-[11.5px] font-semibold text-accent-text">
          {achievement.status}
        </span>
        <span className="font-mono text-[11.5px] text-ink-3">
          {achievement.year}
        </span>
      </div>

      <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-ink-2">
        {achievement.description}
      </p>

      <a
        href={achievement.certificate}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-lg border border-line-strong bg-surface px-4 py-2 text-[13px] font-semibold text-ink-2 transition hover:border-accent-text hover:text-accent-text"
      >
        Certificate <ExternalLink size={13} />
      </a>
    </article>
  );
}
