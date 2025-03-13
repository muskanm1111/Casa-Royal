import Image from "next/image";
import React from "react";

const Aboutbanner = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
                      src="/property-4.jpg"
                      alt="Beverly Hills properties"
                      fill
                      className="object-cover"
                    />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Box */}
      <div className="relative bg-blue-700 text-white p-8 rounded-lg max-w-md">
        <h2 className="text-3xl font-bold mb-4">Want to Sell Property?</h2>
        <p className="text-sm mb-6">
          Let us create a tailored strategic marketing plan and keep track of
          the selling process.
        </p>
        <button className="bg-black text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-gray-800">
          MORE DETAILS &gt;
        </button>
      </div>
    </div>
  );
};

export default Aboutbanner;
