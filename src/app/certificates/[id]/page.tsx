"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaStar } from "react-icons/fa";

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
      <div className="min-h-screen flex flex-col items-center justify-center text-center text-gray-600 dark:text-gray-300">
        <h2 className="text-3xl font-bold mb-4">Certificate Not Found</h2>
        <Link href="/certificates" className="text-blue-500 underline">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6 md:px-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-all duration-500">
      <Link
        href="/certificates"
        className="inline-flex items-center text-blue-500 dark:text-blue-400 mb-8 hover:underline"
      >
        <FaArrowLeft className="mr-2" /> Back to Certificates
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-gray-200/40 dark:border-gray-700/40"
      >
        <div className="relative w-full h-80 md:h-[450px] mb-10 rounded-3xl overflow-hidden">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              className="object-cover rounded-3xl shadow-lg"
            />
          </motion.div>
        </div>

        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
          >
            {cert.title}
          </motion.h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {cert.issuer}
            </span>{" "}
            • {cert.year}
          </p>

          {/* Rating Section */}
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="text-yellow-400 text-2xl drop-shadow-sm"
              />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {cert.description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/certificates"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition-all"
          >
            View More Certificates
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
