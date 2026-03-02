"use client";

import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";
import { projects } from "@/contents/project";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      className="min-h-screen px-4 py-20 sm:py-28
      bg-gradient-to-br from-slate-50 via-indigo-50/40 to-violet-50/30
      dark:from-gray-950 dark:via-gray-900 dark:to-black
      transition-colors duration-500"
    >
      <div className="container max-w-7xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-20"
        >
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full
            bg-indigo-50 dark:bg-indigo-500/10
            border border-indigo-100 dark:border-indigo-500/20"
          >
            <FaCode className="text-indigo-500 text-xs" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
              All Work
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter
            text-gray-900 dark:text-white leading-none"
          >
            My{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899,#f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h1>

          <p
            className="mt-4 sm:mt-5 text-gray-500 dark:text-gray-400 text-base sm:text-lg
            max-w-xl mx-auto leading-relaxed"
          >
            A collection of things I've designed, built, and shipped — click to
            explore.
          </p>

          {/* Stats row */}
          <div
            className="mt-8 inline-flex items-center gap-6 sm:gap-8 px-6 py-3 rounded-2xl
            bg-white dark:bg-white/[0.04]
            border border-gray-100 dark:border-white/[0.07]
            shadow-sm"
          >
            <div className="text-center">
              <p className="text-2xl font-black text-gray-900 dark:text-white">
                {projects.length}
              </p>
              <p className="text-[11px] text-gray-400 uppercase tracking-widest">
                Projects
              </p>
            </div>
            <div className="w-px h-8 bg-gray-100 dark:bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-black text-gray-900 dark:text-white">
                {[...new Set(projects.flatMap((p) => p.technologies))].length}+
              </p>
              <p className="text-[11px] text-gray-400 uppercase tracking-widest">
                Technologies
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: (i % 3) * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden
                bg-white dark:bg-white/[0.04]
                border border-gray-100 dark:border-white/[0.07]
                shadow-md shadow-gray-100/80 dark:shadow-none
                hover:shadow-xl hover:shadow-indigo-100/60 dark:hover:shadow-indigo-500/10
                hover:-translate-y-2
                transition-all duration-300"
            >
              {/* Top shimmer */}
              <div
                className="absolute inset-x-0 top-0 h-[1px] z-10
                bg-gradient-to-r from-transparent via-indigo-300/60 dark:via-indigo-500/40 to-transparent"
              />

              {/* ── Image ── */}
              <div className="relative aspect-[16/9] overflow-hidden shrink-0">
                <Image
                  src={project.Image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Floating action buttons on image hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-3
                  opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0"
                >
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold
                        bg-white/95 dark:bg-gray-900/95 text-gray-900 dark:text-white
                        shadow-lg backdrop-blur-sm
                        hover:scale-105 transition-transform"
                    >
                      <FaGithub /> Code
                    </Link>
                  )}
                  {project.demoLink && (
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold
                        bg-indigo-600/95 text-white
                        shadow-lg backdrop-blur-sm
                        hover:scale-105 transition-transform"
                    >
                      <FaExternalLinkAlt className="text-[10px]" /> Live Demo
                    </Link>
                  )}
                </div>
              </div>

              {/* ── Content ── */}
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold
                        bg-gray-100 dark:bg-white/[0.06]
                        text-gray-600 dark:text-gray-300
                        border border-gray-200/80 dark:border-white/[0.07]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom links */}
                <div
                  className="flex items-center gap-4 mt-4 pt-4
                  border-t border-gray-100 dark:border-white/[0.06]"
                >
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      className="flex items-center gap-1.5 text-xs font-semibold
                        text-gray-500 dark:text-gray-400
                        hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <FaGithub className="text-sm" /> Source
                    </Link>
                  )}
                  {project.demoLink && (
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      className="flex items-center gap-1.5 text-xs font-semibold
                        text-gray-500 dark:text-gray-400
                        hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
