"use client";

import { motion } from "framer-motion";
import GitHubGraph from "../components/GitHubGraph";
import GitHubStats from "../components/GitHubStats";
import { FaGithub } from "react-icons/fa";

export default function GitHubPage() {
  return (
    <div
      className="min-h-screen py-24 px-4 sm:px-6 md:px-16
      bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50
      dark:from-gray-950 dark:via-gray-900 dark:to-black
      transition-all duration-700"
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="flex justify-center mb-4">
          <div
            className="flex items-center justify-center w-14 h-14 rounded-2xl
            bg-white dark:bg-white/[0.06]
            border border-gray-100 dark:border-white/[0.08]
            shadow-sm"
          >
            <FaGithub className="text-2xl text-gray-900 dark:text-white" />
          </div>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold
          bg-clip-text text-transparent
          bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
        >
          GitHub Insights
        </h1>

        <p
          className="text-gray-600 dark:text-gray-400 mt-5 text-base md:text-lg
          max-w-xl mx-auto leading-relaxed"
        >
          Explore my open-source journey — contributions, repositories, commits,
          and coding consistency powered by GitHub 🚀
        </p>
      </motion.div>

      {/* ── Contribution Graph — no wrapper box ── */}
      <div className="mt-16 sm:mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-xl sm:text-2xl font-bold
            text-gray-700 dark:text-gray-300 mb-6 tracking-tight"
        >
          Contribution Graph
        </motion.h2>
        <GitHubGraph />
      </div>

      {/* ── GitHub Stats — no wrapper box ── */}
      <div className="mt-10 sm:mt-12">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-xl sm:text-2xl font-bold
            text-gray-700 dark:text-gray-300 mb-6 tracking-tight"
        >
          Profile Stats
        </motion.h2>
        <GitHubStats />
      </div>

      {/* ── Footer ── */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 sm:mt-24 text-center"
      >
        <p className="text-gray-400 dark:text-gray-600 text-xs sm:text-sm">
          © {new Date().getFullYear()} Mukesh Lilawat • Crafted with 💖 using{" "}
          <span className="text-blue-500 font-semibold">Next.js</span> &{" "}
          <span className="text-purple-500 font-semibold">Framer Motion</span>
        </p>
      </motion.footer>
    </div>
  );
}
