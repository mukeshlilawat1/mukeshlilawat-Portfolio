"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaGithub,
  FaUsers,
  FaBook,
  FaStar,
  FaCodeBranch,
} from "react-icons/fa";

/* ─────────────────────────────────────────────
   Animated SVG ring
───────────────────────────────────────────── */
interface RingProps {
  pct: number; // 0–100
  color: string; // stroke color (tailwind arbitrary won't work in SVG; use hex)
  trackColor: string;
  size?: number; // px, default 80
  stroke?: number; // stroke width, default 7
  children?: React.ReactNode;
}

function Ring({
  pct,
  color,
  trackColor,
  size = 80,
  stroke = 7,
  children,
}: RingProps) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={trackColor}
          strokeWidth={stroke}
        />
        {/* Progress */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </svg>
      {/* Centre label */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Single stat card
───────────────────────────────────────────── */
interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: number;
  max: number; // used to calc ring %
  color: string; // hex for SVG ring
  trackLight: string; // hex track for light mode
  trackDark: string;
  textColor: string; // tailwind class
  bgLight: string;
  bgDark: string;
  borderLight: string;
  borderDark: string;
}

function StatCard({
  item,
  index,
  isDark,
}: {
  item: StatItem;
  index: number;
  isDark: boolean;
}) {
  const pct = Math.min((item.value / item.max) * 100, 100);
  const track = isDark ? item.trackDark : item.trackLight;

  // Animated counter
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1200;
    const step = 16;
    const inc = item.value / (dur / step);
    const timer = setInterval(() => {
      start += inc;
      if (start >= item.value) {
        setCount(item.value);
        clearInterval(timer);
      } else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, item.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`
        flex flex-col items-center gap-3 sm:gap-4
        p-4 sm:p-5 rounded-2xl
        border transition-all duration-300
        ${item.bgLight} ${item.borderLight}
        dark:${item.bgDark} dark:${item.borderDark}
      `}
    >
      {/* Ring */}
      <Ring
        pct={pct}
        color={item.color}
        trackColor={track}
        size={72}
        stroke={6}
      >
        <span className={`text-lg sm:text-xl ${item.textColor}`}>
          {item.icon}
        </span>
      </Ring>

      {/* Number */}
      <div className="text-center">
        <span
          ref={ref}
          className="block text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-none tabular-nums"
        >
          {count}
        </span>
        <span className="block text-[11px] text-gray-400 uppercase tracking-widest mt-1 font-medium">
          {item.label}
        </span>
      </div>

      {/* % fill bar (mini) */}
      <div className="w-full h-1 rounded-full bg-gray-100 dark:bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: item.color }}
          initial={{ width: "0%" }}
          whileInView={{ width: `${pct}%` }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3 + index * 0.08,
          }}
          viewport={{ once: true }}
        />
      </div>
      <span className="text-[10px] text-gray-400 dark:text-gray-600 -mt-2">
        {pct.toFixed(0)}% of goal
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
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
  const [stars, setStars] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Detect dark mode
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const update = () =>
      setIsDark(
        document.documentElement.classList.contains("dark") || mq.matches,
      );
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const u = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "mukeshlilawat1";
    Promise.all([
      fetch(`https://api.github.com/users/${u}`).then((r) => r.json()),
      fetch(`https://api.github.com/users/${u}/repos?per_page=100`).then((r) =>
        r.json(),
      ),
    ])
      .then(([user, repos]: [GitHubUser, GitHubRepo[]]) => {
        setData(user);
        setStars(repos.reduce((a, r) => a + r.stargazers_count, 0));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const stats: StatItem[] = data
    ? [
        {
          icon: <FaUsers />,
          label: "Followers",
          value: data.followers,
          max: 500,
          color: "#6366f1",
          trackLight: "#e0e7ff",
          trackDark: "#1e1b4b",
          textColor: "text-indigo-500",
          bgLight: "bg-indigo-50/60",
          bgDark: "bg-indigo-500/[0.07]",
          borderLight: "border-indigo-100",
          borderDark: "border-indigo-500/20",
        },
        {
          icon: <FaCodeBranch />,
          label: "Following",
          value: data.following,
          max: 300,
          color: "#8b5cf6",
          trackLight: "#ede9fe",
          trackDark: "#2e1065",
          textColor: "text-violet-500",
          bgLight: "bg-violet-50/60",
          bgDark: "bg-violet-500/[0.07]",
          borderLight: "border-violet-100",
          borderDark: "border-violet-500/20",
        },
        {
          icon: <FaBook />,
          label: "Repos",
          value: data.public_repos,
          max: 100,
          color: "#ec4899",
          trackLight: "#fce7f3",
          trackDark: "#500724",
          textColor: "text-pink-500",
          bgLight: "bg-pink-50/60",
          bgDark: "bg-pink-500/[0.07]",
          borderLight: "border-pink-100",
          borderDark: "border-pink-500/20",
        },
        {
          icon: <FaStar />,
          label: "Stars",
          value: stars,
          max: 200,
          color: "#f59e0b",
          trackLight: "#fef3c7",
          trackDark: "#451a03",
          textColor: "text-amber-500",
          bgLight: "bg-amber-50/60",
          bgDark: "bg-amber-500/[0.07]",
          borderLight: "border-amber-100",
          borderDark: "border-amber-500/20",
        },
      ]
    : [];

  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto px-3 sm:px-4 mt-5 sm:mt-6"
    >
      <div
        className="
        rounded-2xl sm:rounded-3xl overflow-hidden
        bg-white dark:bg-[#0d1117]
        border border-gray-100 dark:border-white/[0.06]
        shadow-sm dark:shadow-none
      "
      >
        {/* ── Header ── */}
        <div
          className="
          flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0
          px-4 sm:px-6 py-4 sm:py-5
          border-b border-gray-100 dark:border-white/[0.06]
        "
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl
              bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08]"
            >
              <FaGithub className="text-gray-800 dark:text-white text-sm sm:text-base" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-tight">
                GitHub Profile Stats
              </h2>
              <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500">
                Public contributions & activity
              </p>
            </div>
          </div>

          {data && (
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-indigo-500 hover:text-indigo-400
                dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors self-start sm:self-auto"
            >
              View on GitHub →
            </a>
          )}
        </div>

        {/* ── Stats grid ── */}
        <div className="p-4 sm:p-6">
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-gray-100 dark:bg-white/[0.04] h-40 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((item, i) => (
                <StatCard
                  key={item.label}
                  item={item}
                  index={i}
                  isDark={isDark}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── Footer note ── */}
        <div
          className="
          px-4 sm:px-6 py-3 sm:py-3.5
          border-t border-gray-100 dark:border-white/[0.06]
          text-center
        "
        >
          <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-600">
            Progress rings show % of milestone goal · data fetched live from
            GitHub API
          </p>
        </div>
      </div>
    </motion.section>
  );
}
