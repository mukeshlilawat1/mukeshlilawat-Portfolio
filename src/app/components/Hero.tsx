"use client";

import React from "react";
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
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-xl mx-auto text-center">
        {/* Profile Image */}

        <motion.div
          {...scaleIn}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <div className="relative group w-48 h-48 md:w-60 md:h-60 perspective">
            {/* Optimized Glow */}
            <div className="absolute inset-0 rounded-[40%_60%_35%_65%] bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 opacity-50 filter blur-xl animate-blob1 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 rounded-[50%_35%_65%_40%] bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-400 opacity-30 filter blur-lg animate-blob2 transition-transform duration-700 group-hover:scale-105"></div>

            {/* Main Image */}
            <div className="relative w-full h-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800 transform transition-transform duration-500 group-hover:rotate-y-6 group-hover:rotate-x-6 group-hover:scale-105">
              {/* Gradient Glow Layers */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500 opacity-30 filter blur-3xl animate-blob1 transition-all duration-700 group-hover:opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-400 opacity-25 filter blur-2xl animate-blob2 transition-all duration-700 group-hover:opacity-40"></div>

              {/* Glass shine overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md pointer-events-none mix-blend-overlay"></div>

              {/* Neon Border + Ripple on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500 pointer-events-none transition-all duration-500"></div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="w-full h-full bg-pink-500 opacity-0 group-hover:opacity-20 animate-ripple rounded-none"></div>
              </div>

              {/* Main Image */}
              <Image
                src="/lilawat.jpg"
                alt="Mukesh Lilawat Profile Picture"
                fill
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight tracking-tight"
        >
          <span className="text-gray-800 dark:text-gray-100">Hello, I’m</span>{" "}
          <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient">
            Mukesh Lilawat
          </span>
        </motion.h1>

        {/* Tagline / Description */}
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate <strong>Full-Stack Developer</strong> with a deep interest
          in <strong>Artificial Intelligence</strong> and{" "}
          <strong>Machine Learning</strong>. I love creating innovative,
          user-focused, and future-ready web applications that make an impact.
        </motion.p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-10">
          <Link
            href="https://github.com/mukeshlilawat1"
            target="_blank"
            className="text-3xl text-gray-700 hover:text-blue-600 dark:text-gray-400 hover:scale-110 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/mukeshlilawat1"
            target="_blank"
            className="text-3xl text-gray-700 hover:text-blue-600 dark:text-gray-400 hover:scale-110 transition-all duration-300"
            aria-label="Linkedin Profile"
          >
            <FaLinkedinIn />
          </Link>

          <Link
            href="https://github.com/mukeshlilawat1"
            target="_blank"
            className="text-3xl text-gray-700 hover:text-indigo-500 dark:text-gray-400 hover:scale-110 transition-all duration-300"
            aria-label="Discord Profile"
          >
            <FaDiscord />
          </Link>

          <Link
            href="https://x.com/coder_lilawat"
            target="_blank"
            className="text-3xl text-gray-700 hover:text-sky-500 dark:text-gray-400 hover:scale-110 transition-all duration-300"
            aria-label="Twitter Profile"
          >
            <FaTwitter />
          </Link>

          <Link
            href="https://www.instagram.com/mukeshlilawat1"
            target="_blank"
            className="text-3xl text-gray-700 hover:text-pink-500 dark:text-gray-400 hover:scale-110 transition-all duration-300"
            aria-label="Instagram Profile"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://github.com/mukeshlilawat1"
            target="_blank"
            className="text-3xl text-gray-700 hover:text-red-600 dark:text-gray-400 hover:scale-110 transition-all duration-300"
            aria-label="YouTube Profile"
          >
            <FaYoutube />
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 m-5 p-5">
          <Link
            href="/projects"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300 font-medium"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="bg-gray-800 text-white px-10 py-4 rounded-lg shadow-md hover:bg-indigo-800 hover:shadow-lg transition-all duration-300 font-medium"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
