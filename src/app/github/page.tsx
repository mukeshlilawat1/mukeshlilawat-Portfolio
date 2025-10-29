"use client";

import { motion } from "framer-motion";
import GitHubGraph from "../components/GitHubGraph";
import GitHubStats from "../components/GitHubStats";
import { FaGithub } from "react-icons/fa";

export default function GitHubPage() {
  return (
    <div className="min-h-screen py-24 px-6 md:px-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-all duration-700">
      {/* ===== Header Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <FaGithub className="text-5xl text-black dark:text-white drop-shadow-xl" />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 drop-shadow-lg">
          GitHub Insights
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Explore my open-source journey — contributions, repositories, commits,
          and coding consistency powered by GitHub 🚀
        </p>
      </motion.div>

      {/* ===== Contribution Graph ===== */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 max-w-5xl mx-auto bg-white/10 dark:bg-gray-900/40 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700 p-8 md:p-12 hover:shadow-purple-500/20 transition-all duration-500"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Contribution Graph
        </h2>
        <div className="overflow-hidden rounded-2xl">
          <GitHubGraph />
        </div>
      </motion.section>

      {/* ===== GitHub Stats Section ===== */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 max-w-5xl mx-auto bg-white/10 dark:bg-gray-900/40 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700 p-8 md:p-12 hover:shadow-blue-500/20 transition-all duration-500"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          GitHub Profile Stats
        </h2>
        <GitHubStats />
      </motion.section>

      {/* ===== Footer ===== */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-24 text-center"
      >
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Mukesh Lilawat • Crafted with 💖 using{" "}
          <span className="text-blue-500 font-semibold">Next.js</span> &{" "}
          <span className="text-purple-500 font-semibold">Framer Motion</span>
        </p>
      </motion.footer>
    </div>
  );
}
