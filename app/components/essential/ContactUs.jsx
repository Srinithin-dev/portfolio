import Image from "next/image";
import Link from "next/link";
import FormSubmission from "../FormSubmission";
import {
  EMAIL,
  WHATSAPP_URL,
  LINKEDIN_URL,
  MAPS_URL,
} from "../../lib/profile";

const CONTACT_LINKS = [
  {
    label: "Email",
    subLabel: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: "/gmail.png",
  },
  {
    label: "WhatsApp",
    subLabel: "Message me",
    href: WHATSAPP_URL,
    icon: "/whatsapp.png",
    external: true,
  },
  {
    label: "LinkedIn",
    subLabel: "Connect",
    href: LINKEDIN_URL,
    icon: "/linkdn.png",
    external: true,
  },
  {
    label: "Location",
    subLabel: "Coimbatore, India",
    href: MAPS_URL,
    icon: "/loc.png",
    external: true,
  },
];

export default function ContactUs() {
  return (
    <div className="shell">
      <p className="eyebrow">Contact</p>
      <h2 className="section-title">Get in touch</h2>
      <p className="section-lead">
        Open to full-stack roles and happy to talk through a problem either
        way. Email is fastest.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
        <div className="grid grid-cols-1 gap-3 self-start sm:grid-cols-2 lg:grid-cols-1">
          {CONTACT_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              /* Was a centred 4-across grid of hover:scale-105 tiles. Scaling
                 a bordered card on hover makes the 1px border visibly
                 blur — a colour/border change is steadier, and left-aligned
                 rows are easier to scan than centred ones. */
              className="card flex items-center gap-3.5 p-4 transition-colors hover:border-accent-text"
            >
              <Image
                src={item.icon}
                alt=""
                width={22}
                height={22}
                className="h-[22px] w-[22px] shrink-0 object-contain"
              />
              <span className="min-w-0">
                <span className="block text-[14px] font-semibold text-ink">
                  {item.label}
                </span>
                <span className="block truncate text-[13px] text-ink-3">
                  {item.subLabel}
                </span>
              </span>
            </Link>
          ))}
        </div>

        <FormSubmission />
      </div>
    </div>
  );
}
