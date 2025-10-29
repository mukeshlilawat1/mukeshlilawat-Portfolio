"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GitHubStats() {
  const [data, setData] = useState<any>(null);
  const [stars, setStars] = useState<number>(0);

  useEffect(() => {
    const username =
      process.env.NEXT_PUBLIC_GITHUB_USERNAME || "mukeshlilawat1";

    // Fetch profile info
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((userData) => {
        setData(userData);
      });

    // Fetch total stars from all repos
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((res) => res.json())
      .then((repos) => {
        const totalStars = repos.reduce(
          (acc: number, repo: any) => acc + repo.stargazers_count,
          0
        );
        setStars(totalStars);
      });
  }, []);

  if (!data)
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 animate-pulse">
        Loading GitHub stats...
      </p>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-white/10 dark:bg-gray-900/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-10 hover:scale-[1.02] transition-all duration-500 max-w-5xl mx-auto"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        🌟 GitHub Profile Stats
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-lg font-medium">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-700/20 border border-blue-400/30 shadow-lg"
        >
          <p className="text-4xl font-extrabold text-blue-400">
            {data.followers}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Followers</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-700/20 border border-purple-400/30 shadow-lg"
        >
          <p className="text-4xl font-extrabold text-purple-400">
            {data.following}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Following</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-6 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-700/20 border border-pink-400/30 shadow-lg"
        >
          <p className="text-4xl font-extrabold text-pink-400">
            {data.public_repos}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Repositories</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 border border-emerald-400/30 shadow-lg"
        >
          <p className="text-4xl font-extrabold text-emerald-400">{stars}</p>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Total Stars</p>
        </motion.div>
      </div>

      {/* Profile Footer */}
      <div className="mt-10 text-center">
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          View Full Profile →
        </a>
      </div>
    </motion.div>
  );
}
