import { NAME, GITHUB_URL, LINKEDIN_URL, EMAIL } from "../../lib/profile";

const LINKS = [
  { label: "GitHub", href: GITHUB_URL, external: true },
  { label: "LinkedIn", href: LINKEDIN_URL, external: true },
  { label: "Email", href: `mailto:${EMAIL}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="shell flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-[13px] text-ink-3">
          © {new Date().getFullYear()} {NAME}
        </p>

        <div className="flex items-center gap-5">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-[13px] text-ink-3 transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#top"
            className="text-[13px] text-ink-3 transition hover:text-ink"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
