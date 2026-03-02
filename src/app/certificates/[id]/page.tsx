"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaStar,
  FaCertificate,
  FaCalendarAlt,
} from "react-icons/fa";

const certificates = [
  {
    id: 1,
    title: "Mastering Linux: The Comprehensive Guide",
    issuer: "Udemy",
    year: "2024",
    image: "/certificates/linux.jpg",
    description:
      "This intensive course gave me deep insights into Linux fundamentals, shell scripting, process management, and system administration. I also learned advanced techniques for performance tuning, user management, and real-world DevOps environments.",
  },
  {
    id: 2,
    title:
      "Master Java, Spring Boot, Spring Security, Spring AI, Docker & Microservices with Telusko",
    issuer: "Udemy",
    year: "2025",
    image: "/certificates/spring.jpg",
    description:
      "A comprehensive journey through enterprise backend development — from mastering Java & Spring Core to building scalable microservices with Spring Boot, Docker, and Spring AI. It strengthened my backend engineering and deployment skills.",
  },
];

export default function CertificateDetail() {
  const params = useParams();
  const { id } = params;
  const cert = certificates.find((c) => c.id.toString() === id);

  if (!cert) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div
          className="relative rounded-3xl overflow-hidden p-10
          bg-white border border-gray-100 shadow-xl
          dark:bg-white/[0.05] dark:border-white/[0.07] dark:backdrop-blur-2xl"
        >
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent dark:via-indigo-500/40" />
          <FaCertificate className="text-5xl text-indigo-400 mx-auto mb-4" />
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-3">
            Certificate Not Found
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
            The certificate you're looking for doesn't exist.
          </p>
          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold
              bg-indigo-600 hover:bg-indigo-500 text-white transition-colors duration-300"
          >
            <FaArrowLeft className="text-xs" /> Back to Certificates
          </Link>
        </div>
      </div>
    );
  }

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

      <div className="container max-w-3xl mx-auto">
        {/* ── Back Button ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <Link
            href="/certificates"
            className="group inline-flex items-center gap-2 text-sm font-semibold
              text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400
              transition-colors duration-300"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">
              <FaArrowLeft className="text-xs" />
            </span>
            Back to Certificates
          </Link>
        </motion.div>

        {/* ── Main Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden
            bg-white border border-gray-100 shadow-2xl shadow-gray-200/60
            dark:bg-white/[0.05] dark:border-white/[0.07] dark:shadow-none dark:backdrop-blur-2xl"
        >
          {/* Top shimmer */}
          <div
            className="absolute inset-x-0 top-0 h-[1px] z-10
            bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent dark:via-indigo-500/40"
          />

          {/* ── Certificate Image ── */}
          <div className="relative w-full h-64 md:h-[400px] overflow-hidden">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              className="object-cover"
              priority
            />
            {/* Bottom gradient fade into card */}
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0d0d18] via-transparent to-transparent" />

            {/* Floating year badge */}
            <div
              className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5
              bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full
              border border-white/60 dark:border-white/20 shadow-lg"
            >
              <FaCalendarAlt className="text-indigo-500 text-xs" />
              <span className="text-xs font-bold text-gray-800 dark:text-white">
                {cert.year}
              </span>
            </div>
          </div>

          {/* ── Content ── */}
          <div className="px-8 pb-10 pt-2 text-center">
            {/* Issuer badge */}
            <div className="flex justify-center mb-4">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
                bg-yellow-50 border border-yellow-200 text-yellow-700
                dark:bg-yellow-500/10 dark:border-yellow-500/25 dark:text-yellow-400"
              >
                <FaCertificate className="text-yellow-500 text-[10px]" />
                {cert.issuer}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-black tracking-tight leading-snug mb-5">
              <span className="grad-title">{cert.title}</span>
            </h1>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.3 + i * 0.08,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <FaStar className="text-yellow-400 text-xl drop-shadow-sm" />
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div
              className="h-px max-w-xs mx-auto mb-6
              bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              {cert.description}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-10"
            >
              <Link
                href="/certificates"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm
                  bg-indigo-600 hover:bg-indigo-500 text-white
                  shadow-lg shadow-indigo-300/40 dark:shadow-indigo-500/30
                  transition-all duration-300"
              >
                <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-transform duration-300" />
                View More Certificates
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
