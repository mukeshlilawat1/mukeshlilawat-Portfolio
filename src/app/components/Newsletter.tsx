import React from "react";

const Newsletter = () => {
  return (
    <section className="relative py-24 bg-gray-100 dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
      {/* Decorative subtle circles */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-gray-300/20 dark:bg-gray-700/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-16 w-96 h-96 bg-gray-300/20 dark:bg-gray-700/20 rounded-full filter blur-3xl animate-pulse-slow"></div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-0 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Stay Updated With My Tech Blogs
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Subscribe to get the latest updates on projects, blog posts, and tech insights delivered straight to your inbox.
        </p>

        <form className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-2">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 px-5 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-gray-400/30 transition-all duration-300"
          />
          <button
            type="submit"
            className="px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 transition-transform duration-300"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
