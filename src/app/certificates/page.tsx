"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCertificate, FaAward } from "react-icons/fa";

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

const CertificatesPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-all duration-500">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-16"
      >
        <FaAward className="inline-block mr-3 text-pink-500" />
        My Certificates
      </motion.h1>

      {/* Certificates Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {certificates.map((cert) => (
          <Link key={cert.id} href={`/certificates/${cert.id}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="relative bg-white/80 dark:bg-gray-900/60 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 backdrop-blur-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Certificate Image */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="rounded-t-3xl object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Certificate Details */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {cert.title}
                </h3>
                <p className="text-primary font-semibold">
                  {cert.issuer} • {cert.year}
                </p>
                <div className="mt-4 flex justify-center">
                  <FaCertificate className="text-yellow-500 w-8 h-8 animate-pulse" />
                </div>
              </div>

              {/* Gradient Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent rounded-3xl hover:border-[3px] hover:border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pointer-events-none"></div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Footer Text */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-500 dark:text-gray-400 mt-16 text-lg"
      >
        Each certificate reflects my continuous journey of learning in{" "}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Full-Stack Development, Artificial Intelligence & Machine Learning
        </span>
        .
      </motion.p>
    </div>
  );
};

export default CertificatesPage;
