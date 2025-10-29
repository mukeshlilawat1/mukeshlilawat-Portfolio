"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GitHubGraph() {
  const [graphUrl, setGraphUrl] = useState<string>("");

  useEffect(() => {
    // Load username from environment variable or fallback
    const username =
      process.env.NEXT_PUBLIC_GITHUB_USERNAME || "mukeshlilawat1";

    // Auto-refreshing image with timestamp (prevents cache issues)
    const url = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&area=true&_t=${Date.now()}`;
    setGraphUrl(url);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center text-center mt-10"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        🔥 GitHub Contribution Graph
      </h2>

      {/* Graph Container */}
      <div className="relative w-full max-w-5xl rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/10 dark:bg-gray-900/40 backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500">
        {graphUrl ? (
          <Image
            src={graphUrl}
            alt="GitHub Contribution Graph"
            width={1000}
            height={400}
            className="rounded-xl"
            unoptimized
          />
        ) : (
          <p className="text-gray-500 dark:text-gray-400">Loading Graph...</p>
        )}
      </div>

      {/* Auto Refresh Note */}
      <p className="text-sm mt-4 text-gray-500 dark:text-gray-400">
        This graph updates automatically with your latest GitHub activity 🚀
      </p>
    </motion.div>
  );
}
