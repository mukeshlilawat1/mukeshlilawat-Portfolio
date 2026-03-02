"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useTheme } from "../context/themContext";
import { motion, AnimatePresence } from "framer-motion";

const MenuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/projects", label: "Projects" },
  { href: "/certificates", label: "Certificates" },
  { href: "/github", label: "GitHub" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        @keyframes gradShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .nav-logo {
          background: linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899,#f59e0b,#6366f1);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 5s ease infinite;
        }
        .active-pill {
          background: linear-gradient(135deg,#6366f1,#8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed w-full z-50 transition-all duration-500
          ${
            scrolled
              ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-2xl shadow-lg shadow-indigo-100/40 dark:shadow-black/40 border-b border-gray-100 dark:border-white/[0.06]"
              : "bg-white/60 dark:bg-transparent backdrop-blur-md border-b border-transparent"
          }`}
      >
        {/* Gradient top accent line — visible when scrolled */}
        <motion.div
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg,transparent,#6366f1,#8b5cf6,#ec4899,transparent)",
          }}
        />

        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* ── Logo ── */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/"
                className="nav-logo text-xl font-black tracking-tight"
              >
                ✌ LILAWAT ★
              </Link>
            </motion.div>

            {/* ── Desktop menu ── */}
            <div className="hidden md:flex items-center gap-1">
              {MenuItems.map((item, i) => {
                const active = pathName === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-3 py-1.5 text-sm font-medium rounded-xl transition-all duration-200
                        ${
                          active
                            ? "active-pill bg-indigo-50 dark:bg-indigo-500/10"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.06]"
                        }`}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="activeUnderline"
                          className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg,#6366f1,#8b5cf6)",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Theme toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="ml-2 w-9 h-9 flex items-center justify-center rounded-xl
                  bg-gray-100 dark:bg-white/[0.06]
                  border border-gray-200 dark:border-white/[0.08]
                  text-gray-600 dark:text-gray-300
                  hover:bg-indigo-50 dark:hover:bg-indigo-500/10
                  hover:text-indigo-600 dark:hover:text-indigo-400
                  hover:border-indigo-200 dark:hover:border-indigo-500/30
                  transition-colors duration-200"
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <SunIcon className="w-4 h-4" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MoonIcon className="w-4 h-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* ── Mobile right ── */}
            <div className="flex md:hidden items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-xl
                  bg-gray-100 dark:bg-white/[0.06]
                  border border-gray-200 dark:border-white/[0.08]
                  text-gray-600 dark:text-gray-300 transition-colors duration-200"
              >
                {theme === "dark" ? (
                  <SunIcon className="w-4 h-4" />
                ) : (
                  <MoonIcon className="w-4 h-4" />
                )}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-xl
                  bg-gray-100 dark:bg-white/[0.06]
                  border border-gray-200 dark:border-white/[0.08]
                  text-gray-700 dark:text-gray-300 transition-colors duration-200"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="bars"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Bars3Icon className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* ── Mobile dropdown ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="container max-w-7xl mx-auto px-4 pb-4 pt-1">
                <div
                  className="rounded-2xl overflow-hidden
                  bg-white dark:bg-gray-900
                  border border-gray-100 dark:border-white/[0.07]
                  shadow-xl shadow-gray-200/60 dark:shadow-black/40
                  divide-y divide-gray-100 dark:divide-white/[0.05]"
                >
                  {MenuItems.map((item, i) => {
                    const active = pathName === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center justify-between px-5 py-3.5 text-sm font-medium transition-colors duration-200
                            ${
                              active
                                ? "bg-gradient-to-r from-indigo-50 to-violet-50 dark:from-indigo-500/10 dark:to-violet-500/10"
                                : "hover:bg-gray-50 dark:hover:bg-white/[0.04]"
                            }`}
                        >
                          <span
                            className={
                              active
                                ? "active-pill"
                                : "text-gray-700 dark:text-gray-300"
                            }
                          >
                            {item.label}
                          </span>
                          {active && (
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{
                                background:
                                  "linear-gradient(135deg,#6366f1,#8b5cf6)",
                              }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
