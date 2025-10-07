import { blogs } from "@/contents/blog";
import React from "react";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const Blogs = () => {
  return (
    <section className="relative py-28 container max-w-7xl mx-auto px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 -z-10"></div>

      <h2 className="text-5xl md:text-6xl font-extrabold mb-20 text-center text-gray-900 dark:text-white">
        Latest Blog Posts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogs.slice(0, 3).map((blog) => (
          <article
            key={blog.slug}
            className="group relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <div className="p-8 cursor-pointer">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500">
                  {blog.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-8">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-purple-500" />
                    {new Date(blog.date).toLocaleDateString(undefined, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>

                  <span className="flex items-center">
                    <FaClock className="mr-2 text-purple-500" />
                    {blog.readTime}
                  </span>
                </div>
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-50/0 via-purple-100/20 to-purple-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
            </Link>
          </article>
        ))}
      </div>

      <div className="text-center mt-20">
        <Link
          href="/blogs"
          className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold px-12 py-5 rounded-2xl shadow-lg hover:scale-105 transition-all duration-500"
        >
          View More Blogs
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
