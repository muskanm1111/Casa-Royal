import React from "react";
import {
  FaGlobe,
  FaLock,
  FaThumbsUp,
  FaMoneyBillWave,
  FaHome,
} from "react-icons/fa";
import { FaCog } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaGlobe className="text-blue-500 text-4xl" />,
      title: "Whole World",
      description:
        "Pellentesque accumsan semper consectetur. Nullam volutpat euismod molestie. Vestibulum ante ipsum primis in faucibus.",
    },
    {
      icon: <FaLock className="text-blue-500 text-4xl" />,
      title: "Confidentially",
      description:
        "Pellentesque accumsan semper consectetur. Nullam volutpat euismod molestie. Vestibulum ante ipsum primis in faucibus.",
    },
    {
      icon: <FaThumbsUp className="text-blue-500 text-4xl" />,
      title: "Good Previews",
      description:
        "Pellentesque accumsan semper consectetur. Nullam volutpat euismod molestie. Vestibulum ante ipsum primis in faucibus.",
    },
    {
      icon: <FaMoneyBillWave className="text-blue-500 text-4xl" />,
      title: "Investment Consulting",
      description:
        "Pellentesque accumsan semper consectetur. Nullam volutpat euismod molestie. Vestibulum ante ipsum primis in faucibus.",
    },
    {
      icon: <FaHome className="text-blue-500 text-4xl" />,
      title: "Construction Services",
      description:
        "Pellentesque accumsan semper consectetur. Nullam volutpat euismod molestie. Vestibulum ante ipsum primis in faucibus.",
    },
    {
      icon: <FaCog className="text-blue-500 text-4xl" />,
      title: "Maintenance",
      description:
        "Pellentesque accumsan semper consectetur. Nullam volutpat euismod molestie. Vestibulum ante ipsum primis in faucibus.",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
