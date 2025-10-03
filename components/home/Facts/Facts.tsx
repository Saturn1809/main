"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const articles = [
  {
    title: "Iron Hunger? Feed Your Crops!",
    subtitle: "Ferrous Sulfate: The Secret to Stronger, Greener Plants",
    paragraphs: [
      "See those pale leaves on your crops? That’s 'iron hunger' at work. Plants need iron just like we do!",
      "Ferrous sulfate is like a vitamin pill for your plants. It provides the iron they need to create that beautiful green chlorophyll—the substance that helps them soak up sunlight and grow strong.",
      "With ferrous sulfate, your crops will look healthier, produce more, and even fight off diseases better. It’s a simple, cost-effective way to boost your yields and make your farm more productive.",
    ],
    images: ["/assets/farm1.jpg", "/assets/farm2.jpg"],
  },
  {
    title: "Nitrogen Deficiency? Power Up Your Wheat!",
    subtitle: "Urea: Fuel for Healthy, High-Yield Wheat Crops",
    paragraphs: [
      "Yellowing leaves on your wheat? That’s nitrogen deficiency stealing your harvest!",
      "With urea fertilizer, your wheat fields will turn lush green and achieve strong yields.",
      "With ferrous sulfate, your crops will look healthier, produce more, and even fight off diseases better. It’s a simple, cost-effective way to boost your yields and make your farm more productive."
    ],
    images: ["/assets/farm1.jpg", "/assets/farm2.jpg"],
  },
  {
  title: "Nitrogen Boost? Watch Your Fields Explode with Green!",
  subtitle: "Urea Fertilizer: Maximum Growth, Minimum Cost",
  paragraphs: [
    "Yellowing leaves and stunted growth? That’s nitrogen deficiency holding your crops back.",
    "Urea is one of the most concentrated nitrogen fertilizers, giving plants the energy to grow faster and greener.",
    "With urea, your farm gets lush fields, higher yields, and quicker harvest cycles—all while being cost-efficient for large-scale farming.",
  ],
  images: ["/assets/farm2.jpg", "/assets/farm1.jpg"],
},
{
  title: "Roots Need Power? Give Them Super Strength!",
  subtitle: "Single Super Phosphate (SSP): For Strong Roots and Better Harvests",
  paragraphs: [
    "Weak roots mean weak crops. Phosphorus is essential for building strong root systems.",
    "Single Super Phosphate provides phosphorus and sulfur in a plant-available form, boosting root development and grain quality.",
    "With SSP, crops establish faster, resist drought better, and give higher yields of better-quality produce.",
    
  ],
  images: ["/assets/farm1.jpg", "/assets/farm1.jpg"],
},
{
  title: "Potassium Deficiency? Time for Sweet Rewards!",
  subtitle: "Muriate of Potash (MOP): Sweeter Fruits, Stronger Plants",
  paragraphs: [
    "Muriate of Potash ensures proper water regulation, disease resistance, and sweetness in fruits and vegetables.",
    "With MOP, you get juicier fruits, sturdier stems, and higher-quality harvests that fetch better prices in the market.",
    "With ferrous sulfate, your crops will look healthier, produce more, and even fight off diseases better. It’s a simple, cost-effective way to boost your yields and make your farm more productive."
  ],
  images: ["/assets/farm1.jpg", "/assets/farm2.jpg"],
}

  // Add more articles as needed...
];

export default function FertilizersFacts() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % articles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const article = articles[index];

  return (
    <section className="relative bg-white py-10 sm:py-14 lg:py-12 px-10 sm:px-8 lg:px-30">
      {/* Main Heading */}
      <h2 className="text-3xl sm:text-3xl lg:text-5xl font-bold  mb-8 sm:mb-10 lg:mb-17 text-black">
        Fertilizer Facts & Farming Solutions
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
        {/* Left side stacked images */}
        <div className="relative flex justify-center">
          <div className="relative w-[250px] h-[330px] sm:w-[280px] sm:h-[370px] lg:w-[320px] lg:h-[420px]">
            {/* Back image */}
            <img
              src={article.images[1]}
              alt="Farm background"
              className="absolute top-3 left-3 sm:top-4 sm:left-4 w-full h-full object-cover rounded-2xl shadow-md"
            />
            {/* Front image (animated swap) */}
            <motion.img
              key={index}
              src={article.images[0]}
              alt="Farm foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Right side content */}
        <div className="max-w-lg p-1 sm:p-6 rounded-lg  h-100  lg:-mt-10 ">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-600 mb-2">
            {article.title}
          </h3>
          <p className="text-gray-700 font-medium text-base sm:text-lg mb-4">
            {article.subtitle}
          </p>
          {article.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              <span className="text-green-600 font-semibold">
                {p.split(" ")[0]}{" "}
              </span>
              {p.substring(p.indexOf(" ") + 1)}
            </p>
          ))}
        </div>
      </div>

      {/* Controls row */}
      <div className="flex justify-center lg:justify-end lg:mr-42 mt-6 sm:mt-8 lg:-mt-8 ">
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-7 w-full lg:w-auto justify-center">
          {/* Left Arrow */}
          <button
            onClick={() =>
              setIndex((index - 1 + articles.length) % articles.length)
            }
            className="p-2 sm:p-3 bg-white rounded-full shadow hover:scale-105 transition"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 hover:text-green-600" />
          </button>

          {/* Counter + Progress bar */}
          <div className="flex flex-col items-center w-40 sm:w-60 lg:w-70">
            <span className="text-xs sm:text-sm font-medium text-green-600 mb-1 sm:mb-2">
              {index + 1}/{articles.length}
            </span>
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                key={index}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-1 bg-green-600 rounded-full"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setIndex((index + 1) % articles.length)}
            className="p-2 sm:p-3 bg-white rounded-full shadow hover:scale-105 transition"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 hover:text-green-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
