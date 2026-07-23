import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import UnderDevelopment from "../components/visualizer/UnderDevelopment";
export default function StackVisualizerPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fafc] text-slate-800">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
          >
            <ArrowLeft size={17} /> Back to tools
          </Link>
          <Link href="/" className="font-black tracking-tight">
            &lt;ST /&gt;
          </Link>
        </div>
      </header>
      <UnderDevelopment />
      <section className="flex flex-col items-center">
        <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-slate-900 sm:text-6xl">
          Understanding Stacks
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
          Data Structure through interactive visualizations and real-world
          examples.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
          >
            Try the Visualizer
          </Link>
          <a
            href="mailto:srinithin@example.com?subject=Stack%20Visualizer%20updates"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
          >
            Start Learning
          </a>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">
          Basics
        </div>
        <div className="flex justify-between">
          <div className="relative mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
            <div className="space-y-3 rounded-2xl bg-slate-50 p-5">
              <ul className="list-disc marker:text-violet-500">
                <li>A stack is a linear data structure.</li>
                <li>It follows LIFO — Last In, First Out.</li>
                <li>The last item added is the first item removed.</li>
              </ul>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/70">
            <div className="space-y-3 rounded-2xl bg-slate-50 p-5">
              <div className="rounded-xl border-2 border-violet-300 bg-violet-50 px-4 py-4 font-semibold text-violet-800">
                42{" "}
                <span className="float-right text-xs text-violet-500">
                  Last In ← removed first
                </span>
              </div>
              <div className="rounded-xl bg-white px-4 py-4 font-semibold text-slate-500 shadow-sm">
                17
              </div>
              <div className="rounded-xl bg-white px-4 py-4 font-semibold text-slate-500 shadow-sm">
                27
              </div>
              <div className="rounded-xl bg-white px-4 py-4 font-semibold text-slate-500 shadow-sm">
                8{" "}
                <span className="float-right text-xs text-violet-500">
                  First In
                </span>
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
        </div>
      </section>
      <section className="flex flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">
          Interactive
        </div>
        <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-slate-900 sm:text-6xl">
          Stack Playground
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
          Push, pop and reset to watch the stack respond in real time.
        </p>
      </section>
    </main>
  );
}
