"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

const Director = () => {
  const [activeTab, setActiveTab] = useState("directors");

  return (
    <section
      className="w-full min-h-[90vh] bg-cover bg-center relative flex items-center py-16 md:py-24"
      style={{ backgroundImage: "url('/assets/Bg-Director.png')" }}
    >
      <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        
        {/* Toggle Switch */}
        <div className="flex justify-center lg:justify-start mb-12">
          <div className="bg-white/90 dark:bg-black/20 backdrop-blur-md p-1.5 rounded-full flex items-center space-x-2 shadow-lg">
            <button
              onClick={() => setActiveTab("about")}
              className={`px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-bold rounded-full transition-colors duration-300 ${activeTab === 'about' ? 'bg-white dark:bg-slate-700 shadow text-[#4BAF47] dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}
            >
              About Indoshyama
            </button>
            <button
              onClick={() => setActiveTab("directors")}
              className={`px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-bold rounded-full transition-colors duration-300 ${activeTab === 'directors' ? 'bg-[#E9F1EE] text-[#4BAF47] shadow' : 'text-gray-600 dark:text-gray-300'}`}
            >
              Meet Our Directors
            </button>
          </div>
        </div>

        {/* Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'directors' ? <DirectorsContent /> : <AboutContent />}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

// Directors Tab Content
const DirectorsContent = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Text (always left) */}
    <div className="text-white text-center lg:text-left">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">Our Directors</h2>
      <p className="text-lg text-gray-200 text-shadow-sm mb-4">
        Inspired by the values of their father late Ram Kishan Gupta, Shri Sanjay & Vinay Kumar Gupta continue his legacy with dedication and passion for agriculture. They believe farming is not just about crops, but about nurturing lives and sustaining communities. Their vision is to provide farmers with sustainable, reliable, and farmer-friendly solutions that improve harvests and create a brighter future.
      </p>
      <p className="text-lg text-gray-200 text-shadow-sm italic">
        "Our mission is to carry forward our father’s values — transforming farming with care, trust, and sustainable resources for generations to come."
      </p>
      <Link href="/about">
        <button className="mt-8 bg-[#4BAF47] text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-white hover:text-[#4BAF47] transition-colors duration-300">
          Read More
        </button>
      </Link>
    </div>

    {/* Images (always right) */}
    <div className="flex flex-col justify-center items-center lg:justify-end relative h-80 md:h-96 gap-4">
      <div className="w-52 sm:w-56 md:w-64 h-52 sm:h-56 md:h-64 rounded-3xl shadow-2xl overflow-hidden">
        <img src="/assets/Director-1.png" alt="Director Sanjay Kumar Gupta" className="w-full h-full object-cover object-[50%_30%] "/>
      </div>
      <div className="w-52 sm:w-56 md:w-64 h-52 sm:h-56 md:h-64 rounded-3xl shadow-2xl overflow-hidden">
        <img src="/assets/Director-2.png" alt="Director Vinay Kumar Gupta" className="w-full h-full object-cover lg:object-[50%_40%] object-[50%_40%]"/>
      </div>
    </div>
  </div>
);

// About Tab Content
const AboutContent = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Text (always left) */}
    <div className="text-white text-center lg:text-left">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow">About Indoshyama</h2>
      <p className="text-lg text-gray-200 text-shadow-sm mb-4">
        Indoshyama Fertilizers was built on a foundation of trust and innovation. From our state-of-the-art manufacturing unit, we deliver premium-grade, customized fertilizers designed to meet the unique needs of Indian soils and crops.
      </p>
      <p className="text-lg text-gray-200 text-shadow-sm">
        Our commitment is to the farmer, ensuring that every harvest is a prosperous one. We combine scientific research with a deep understanding of agricultural challenges to create products that deliver results.
      </p>
      <Link href="/about">
        <button className="mt-8 bg-white text-gray-800 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300">
          Learn More
        </button>
      </Link>
    </div>

    {/* Images (always right) */}
    <div className="flex flex-col justify-center items-center lg:justify-start relative h-80 md:h-96 gap-4">
      <div className="w-52 sm:w-56 md:w-64 h-52 sm:h-56 md:h-64 rounded-3xl shadow-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1670922757779-9472463fe234?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0" alt="Director Sanjay Kumar Gupta" className="w-full h-full object-cover"/>
      </div>
      <div className="w-52 sm:w-56 md:w-64 h-52 sm:h-56 md:h-64 rounded-3xl shadow-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1667129086716-73780c3d4a5f?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0" alt="Director Vinay Kumar Gupta" className="w-full h-full object-cover"/>
      </div>
    </div>
  </div>
);

export default Director;
