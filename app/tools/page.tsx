import Link from "next/link";
import {
  ArrowUpRight,
  Blocks,
  Braces,
  Compass,
  FileCode2,
  Globe2,
  ImageIcon,
  Link2,
  Palette,
  Sparkles,
  Wrench,
} from "lucide-react";

const tools = [
  {
    slug: "url-shortener",
    name: "URL Shortener",
    description:
      "Create tidy, shareable links for your portfolio and projects.",
    category: "Link Tools",
    icon: Link2,
  },
  {
    slug: "url-metadata-preview",
    name: "URL Metadata Preview",
    description: "Preview how your link appears when shared on social media.",
    category: "Link Tools",
    icon: Globe2,
  },
  {
    slug: "color-picker",
    name: "Color Picker",
    description: "Pick, copy, and convert colours for your next interface.",
    category: "Design",
    icon: Palette,
  },
  {
    slug: "gradient-generator",
    name: "Gradient Generator",
    description: "Create polished CSS gradients with a visual editor.",
    category: "Design",
    icon: Sparkles,
  },
  {
    slug: "box-shadow-generator",
    name: "Box Shadow Generator",
    description: "Build soft, layered CSS shadows without guesswork.",
    category: "Design",
    icon: Compass,
  },
  {
    slug: "image-converter",
    name: "Image Converter",
    description: "Convert images between common web-friendly formats.",
    category: "Images",
    icon: ImageIcon,
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    description: "Format and validate JSON data in a clearer workspace.",
    category: "Dev Tools",
    icon: Braces,
  },
  {
    slug: "code-snippet-cleaner",
    name: "Code Snippet Cleaner",
    description: "Tidy snippets before sharing them with your team.",
    category: "Text",
    icon: FileCode2,
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]   text-[#1d2939]">
      <header className="border-y border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">
            &lt;ST /&gt;
          </Link>
          <Link
            href="/"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100"
          >
            Portfolio
          </Link>
        </div>
      </header>
      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top,#eef2ff,transparent_55%)] px-5 py-16 text-center sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
            <Compass size={16} /> Personal developer toolkit
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-slate-900 sm:text-5xl">
            Small tools for sharper workflows.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            A UI collection of practical utilities for developers, designers,
            and builders. Select any card to view its individual tool interface.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-8 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700">
              <Wrench size={16} /> Tool templates
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Explore the collection
            </h2>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <Link
            href="/dsa-visualizer"
            className="group rounded-2xl border border-violet-200 bg-violet-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <span className="rounded-2xl bg-white p-3 text-violet-700">
                <Blocks size={24} />
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-violet-700">
                DSA
              </span>
            </div>
            <h3 className="mt-6 text-lg font-bold text-slate-900">
              Stack Visualizer
            </h3>
            <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
              A visual draft for learning stack operations and the LIFO
              principle.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-violet-700">
              Open Tool <ArrowUpRight size={16} />
            </div>
          </Link>
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-2xl bg-slate-100 p-3 text-slate-700">
                    <Icon size={24} />
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                    {tool.category}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {tool.name}
                </h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                  {tool.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-600">
                  Open Tool <ArrowUpRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
