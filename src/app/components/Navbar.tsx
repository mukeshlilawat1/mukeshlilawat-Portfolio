"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { it } from "node:test";
import React, { useState } from "react";
import { useTheme } from "../context/themContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  // const theme = "dark"; //TODO: get theme from context
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  //   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const pathName = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const MenuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80  dark:bg-dark/85 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold text-shadow-indigo-800 text-blue-800"
          >
            &#9996; LILAWAT &#9733;
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {MenuItems.map((item) => {
              const isActive = pathName === item.href;
              return (
                <Link
                  className={`hover:text-primary transition-colors font-medium ${
                    isActive ? "font-extrabold text-green-800" : ""
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
              className="p-2 rounded-lg hover:bg-gray-100 dark:text-white hover:text-primary dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6 " />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {MenuItems.map((item, index) => (
                <div onClick={toggleMobileMenu} key={index}>
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}

              <div>
                <button
                  onClick={toggleTheme}
                  className="flex items-center py-2 hover:text-primary transition-colors"
                >
                  {theme === "dark" ? (
                    <>
                      <SunIcon className="w-5 h-5 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      {" "}
                      <MoonIcon className="w-5 h-5 mr-2" />
                      Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
