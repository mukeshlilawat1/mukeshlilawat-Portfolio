"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Logo & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:scale-110 hover:tracking-wider transition-all duration-300"
            >
              Lilawat&trade;
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              © {new Date().getFullYear()} LILAWAT. All rights reserved.
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col md:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Subscribe for updates"
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 transition-all duration-300"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white rounded-lg hover:scale-105 transition-transform duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-6 mb-6">
          {[
            {
              href: "https://github.com/mukeshlilawat1",
              icon: <FaGithub />,
              label: "GitHub",
              hover: "text-gray-900 dark:text-white",
            },
            {
              href: "https://www.linkedin.com/in/mukeshlilawat1",
              icon: <FaLinkedinIn />,
              label: "LinkedIn",
              hover: "text-blue-600",
            },
            {
              href: "https://github.com/mukeshlilawat1",
              icon: <FaDiscord />,
              label: "Discord",
              hover: "text-indigo-500",
            },
            {
              href: "https://x.com/coder_lilawat",
              icon: <FaTwitter />,
              label: "Twitter",
              hover: "text-sky-500",
            },
            {
              href: "https://www.instagram.com/mukeshlilawat1",
              icon: <FaInstagram />,
              label: "Instagram",
              hover: "text-pink-500",
            },
            {
              href: "https://github.com/mukeshlilawat1",
              icon: <FaYoutube />,
              label: "YouTube",
              hover: "text-red-600",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              aria-label={item.label}
              className={`text-3xl text-gray-700 dark:text-gray-400 hover:scale-110 transition-all duration-300 ${item.hover} relative group`}
            >
              {item.icon}
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 dark:text-gray-400 text-sm">
          <Link href="/about" className="hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-500 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="hover:text-blue-500 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-blue-500 transition-colors">
            Terms & Conditions
          </Link>

          <Link href="/faq" className="hover:text-blue-500 transition-colors">
            FAQ
          </Link>
          <Link
            href="/cookies"
            className="hover:text-blue-500 transition-colors"
          >
            Cookie Policy
          </Link>
        </div>

        {/* Back to Top Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 p-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white shadow-lg hover:scale-110 transition-transform duration-300 z-50"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
