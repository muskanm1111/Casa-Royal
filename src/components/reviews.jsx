"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dummy reviews data
const reviews = [
  {
    name: "HELEN MCDONALD",
    location: "NEW YORK",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend nunc sem, sit amet luctus tellus tempus tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    image: "/agent-1-2-60x60.jpg",
  },
  {
    name: "JOHN SMITH",
    location: "LONDON",
    review:
      "Suspendisse potenti. Proin eget est bibendum, auctor mauris non, varius ligula. Ut convallis purus eget enim aliquet, vel facilisis magna tempus.",
    image: "/agent-5-1-60x60.jpg",
  },
  {
    name: "MARIA GARCIA",
    location: "BARCELONA",
    review:
      "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl.",
    image: "/agent-5-1-60x60.jpg",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="w-full bg-[#0A1B2B] text-white relative py-20 px-4 md:px-8"
      style={{
        backgroundImage: "url('/testimonials-bg-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlend: "overlay",
      }}
    >
      <div className="absolute inset-0  opacity-90"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header section */}
        <div className="text-start mb-16">
          <h4 className="text-sm md:text-base uppercase tracking-wider mb-2">
            CLIENTS REVIEWS
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial section */}
        <div className="relative max-w-6xl mx-auto text-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-start mr-96"
            >
              <p className="text-lg md:text-xl mb-12 leading-relaxed">
                {reviews[currentIndex].review}
              </p>

              <div className="flex items-start justify-start">
                <div className="mr-4">
                  <img
                    src={reviews[currentIndex].image}
                    alt={reviews[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="text-start">
                  <h3 className="font-bold text-lg md:text-xl">
                    {reviews[currentIndex].name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {reviews[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-end mt-10 space-x-2">
          <button
            onClick={handlePrev}
            className="bg-blue-600 hover:bg-blue-700 transition-colors p-3 rounded text-white focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700 transition-colors p-3 rounded text-white focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
