import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/themContext";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mukesh Lilawat",
  url: "https://mukeshlilawat.online",
  image: "https://mukeshlilawat.online/profile.jpg",
  sameAs: [
    "https://github.com/mukeshlilawat1",
    "https://www.linkedin.com/in/mukeshlilawat1",
    "https://medium.com/@mukeshlilawat",
    "https://www.wikidata.org/wiki/Q138586453",
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Lilawat Tech",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mukeshlilawat.online/"),
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
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Mukesh Lilawat – Full-Stack Developer & AI/ML Enthusiast",
    description:
      "Passionate Full-Stack Developer creating innovative web apps using Java, React, Spring Boot & AI/ML.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>

      <body
        className={`
          ${geistSans.variable} ${geistMono.variable}
          antialiased
          min-h-screen
          text-gray-900 dark:text-gray-100
          transition-colors duration-300
          /* ── Light mode: soft warm-white base ── */
          bg-[#f8f7ff]
          /* ── Dark mode: true deep ink ── */
          dark:bg-[#09090f]
        `}
        style={{
          /*
           * Light: very subtle violet-tinted white with a faint radial glow
           * Dark:  deep space-ink with a soft indigo aurora at the top
           */
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -10%,
              rgba(99,102,241,0.08) 0%,
              transparent 70%)
          `,
        }}
      >
        {/* Global noise texture overlay — adds depth without being heavy */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        <ThemeProvider>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
