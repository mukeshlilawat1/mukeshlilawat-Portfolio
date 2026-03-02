"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCertificate, FaAward, FaExternalLinkAlt } from "react-icons/fa";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Mastering Linux: The Comprehensive Guide",
    issuer: "Udemy",
    year: "2024",
    image: "/certificates/linux.jpg",
  },
  {
    id: 2,
    title:
      "Master Java, Spring and Spring Boot, Spring Security, Spring AI, Docker and Microservices with Telusko",
    issuer: "Udemy",
    year: "2025",
    image: "/certificates/spring.jpg",
  },
];

/* ── Reusable Card — matches Hero/Projects design system ── */
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden
        bg-white border border-gray-100 shadow-xl shadow-gray-200/60
        dark:bg-white/[0.05] dark:border-white/[0.07] dark:shadow-none dark:backdrop-blur-2xl
        ${className}`}
    >
      {/* Top shimmer line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent dark:via-indigo-500/40 z-10" />
      {children}
    </div>
  );
}

const CertificatesPage: React.FC = () => {
  return (
    <div className="relative min-h-screen py-20 px-4">
      {/* ── Background blobs ── */}
      <div
        className="fixed w-[500px] h-[500px] top-[-15%] left-[-10%] rounded-full pointer-events-none -z-10
          bg-indigo-200/60 dark:bg-indigo-600/15 blur-[110px]"
        style={{ animation: "drift 20s ease-in-out infinite alternate" }}
      />
      <div
        className="fixed w-[400px] h-[400px] bottom-[-10%] right-[-8%] rounded-full pointer-events-none -z-10
          bg-violet-200/60 dark:bg-violet-600/12 blur-[110px]"
        style={{
          animation: "drift 25s ease-in-out infinite alternate-reverse",
        }}
      />

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
          background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899, #f59e0b, #6366f1);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 6s ease infinite;
        }
      `}</style>

      <div className="container max-w-5xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
            bg-indigo-50 border border-indigo-200 dark:bg-indigo-500/10 dark:border-indigo-500/25"
          >
            <FaAward className="text-indigo-500 text-sm" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Achievements
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-5">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="grad-title">Certificates</span>
          </h1>

          <p className="max-w-xl mx-auto text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            Every certificate is a milestone in my continuous journey of
            learning and growth.
          </p>

          {/* Divider */}
          <div className="mt-8 h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-indigo-300/60 dark:via-indigo-500/30 to-transparent" />
        </motion.div>

        {/* ── Certificates Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <Link href={`/certificates/${cert.id}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -6 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer
                    bg-white border border-gray-100 shadow-xl shadow-gray-200/60
                    dark:bg-white/[0.05] dark:border-white/[0.07] dark:backdrop-blur-2xl"
                >
                  {/* Top shimmer line */}
                  <div
                    className="absolute inset-x-0 top-0 h-[1px] z-10
                    bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent dark:via-indigo-500/40"
                  />

                  {/* Image */}
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-end p-4"
                    >
                      <span
                        className="flex items-center gap-1.5 text-white text-xs font-semibold px-3 py-1.5
                        bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                      >
                        <FaExternalLinkAlt className="text-[10px]" />
                        View Certificate
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Issuer + Year pill */}
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
                        bg-yellow-50 border border-yellow-200 text-yellow-700
                        dark:bg-yellow-500/10 dark:border-yellow-500/25 dark:text-yellow-400"
                      >
                        <FaCertificate className="text-yellow-500 text-[10px]" />
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                        {cert.year}
                      </span>
                    </div>

                    <h3
                      className="text-lg font-bold text-gray-900 dark:text-white leading-snug
                      group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-3"
                    >
                      {cert.title}
                    </h3>

                    {/* Bottom divider + link hint */}
                    <div
                      className="mt-4 pt-4 border-t border-gray-100 dark:border-white/[0.06]
                      flex items-center justify-between"
                    >
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        Click to view full certificate
                      </span>
                      <span
                        className="text-indigo-500 dark:text-indigo-400 text-xs font-semibold
                        group-hover:translate-x-1 transition-transform duration-300 inline-block"
                      >
                        Open →
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div
            className="inline-block px-6 py-4 rounded-2xl
            bg-white border border-gray-100 shadow-lg shadow-gray-100/60
            dark:bg-white/[0.04] dark:border-white/[0.06]"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Each certificate reflects my journey in{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Full-Stack Development
              </span>
              ,{" "}
              <span className="font-semibold text-violet-600 dark:text-violet-400">
                Artificial Intelligence
              </span>{" "}
              &{" "}
              <span className="font-semibold text-pink-600 dark:text-pink-400">
                Machine Learning
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatesPage;
