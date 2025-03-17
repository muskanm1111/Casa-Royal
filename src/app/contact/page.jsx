"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronUp, Home } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Google Maps Section */}
      <div className="relative w-full h-[550px]">
        <div className="max-w-7xl mx-auto mt-16 h-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.234350710503!2d77.04311527461583!3d28.592745575686518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bd8f405bcf1%3A0x9e601372145832d0!2sDesire%20Div%20-%20Website%20Designing%20Company%20in%20Dwarka!5e0!3m2!1sen!2sin!4v1741694779239!5m2!1sen!2sin"
            width="100%"
            height="100%"
          
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Map Marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Home className="text-white w-5 h-5" />
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-blue-600"></div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
          <button className="w-8 h-8 bg-white rounded-sm shadow flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M21 12H3M12 3v18" />
            </svg>
          </button>
          <button className="w-8 h-8 bg-white rounded-sm shadow flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
        </div>

        {/* Map Attribution */}
        <div className="absolute bottom-0 left-0 right-0 bg-white text-[10px] text-gray-600 px-2 py-1 flex justify-between">
          <span>Keyboard shortcuts</span>
          <span>
            Map data ©2023 Imagery ©2023 CNES / Airbus, Maxar Technologies
          </span>
          <span>50 m</span>
          <span>Terms</span>
        </div>
      </div>

      {/* Contact Information and Form Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="space-y-12">
            {/* San Francisco Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">San Francisco</h2>
              <div className="space-y-3">
                <p>
                  <span className="font-medium">Address:</span> 263 Clinton
                  Park, San Francisco
                </p>
                <p>
                  <span className="font-medium">Phone:</span> +1 234 567 8901
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <span className="text-gray-500">email@yourcompany.com</span>
                </p>
              </div>
            </div>

            {/* New York Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">New York</h2>
              <div className="space-y-3">
                <p>
                  <span className="font-medium">Address:</span> 801 7th Avenue,
                  New York, NY 10019
                </p>
                <p>
                  <span className="font-medium">Phone:</span> +1 908 765 4321
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <span className="text-gray-500">email@yourcompany.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Drop us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 uppercase font-medium tracking-wider hover:bg-blue-700 transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
