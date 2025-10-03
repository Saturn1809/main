"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// ------------------- Navbar Logo -------------------
export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image src="/logo.png" alt="logo" width={50} height={50} />
      <span className="font-medium text-black dark:text-white">
        IndoShyama<br />Fertilizer
      </span>
    </Link>
  );
};

// ------------------- Nav Items -------------------
interface NavItem {
  name: string;
  link: string;
}

interface NavItemsProps {
  items: NavItem[];
  onItemClick?: () => void;
}

export const NavItems: React.FC<NavItemsProps> = ({ items, onItemClick }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex items-center space-x-1">
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={`link-${idx}`}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

// ------------------- Mobile Nav Menu -------------------
interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}

export const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
  children,
  className = "",
  isOpen,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`overflow-hidden md:hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

// ------------------- Main Navbar -------------------
export const ResizableNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-black shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <NavItems items={navItems} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden rounded-md p-2 text-neutral-600 dark:text-neutral-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileNavMenu isOpen={isOpen}>
        <div className="flex flex-col space-y-2 px-4 pb-4">
          <NavItems items={navItems} onItemClick={() => setIsOpen(false)} />
        </div>
      </MobileNavMenu>
    </nav>
  );
};

export default ResizableNavbar;
