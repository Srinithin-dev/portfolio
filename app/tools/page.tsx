"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Blocks,
  Braces,
  CheckCircle2,
  Code2,
  Compass,
  ExternalLink,
  FileCode2,
  Globe2,
  ImageIcon,
  Link2,
  LockKeyhole,
  Palette,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";

type Tool = {
  name: string;
  description: string;
  category: string;
  icon: React.ElementType;
  status?: "Coming soon";
  href?: string;
};

const tools: Tool[] = [
  { name: "Stack Visualizer", description: "Learn LIFO operations through an interactive visual guide.", category: "Dev Tools", icon: Blocks, status: "Coming soon", href: "/dsa-visualizer" },
  { name: "URL Shortener", description: "Create tidy, shareable links for your portfolio and projects.", category: "Link Tools", icon: Link2, status: "Coming soon" },
  { name: "URL Metadata Preview", description: "See how a link will appear when shared on social media.", category: "Link Tools", icon: Globe2, status: "Coming soon" },
  { name: "Color Picker", description: "Pick, copy, and convert colours for your next interface.", category: "Design", icon: Palette, status: "Coming soon" },
  { name: "Gradient Generator", description: "Create polished CSS gradients with a simple visual editor.", category: "Design", icon: Sparkles, status: "Coming soon" },
  { name: "Box Shadow Generator", description: "Build soft, layered CSS shadows without guesswork.", category: "Design", icon: Compass, status: "Coming soon" },
  { name: "Image Converter", description: "Convert images between common web-friendly formats.", category: "Images", icon: ImageIcon, status: "Coming soon" },
  { name: "JSON Formatter", description: "Format, validate, and read JSON data more clearly.", category: "Dev Tools", icon: Braces, status: "Coming soon" },
  { name: "Code Snippet Cleaner", description: "Quickly tidy snippets before sharing them with your team.", category: "Text", icon: FileCode2, status: "Coming soon" },
];

const categories = ["All", ...Array.from(new Set(tools.map((tool) => tool.category)))];

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredTools = useMemo(
    () => tools.filter((tool) =>
      (activeCategory === "All" || tool.category === activeCategory) &&
      `${tool.name} ${tool.description} ${tool.category}`.toLowerCase().includes(query.toLowerCase()),
    ),
    [activeCategory, query],
  );

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-16 text-[#1d2939]">
      <header className="border-y border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="text-xl font-black tracking-tight text-slate-800">&lt;ST /&gt;</Link>
          <Link href="/" className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900">Portfolio</Link>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top,#eef2ff,transparent_55%)] px-5 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm"><Compass size={16} /> Personal developer toolkit</div>
          <h1 className="text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-6xl">Small tools for sharper workflows.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">A growing collection of practical utilities for developers, designers, and builders. Each one is made to remove a little friction from everyday work.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"><Code2 size={16} /> Developer-first</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"><LockKeyhole size={16} /> Privacy-minded</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm"><Wrench size={16} /> Always improving</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="mb-10 rounded-2xl border border-violet-200 bg-violet-50 px-5 py-5 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-start gap-4"><span className="rounded-xl bg-violet-100 p-3 text-violet-600"><Sparkles size={22} /></span><div><h2 className="font-bold text-slate-900">Tools are actively being built</h2><p className="mt-1 text-sm text-slate-500">The Stack Visualizer is next in line. Browse the roadmap and check back for new releases.</p></div></div>
          <a href="#tool-directory" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-violet-700 hover:text-violet-900 sm:mt-0">Explore the directory <ArrowUpRight size={16} /></a>
        </div>

        <div id="tool-directory" className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-8 lg:flex-row lg:items-center">
          <div className="flex flex-wrap gap-2">{categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${activeCategory === category ? "bg-slate-800 text-white shadow-sm" : "bg-white text-slate-500 hover:bg-slate-100"}`}>{category}</button>)}</div>
          <label className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-400 lg:w-80"><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search for any tool..." className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none" /></label>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate-500"><Wrench size={17} /> {filteredTools.length} tools in this collection <span className="text-slate-300">•</span> all currently in development</div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredTools.map((tool) => {
            const Icon = tool.icon;
            const content = <><div className="flex items-start justify-between"><span className="rounded-2xl bg-slate-100 p-3 text-slate-700"><Icon size={24} /></span><span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">{tool.status}</span></div><h3 className="mt-6 text-lg font-bold text-slate-900">{tool.name}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{tool.description}</p><div className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-600">{tool.href ? <>View progress <ExternalLink size={16} /></> : <>In the workshop <CheckCircle2 size={16} /></>}</div></>;
            return tool.href ? <Link key={tool.name} href={tool.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg">{content}</Link> : <article key={tool.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">{content}</article>;
          })}
        </div>
        {!filteredTools.length && <div className="py-20 text-center text-slate-500"><BarChart3 className="mx-auto mb-3" />No tools match that search yet.</div>}
      </section>

      <footer className="border-t border-slate-200 px-5 py-10 text-center text-sm text-slate-500"><p>Built by Srinithin Thangadurai — small tools, thoughtfully made.</p></footer>
    </main>
  );
}
