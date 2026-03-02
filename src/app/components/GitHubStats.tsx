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

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: number;
  max: number;
  color: string;
  gradFrom: string;
  gradTo: string;
  trackLight: string;
  trackDark: string;
  textColor: string;
  bgLight: string;
  bgDark: string;
  borderLight: string;
  borderDark: string;
}

function Ring({
  pct,
  gradFrom,
  gradTo,
  trackColor,
  size = 76,
  stroke = 6,
  children,
}: {
  pct: number;
  gradFrom: string;
  gradTo: string;
  trackColor: string;
  size?: number;
  stroke?: number;
  children?: React.ReactNode;
}) {
  const id = `grad-${gradFrom.replace("#", "")}`;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const safe = Number.isFinite(pct) ? Math.min(pct, 100) : 0;
  const offset = circ - (safe / 100) * circ;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradFrom} />
            <stop offset="100%" stopColor={gradTo} />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={trackColor}
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
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
  const safeValue =
    Number.isFinite(item.value) && item.value > 0 ? item.value : 0;
  const safeMax = Number.isFinite(item.max) && item.max > 0 ? item.max : 100;
  const pct = Math.min((safeValue / safeMax) * 100, 100);
  const track = isDark ? item.trackDark : item.trackLight;

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (safeValue === 0) {
      setCount(0);
      return;
    }
    let cur = 0;
    const steps = 60;
    const inc = safeValue / steps;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= safeValue) {
        setCount(safeValue);
        clearInterval(timer);
      } else setCount(Math.floor(cur));
    }, 1200 / steps);
    return () => clearInterval(timer);
  }, [inView, safeValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.03 }}
      className={`flex flex-col items-center gap-3 p-4 sm:p-5 rounded-2xl border transition-all duration-300
        ${item.bgLight} ${item.borderLight}
        dark:${item.bgDark} dark:${item.borderDark}`}
    >
      {/* Shimmer top */}
      <div
        className="absolute inset-x-0 top-0 h-[1px] rounded-t-2xl"
        style={{
          background: `linear-gradient(90deg,transparent,${item.gradFrom}60,transparent)`,
        }}
      />

      <Ring
        pct={pct}
        gradFrom={item.gradFrom}
        gradTo={item.gradTo}
        trackColor={track}
        size={76}
        stroke={6}
      >
        <span className={`text-xl ${item.textColor}`}>{item.icon}</span>
      </Ring>

      <div className="text-center">
        <span
          ref={ref}
          className="block text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-none tabular-nums"
        >
          {String(count)}
        </span>
        <span className="block text-[11px] text-gray-400 uppercase tracking-widest mt-1 font-medium">
          {item.label}
        </span>
      </div>

      {/* Gradient mini bar */}
      <div className="w-full h-1 rounded-full bg-gray-100 dark:bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg,${item.gradFrom},${item.gradTo})`,
          }}
          initial={{ width: "0%" }}
          whileInView={{ width: `${Number.isFinite(pct) ? pct : 0}%` }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.3 + index * 0.08,
          }}
          viewport={{ once: true }}
        />
      </div>
      <span className="text-[10px] text-gray-400 dark:text-gray-600 -mt-2">
        {Number.isFinite(pct) ? `${pct.toFixed(0)}% of goal` : "0% of goal"}
      </span>
    </motion.div>
  );
}

export default function GitHubStats() {
  const [ghData, setGhData] = useState({
    repos: 0,
    followers: 0,
    following: 0,
    stars: 0,
    profileUrl: "https://github.com/mukeshlilawat1",
  });
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const update = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    fetch("/api/github", { cache: "no-store" })
      .then((r) => r.json())
      .then((result) => {
        setGhData({
          repos: Number(result.publicRepos ?? result.public_repos ?? 0),
          followers: Number(result.followers ?? 0),
          following: Number(result.following ?? 0),
          stars: Number(result.stars ?? 0),
          profileUrl: result.profileUrl ?? "https://github.com/mukeshlilawat1",
        });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const statItems: StatItem[] = [
    {
      icon: <FaUsers />,
      label: "Followers",
      value: ghData.followers,
      max: 500,
      gradFrom: "#6366f1",
      gradTo: "#8b5cf6",
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
      value: ghData.following,
      max: 300,
      gradFrom: "#8b5cf6",
      gradTo: "#a78bfa",
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
      value: ghData.repos,
      max: 100,
      gradFrom: "#ec4899",
      gradTo: "#f472b6",
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
      value: ghData.stars,
      max: 200,
      gradFrom: "#f59e0b",
      gradTo: "#fbbf24",
      color: "#f59e0b",
      trackLight: "#fef3c7",
      trackDark: "#451a03",
      textColor: "text-amber-500",
      bgLight: "bg-amber-50/60",
      bgDark: "bg-amber-500/[0.07]",
      borderLight: "border-amber-100",
      borderDark: "border-amber-500/20",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="w-full max-w-4xl mx-auto px-3 sm:px-4 mt-6"
    >
      <div
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden
        bg-white dark:bg-[#0d1117]
        border border-gray-100 dark:border-white/[0.06]
        shadow-sm dark:shadow-none"
      >
        {/* Top gradient line */}
        <div
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg,transparent,#6366f1,#8b5cf6,#ec4899,transparent)",
          }}
        />

        {/* Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3
          px-5 sm:px-7 py-4 sm:py-5 border-b border-gray-100 dark:border-white/[0.06]"
        >
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center w-9 h-9 rounded-xl
              bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08]"
            >
              <FaGithub className="text-gray-800 dark:text-white" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                GitHub Profile Stats
              </h2>
              <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500">
                Public contributions & activity
              </p>
            </div>
          </div>
          {!loading && (
            <a
              href={ghData.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold transition-colors self-start sm:self-auto"
              style={{
                background: "linear-gradient(90deg,#6366f1,#ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              View on GitHub →
            </a>
          )}
        </div>

        {/* Grid */}
        <div className="p-4 sm:p-6">
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-gray-100 dark:bg-white/[0.04] h-44 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {statItems.map((item, i) => (
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

        {/* Footer */}
        <div className="px-4 sm:px-6 py-3 border-t border-gray-100 dark:border-white/[0.06] text-center">
          <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-600">
            Progress rings show % of milestone goal · data fetched live via API
          </p>
        </div>

        {/* Bottom gradient line */}
        <div
          className="absolute inset-x-0 bottom-0 h-[1px]"
          style={{
            background:
              "linear-gradient(90deg,transparent,#f59e0b,#ec4899,transparent)",
          }}
        />
      </div>
    </motion.section>
  );
}
