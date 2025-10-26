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
      if (window.scrollY > 300) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      href: "https://github.com/mukeshlilawat1",
      icon: <FaGithub />,
      label: "GitHub",
      hover: "text-gray-800 dark:text-gray-100",
    },
    {
      href: "https://www.linkedin.com/in/mukeshlilawat1",
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      hover: "text-blue-700 dark:text-blue-400",
    },
    {
      href: "https://discord.gg/NDYV6NaZ",
      icon: <FaDiscord />,
      label: "Discord",
      hover: "text-indigo-600 dark:text-indigo-400",
    },
    {
      href: "https://x.com/coder_lilawat",
      icon: <FaTwitter />,
      label: "Twitter",
      hover: "text-sky-500 dark:text-sky-400",
    },
    {
      href: "https://www.instagram.com/mukeshlilawat1",
      icon: <FaInstagram />,
      label: "Instagram",
      hover: "text-pink-500 dark:text-pink-400",
    },
    {
      href: "https://www.youtube.com/@MukeshLilawat1",
      icon: <FaYoutube />,
      label: "YouTube",
      hover: "text-red-600 dark:text-red-400",
    },
  ];

  const footerLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/faq", label: "FAQ" },
    { href: "/cookies", label: "Cookie Policy" },
  ];

  return (
    <footer className="relative bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-12 pb-6 overflow-hidden transition-all duration-500">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Logo & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <Link
              href="/"
              className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-yellow-400 hover:to-green-400 transition-all duration-500"
            >
              Lilawat&trade;
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              © {new Date().getFullYear()} LILAWAT. All rights reserved.
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-6 mb-8">
          {socialLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              aria-label={item.label}
              className={`text-3xl text-gray-500 dark:text-gray-400 hover:scale-125 transform transition-all duration-300 ${item.hover} relative group`}
            >
              {item.icon}
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gray-600 dark:bg-gray-300 rounded-full transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-gray-600 dark:text-gray-400 text-sm mb-6">
          {footerLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative hover:text-black dark:hover:text-white transition-colors before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-black dark:before:bg-white before:transition-all hover:before:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Back to Top Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-4 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white shadow-2xl hover:scale-125 transition-transform duration-300 animate-pulse z-50"
          >
            <FaArrowUp className="text-2xl" />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
