import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import NavBar from "./components/essential/Navbar";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* Set this to the real deployed origin. Without metadataBase, Next emits
   relative OG image URLs, which Slack/LinkedIn/WhatsApp can't resolve — so
   shared links render with no preview card at all. */
const SITE_URL = "https://srinithin.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Srinithin Thangadurai — Full Stack Developer",
    template: "%s | Srinithin Thangadurai",
  },
  description:
    "Full Stack Developer in Coimbatore. Four years building web applications with React, Next.js, TypeScript, Node.js and MongoDB — currently at Fountain Hills Technologies.",
  keywords: [
    "Srinithin Thangadurai",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "API integrations",
    "Coimbatore",
  ],
  authors: [{ name: "Srinithin Thangadurai", url: SITE_URL }],
  creator: "Srinithin Thangadurai",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Srinithin Thangadurai",
    title: "Srinithin Thangadurai — Full Stack Developer",
    description:
      "Full-stack developer working across React, Next.js, Node.js and MongoDB — from UI to database.",
    locale: "en_IN",
    images: [
      {
        url: "/portfolioBanner.png",
        width: 1200,
        height: 630,
        alt: "Srinithin Thangadurai — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Srinithin Thangadurai — Full Stack Developer",
    description:
      "Full-stack developer working across React, Next.js, Node.js and MongoDB — from UI to database.",
    images: ["/portfolioBanner.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbfbfd",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /* The manual <head><link rel="icon" href="/icon.png"> is gone. There is
       no /public/icon.png, so it 404'd on every page load. app/icon.png
       already exists and Next wires that up automatically. */
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ActiveSectionProvider>
          <a
            href="#about"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>

          <NavBar />
          {children}
        </ActiveSectionProvider>

        {/* react-hot-toast was installed and `toast.success(...)` was being
            called from the contact form, but <Toaster /> was never mounted —
            so no toast has ever appeared. */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#16181d",
              color: "#fff",
              fontSize: "14px",
              borderRadius: "10px",
            },
          }}
        />
      </body>
    </html>
  );
}
