"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useTheme } from "../context/themContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const MenuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/projects", label: "Projects" },
    { href: "/certificates", label: "Certificates" }, // ✅ Added Certificates
    { href: "/github", label: "GitHub" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-xl shadow-lg shadow-blue-500/20 dark:shadow-purple-800/20 z-50 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:scale-110 hover:tracking-wider transition-all duration-300"
          >
            &#9996; LILAWAT &#9733;
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {MenuItems.map((item) => {
              const isActive = pathName === item.href;
              return (
                <Link
                  className={`relative font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                    isActive
                      ? "font-extrabold text-green-600 after:content-[''] after:block after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:rounded-full after:mt-1 after:scale-x-100 after:origin-left animate-scaleX"
                      : ""
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:text-white hover:text-blue-600 dark:hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5 animate-pulse" />
              ) : (
                <MoonIcon className="w-5 h-5 animate-bounce" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 animate-spin text-pink-500" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-blue-500" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-4">
            {MenuItems.map((item, index) => (
              <div onClick={toggleMobileMenu} key={index}>
                <Link
                  href={item.href}
                  className="block py-2 px-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  {item.label}
                </Link>
              </div>
            ))}

            <div>
              <button
                onClick={toggleTheme}
                className="flex items-center py-2 px-3 w-full text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-105"
              >
                {theme === "dark" ? (
                  <>
                    <SunIcon className="w-5 h-5 mr-2 animate-pulse" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <MoonIcon className="w-5 h-5 mr-2 animate-bounce" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
