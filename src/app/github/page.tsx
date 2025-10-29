"use client";

import GitHubStats from "../components/GitHubStats";
import GitHubGraph from "../components/GitHubGraph";
import { motion } from "framer-motion";

export default function GitHubPage() {
  return (
    <div className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-all duration-500">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-16"
      >
        🚀 My GitHub Insights
      </motion.h1>

      {/* Contribution Graph */}
      <GitHubGraph />

      {/* Stats */}
      <GitHubStats />
    </div>
  );
}
