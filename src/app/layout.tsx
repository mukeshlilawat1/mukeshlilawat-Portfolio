import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://mukeshlilawat.online/#person",
    name: "Mukesh Lilawat",
    url: "https://mukeshlilawat.online",
    image: "https://mukeshlilawat.online/profile.jpg",
    jobTitle: "Full Stack Developer",
    description:
      "Mukesh Lilawat is a Full-Stack Developer from Jodhpur, Rajasthan, India, specializing in Java, Spring Boot, React and AI/ML. Co-founder of MG Tech Studio and creator of Lilawat Tech Blog.",
    nationality: "Indian",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jodhpur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    sameAs: [
      "https://github.com/mukeshlilawat1",
      "https://www.linkedin.com/in/mukeshlilawat1",
      "https://medium.com/@mukeshlilawat",
      "https://dev.to/mukeshlilawat",
      "https://hashnode.com/@mukeshlilawat",
      "https://stackoverflow.com/users/23341185/mukesh-lilawat",
      "https://www.wikidata.org/wiki/Q138586453",
      "https://x.com/coder_lilawat",
      "https://x.com/mukeshlilawat11",
      "https://www.lilawattechblog.in",
      "https://hightechmg.in",
      "https://www.instagram.com/mukeshlilawat1", // ✅ added
      "https://www.instagram.com/mukeshlilawat7", // ✅ added
    ],
    worksFor: {
      "@type": "Organization",
      "@id": "https://mukeshlilawat.online/#organization",
      name: "Lilawat Tech",
      url: "https://mukeshlilawat.online",
    },
    knowsAbout: [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "Hibernate",
      "JDBC",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Flask",
      "Full Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Web Development",
      "REST APIs",
      "Microservices",
      "Docker",
      "AWS",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "JWT Authentication",
      "Spring Security",
      "DSA",
      "Competitive Programming",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationLocation: {
        "@type": "Country",
        name: "India",
      },
      skills:
        "Java, Spring Boot, React, Next.js, AI/ML, REST APIs, Microservices",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://mukeshlilawat.online/#website",
    url: "https://mukeshlilawat.online",
    name: "Mukesh Lilawat Portfolio",
    description:
      "Official portfolio of Mukesh Lilawat, Full Stack Developer and AI/ML enthusiast from Jodhpur, India.",
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      "@id": "https://mukeshlilawat.online/#person",
      name: "Mukesh Lilawat",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://mukeshlilawat.online/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://mukeshlilawat.online/#organization",
    name: "Lilawat Tech",
    url: "https://mukeshlilawat.online",
    logo: "https://mukeshlilawat.online/favicon.ico",
    founder: {
      "@type": "Person",
      "@id": "https://mukeshlilawat.online/#person",
      name: "Mukesh Lilawat",
    },
    description:
      "Lilawat Tech is a software development brand by Mukesh Lilawat focused on Full Stack web applications using Java, Spring Boot, and React.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://hightechmg.in/#organization",
    name: "MG Tech Studio",
    url: "https://hightechmg.in",
    description:
      "Full-stack development studio co-founded by Mukesh Lilawat and Gaurav Kumawat. Experts in scalable backend systems and modern frontend architectures using Next.js, Spring Boot, and React.",
    founder: [
      {
        "@type": "Person",
        "@id": "https://mukeshlilawat.online/#person",
        name: "Mukesh Lilawat",
      },
      {
        "@type": "Person",
        name: "Gaurav Kumawat",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://www.lilawattechblog.in/#blog",
    name: "Lilawat Tech Blog",
    url: "https://www.lilawattechblog.in",
    description:
      "In-depth tutorials and articles on Spring Boot, React, Java, AWS, DevOps and AI/ML by Mukesh Lilawat.",
    author: {
      "@type": "Person",
      "@id": "https://mukeshlilawat.online/#person",
      name: "Mukesh Lilawat",
    },
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Hotel Mountain Mirage",
    url: "https://hotel-mountain-mirage.vercel.app/home",
    author: {
      "@type": "Person",
      "@id": "https://mukeshlilawat.online/#person",
      name: "Mukesh Lilawat",
    },
    applicationCategory: "WebApplication",
    description:
      "A full-stack hotel booking and management web application built with React.js and Spring Boot with JWT authentication and PostgreSQL.",
    programmingLanguage: ["Java", "JavaScript"],
    operatingSystem: "Web",
  },
];

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
    "Lilawat Tech",
    "MG Tech Studio",
    "Jodhpur Developer",
    "Rajasthan Developer",
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
        <Script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
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
          bg-[#f8f7ff]
          dark:bg-[#09090f]
        `}
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -10%,
              rgba(99,102,241,0.08) 0%,
              transparent 70%)
          `,
        }}
      >
        {/* Global noise texture overlay */}
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
