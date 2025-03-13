"use client";

import Image from "next/image";
import {
  FaWifi,
  FaParking,
  FaVolumeUp,
} from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Page = () => {
  const property = {
    id: 1,
    images: ["/card1.jpg", "/card2.jpg", "/card3.jpg"],
    label: "Available",
    location: "Downtown Music Hall, New York",
    title: "PREMIUM MUSIC VENUE WITH STAGE AND EQUIPMENT",
    description:
      "A state-of-the-art music venue featuring premium sound equipment, multiple stages, and versatile performance spaces. Perfect for concerts, music festivals, and private events.",
    capacity: 500,
    stages: 2,
    area: "1000 m²",
    price: "$1,200",
    amenities: [
      "Professional Sound System",
      "Lighting Setup",
      "Green Room",
      "Bar Area",
      "Security System",
    ],
    features: {
      parking: true,
      wifi: true,
      soundProof: true,
      backstageArea: true,
    },
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-20 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Image with Carousel */}
          <div className="space-y-4">
            <Carousel className="w-full">
              <CarouselContent>
                {property.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="relative h-[500px] w-full">
                        <Image
                          src={image}
                          alt={`${property.title} ${index + 1}`}
                          fill
                          className="rounded-xl object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
            </Carousel>

            {/* Thumbnail Preview */}
            <div className="grid grid-cols-3 gap-4">
              {property.images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`${property.title} ${index + 1}`}
                  width={200}
                  height={150}
                  className="rounded-xl w-full h-32 object-cover cursor-pointer hover:opacity-80 border-2 border-transparent "
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
           
            <h1 className="text-3xl font-bold text-blue-900">
              {property.title}
            </h1>
            <p className="text-blue-800 text-xl">{property.location}</p>
            <p className="text-gray-600">{property.description}</p>

           
            {/* Amenities */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900">Amenities</h3>
              <ul className="grid grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span className="text-gray-700">{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-900">Features</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <FaParking className="text-blue-600 mr-2" />
                  <span className="text-gray-700">
                    Parking {property.features.parking ? "✓" : "✗"}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaWifi className="text-blue-600 mr-2" />
                  <span className="text-gray-700">
                    WiFi {property.features.wifi ? "✓" : "✗"}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaVolumeUp className="text-blue-600 mr-2" />
                  <span className="text-gray-700">
                    Sound Proof {property.features.soundProof ? "✓" : "✗"}
                  </span>
                </div>
                <div className="flex items-center">
                  <MdMeetingRoom className="text-blue-600 mr-2" />
                  <span className="text-gray-700">
                    Backstage Area {property.features.backstageArea ? "✓" : "✗"}
                  </span>
                </div>
              </div>
            </div>

            {/* Price and Booking */}
            <div className="mt-8  rounded-lg p-6 border ">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <span className="text-3xl font-bold text-blue-800">
                    {property.price}
                  </span>
                  <span className="text-gray-500">/night</span>
                </div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition mt-4 md:mt-0 w-full md:w-auto">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

       
      </main>

    
    </div>
  );
};

export default Page;
