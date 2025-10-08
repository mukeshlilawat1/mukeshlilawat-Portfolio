import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/themContext";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://mukeshlilawat.online/"), // ⚡ Production domain
  title: "Mukesh Lilawat – Full-Stack Developer & AI/ML Enthusiast",
  description:
    "Mukesh Lilawat – Full-Stack Developer with expertise in Java, React, Spring Boot & AI/ML. Explore projects, portfolio, and innovative web apps.",
  keywords: [
    "Mukesh Lilawat",
    "Full-Stack Developer",
    "AI",
    "Machine Learning",
    "Java Developer",
    "React Developer",
    "Spring Boot",
    "Portfolio",
    "Web Applications",
  ],
  authors: [{ name: "Mukesh Lilawat", url: "https://mukeshlilawat.online" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Mukesh Lilawat – Full-Stack Developer & AI/ML Enthusiast",
    description:
      "Passionate Full-Stack Developer Mukesh Lilawat creating innovative web apps using Java, React, Spring Boot & AI/ML.",
    url: "/",
    siteName: "Mukesh Lilawat Portfolio",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Mukesh Lilawat – Full-Stack Developer Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukesh Lilawat – Full-Stack Developer & AI/ML Enthusiast",
    description:
      "Explore Mukesh Lilawat's projects and portfolio: Java, React, Spring Boot & AI/ML web applications.",
    images: ["/api/og"],
    site: "@coder_lilawat",
    creator: "@coder_lilawat",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white transition-colors dark:bg-gray-900 dark:text-white`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
