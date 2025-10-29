"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaFileDownload,
  FaCode,
  FaChartLine,
  FaTrophy,
  FaStar,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/utils/animations";

const Hero = () => {
  const [leetcode, setLeetcode] = useState({
    total: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    rating: 0,
    contests: 0,
  });

  const [github, setGithub] = useState({
    repos: 0,
    followers: 0,
    stars: 0,
  });

  const [loading, setLoading] = useState(true);
  const [gitLoading, setGitLoading] = useState(true);

  useEffect(() => {
    async function fetchLeetcodeData() {
      try {
        setLoading(true);
        const res = await fetch("/api/leetcode", { cache: "no-store" });
        const result = await res.json();

        const stats =
          result?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum || [];
        const contest = result?.data?.userContestRanking;

        type DifficultyData = { difficulty: string; count: number };

        const total =
          stats.find((d: DifficultyData) => d.difficulty === "All")?.count || 0;
        const easy =
          stats.find((d: DifficultyData) => d.difficulty === "Easy")?.count ||
          0;
        const medium =
          stats.find((d: DifficultyData) => d.difficulty === "Medium")?.count ||
          0;
        const hard =
          stats.find((d: DifficultyData) => d.difficulty === "Hard")?.count ||
          0;

        setLeetcode({
          total,
          easy,
          medium,
          hard,
          rating: contest?.rating?.toFixed(0) || 0,
          contests: contest?.attendedContestsCount || 0,
        });

        setLoading(false);
      } catch (err) {
        console.error("LeetCode fetch error:", err);
        setLoading(false);
      }
    }
    async function fetchGithubData() {
      try {
        setGitLoading(true);
        const res = await fetch("/api/github", { cache: "no-store" });
        const result = await res.json();

        setGithub({
          repos: result.publicRepos,
          followers: result.followers,
          stars: result.stars,
        });
        setGitLoading(false);
      } catch (error) {
        console.error("GitHub fetch error:", error);
        setGitLoading(false);
      }
    }

    fetchLeetcodeData();
    fetchGithubData();
  }, []);

  return (
    <>
      {/* ========================= SEO META HEAD ========================= */}
      <Head>
        <title>Mukesh Lilawat – Full-Stack Developer & AI/ML Enthusiast</title>
        <meta
          name="description"
          content="Mukesh Lilawat – Full-Stack Developer with expertise in Java, React, Spring Boot & AI/ML. Explore projects, portfolio, and innovative web apps."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mukeshlilawat.online/" />

        <meta
          property="og:title"
          content="Mukesh Lilawat – Full-Stack Developer & AI/ML Enthusiast"
        />
        <meta
          property="og:description"
          content="Passionate Full-Stack Developer Mukesh Lilawat creating innovative web apps using Java, React, Spring Boot & AI/ML."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mukeshlilawat.online/" />
        <meta
          property="og:image"
          content="https://mukeshlilawat.online/lilawat-og.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mukesh Lilawat – Full-Stack Developer & AI/ML Enthusiast"
        />
        <meta
          name="twitter:description"
          content="Explore Mukesh Lilawat's projects and portfolio: Java, React, Spring Boot & AI/ML web applications."
        />
        <meta
          name="twitter:image"
          content="https://mukeshlilawat.online/lilawat-og.jpg"
        />
      </Head>

      {/* ========================= HERO SECTION ========================= */}
      <section className="py-28 container max-w-7xl mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            {...scaleIn}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center mb-8"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                rotateY: 15,
                rotateX: 10,
                transition: { type: "spring", stiffness: 120, damping: 12 },
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative group w-48 h-48 md:w-60 md:h-60 perspective"
            >
              <div className="absolute inset-0 rounded-[40%_60%_35%_65%] bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 opacity-50 filter blur-xl animate-blob1 transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 rounded-[50%_35%_65%_40%] bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-400 opacity-30 filter blur-lg animate-blob2 transition-transform duration-700 group-hover:scale-105"></div>

              <div className="relative w-full h-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800 transform transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/lilawat.jpg"
                  alt="Mukesh Lilawat Profile Picture – Full-Stack Developer"
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight"
          >
            <span className="text-gray-800 dark:text-gray-100">Hello, I’m</span>{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient"
            >
              Mukesh Lilawat
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Passionate <strong>Full-Stack Developer</strong> with a deep
            interest in <strong>Artificial Intelligence</strong> and{" "}
            <strong>Machine Learning</strong>. I love creating innovative,
            user-focused, and future-ready web applications that make an impact.
          </motion.p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-10">
            {[
              {
                icon: FaGithub,
                link: "https://github.com/mukeshlilawat1",
                label: "GitHub",
              },
              {
                icon: FaLinkedinIn,
                link: "https://www.linkedin.com/in/mukeshlilawat1",
                label: "LinkedIn",
              },
              {
                icon: FaDiscord,
                link: "https://discord.gg/NDYV6NaZ",
                label: "Discord",
              },
              {
                icon: FaTwitter,
                link: "https://x.com/coder_lilawat",
                label: "Twitter",
              },
              {
                icon: FaInstagram,
                link: "https://www.instagram.com/mukeshlilawat1",
                label: "Instagram",
              },
              {
                icon: FaYoutube,
                link: "https://www.youtube.com/@MukeshLilawat1",
                label: "YouTube",
              },
            ].map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.7 + index * 0.1,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                <Link
                  href={social.link}
                  target="_blank"
                  className="text-3xl text-gray-700 hover:text-blue-600 dark:text-gray-400 hover:scale-110 transition-all duration-300"
                  aria-label={`${social.label} Profile`}
                >
                  <social.icon />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/projects"
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg shadow-md hover:opacity-90 transition-all duration-300 font-medium"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/contact"
                className="block bg-gray-800 text-white px-8 py-4 rounded-lg shadow-md hover:bg-indigo-800 transition-all duration-300 font-medium"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          {/* ====================== LEETCODE SECTION ====================== */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="relative rounded-3xl shadow-xl hover:shadow-yellow-400/40 mt-16 md:mt-20"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-600 p-[2px]"></div>
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl px-6 md:px-8 py-6 md:py-8 text-center z-10 border border-yellow-200/40 dark:border-yellow-700/30">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-center items-center gap-3 mb-4">
                  <FaCode className="text-3xl md:text-4xl text-yellow-500 drop-shadow-lg" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
                    My LeetCode Stats
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 text-base md:text-lg leading-relaxed">
                  Problem-solving fuels innovation. Here’s how I’m sharpening my
                  skills daily ⚡
                </p>

                {/* === Stats Card === */}
                <div className="bg-gradient-to-tr from-yellow-50 via-white to-yellow-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl py-5 px-6 md:py-6 md:px-8 shadow-inner border border-yellow-200 dark:border-yellow-700">
                  {loading ? (
                    <div className="animate-pulse">
                      <h4 className="text-3xl font-bold text-yellow-500 mb-2">
                        Loading...
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Fetching your stats...
                      </p>
                    </div>
                  ) : (
                    <>
                      <h4 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-2">
                        {leetcode.total}+
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-3">
                        Total Problems Solved
                      </p>

                      <div className="flex justify-center gap-4 md:gap-6 text-xs md:text-sm font-medium mb-3">
                        <span className="text-green-500">
                          Easy: {leetcode.easy}
                        </span>
                        <span className="text-yellow-500">
                          Medium: {leetcode.medium}
                        </span>
                        <span className="text-red-500">
                          Hard: {leetcode.hard}
                        </span>
                      </div>

                      <div className="flex justify-center items-center gap-6 mt-3 text-sm md:text-base font-semibold">
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                          <FaChartLine className="text-lg" />
                          Rating:{" "}
                          {leetcode.rating > 0 ? leetcode.rating : "N/A"}
                        </div>
                        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                          <FaTrophy className="text-lg" />
                          Contests: {leetcode.contests || 0}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 md:mt-8"
                >
                  <Link
                    href="https://leetcode.com/u/mukeshlilawat/"
                    target="_blank"
                    className="inline-flex items-center gap-2 md:gap-3 bg-yellow-500 text-white px-5 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl shadow-md hover:bg-yellow-600 hover:shadow-yellow-400/40 transition-all duration-300 text-sm md:text-base font-semibold"
                  >
                    <FaCode className="text-xl md:text-2xl" />
                    Visit My LeetCode
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            <div className="absolute inset-0 rounded-3xl bg-yellow-400 opacity-20 blur-3xl -z-10 animate-pulse"></div>
          </motion.div>

          {/* ====================== RESUME SECTION ====================== */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="relative rounded-3xl shadow-xl hover:shadow-blue-500/40 mt-16 md:mt-20"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-600 p-[2px]"></div>
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl px-6 md:px-8 py-8 md:py-10 text-center z-10 border border-blue-200/40 dark:border-blue-700/30">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-center items-center gap-3 mb-4">
                  <FaFileDownload className="text-3xl md:text-4xl text-blue-500 drop-shadow-lg" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Download My Resume
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-base md:text-lg leading-relaxed">
                  Explore my professional journey, skills, and experience in
                  detail.
                </p>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    href="/lilawat1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl shadow-md hover:shadow-blue-500/40 transition-all duration-300 text-sm md:text-base font-semibold"
                  >
                    <FaFileDownload className="text-xl md:text-2xl" />
                    Download Resume (PDF)
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            <div className="absolute inset-0 rounded-3xl bg-blue-400 opacity-20 blur-3xl -z-10 animate-pulse"></div>
          </motion.div>

          {/* ====================== GITHUB SECTION ====================== */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className="relative rounded-3xl shadow-xl hover:shadow-gray-400/40 mt-16 md:mt-20"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-600 to-black p-[2px]"></div>
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl px-6 md:px-8 py-8 md:py-10 text-center z-10 border border-gray-400/30 dark:border-gray-700/30">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-center items-center gap-3 mb-4">
                  <FaGithub className="text-3xl md:text-4xl text-gray-700 drop-shadow-lg" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
                    My GitHub Stats
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Open source fuels innovation. Here’s how I contribute 💻
                </p>

                <div className="bg-gradient-to-tr from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl py-6 px-8 shadow-inner border border-gray-200 dark:border-gray-700">
                  {gitLoading ? (
                    <div className="animate-pulse">
                      <h4 className="text-3xl font-bold text-gray-500 mb-2">
                        Loading...
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Fetching your GitHub stats...
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-800 dark:text-gray-200 text-lg font-semibold">
                        <div className="flex flex-col items-center">
                          <FaBook className="text-blue-500 text-3xl mb-1" />
                          <p>{github.repos} Repositories</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <FaUsers className="text-green-500 text-3xl mb-1" />
                          <p>{github.followers} Followers</p>
                        </div>
                        <div className="flex flex-col items-center">
                          <FaStar className="text-yellow-500 text-3xl mb-1" />
                          <p>{github.stars} Stars</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <motion.div whileHover={{ scale: 1.05 }} className="mt-6">
                  <Link
                    href="https://github.com/mukeshlilawat1"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-all duration-300 text-sm md:text-base font-semibold"
                  >
                    <FaGithub className="text-xl" /> Visit My GitHub
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gray-700 opacity-20 blur-3xl -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
