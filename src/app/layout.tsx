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
  title: "Mukesh Lilawat | Full-Stack Developer & AI/ML Enthusiast",
  description: "Portfolio of Mukesh Lilawat — Building modern web apps using React, Spring Boot, and AI/ML integration.",
    icons: {
    icon: "/favicon.ico", // yaha path
  },
  keywords: ["Mukesh Lilawat", "Full Stack Developer", "React", "Spring Boot", "AI ML"],
  openGraph: {
    title: "Mukesh Lilawat",
    description: "Building future-ready web apps using modern technologies.",
    url: "https://mukeshlilawat.online",
    siteName: "Mukesh Lilawat",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
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
      </body>
    </html>
  );
}
