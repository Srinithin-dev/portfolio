import {
  BellRing,
  Blocks,
  Clock3,
  Construction,
  Layers3,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function UnderDevelopment() {
  return (
    <section className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_.9fr]">
      <div className="absolute -left-40 top-16 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">
          <Construction size={16} /> Under development
        </div>
        <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-slate-900 sm:text-6xl">
          Stack Visualizer is on its way.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
          I&apos;m building an interactive way to explore stacks: push, pop,
          peek, and see the LIFO principle come to life step by step.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
          >
            <Blocks size={17} /> Explore other tools
          </Link>
          <a
            href="mailto:srinithin@example.com?subject=Stack%20Visualizer%20updates"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
          >
            <BellRing size={17} /> Request an update
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-5 text-sm font-medium text-slate-500">
          <span className="inline-flex items-center gap-2">
            <Layers3 size={17} className="text-violet-600" /> Interactive
            operations
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 size={17} className="text-violet-600" /> Step-by-step
            learning
          </span>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-bold text-slate-700">Preview</span>
          <span className="flex items-center gap-1 text-xs font-bold text-violet-600">
            <Sparkles size={14} /> Coming soon
          </span>
        </div>
        <div className="space-y-3 rounded-2xl bg-slate-50 p-5">
          <div className="rounded-xl border-2 border-violet-300 bg-violet-50 px-4 py-4 font-semibold text-violet-800">
            42 <span className="float-right text-xs text-violet-500">TOP</span>
          </div>
          <div className="rounded-xl bg-white px-4 py-4 font-semibold text-slate-500 shadow-sm">
            17
          </div>
          <div className="rounded-xl bg-white px-4 py-4 font-semibold text-slate-500 shadow-sm">
            8
          </div>
          <div className="mt-5 border-t-2 border-slate-400 pt-3 text-center text-xs font-bold uppercase tracking-widest text-slate-400">
            Stack base
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2">
          <button
            disabled
            className="rounded-lg bg-slate-100 py-2 text-xs font-bold text-slate-400"
          >
            Push
          </button>
          <button
            disabled
            className="rounded-lg bg-slate-100 py-2 text-xs font-bold text-slate-400"
          >
            Pop
          </button>
          <button
            disabled
            className="rounded-lg bg-slate-100 py-2 text-xs font-bold text-slate-400"
          >
            Peek
          </button>
        </div>
      </div>
    </section>
  );
}
