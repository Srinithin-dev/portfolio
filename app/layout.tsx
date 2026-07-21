import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/essential/Navbar";
import { ActiveSectionProvider } from "./context/ActiveSectionContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Srinithin Thangadurai",
    template: "%s | Srinithin Thangadurai",
  },

  description:
    "Portfolio of Srinithin Thangadurai, Full Stack Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, REST APIs, and Microservices.",

  keywords: [
    "Srinithin",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ActiveSectionProvider>
          <NavBar />

          {children}
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
