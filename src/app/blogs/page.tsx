"use client";

import React from "react";
import Link from "next/link";
import { FaClock, FaCalendarAlt } from "react-icons/fa";
import { blogs } from "@/contents/blog";

const page = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500">
        Blog Posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            {/* Gradient Overlay for subtle effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>

            <Link href={`/blogs/${blog.slug}`}>
              <div className="relative p-6 bg-white dark:bg-gray-900 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-6">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-gray-500 dark:text-gray-400" />
                    {new Date(blog.date).toLocaleDateString(undefined, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>

                  <span className="flex items-center gap-1">
                    <FaClock className="text-gray-500 dark:text-gray-400" />
                    {blog.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default page;
