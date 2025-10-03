"use client";
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; // 1. Import motion

// 2. Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This will animate children one after the other
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Start invisible and 20px down
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: ["easeOut"],
    },
  },
};


const Images = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video (no animation) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="video2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (no animation) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* 3. Animate the main content container */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white sm:px-6 md:px-8 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-left space-y-2 w-full max-w-full md:max-w-3xl lg:mr-110">

          {/* Small heading */}
          <motion.h3
            className="text-xl md:text-lg font-semibold text-center md:text-left mb-2"
            variants={itemVariants}
          >
            Welcome to
          </motion.h3>

          {/* Main heading and leaf */}
          <motion.div
            className="flex flex-col sm:flex-col md:flex-row items-center sm:items-start md:items-center space-y-4 md:space-y-0 md:space-x-4"
            variants={itemVariants}
          >
            <h1 className="text-6xl sm:text-4xl md:text-8xl font-bold text-white  sm:mb-2 md:mb-4 text-center md:text-left">
              Indoshyama <br /> Fertilizers
            </h1>
            <img
              className="relative z-10 sm:relative sm:bottom-0 sm:right-0 md:bottom-24 md:right-8 w-16 sm:w-20 md:w-auto hidden lg:block"
              src="/assets/leaf-1.png"
              alt="leaf"
            />
          </motion.div>

          {/* Paragraph */}
          <motion.p
            className="text-lg sm:text-base md:text-xl text-gray-200 mb-6 max-w-full sm:max-w-md md:max-w-2xl text-center md:text-left"
            variants={itemVariants}
          >
            Nurturing Growth, Naturally. Empowering Farmers with Sustainable Fertilizers for a Greener Future.
          </motion.p>

          {/* CTA Button and second leaf */}
          <motion.div
            className="flex flex-col sm:flex-row md:flex-row items-center sm:items-center md:items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6"
            variants={itemVariants}
          >
            <button className="px-6 py-3 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-[#4CAF50] text-white text-lg rounded-lg hover:bg-white hover:text-[#4CAF50] hover:scale-102 transition"
            >
              <Link href="/products">
                Discover More
              </Link>

            </button>

            <img
              className="w-12 sm:w-16 md:w-auto hidden lg:block"
              src="/assets/leaf-2.png"
              alt="leaf"
            />
          </motion.div>

        </div>
      </motion.div>
    </div>
  )
}

export default Images