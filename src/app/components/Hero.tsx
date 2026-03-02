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
  FaStar,
  FaUsers,
  FaBook,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

const socials = [
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
  { icon: FaDiscord, link: "https://discord.gg/NDYV6NaZ", label: "Discord" },
  { icon: FaTwitter, link: "https://x.com/coder_lilawat", label: "Twitter" },
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
];

/* ── Card: solid white in light, glass in dark ─── */
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className={`relative rounded-3xl overflow-hidden
        bg-white border border-gray-100 shadow-xl shadow-gray-200/60
        dark:bg-white/[0.05] dark:border-white/[0.07] dark:shadow-none dark:backdrop-blur-2xl
        ${className}`}
    >
      {/* Top shimmer line */}
      <div
        className="absolute inset-x-0 top-0 h-[1px]
        bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent
        dark:via-indigo-500/40"
      />
      {children}
    </motion.div>
  );
}

const Hero = () => {
  const [leetcode, setLeetcode] = useState({
    total: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    rating: 0,
    contests: 0,
  });
  const [github, setGithub] = useState({ repos: 0, followers: 0, stars: 0 });
  const [loading, setLoading] = useState(true);
  const [gitLoading, setGitLoading] = useState(true);

  useEffect(() => {
    async function fetchLeetcode() {
      try {
        const res = await fetch("/api/leetcode", { cache: "no-store" });
        const result = await res.json();
        const stats =
          result?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum || [];
        const contest = result?.data?.userContestRanking;
        type D = { difficulty: string; count: number };
        setLeetcode({
          total: stats.find((d: D) => d.difficulty === "All")?.count || 0,
          easy: stats.find((d: D) => d.difficulty === "Easy")?.count || 0,
          medium: stats.find((d: D) => d.difficulty === "Medium")?.count || 0,
          hard: stats.find((d: D) => d.difficulty === "Hard")?.count || 0,
          rating: contest?.rating?.toFixed(0) || 0,
          contests: contest?.attendedContestsCount || 0,
        });
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    async function fetchGithub() {
      try {
        const res = await fetch("/api/github", { cache: "no-store" });
        const result = await res.json();
        setGithub({
          repos: result.publicRepos,
          followers: result.followers,
          stars: result.stars,
        });
      } catch (e) {
        console.error(e);
      } finally {
        setGitLoading(false);
      }
    }
    fetchLeetcode();
    fetchGithub();
  }, []);

  return (
    <>
      <Head>
        <title>Mukesh Lilawat – Full-Stack Developer & AI/ML Enthusiast</title>
        <meta
          name="description"
          content="Mukesh Lilawat – Full-Stack Developer with expertise in Java, React, Spring Boot & AI/ML."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mukeshlilawat.online/" />
        <meta
          property="og:title"
          content="Mukesh Lilawat – Full-Stack Developer & AI/ML Enthusiast"
        />
        <meta
          property="og:description"
          content="Passionate Full-Stack Developer creating innovative web apps."
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
          content="Mukesh Lilawat – Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Explore Mukesh Lilawat's projects and portfolio."
        />
        <meta
          name="twitter:image"
          content="https://mukeshlilawat.online/lilawat-og.jpg"
        />
      </Head>

      <style>{`
        @keyframes gradShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .grad-name {
          background: linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899,#f59e0b,#6366f1);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 6s ease infinite;
        }
        @keyframes ringPulse {
          0%,100% { box-shadow: 0 0 0 0px rgba(99,102,241,0); }
          50%      { box-shadow: 0 0 0 10px rgba(99,102,241,0.15); }
        }
        .avatar-ring { animation: ringPulse 3.5s ease-in-out infinite; }

        .tag-chip {
          font-size:11px; letter-spacing:0.08em; text-transform:uppercase;
          padding:3px 12px; border-radius:99px; font-weight:600;
          background:rgba(99,102,241,0.08);
          border:1px solid rgba(99,102,241,0.2);
          color:#6366f1;
        }
        .dark .tag-chip {
          background:rgba(99,102,241,0.12);
          border:1px solid rgba(99,102,241,0.3);
          color:#a5b4fc;
        }
        @keyframes drift {
          from { transform:translateY(0) scale(1); }
          to   { transform:translateY(40px) scale(1.08); }
        }
        .blob { position:fixed; border-radius:9999px; filter:blur(110px); pointer-events:none; z-index:-1; }
        @keyframes spin { to { transform:rotate(360deg); } }
        .spinner { animation:spin 0.9s linear infinite; }
      `}</style>

      {/* ── Background blobs — soft in light, deep in dark ── */}
      <div
        className="blob w-[650px] h-[650px] top-[-20%] left-[-15%]
        bg-indigo-200/70 dark:bg-indigo-600/20
        animate-[drift_18s_ease-in-out_infinite_alternate]"
      />
      <div
        className="blob w-[500px] h-[500px] bottom-[-10%] right-[-8%]
        bg-violet-200/70 dark:bg-violet-600/15
        animate-[drift_22s_ease-in-out_infinite_alternate-reverse]"
      />
      <div
        className="blob w-[400px] h-[400px] top-[40%] left-[55%]
        bg-pink-100/60 dark:bg-cyan-500/10
        animate-[drift_26s_ease-in-out_infinite_alternate]"
      />

      <section className="relative py-28 md:py-36 px-4 container max-w-2xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Avatar */}
          <motion.div {...fadeUp(0.1)} className="relative">
            <div
              className="w-36 h-36 md:w-44 md:h-44 rounded-full avatar-ring overflow-hidden
              ring-4 ring-indigo-200 dark:ring-indigo-500/30
              shadow-2xl shadow-indigo-200/60 dark:shadow-indigo-900/40"
            >
              <Image
                src="/lilawat.jpg"
                alt="Mukesh Lilawat"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span
              className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400
              border-2 border-white dark:border-gray-950 shadow-lg"
            />
          </motion.div>

          {/* Tags */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex flex-wrap justify-center gap-2"
          >
            {[
              "Full-Stack Dev",
              "AI / ML",
              "Open Source",
              "Java · React · Spring Boot",
            ].map((t) => (
              <span key={t} className="tag-chip">
                {t}
              </span>
            ))}
          </motion.div>

          {/* Heading */}
          <motion.div {...fadeUp(0.3)}>
            <p className="text-sm md:text-base text-gray-400 mb-2 tracking-widest uppercase font-medium">
              Hey there 👋 — I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
              <span className="text-gray-900 dark:text-white">Mukesh</span>
              <br />
              <span className="grad-name">Lilawat</span>
            </h1>
          </motion.div>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.4)}
            className="max-w-lg text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Passionate{" "}
            <strong className="text-gray-900 dark:text-white font-semibold">
              Full-Stack Developer
            </strong>{" "}
            crafting innovative, user-focused web applications with a love for{" "}
            <strong className="text-gray-900 dark:text-white font-semibold">
              AI & Machine Learning
            </strong>
            .
          </motion.p>

          {/* Socials */}
          <motion.div {...fadeUp(0.5)} className="flex items-center gap-5">
            {socials.map(({ icon: Icon, link, label }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                aria-label={label}
                whileHover={{ y: -4, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="text-2xl text-gray-400 hover:text-indigo-500
                  dark:text-gray-500 dark:hover:text-indigo-400 transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <Link
              href="/projects"
              className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm
                bg-indigo-600 hover:bg-indigo-500 text-white
                shadow-lg shadow-indigo-300/40 dark:shadow-indigo-500/30
                transition-all duration-300"
            >
              View Projects
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm
                bg-white dark:bg-white/[0.04]
                border border-gray-200 dark:border-white/10
                text-gray-700 dark:text-gray-300
                hover:border-indigo-400 hover:text-indigo-600
                dark:hover:border-indigo-500/60 dark:hover:text-indigo-400
                shadow-md shadow-gray-100 dark:shadow-none
                transition-all duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* ══ Stat Cards ══ */}
        <div className="mt-20 flex flex-col gap-6">
          {/* LeetCode */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="p-7 md:p-9">
                <div className="flex items-center gap-3 mb-1">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-2xl
                    bg-yellow-50 border border-yellow-200
                    dark:bg-yellow-500/10 dark:border-yellow-500/20"
                  >
                    <FaCode className="text-yellow-500 text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      LeetCode Stats
                    </h3>
                    <p className="text-xs text-gray-400">
                      Problem-solving sharpened daily ⚡
                    </p>
                  </div>
                </div>

                <div className="my-5 h-px bg-gradient-to-r from-transparent via-yellow-200 dark:via-yellow-500/20 to-transparent" />

                {loading ? (
                  <div className="h-24 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-yellow-200 border-t-yellow-500 spinner" />
                  </div>
                ) : (
                  <>
                    <div className="flex items-end gap-2 mb-5">
                      <span className="text-6xl font-black text-yellow-500 leading-none">
                        {leetcode.total}
                      </span>
                      <span className="text-yellow-500/70 text-lg mb-1 font-semibold">
                        solved
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {[
                        {
                          label: "Easy",
                          value: leetcode.easy,
                          bg: "bg-emerald-50 dark:bg-emerald-500/10",
                          border:
                            "border-emerald-200 dark:border-emerald-500/30",
                          text: "text-emerald-700 dark:text-emerald-400",
                        },
                        {
                          label: "Medium",
                          value: leetcode.medium,
                          bg: "bg-yellow-50 dark:bg-yellow-500/10",
                          border: "border-yellow-200 dark:border-yellow-500/30",
                          text: "text-yellow-700 dark:text-yellow-400",
                        },
                        {
                          label: "Hard",
                          value: leetcode.hard,
                          bg: "bg-red-50 dark:bg-red-500/10",
                          border: "border-red-200 dark:border-red-500/30",
                          text: "text-red-600 dark:text-red-400",
                        },
                        {
                          label: "Rating",
                          value: leetcode.rating > 0 ? leetcode.rating : "N/A",
                          bg: "bg-blue-50 dark:bg-blue-500/10",
                          border: "border-blue-200 dark:border-blue-500/30",
                          text: "text-blue-700 dark:text-blue-400",
                        },
                        {
                          label: "Contests",
                          value: leetcode.contests,
                          bg: "bg-purple-50 dark:bg-purple-500/10",
                          border: "border-purple-200 dark:border-purple-500/30",
                          text: "text-purple-700 dark:text-purple-400",
                        },
                      ].map(({ label, value, bg, border, text }) => (
                        <div
                          key={label}
                          className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl border ${bg} ${border}`}
                        >
                          <span
                            className={`text-xl font-black tracking-tight ${text}`}
                          >
                            {value}
                          </span>
                          <span className="text-[11px] uppercase tracking-widest text-gray-400">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                <a
                  href="https://leetcode.com/u/mukeshlilawat/"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-semibold
                    text-yellow-600 hover:text-yellow-500 dark:text-yellow-400 dark:hover:text-yellow-300 transition-colors"
                >
                  <FaCode /> View on LeetCode →
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Resume */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="p-7 md:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-2xl
                    bg-indigo-50 border border-indigo-200
                    dark:bg-indigo-500/10 dark:border-indigo-500/20"
                  >
                    <FaFileDownload className="text-indigo-600 dark:text-indigo-400 text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Resume
                    </h3>
                    <p className="text-xs text-gray-400">
                      My professional journey, skills & experience.
                    </p>
                  </div>
                </div>
                <Link
                  href="/lilawat1.pdf"
                  target="_blank"
                  download
                  className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                    bg-indigo-600 hover:bg-indigo-500 text-white
                    shadow-lg shadow-indigo-200/60 dark:shadow-indigo-500/25
                    transition-all duration-300 hover:scale-105"
                >
                  <FaFileDownload /> Download PDF
                </Link>
              </div>
            </Card>
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <Card>
              <div className="p-7 md:p-9">
                <div className="flex items-center gap-3 mb-1">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-2xl
                    bg-gray-100 border border-gray-200
                    dark:bg-white/5 dark:border-white/10"
                  >
                    <FaGithub className="text-gray-800 dark:text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      GitHub Stats
                    </h3>
                    <p className="text-xs text-gray-400">
                      Open source fuels innovation 💻
                    </p>
                  </div>
                </div>

                <div className="my-5 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />

                {gitLoading ? (
                  <div className="h-24 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-gray-200 border-t-gray-500 dark:border-gray-600 dark:border-t-gray-300 spinner" />
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      {
                        icon: <FaBook className="text-blue-500 text-xl" />,
                        label: "Repos",
                        value: github.repos,
                        bg: "bg-blue-50 dark:bg-blue-500/10",
                        border: "border-blue-100 dark:border-blue-500/20",
                      },
                      {
                        icon: <FaUsers className="text-emerald-500 text-xl" />,
                        label: "Followers",
                        value: github.followers,
                        bg: "bg-emerald-50 dark:bg-emerald-500/10",
                        border: "border-emerald-100 dark:border-emerald-500/20",
                      },
                      {
                        icon: <FaStar className="text-yellow-500 text-xl" />,
                        label: "Stars",
                        value: github.stars,
                        bg: "bg-yellow-50 dark:bg-yellow-500/10",
                        border: "border-yellow-100 dark:border-yellow-500/20",
                      },
                    ].map(({ icon, label, value, bg, border }) => (
                      <div
                        key={label}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl border ${bg} ${border}`}
                      >
                        {icon}
                        <span className="text-2xl font-black text-gray-900 dark:text-white">
                          {value}
                        </span>
                        <span className="text-[11px] text-gray-500 uppercase tracking-widest">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <a
                  href="https://github.com/mukeshlilawat1"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-semibold
                    text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <FaGithub /> Visit GitHub →
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
