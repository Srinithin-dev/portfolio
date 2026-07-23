import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CircleHelp,
  Sparkles,
  Wrench,
} from "lucide-react";

const toolDetails: Record<
  string,
  {
    name: string;
    description: string;
    category: string;
    accent: string;
    fields: string[];
  }
> = {
  "url-shortener": {
    name: "URL Shortener",
    description:
      "Create compact links for sharing across your projects and profiles.",
    category: "Link Tools",
    accent: "violet",
    fields: ["Paste a long URL", "Custom alias (optional)"],
  },
  "url-metadata-preview": {
    name: "URL Metadata Preview",
    description:
      "Preview the title, description, and image a shared link may display.",
    category: "Link Tools",
    accent: "sky",
    fields: ["Paste a URL"],
  },
  "color-picker": {
    name: "Color Picker",
    description:
      "Choose a colour and view its common web format values at a glance.",
    category: "Design",
    accent: "rose",
    fields: ["#AF47FF"],
  },
  "gradient-generator": {
    name: "Gradient Generator",
    description:
      "Compose a smooth gradient for your next interface or visual treatment.",
    category: "Design",
    accent: "violet",
    fields: ["First colour", "Second colour"],
  },
  "box-shadow-generator": {
    name: "Box Shadow Generator",
    description:
      "Design a refined shadow treatment and copy the resulting CSS.",
    category: "Design",
    accent: "slate",
    fields: ["Shadow colour", "Blur value"],
  },
  "image-converter": {
    name: "Image Converter",
    description:
      "Prepare images for the web with a clear, simple conversion workspace.",
    category: "Images",
    accent: "emerald",
    fields: ["Choose an image", "Output format"],
  },
  "json-formatter": {
    name: "JSON Formatter",
    description:
      "A calm workspace for inspecting, formatting, and validating JSON data.",
    category: "Dev Tools",
    accent: "amber",
    fields: ["Paste JSON"],
  },
  "code-snippet-cleaner": {
    name: "Code Snippet Cleaner",
    description:
      "A focused place to prepare code snippets before sharing them.",
    category: "Text",
    accent: "indigo",
    fields: ["Paste your code"],
  },
};

export default async function ToolTemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = toolDetails[slug] ?? toolDetails["url-shortener"];
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-800">
      <header className="border-y border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft size={17} /> Back to tools
          </Link>
          <Link href="/" className="font-black tracking-tight">
            &lt;ST /&gt;
          </Link>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">
            <Wrench size={16} /> {tool.category}
          </p>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            {tool.name}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            {tool.description}
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <p className="font-bold text-slate-900">Workspace</p>
                <p className="mt-1 text-sm text-slate-500">
                  UI preview — functionality coming later
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                Draft
              </span>
            </div>
            <div className="mt-6 space-y-4">
              {tool.fields.map((field) => (
                <label key={field} className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">
                    {field}
                  </span>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-400">
                    {field === "Paste JSON" || field === "Paste your code"
                      ? "Your content will appear here..."
                      : field}
                  </div>
                </label>
              ))}
              <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-400">
                <Sparkles className="mx-auto mb-2 text-violet-400" size={22} />{" "}
                Result preview
              </div>
              <button
                disabled
                className="w-full rounded-xl bg-slate-800 px-4 py-3 text-sm font-bold text-white/70"
              >
                Generate result
              </button>
            </div>
          </div>
          <aside className="space-y-5">
            <div className="rounded-3xl border border-violet-100 bg-violet-50 p-6">
              <Sparkles className="text-violet-600" size={24} />
              <h2 className="mt-4 font-bold text-slate-900">
                Designed for clarity
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                This tool interface is ready for the final logic, while staying
                clean and easy to use on every screen size.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="font-bold text-slate-900">
                What this UI includes
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {[
                  "Focused input workspace",
                  "Result preview area",
                  "Mobile-friendly layout",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check size={16} className="text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/tools"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet-700"
              >
                More tools <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-slate-500">
              <CircleHelp size={18} /> Need a tool added? Let&apos;s talk.
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
