import Image from "next/image";
import { MapPin, Clock, Home, Bed, Bath, Zap } from "lucide-react";
import { properties } from "../../data/data";
import Link from "next/link";

export default function Card({home}) {
  // Sample property data

  const propertiesData = home === true  ? properties : properties.slice(0, 3);


  return (
    <div className="max-w-7xl mx-auto px-4 py-28">
      {/* Header */}

      {home !== true && (
        <div className="text-center mb-12">
          <p className="text-gray-500 uppercase tracking-wider mb-2">
            CASAROYAL REAL ESTATE AGENCY
          </p>

          <h2 className="text-6xl  font-semibold mb-20">
            <span className="text-black gap-2"> Featured Properties</span>
            {/* <span className="text-gray-700">Properties</span> */}
          </h2>
        </div>
      )}

      {/* Property Grid */}
      <div
        className={`grid grid-cols-1  gap-8 ${
          home !== true ? "md:grid-cols-3" : "md:grid-cols-2"
        }`}
      >
        {propertiesData.map((property) => (
          <Link
            href={`/properties/${property.id}`}
            key={property.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Property Image with Tags */}
            <div className="relative">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />

              {/* Tags */}
              <div className="absolute top-4 left-4 flex gap-2">
                {property.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`${tag.color} text-white text-xs font-bold px-3 py-1 rounded`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              {/* Featured Lightning Icon */}
              {property.featured && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white p-1 rounded">
                  <Zap size={16} />
                </div>
              )}

              {/* Price */}
              <div className="absolute bottom-4 left-4 bg-white py-1 px-3 rounded shadow-sm">
                <span className="font-bold text-blue-600">
                  {property.price}
                </span>
                {property.priceType && (
                  <span className="text-gray-700 text-sm">
                    {" "}
                    {property.priceType}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="absolute bottom-4 right-4 flex gap-1">
                <button className="bg-black text-white p-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <button className="bg-black text-white p-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" y1="22" x2="4" y2="15"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Property Details */}
            <div className="p-4">
              {/* Location */}
              <div className="flex items-center text-orange-500 mb-2">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">{property.location}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-4">{property.title}</h3>

              {/* Agency & Time */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="text-blue-600 text-sm">
                    {property.agency}
                  </span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock size={14} className="mr-1" />
                  <span>{property.timeAgo}</span>
                </div>
              </div>

              {/* Property Features */}
              <div className="flex justify-between border-t pt-4">
                <div className="flex items-center">
                  <Home size={16} className="mr-1" />
                  <span className="text-sm">{property.sqft} Sq Ft</span>
                </div>
                <div className="flex items-center">
                  <Bed size={16} className="mr-1" />
                  <span className="text-sm">{property.beds}</span>
                </div>
                <div className="flex items-center">
                  <Bath size={16} className="mr-1" />
                  <span className="text-sm">{property.baths}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {home !== true && (
        <div className="mx-auto flex justify-center items-center mt-12  w-full">
          <Link href="/properties">
            <button className="bg-black  text-white px-12 py-5  rounded-full text-sm font-semibold hover:bg-[#2a41e8]">
              VIEW ALL PROPERTIES
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
