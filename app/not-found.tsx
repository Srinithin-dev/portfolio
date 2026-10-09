import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-6">
      <div className="w-full max-w-xl text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-3">
          Error 404
        </p>

        <h1 className="mt-5 text-[clamp(72px,15vw,150px)] font-bold leading-none tracking-[-0.06em] text-ink">
          404
        </h1>

        <div className="mx-auto mt-6 h-px w-16 bg-line-strong" />

        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          This page doesn&apos;t exist.
        </h2>

        <p className="mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-ink-2 sm:text-[15px]">
          The route you&apos;re looking for may have moved, been removed, or
          never existed in the first place.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-[13.5px] font-semibold text-white transition hover:bg-accent-text"
          >
            <Home size={14} />
            Back home
          </Link>

          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-surface px-4 py-2.5 text-[13.5px] font-semibold text-ink-2 transition hover:border-accent-text hover:text-accent-text"
          >
            View projects
            <ArrowLeft size={14} className="rotate-180" />
          </Link>
        </div>

        <p className="mt-12 font-mono text-[12px] text-ink-3">
          route_not_found()
        </p>
      </div>
    </main>
  );
}
