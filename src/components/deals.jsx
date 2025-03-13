import Image from "next/image";
import { MapPin, Play, Home, Bed, Bath, Car } from "lucide-react";

export default function Deals() {
  // Sample property data
  const hotDeal = {
    title: "15 Apartments of Type B",
    type: "Residential Tower For Rent",
    location: "Los Angeles, CA",
    price: "$1,700.00",
    priceType: "Per Month",
    sqft: "1600",
    beds: "2",
    bath: "1",
    garage: "1",
    photos: 5,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-gray-500 uppercase tracking-wider mb-2">
          CASAROYAL REAL ESTATE AGENCY
        </p>
        <h2 className="text-6xl font-bold mb-20">
          <span className="text-black">Hot</span>{" "}
          <span className="text-gray-700">Deal</span>
        </h2>
      </div>

      {/* Property Card */}
      <div className="flex flex-col md:flex-row overflow-hidden  shadow-lg">
        {/* Left Side - Property Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="/card5.jpg"
            alt="Apartment interior"
            width={800}
            height={800}
            className="w-full h-[600px] object-cover"
          />
          <button className="absolute bottom-4 left-4 bg-white text-blue-600 font-medium py-2 px-4 rounded-md shadow-sm hover:bg-gray-100 transition">
            Photos ({hotDeal.photos})
          </button>
        </div>

        {/* Right Side - Property Details */}
        <div className="w-full md:w-1/2 bg-gray-900 text-white p-8 md:p-12 flex flex-col justify-between">
          <div>
            <p className="text-gray-400 mb-4">{hotDeal.type}</p>

            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {hotDeal.title}
            </h3>

            <div className="flex items-center text-gray-400 mb-8">
              <MapPin size={18} className="mr-2" />
              <span>{hotDeal.location}</span>
            </div>

            <div className="mb-12">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-md inline-block">
                From {hotDeal.price} {hotDeal.priceType}
              </span>
            </div>

            <div className="flex justify-center mb-12">
              <button className="w-16 h-16 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition">
                <Play size={24} />
              </button>
            </div>
          </div>

          {/* Property Features */}
          <div className="flex justify-between text-gray-400">
            <div className="flex items-center">
              <Home size={18} className="mr-2" />
              <div>
                <p className="font-bold text-white">{hotDeal.sqft}</p>
                <p className="text-sm">Sq Ft</p>
              </div>
            </div>

            <div className="flex items-center">
              <Bed size={18} className="mr-2" />
              <div>
                <p className="font-bold text-white">{hotDeal.beds}</p>
                <p className="text-sm">Beds</p>
              </div>
            </div>

            <div className="flex items-center">
              <Bath size={18} className="mr-2" />
              <div>
                <p className="font-bold text-white">{hotDeal.bath}</p>
                <p className="text-sm">Bath</p>
              </div>
            </div>

            <div className="flex items-center">
              <Car size={18} className="mr-2" />
              <div>
                <p className="font-bold text-white">{hotDeal.garage}</p>
                <p className="text-sm">Garage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
