"use client";

import React from "react";
import Link from "next/link";
import {
  FaClock,
  FaCalendarAlt,
  FaArrowRight,
  FaPen,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { blogs } from "@/contents/blog";
import { motion } from "framer-motion";

const BLOG_SITE = "https://www.lilawattechblog.in";

const BlogsPage = () => {
  return (
    <div
      className="min-h-screen px-4 py-20 sm:py-28
      bg-gradient-to-br from-violet-50/60 via-white to-pink-50/40
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
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full
            bg-violet-50 dark:bg-violet-500/10
            border border-violet-100 dark:border-violet-500/20"
          >
            <FaPen className="text-violet-500 text-xs" />
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400">
              All Posts
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter
            text-gray-900 dark:text-white leading-none"
          >
            Blog{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#8b5cf6,#ec4899,#f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Posts
            </span>
          </h1>

          <p className="mt-4 sm:mt-5 text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Thoughts on code, tech & building things. All posts live on{" "}
            <a
              href={BLOG_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-500 hover:text-violet-400 font-semibold underline underline-offset-2 transition-colors"
            >
              lilawattechblog.in
            </a>
          </p>

          {/* Stats + visit button row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div
              className="inline-flex items-center gap-6 px-6 py-3 rounded-2xl
              bg-white dark:bg-white/[0.04]
              border border-gray-100 dark:border-white/[0.07] shadow-sm"
            >
              <div className="text-center">
                <p className="text-2xl font-black text-gray-900 dark:text-white">
                  {blogs.length}
                </p>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest">
                  Posts
                </p>
              </div>
              <div className="w-px h-8 bg-gray-100 dark:bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-black text-gray-900 dark:text-white">
                  ∞
                </p>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest">
                  Ideas
                </p>
              </div>
            </div>

            <a
              href={BLOG_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold
                bg-violet-600 hover:bg-violet-500 text-white
                shadow-lg shadow-violet-300/30 dark:shadow-violet-500/20
                transition-all duration-300 hover:scale-105"
            >
              <FaExternalLinkAlt className="text-xs" />
              Visit Blog Site
            </a>
          </div>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: (i % 3) * 0.1,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              {/* Whole card → redirect to lilawattechblog.in */}
              <a
                href={BLOG_SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full rounded-2xl sm:rounded-3xl overflow-hidden
                  bg-white dark:bg-white/[0.04]
                  border border-gray-100 dark:border-white/[0.07]
                  shadow-md shadow-gray-100/80 dark:shadow-none
                  hover:shadow-xl hover:shadow-violet-100/60 dark:hover:shadow-violet-500/10
                  hover:-translate-y-2
                  transition-all duration-300"
              >
                {/* Top shimmer */}
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-300/60 dark:via-violet-500/40 to-transparent" />

                <div className="flex flex-col flex-1 p-5 sm:p-7">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 dark:text-gray-500 mb-4 font-medium">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-violet-400 text-[10px]" />
                      {new Date(blog.date).toLocaleDateString(undefined, {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-violet-400 text-[10px]" />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug
                    group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300"
                  >
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1">
                    {blog.excerpt}
                  </p>

                  {/* Footer */}
                  <div
                    className="mt-5 pt-4 border-t border-gray-100 dark:border-white/[0.06]
                    flex items-center justify-between"
                  >
                    <span
                      className="text-xs font-semibold text-violet-500 dark:text-violet-400
                      flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300"
                    >
                      Read full post
                      <FaArrowRight className="text-[10px]" />
                    </span>
                    <span className="text-[10px] text-gray-400 dark:text-gray-600 font-medium">
                      lilawattechblog.in
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-gray-400 dark:text-gray-600 text-sm mb-4">
            All posts are hosted on my dedicated blog site
          </p>
          <a
            href={BLOG_SITE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm
              bg-violet-600 hover:bg-violet-500 text-white
              shadow-lg shadow-violet-300/40 dark:shadow-violet-500/25
              transition-all duration-300 hover:scale-105"
          >
            Visit lilawattechblog.in
            <FaExternalLinkAlt className="text-xs group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogsPage;
