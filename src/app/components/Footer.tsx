"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    color: "#6366f1",
  },
  {
    href: "https://www.linkedin.com/in/mukeshlilawat1",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    color: "#0ea5e9",
  },
  {
    href: "https://discord.gg/NDYV6NaZ",
    icon: <FaDiscord />,
    label: "Discord",
    color: "#8b5cf6",
  },
  {
    href: "https://x.com/coder_lilawat",
    icon: <FaTwitter />,
    label: "Twitter",
    color: "#38bdf8",
  },
  {
    href: "https://www.instagram.com/mukeshlilawat1",
    icon: <FaInstagram />,
    label: "Instagram",
    color: "#ec4899",
  },
  {
    href: "https://www.youtube.com/@MukeshLilawat1",
    icon: <FaYoutube />,
    label: "YouTube",
    color: "#ef4444",
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
    const fn = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @keyframes gradShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .footer-logo {
          background: linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899,#f59e0b,#6366f1);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 5s ease infinite;
        }
        @keyframes heartbeat {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.35); }
        }
        .heart { animation: heartbeat 1.3s ease-in-out infinite; display: inline-block; }
      `}</style>

      <footer
        className="relative mt-20 overflow-hidden
        border-t border-gray-100 dark:border-white/[0.06]
        bg-white/80 dark:bg-gray-950/80 backdrop-blur-2xl
        transition-all duration-500"
      >
        {/* ── Animated blobs ── */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 24, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-60px] left-[-80px] w-72 h-72 rounded-full
            bg-indigo-100/50 dark:bg-indigo-500/5 blur-[70px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -24, 0] }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-[-40px] right-[-60px] w-64 h-64 rounded-full
            bg-pink-100/50 dark:bg-violet-500/5 blur-[70px] pointer-events-none"
        />

        {/* ── Top gradient line ── */}
        <div
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg,transparent,#6366f1,#8b5cf6,#ec4899,#f59e0b,transparent)",
          }}
        />

        <div className="relative container max-w-5xl mx-auto px-6 py-14 flex flex-col items-center gap-8 text-center">
          {/* ── Brand ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2"
          >
            <Link
              href="/"
              className="footer-logo text-4xl sm:text-5xl font-black tracking-tight"
            >
              Lilawat™
            </Link>
            <p className="text-xs text-gray-400 dark:text-gray-600 mt-1">
              Building the web, one line at a time.
            </p>
          </motion.div>

          {/* ── Gradient divider ── */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="w-24 h-[2px] rounded-full"
            style={{
              background: "linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899)",
            }}
          />

          {/* ── Socials ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 sm:gap-6"
          >
            {socialLinks.map(({ href, icon, label, color }, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="group relative flex items-center justify-center text-2xl
                    text-gray-400 dark:text-gray-600 transition-colors duration-300"
                  onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {icon}
                  <span
                    className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1
                    text-[10px] font-semibold bg-gray-900 dark:bg-gray-800 text-white rounded-lg
                    opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-200 pointer-events-none whitespace-nowrap"
                  >
                    {label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Nav links ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
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
                  className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] rounded-full
                  group-hover:w-full transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg,#6366f1,#ec4899)",
                  }}
                />
              </Link>
            ))}
          </motion.div>

          {/* ── Thin divider ── */}
          <div
            className="w-full h-[1px]"
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(99,102,241,0.25),transparent)",
            }}
          />

          {/* ── Copyright ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-1.5"
          >
            <p className="text-xs text-gray-400 dark:text-gray-600">
              © {new Date().getFullYear()} Mukesh Lilawat · All rights reserved.
            </p>
            <p className="text-[11px] text-gray-400 dark:text-gray-700">
              Crafted with <span className="heart text-red-500">❤️</span> using{" "}
              <span
                className="font-semibold"
                style={{
                  background: "linear-gradient(90deg,#6366f1,#8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Next.js
              </span>
              {", "}
              <span
                className="font-semibold"
                style={{
                  background: "linear-gradient(90deg,#38bdf8,#6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Tailwind
              </span>
              {" & "}
              <span
                className="font-semibold"
                style={{
                  background: "linear-gradient(90deg,#ec4899,#f59e0b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Framer Motion
              </span>
            </p>
          </motion.div>
        </div>

        {/* ── Bottom gradient line ── */}
        <div
          className="absolute inset-x-0 bottom-0 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg,transparent,#ec4899,#8b5cf6,#6366f1,transparent)",
          }}
        />
      </footer>

      {/* ── Back to top ── */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            key="top-btn"
            initial={{ opacity: 0, scale: 0.4, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.4, y: 20 }}
            whileHover={{ scale: 1.12, y: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 p-3.5 rounded-2xl text-white
              shadow-lg shadow-indigo-300/40 dark:shadow-indigo-500/30"
            style={{
              background: "linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899)",
            }}
          >
            <FaArrowUp className="text-lg" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
