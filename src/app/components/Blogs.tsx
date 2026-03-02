"use client";

import { blogs } from "@/contents/blog";
import React from "react";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaArrowRight, FaPen } from "react-icons/fa";
import { motion } from "framer-motion";

const BLOG_SITE = "https://www.lilawattechblog.in";

const Blogs = () => {
  return (
    <section className="py-20 sm:py-28 px-4 container max-w-7xl mx-auto">
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="text-center mb-14 sm:mb-20"
      >
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400 mb-3">
          <FaPen className="text-[10px]" /> Writing
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white leading-none">
          Latest{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#8b5cf6,#ec4899,#f59e0b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Blog Posts
          </span>
        </h2>
        <p className="mt-4 text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
          Thoughts on code, tech, and building things — read more on{" "}
          <a
            href={BLOG_SITE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-500 hover:text-violet-400 font-semibold underline underline-offset-2 transition-colors"
          >
            lilawattechblog.in
          </a>
        </p>
      </motion.div>

      {/* ── Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
        {blogs.slice(0, 3).map((blog, i) => (
          <motion.article
            key={blog.slug}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.1,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="group"
          >
            {/* Clicking card → goes to lilawattechblog.in */}
            <a
              href={BLOG_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col h-full rounded-2xl sm:rounded-3xl overflow-hidden
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
                {/* Meta row */}
                <div className="flex items-center gap-4 text-[11px] text-gray-400 dark:text-gray-500 mb-4 font-medium">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-violet-400" />
                    {new Date(blog.date).toLocaleDateString(undefined, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <span className="flex items-center gap-1.5">
                    <FaClock className="text-violet-400" />
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

                {/* Read more link */}
                <div
                  className="mt-5 pt-4 border-t border-gray-100 dark:border-white/[0.06]
                  flex items-center justify-between"
                >
                  <span
                    className="text-xs font-semibold text-violet-500 dark:text-violet-400
                    flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300"
                  >
                    Read on lilawattechblog.in
                    <FaArrowRight className="text-[10px]" />
                  </span>
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center
                    bg-violet-50 dark:bg-violet-500/10
                    border border-violet-100 dark:border-violet-500/20
                    group-hover:bg-violet-100 dark:group-hover:bg-violet-500/20
                    transition-colors duration-300"
                  >
                    <FaArrowRight className="text-violet-500 text-[10px]" />
                  </span>
                </div>
              </div>
            </a>
          </motion.article>
        ))}
      </div>

      {/* ── View All button → goes to lilawattechblog.in ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-12 sm:mt-16"
      >
        <a
          href={BLOG_SITE}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm
            bg-violet-600 hover:bg-violet-500 text-white
            shadow-lg shadow-violet-300/40 dark:shadow-violet-500/25
            transition-all duration-300 hover:scale-105"
        >
          View All Blogs
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
};

export default Blogs;
