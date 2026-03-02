"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBell,
  FaArrowRight,
  FaCheckCircle,
  FaEnvelope,
} from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 px-4 container max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden text-center px-6 sm:px-12 md:px-20 py-14 sm:py-20"
      >
        {/* ── Animated gradient background ── */}
        <div className="absolute inset-0 -z-10">
          {/* Light mode gradient */}
          <div
            className="absolute inset-0
            bg-gradient-to-br from-indigo-50 via-violet-50 to-pink-50
            dark:opacity-0 opacity-100 transition-opacity duration-500"
          />
          {/* Dark mode gradient */}
          <div
            className="absolute inset-0
            bg-gradient-to-br from-indigo-950/80 via-violet-950/60 to-gray-950
            dark:opacity-100 opacity-0 transition-opacity duration-500"
          />

          {/* Animated blobs */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-80px] left-[-80px] w-80 h-80 rounded-full
              bg-indigo-300/40 dark:bg-indigo-500/20 blur-[80px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 20, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-[-80px] right-[-60px] w-96 h-96 rounded-full
              bg-pink-300/40 dark:bg-violet-500/20 blur-[80px]"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], x: [0, 15, 0] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute top-[30%] left-[40%] w-64 h-64 rounded-full
              bg-violet-200/30 dark:bg-pink-500/10 blur-[60px]"
          />
        </div>

        {/* ── Top gradient border ── */}
        <div
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg,transparent,#6366f1,#8b5cf6,#ec4899,transparent)",
          }}
        />

        {/* ── Floating icons (decorative) ── */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 left-8 sm:left-16 opacity-20 dark:opacity-10"
        >
          <FaEnvelope className="text-4xl text-indigo-500" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-8 right-8 sm:right-16 opacity-20 dark:opacity-10"
        >
          <FaBell className="text-4xl text-violet-500" />
        </motion.div>

        {/* ── Icon badge ── */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          viewport={{ once: true }}
          className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6
            bg-white dark:bg-white/[0.08]
            border border-indigo-100 dark:border-indigo-500/20
            shadow-lg shadow-indigo-100/60 dark:shadow-indigo-500/10"
        >
          <FaBell
            className="text-2xl"
            style={{
              background: "linear-gradient(135deg,#6366f1,#ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          />
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="relative text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter
            text-gray-900 dark:text-white leading-tight mb-4"
        >
          Stay in the{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#6366f1,#8b5cf6,#ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Loop
          </span>
        </motion.h2>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="relative text-gray-600 dark:text-gray-400 text-base sm:text-lg
            max-w-lg mx-auto leading-relaxed mb-10"
        >
          Get the latest blog posts, projects & tech insights delivered straight
          to your inbox.{" "}
          <span className="text-indigo-500 font-medium">No spam</span> —
          unsubscribe anytime.
        </motion.p>

        {/* ── Form / Success ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="relative max-w-md mx-auto"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-3 py-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                >
                  <FaCheckCircle className="text-5xl text-emerald-500" />
                </motion.div>
                <p className="text-xl font-black text-gray-900 dark:text-white">
                  You're in! 🎉
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Thanks for subscribing — watch your inbox!
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-3.5 rounded-2xl text-sm
                    bg-white dark:bg-white/[0.07]
                    border border-gray-200 dark:border-white/[0.10]
                    text-gray-900 dark:text-white
                    placeholder-gray-400 dark:placeholder-gray-500
                    shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-indigo-400/50
                    focus:border-indigo-300 dark:focus:border-indigo-500/50
                    transition-all duration-200"
                />
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl
                    text-sm font-bold text-white shrink-0
                    disabled:opacity-70 disabled:cursor-not-allowed
                    shadow-lg shadow-indigo-300/40 dark:shadow-indigo-500/25
                    transition-colors duration-200"
                  style={{
                    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                  }}
                >
                  {loading ? (
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Bottom note ── */}
        {!submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
            className="relative mt-5 text-xs text-gray-400 dark:text-gray-600"
          >
            Join readers who get weekly updates · No spam ever
          </motion.p>
        )}

        {/* ── Bottom gradient border ── */}
        <div
          className="absolute inset-x-0 bottom-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg,transparent,#ec4899,#8b5cf6,#6366f1,transparent)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Newsletter;
