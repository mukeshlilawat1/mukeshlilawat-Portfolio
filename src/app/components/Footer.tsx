"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://github.com/mukeshlilawat1",
    icon: <FaGithub />,
    label: "GitHub",
    hover: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    href: "https://www.linkedin.com/in/mukeshlilawat1",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    hover: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    href: "https://discord.gg/NDYV6NaZ",
    icon: <FaDiscord />,
    label: "Discord",
    hover: "hover:text-indigo-600 dark:hover:text-indigo-400",
  },
  {
    href: "https://x.com/coder_lilawat",
    icon: <FaTwitter />,
    label: "Twitter",
    hover: "hover:text-sky-500 dark:hover:text-sky-400",
  },
  {
    href: "https://www.instagram.com/mukeshlilawat1",
    icon: <FaInstagram />,
    label: "Instagram",
    hover: "hover:text-pink-500 dark:hover:text-pink-400",
  },
  {
    href: "https://www.youtube.com/@MukeshLilawat1",
    icon: <FaYoutube />,
    label: "YouTube",
    hover: "hover:text-red-500 dark:hover:text-red-400",
  },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/faq", label: "FAQ" },
  { href: "/cookies", label: "Cookie Policy" },
];

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @keyframes gradShift {
          0%,100% { background-position:0% 50%; }
          50%      { background-position:100% 50%; }
        }
        .footer-logo {
          background: linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899,#6366f1);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 6s ease infinite;
        }
      `}</style>

      <footer
        className="relative mt-20 overflow-hidden
        border-t border-gray-200 dark:border-white/[0.06]
        bg-white/80 dark:bg-gray-950/80
        backdrop-blur-2xl
        text-gray-600 dark:text-gray-400
        transition-all duration-500"
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px]
          bg-gradient-to-r from-transparent via-indigo-400/50 dark:via-indigo-500/40 to-transparent"
        />

        {/* Subtle bg blob */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px]
          bg-indigo-100/40 dark:bg-indigo-600/5 blur-[80px] pointer-events-none"
        />

        <div className="relative container max-w-5xl mx-auto px-6 py-12 flex flex-col items-center gap-7 text-center">
          {/* Brand */}
          <div className="flex flex-col items-center gap-1">
            <Link
              href="/"
              className="footer-logo text-4xl font-black tracking-tight"
            >
              Lilawat™
            </Link>
            <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
              © {new Date().getFullYear()} Mukesh Lilawat · All rights reserved.
            </p>
          </div>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-indigo-300/60 dark:via-indigo-500/40 to-transparent" />

          {/* Socials */}
          <div className="flex items-center justify-center gap-5">
            {socialLinks.map(({ href, icon, label, hover }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                aria-label={label}
                className={`group relative text-2xl text-gray-400 dark:text-gray-600
                  ${hover} transition-all duration-300 hover:scale-125 hover:-translate-y-1`}
              >
                {icon}
                <span
                  className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[10px] font-medium
                  bg-gray-900 text-white rounded-md
                  opacity-0 group-hover:opacity-100 transition-opacity duration-200
                  pointer-events-none whitespace-nowrap"
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map(({ href, label }, i) => (
              <Link
                key={i}
                href={href}
                className="relative text-xs text-gray-500 dark:text-gray-600
                  hover:text-indigo-600 dark:hover:text-indigo-400
                  transition-colors duration-200 group"
              >
                {label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-[1px]
                  bg-indigo-400 group-hover:w-full transition-all duration-300"
                />
              </Link>
            ))}
          </div>

          <p className="text-[11px] text-gray-400 dark:text-gray-700 italic">
            Crafted with ❤️ using Next.js, Tailwind CSS & a lot of ☕
          </p>
        </div>
      </footer>

      {/* Back to top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 p-3.5 rounded-2xl text-white
            bg-indigo-600 hover:bg-indigo-500
            shadow-lg shadow-indigo-300/40 dark:shadow-indigo-500/30
            transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </>
  );
};

export default Footer;
