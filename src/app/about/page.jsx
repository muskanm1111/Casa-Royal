"use client"
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import { useState, useEffect } from "react";
import { FaHome, FaTag, FaMapMarkerAlt } from "react-icons/fa";

const properties = [
  {
    price: "$160,000.00",
    address: "26502 VÍA CUERVO, MISSION VIEJO, CA 92691, USA",
    location: "MISSION VIEJO",
    type: "HOUSE",
    status: "FOR SALE",
    image: "/property-1.jpg",
  },
  {
    price: "$180,000.00",
    address: "1234 MAIN STREET, LOS ANGELES, CA 90001, USA",
    location: "LOS ANGELES",
    type: "APARTMENT",
    status: "FOR SALE",
    image: "/property-2.jpg",
  },
  {
    price: "$200,000.00",
    address: "789 PARK AVE, NEW YORK, NY 10001, USA",
    location: "NEW YORK",
    type: "CONDO",
    status: "FOR SALE",
    image: "/property-3.jpg",
  },
];

export default function RealEstateSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-2xl font-semibold text-gray-900">
        We are Offering the <span className="font-bold">Best Estate Deals</span>
      </h2>
      <div className="relative w-full max-w-4xl mt-6 overflow-hidden shadow-lg">
        <img
          src={properties[currentIndex].image}
          alt="Property"
          className="w-full h-[550px] object-cover transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6 text-white">
          <p className="text-lg font-semibold">
            {properties[currentIndex].price}
          </p>
          <h3 className="text-2xl font-bold">
            {properties[currentIndex].address}
          </h3>
          <div className="flex items-center gap-4 mt-2 text-sm">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt /> {properties[currentIndex].location}
            </span>
            <span className="flex items-center gap-1">
              <FaHome /> {properties[currentIndex].type}
            </span>
            <span className="flex items-center gap-1">
              <FaTag /> {properties[currentIndex].status}
            </span>
          </div>
          <button className="mt-4 px-4 py-2 max-w-min text-nowrap bg-blue-600 text-white rounded hover:bg-blue-700">
            VIEW DETAILS
          </button>
        </div>
      <div className="flex mt-4 gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {properties.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      </div>
      <ServicesSection/>
      <TestimonialsSection/>
    </div>
  );
}
