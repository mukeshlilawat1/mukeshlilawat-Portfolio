"use client";

import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaTelegram,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const contactItems = [
  {
    icon: FaEnvelope,
    color: "indigo",
    label: "Email",
    value: "mukeshkumarlilawat1@gmail.com",
    href: "mailto:mukeshkumarlilawat1@gmail.com",
  },
  {
    icon: FaTwitter,
    color: "sky",
    label: "Twitter",
    value: "@coder_lilawat",
    href: "https://x.com/coder_lilawat",
  },
  {
    icon: FaPhone,
    color: "emerald",
    label: "Phone",
    value: "+91 90796 43602",
    href: "tel:+919079643602",
  },
  {
    icon: FaTelegram,
    color: "blue",
    label: "Telegram",
    value: "mukeshlilawat",
    href: "https://t.me/mukeshlilawat",
  },
  {
    icon: FaMapMarkedAlt,
    color: "pink",
    label: "Location",
    value: "Jodhpur, Rajasthan",
    href: null,
  },
];

const colorMap: Record<
  string,
  { bg: string; border: string; icon: string; text: string }
> = {
  indigo: {
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "border-indigo-200 dark:border-indigo-500/25",
    icon: "text-indigo-500",
    text: "text-indigo-600 dark:text-indigo-400",
  },
  sky: {
    bg: "bg-sky-50 dark:bg-sky-500/10",
    border: "border-sky-200 dark:border-sky-500/25",
    icon: "text-sky-500",
    text: "text-sky-600 dark:text-sky-400",
  },
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    border: "border-emerald-200 dark:border-emerald-500/25",
    icon: "text-emerald-500",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  blue: {
    bg: "bg-blue-50 dark:bg-blue-500/10",
    border: "border-blue-200 dark:border-blue-500/25",
    icon: "text-blue-500",
    text: "text-blue-600 dark:text-blue-400",
  },
  pink: {
    bg: "bg-pink-50 dark:bg-pink-500/10",
    border: "border-pink-200 dark:border-pink-500/25",
    icon: "text-pink-500",
    text: "text-pink-600 dark:text-pink-400",
  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
});

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
        .input-field {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.875rem;
          border: 1px solid #e5e7eb;
          background: #fff;
          color: #111827;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.2s;
        }
        .input-field::placeholder { color: #9ca3af; }
        .input-field:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); }
        .dark .input-field {
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.08);
          color: #f3f4f6;
        }
        .dark .input-field:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.18); }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner { animation: spin 0.9s linear infinite; }
      `}</style>

      {/* Blobs */}
      <div
        className="fixed w-[550px] h-[550px] top-[-18%] left-[-12%] rounded-full pointer-events-none -z-10
        bg-indigo-200/60 dark:bg-indigo-600/15 blur-[110px]"
        style={{ animation: "drift 20s ease-in-out infinite alternate" }}
      />
      <div
        className="fixed w-[420px] h-[420px] bottom-[-10%] right-[-8%] rounded-full pointer-events-none -z-10
        bg-violet-200/60 dark:bg-violet-600/12 blur-[110px]"
        style={{
          animation: "drift 25s ease-in-out infinite alternate-reverse",
        }}
      />
      <div
        className="fixed w-[300px] h-[300px] top-[45%] left-[60%] rounded-full pointer-events-none -z-10
        bg-pink-100/50 dark:bg-cyan-500/8 blur-[110px]"
        style={{ animation: "drift 30s ease-in-out infinite alternate" }}
      />

      <div className="container max-w-5xl mx-auto">
        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
            bg-indigo-50 border border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/25"
          >
            <FaEnvelope className="text-indigo-500 text-xs" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Contact
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-5">
            <span className="text-gray-900 dark:text-white">Get In </span>
            <span className="grad-title">Touch</span>
          </h1>
          <p className="max-w-lg mx-auto text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            Always open to discussing new projects, creative ideas, or
            opportunities to be part of your journey.
          </p>
          <div
            className="mt-7 h-px max-w-xs mx-auto
            bg-gradient-to-r from-transparent via-indigo-300/60 dark:via-indigo-500/30 to-transparent"
          />
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* ── Left: Contact Info ── */}
          <motion.div
            {...fadeUp(0.1)}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactItems.map((item, i) => {
              const c = colorMap[item.color];
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className="relative rounded-2xl overflow-hidden
                    bg-white border border-gray-100 shadow-lg shadow-gray-200/50
                    dark:bg-white/[0.05] dark:border-white/[0.07] dark:backdrop-blur-xl"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[1px]
                    bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent dark:via-indigo-500/30"
                  />
                  <div className="p-4 flex items-center gap-3">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0
                      ${c.bg} border ${c.border}`}
                    >
                      <Icon className={`${c.icon} text-base`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          className={`text-sm font-semibold truncate block hover:underline transition-colors ${c.text}`}
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className={`text-sm font-semibold ${c.text}`}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-3">
            <div
              className="relative rounded-3xl overflow-hidden h-full
              bg-white border border-gray-100 shadow-xl shadow-gray-200/60
              dark:bg-white/[0.05] dark:border-white/[0.07] dark:backdrop-blur-2xl"
            >
              <div
                className="absolute inset-x-0 top-0 h-[1px]
                bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent dark:via-indigo-500/40"
              />

              <div className="p-7 md:p-9">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h2>

                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <FaCheckCircle className="text-5xl text-emerald-500 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                        Thanks for reaching out. I'll get back to you soon.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="px-6 py-2.5 rounded-xl text-sm font-semibold
                          bg-indigo-600 hover:bg-indigo-500 text-white transition-colors duration-300"
                      >
                        Send Another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 1 }}
                    >
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                          Name
                        </label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="input-field"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                          Email
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="input-field"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                          Message
                        </label>
                        <textarea
                          required
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project or idea..."
                          className="input-field resize-none"
                        />
                      </div>

                      {/* Error */}
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 text-red-500 text-sm"
                        >
                          <FaExclamationCircle />
                          <span>Failed to send. Please try again.</span>
                        </motion.div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl
                          font-semibold text-sm text-white
                          bg-indigo-600 hover:bg-indigo-500 disabled:opacity-70
                          shadow-lg shadow-indigo-300/40 dark:shadow-indigo-500/30
                          transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
                      >
                        {status === "loading" ? (
                          <>
                            <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white spinner" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="text-xs" />
                            Send Message
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
