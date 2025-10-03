"use client";
import { Car } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { WordRotate } from "@/components/ui/word-rotate"

// Slide data with new image URLs
const slides = [
  {
    imageUrl: "https://cdn.pixabay.com/photo/2025/08/17/07/43/tractor-9779346_1280.jpg",
    alt: "A red tractor in a field",
  },
  {
    imageUrl: "https://cdn.pixabay.com/photo/2021/09/27/11/01/man-6660386_1280.jpg",
    alt: "A man standing in a misty field",
  },
  {
    imageUrl: "https://cdn.pixabay.com/photo/2022/01/16/14/07/man-6942147_1280.jpg",
    alt: "A person in a hat looking out over a landscape",
  },
  {
    imageUrl: "https://cdn.pixabay.com/photo/2022/05/05/23/12/agriculture-7177221_1280.jpg",
    alt: "Tractor plowing a field at sunset",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Abstract white and blue background",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const getSlideStyle = (index: number) => {
    const offset = index - currentIndex;
    const styles = {
      transform: '',
      zIndex: slides.length - Math.abs(offset),
      opacity: '0',
      transition: 'transform 600ms ease-out, opacity 600ms ease-out',
    };

    if (offset === 0) {
      // Active slide
      styles.transform = 'translateX(0%)';
      styles.opacity = '1';
    } else if (offset < 0) {
      // Previous slides are off-screen to the left
      styles.transform = 'translateX(-100%)';
      styles.opacity = '0';
    } else { // offset > 0
      // Next slides are off-screen to the right
      styles.transform = 'translateX(100%)';
      styles.opacity = '0';
    }
    
    return styles;
  };

  return (
    <div className=" py-10 w-full flex flex-col items-center justify-center font-sans p-4 relative overflow-hidden">
      <div>
<h1 className="text-5xl font-bold px-2 py-15 lg:text-6xl lg:text-center lg:leading-16 leading-13">
  We are Indoshyama, Creating{' '}
  <WordRotate words={["Innovative & Cheap",
      "Creative & Reliable",
      "Practical & Sustainable"]} className="text-[#4BAF47]" /> Agricultural Solutions
</h1>      </div>
      <div className="relative w-full max-w-4xl aspect-[16/9] flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute w-full h-full p-2"
            style={getSlideStyle(index)}
          >
            <img 
              src={slide.imageUrl} 
              alt={slide.alt} 
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        ))}
      </div>
      
       {/* Pagination Dots */}
      <div className="flex justify-center mt-8 z-20">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-2.5 w-2.5 rounded-full mx-1.5 transition-all duration-300 ${currentIndex === slideIndex ? 'bg-black/80 scale-125' : 'bg-black/30 hover:bg-black/50'}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;