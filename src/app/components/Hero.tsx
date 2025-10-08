"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "@/utils/animations";

const Hero = () => {
  return (
    <>
      {/* ========================= SEO META HEAD ========================= */}
      <Head>
        <title>Mukesh Lilawat – Full-Stack Developer & AI/ML Enthusiast</title>
        <meta
          name="description"
          content="Mukesh Lilawat – Full-Stack Developer with expertise in Java, React, Spring Boot & AI/ML. Explore projects, portfolio, and innovative web apps."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mukeshlilawat.online/" />

        {/* Open Graph / Social Sharing */}
        <meta
          property="og:mukeshlilawat"
          content="Mukesh Lilawat – Full-Stack Developer & AI/ML Enthusiast"
        />
        <meta
          property="og:fullstackdeveloper"
          content="Passionate Full-Stack Developer Mukesh Lilawat creating innovative web apps using Java, React, Spring Boot & AI/ML."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mukeshlilawat.online/" />
        <meta
          property="og:image"
          content="https://mukeshlilawat.online/lilawat-og.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:lilawat"
          content="Mukesh Lilawat – Full-Stack Developer & AI/ML Enthusiast"
        />
        <meta
          name="twitter:fullstackdeveloper"
          content="Explore Mukesh Lilawat's projects and portfolio: Java, React, Spring Boot & AI/ML web applications."
        />
        <meta
          name="twitter:image"
          content="https://mukeshlilawat.online/lilawat-og.jpg"
        />
      </Head>

      {/* ========================= HERO SECTION ========================= */}
      <section className="py-28 container max-w-7xl mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            {...scaleIn}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center mb-8"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                rotateY: 15,
                rotateX: 10,
                transition: { type: "spring", stiffness: 120, damping: 12 },
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative group w-48 h-48 md:w-60 md:h-60 perspective"
            >
              {/* Glow & Gradient layers */}
              <div className="absolute inset-0 rounded-[40%_60%_35%_65%] bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 opacity-50 filter blur-xl animate-blob1 transition-transform duration-700 group-hover:scale-105"></div>
              <div className="absolute inset-0 rounded-[50%_35%_65%_40%] bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-400 opacity-30 filter blur-lg animate-blob2 transition-transform duration-700 group-hover:scale-105"></div>

              {/* Main Image */}
              <div className="relative w-full h-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800 transform transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 opacity-30 filter blur-3xl animate-blob1 transition-all duration-700 group-hover:opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-400 opacity-25 filter blur-2xl animate-blob2 transition-all duration-700 group-hover:opacity-40"></div>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md pointer-events-none mix-blend-overlay"></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500 pointer-events-none transition-all duration-500"></div>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="w-full h-full bg-pink-500 opacity-0 group-hover:opacity-20 animate-ripple rounded-none"></div>
                </div>

                {/* SEO-Friendly Image */}
                <Image
                  src="/lilawat.jpg"
                  alt="Mukesh Lilawat Profile Picture – Full-Stack Developer"
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight"
          >
            <span className="text-gray-800 dark:text-gray-100">Hello, I’m</span>{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient"
            >
              Mukesh Lilawat
            </motion.span>
          </motion.h1>

          {/* Tagline / Description */}
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Passionate <strong>Full-Stack Developer</strong> with a deep
            interest in <strong>Artificial Intelligence</strong> and{" "}
            <strong>Machine Learning</strong>. I love creating innovative,
            user-focused, and future-ready web applications that make an impact.
          </motion.p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-10">
            {[
              {
                icon: FaGithub,
                link: "https://github.com/mukeshlilawat1",
                label: "GitHub",
              },
              {
                icon: FaLinkedinIn,
                link: "https://www.linkedin.com/in/mukeshlilawat1",
                label: "LinkedIn",
              },
              {
                icon: FaDiscord,
                link: "https://github.com/mukeshlilawat1",
                label: "Discord",
              },
              {
                icon: FaTwitter,
                link: "https://x.com/coder_lilawat",
                label: "Twitter",
              },
              {
                icon: FaInstagram,
                link: "https://www.instagram.com/mukeshlilawat1",
                label: "Instagram",
              },
              {
                icon: FaYoutube,
                link: "https://github.com/mukeshlilawat1",
                label: "YouTube",
              },
            ].map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.7 + index * 0.1,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                <Link
                  href={social.link}
                  target="_blank"
                  className="text-3xl text-gray-700 hover:text-blue-600 dark:text-gray-400 hover:scale-110 transition-all duration-300"
                  aria-label={`${social.label} Profile`}
                >
                  <social.icon />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-6 m-5 p-5">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <Link
                href="/projects"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300 font-medium"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <Link
                href="/contact"
                className="bg-gray-800 text-white px-10 py-4 rounded-lg shadow-md hover:bg-indigo-800 hover:shadow-lg transition-all duration-300 font-medium"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
