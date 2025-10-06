"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
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
    <nav className="fixed w-full  dark:bg-dark/85 backdrop-blur-md z-50">
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
                   <Link className={`hover:text-primary transition-colors font-medium ${isActive ? 'font-extrabold text-green-800' : ''}`} href={item.href} key={item.href}>
                     {item.label}
                   </Link>
                );
            })}
          </div>
        </div>

        {/* Mobile Menu */}
      </div>
    </nav>
  );
};

export default Navbar;
