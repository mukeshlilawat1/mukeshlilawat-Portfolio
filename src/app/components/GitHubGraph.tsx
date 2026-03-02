"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function GitHubGraph() {
  const [graphUrl, setGraphUrl] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const username =
      process.env.NEXT_PUBLIC_GITHUB_USERNAME || "mukeshlilawat1";
    // light + dark graph URLs
    setGraphUrl(
      `https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=00000000&color=6366f1&line=6366f1&point=8b5cf6&area=true&area_color=6366f1&hide_border=true&_t=${Date.now()}`,
    );
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto px-3 sm:px-4 mt-12 sm:mt-16"
    >
      {/* ── Card ── */}
      <div
        className="
        rounded-2xl sm:rounded-3xl overflow-hidden
        bg-white dark:bg-[#0d1117]
        border border-gray-100 dark:border-white/[0.06]
        shadow-sm dark:shadow-none
      "
      >
        {/* Header strip */}
        <div
          className="
          flex items-center justify-between
          px-4 sm:px-6 py-3 sm:py-4
          border-b border-gray-100 dark:border-white/[0.06]
        "
        >
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Traffic lights (decorative) */}
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
            </div>
            <div className="flex items-center gap-2">
              <FaGithub className="text-gray-700 dark:text-gray-300 text-base sm:text-lg" />
              <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-tight">
                Contribution Activity
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 font-medium">
              Live
            </span>
          </div>
        </div>

        {/* Graph area */}
        <div className="px-3 sm:px-5 pt-4 pb-3 sm:pt-5 sm:pb-4">
          {graphUrl ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={graphUrl}
                alt="GitHub Contribution Graph"
                width={900}
                height={300}
                className="w-full h-auto rounded-xl"
                unoptimized
                onLoad={() => setLoaded(true)}
              />
            </motion.div>
          ) : null}

          {/* Skeleton shown while loading */}
          {!loaded && (
            <div className="w-full h-36 sm:h-48 rounded-xl bg-gray-100 dark:bg-white/[0.04] animate-pulse" />
          )}
        </div>

        {/* Footer strip */}
        <div
          className="
          px-4 sm:px-6 py-2.5 sm:py-3
          border-t border-gray-100 dark:border-white/[0.06]
          flex items-center justify-between
        "
        >
          <span className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-600">
            Auto-refreshes on every visit
          </span>
          <a
            href="https://github.com/mukeshlilawat1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] sm:text-xs font-semibold text-indigo-500 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
          >
            @mukeshlilawat1 →
          </a>
        </div>
      </div>
    </motion.section>
  );
}
