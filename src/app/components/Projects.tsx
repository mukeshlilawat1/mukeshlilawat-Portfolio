"use client"
import React from "react";
import { projects } from "@/contents/project";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="py-20 sm:py-28 px-4 container max-w-7xl mx-auto">
      {/* ── Header ── */}
      <div className="text-center mb-14 sm:mb-20">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-3">
          Portfolio
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white leading-none">
          Featured{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Projects
          </span>
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
          Things I've built — from idea to deployment.
        </p>
      </div>

      {/* ── Cards grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.slice(0, 3).map((project, i) => (
          <article
            key={project.title}
            className="group relative flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden
              bg-white dark:bg-white/[0.04]
              border border-gray-100 dark:border-white/[0.07]
              shadow-md shadow-gray-100/80 dark:shadow-none
              hover:shadow-xl hover:shadow-indigo-100/60 dark:hover:shadow-indigo-500/10
              hover:-translate-y-2
              transition-all duration-400 ease-out"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {/* Top shimmer line */}
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
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Hover action links floating on image */}
              <div
                className="absolute inset-0 flex items-center justify-center gap-3
                opacity-0 group-hover:opacity-100 transition-all duration-400"
              >
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold
                      bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white
                      hover:bg-white dark:hover:bg-gray-800
                      shadow-lg backdrop-blur-sm
                      transition-all duration-200 hover:scale-105"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="text-sm" /> Code
                  </Link>
                )}
                {project.demoLink && (
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold
                      bg-indigo-600/90 text-white
                      hover:bg-indigo-600
                      shadow-lg backdrop-blur-sm
                      transition-all duration-200 hover:scale-105"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
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
                      border border-gray-200/80 dark:border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom links (visible always, as fallback) */}
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
                      hover:text-indigo-600 dark:hover:text-indigo-400
                      transition-colors"
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
                      hover:text-indigo-600 dark:hover:text-indigo-400
                      transition-colors"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── View All button ── */}
      <div className="text-center mt-12 sm:mt-16">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm
            bg-indigo-600 hover:bg-indigo-500 text-white
            shadow-lg shadow-indigo-300/40 dark:shadow-indigo-500/25
            transition-all duration-300 hover:scale-105"
        >
          View All Projects
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
