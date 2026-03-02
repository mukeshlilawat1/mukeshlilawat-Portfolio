"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaGamepad,
  FaTools,
  FaJava,
  FaBriefcase,
  FaGraduationCap,
  FaRocket,
  FaHeart,
} from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true },
});

/* ── Card ── */
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
      <div
        className="absolute inset-x-0 top-0 h-[1px]
        bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent dark:via-indigo-500/40"
      />
      {children}
    </motion.div>
  );
}

/* ── Section heading ── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.div {...fadeUp(0)} className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white">
        {children}
      </h2>
      <div
        className="mt-3 h-px max-w-[120px] mx-auto
        bg-gradient-to-r from-transparent via-indigo-400/60 dark:via-indigo-500/40 to-transparent"
      />
    </motion.div>
  );
}

const skills = [
  {
    icon: FaCode,
    color: "indigo",
    title: "Frontend",
    items: [
      "HTML5 · CSS3",
      "JavaScript · TypeScript",
      "React.js · Next.js · Angular.js",
      "Tailwind CSS · Bootstrap",
      "JSP",
    ],
  },
  {
    icon: FaLaptopCode,
    color: "violet",
    title: "Backend",
    items: [
      "Spring Framework · Spring Boot",
      "Spring Cloud · Spring JPA · Spring Security",
      "Microservices · Node.js · Express.js",
      "PostgreSQL · MongoDB · MySQL",
    ],
  },
  {
    icon: FaTools,
    color: "pink",
    title: "Tools & DevOps",
    items: [
      "Docker · Kubernetes · AWS",
      "CI/CD Pipeline · Git · GitHub",
      "Linux · Shell Scripting",
      "Low-Level Design · DBMS",
      "Networking · Operating System",
    ],
  },
  {
    icon: FaBrain,
    color: "amber",
    title: "AI & Machine Learning",
    items: [
      "Python · NumPy · Pandas",
      "Matplotlib · Scikit-Learn",
      "Mathematics for ML",
    ],
  },
  {
    icon: FaJava,
    color: "emerald",
    title: "Programming Languages",
    items: ["Python", "C · C++", "Java", "JavaScript"],
  },
  {
    icon: FaGamepad,
    color: "cyan",
    title: "Game Libraries",
    items: [
      "Python · Tkinter · Pygame",
      "C · C++ · Raylib · OpenGL",
      "Java · Swing · JavaFX · AWT",
    ],
  },
];

const colorMap: Record<
  string,
  {
    icon: string;
    badge: string;
    badgeBorder: string;
    badgeText: string;
    dot: string;
  }
> = {
  indigo: {
    icon: "text-indigo-500",
    badge: "bg-indigo-50 dark:bg-indigo-500/10",
    badgeBorder: "border-indigo-200 dark:border-indigo-500/25",
    badgeText: "text-indigo-700 dark:text-indigo-400",
    dot: "bg-indigo-400",
  },
  violet: {
    icon: "text-violet-500",
    badge: "bg-violet-50 dark:bg-violet-500/10",
    badgeBorder: "border-violet-200 dark:border-violet-500/25",
    badgeText: "text-violet-700 dark:text-violet-400",
    dot: "bg-violet-400",
  },
  pink: {
    icon: "text-pink-500",
    badge: "bg-pink-50 dark:bg-pink-500/10",
    badgeBorder: "border-pink-200 dark:border-pink-500/25",
    badgeText: "text-pink-700 dark:text-pink-400",
    dot: "bg-pink-400",
  },
  amber: {
    icon: "text-amber-500",
    badge: "bg-amber-50 dark:bg-amber-500/10",
    badgeBorder: "border-amber-200 dark:border-amber-500/25",
    badgeText: "text-amber-700 dark:text-amber-400",
    dot: "bg-amber-400",
  },
  emerald: {
    icon: "text-emerald-500",
    badge: "bg-emerald-50 dark:bg-emerald-500/10",
    badgeBorder: "border-emerald-200 dark:border-emerald-500/25",
    badgeText: "text-emerald-700 dark:text-emerald-400",
    dot: "bg-emerald-400",
  },
  cyan: {
    icon: "text-cyan-500",
    badge: "bg-cyan-50 dark:bg-cyan-500/10",
    badgeBorder: "border-cyan-200 dark:border-cyan-500/25",
    badgeText: "text-cyan-700 dark:text-cyan-400",
    dot: "bg-cyan-400",
  },
};

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Freelancer",
    period: "2025 – Present",
    color: "indigo",
    icon: FaRocket,
    points: [
      "Led design and implementation of full-stack web applications with React and Spring Boot, focusing on efficient performance and modern UI.",
    ],
  },
  {
    role: "Open Source Contributions",
    company: "Open Source Projects",
    period: "Ongoing",
    color: "violet",
    icon: FaHeart,
    points: [
      "Contributed to multiple open-source web applications using React.js and Spring Boot, improving community collaboration and developer productivity.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen py-20 px-4">
      <style>{`
        @keyframes drift {
          from { transform: translateY(0) scale(1); }
          to   { transform: translateY(40px) scale(1.08); }
        }
        @keyframes gradShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .grad-title {
          background: linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899,#f59e0b,#6366f1);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 6s ease infinite;
        }
      `}</style>

      {/* Blobs */}
      <div
        className="fixed w-[600px] h-[600px] top-[-20%] left-[-15%] rounded-full pointer-events-none -z-10
        bg-indigo-200/60 dark:bg-indigo-600/15 blur-[110px]"
        style={{ animation: "drift 20s ease-in-out infinite alternate" }}
      />
      <div
        className="fixed w-[450px] h-[450px] bottom-[-10%] right-[-8%] rounded-full pointer-events-none -z-10
        bg-violet-200/60 dark:bg-violet-600/12 blur-[110px]"
        style={{
          animation: "drift 25s ease-in-out infinite alternate-reverse",
        }}
      />
      <div
        className="fixed w-[350px] h-[350px] top-[40%] left-[55%] rounded-full pointer-events-none -z-10
        bg-pink-100/50 dark:bg-cyan-500/8 blur-[110px]"
        style={{ animation: "drift 30s ease-in-out infinite alternate" }}
      />

      <div className="container max-w-5xl mx-auto">
        {/* ══ Hero Header ══ */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
            bg-indigo-50 border border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/25"
          >
            <FaCode className="text-indigo-500 text-xs" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              About Me
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            <span className="text-gray-900 dark:text-white">Who </span>
            <span className="grad-title">Am I?</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a passionate{" "}
            <strong className="text-gray-900 dark:text-white font-semibold">
              Full-Stack Developer
            </strong>{" "}
            with expertise in building modern web applications and{" "}
            <strong className="text-gray-900 dark:text-white font-semibold">
              AI/ML systems
            </strong>
            . With a strong foundation in both frontend and backend
            technologies, I strive to create seamless user experiences and
            robust, scalable solutions.
          </p>

          <div
            className="mt-8 h-px max-w-xs mx-auto
            bg-gradient-to-r from-transparent via-indigo-300/60 dark:via-indigo-500/30 to-transparent"
          />
        </motion.div>

        {/* ══ Skills ══ */}
        <section className="mb-24">
          <SectionHeading>Skills</SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, i) => {
              const c = colorMap[skill.color];
              const Icon = skill.icon;
              return (
                <motion.div key={i} {...fadeUp(i * 0.07)}>
                  <Card className="h-full">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`flex items-center justify-center w-10 h-10 rounded-2xl
                          ${c.badge} border ${c.badgeBorder}`}
                        >
                          <Icon className={`${c.icon} text-lg`} />
                        </div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-white">
                          {skill.title}
                        </h3>
                      </div>

                      {/* Divider */}
                      <div
                        className={`h-px mb-4 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent`}
                      />

                      {/* Items */}
                      <ul className="space-y-2">
                        {skill.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span
                              className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`}
                            />
                            <span className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ══ Experience ══ */}
        <section className="mb-24">
          <SectionHeading>Experience</SectionHeading>

          <div className="max-w-2xl mx-auto space-y-5">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color];
              const Icon = exp.icon;
              return (
                <motion.div key={i} {...fadeUp(i * 0.1)}>
                  <Card>
                    <div className="p-7">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex items-center justify-center w-11 h-11 rounded-2xl shrink-0
                          ${c.badge} border ${c.badgeBorder}`}
                        >
                          <Icon className={`${c.icon} text-lg`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                              {exp.role}
                            </h3>
                            <span
                              className={`text-xs font-semibold px-2.5 py-1 rounded-full
                              ${c.badge} border ${c.badgeBorder} ${c.badgeText}`}
                            >
                              {exp.period}
                            </span>
                          </div>
                          <p className={`text-sm font-semibold mb-3 ${c.icon}`}>
                            {exp.company}
                          </p>
                          <div className="h-px mb-3 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                          <ul className="space-y-1.5">
                            {exp.points.map((pt, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <span
                                  className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`}
                                />
                                <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {pt}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ══ Education ══ */}
        <section>
          <SectionHeading>Education</SectionHeading>

          <div className="max-w-2xl mx-auto">
            <motion.div {...fadeUp(0)}>
              <Card>
                <div className="p-7">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center w-11 h-11 rounded-2xl shrink-0
                      bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/25"
                    >
                      <FaGraduationCap className="text-emerald-500 text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        Computer Science & Mathematics
                      </h3>
                      <div className="h-px my-3 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        CS graduate passionate about building intelligent,
                        scalable full-stack applications powered by{" "}
                        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                          Artificial Intelligence
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold text-violet-600 dark:text-violet-400">
                          Machine Learning
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
