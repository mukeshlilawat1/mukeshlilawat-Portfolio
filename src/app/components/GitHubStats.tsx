"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GitHubUser {
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

interface GitHubRepo {
  stargazers_count: number;
}

export default function GitHubStats() {
  const [data, setData] = useState<GitHubUser | null>(null);
  const [stars, setStars] = useState<number>(0);

  useEffect(() => {
    const username =
      process.env.NEXT_PUBLIC_GITHUB_USERNAME || "mukeshlilawat1";

    // Fetch profile info
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((userData: GitHubUser) => setData(userData));

    // Fetch total stars
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((res) => res.json())
      .then((repos: GitHubRepo[]) => {
        const totalStars = repos.reduce(
          (acc, repo) => acc + repo.stargazers_count,
          0
        );
        setStars(totalStars);
      });
  }, []);

  if (!data)
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 animate-pulse mt-10">
        Loading GitHub stats...
      </p>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-white/10 dark:bg-gray-900/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-10 hover:scale-[1.02] transition-all duration-500 max-w-5xl mx-auto mt-12"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        🌟 GitHub Profile Stats
      </h2>

      {/* 🧱 Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center text-base sm:text-lg font-medium">
        <StatCard
          color="from-blue-500/20 to-blue-700/20"
          border="border-blue-400/30"
          value={data.followers}
          label="Followers"
          textColor="text-blue-400"
        />
        <StatCard
          color="from-purple-500/20 to-purple-700/20"
          border="border-purple-400/30"
          value={data.following}
          label="Following"
          textColor="text-purple-400"
        />
        <StatCard
          color="from-pink-500/20 to-pink-700/20"
          border="border-pink-400/30"
          value={data.public_repos}
          label="Repositories"
          textColor="text-pink-400"
        />
        <StatCard
          color="from-emerald-500/20 to-emerald-700/20"
          border="border-emerald-400/30"
          value={stars}
          label="Total Stars"
          textColor="text-emerald-400"
        />
      </div>

      <div className="mt-8 text-center">
        <a
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 underline text-sm sm:text-base transition-colors"
        >
          View Full Profile →
        </a>
      </div>
    </motion.div>
  );
}

interface StatCardProps {
  color: string;
  border: string;
  value: number;
  label: string;
  textColor: string;
}

function StatCard({ color, border, value, label, textColor }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${color} border ${border} shadow-lg flex flex-col items-center justify-center`}
    >
      <p className={`text-3xl sm:text-4xl font-extrabold ${textColor}`}>
        {value}
      </p>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
        {label}
      </p>
    </motion.div>
  );
}
