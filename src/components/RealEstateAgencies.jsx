import { ShieldCheck, Star } from "lucide-react";
import Image from "next/image";

const RealEstateAgencies = () => {
  const agencies = [
    {
      name: "Alain Doe Agency",
      location: "San Francisco, USA",
      phone: "123 456 7890",
      email: "agency@email.com",
      properties: 4,
      image: "/logo-alaindoe-1.png",
    },
    {
      name: "ProHouse Agency",
      location: "San Francisco, USA",
      phone: "123 456 7890",
      email: "agency@email.com",
      properties: 1,
      image: "/logo-behome-1.png",
    },
    {
      name: "beHome Agency",
      location: "San Francisco, USA",
      phone: "123 456 7890",
      email: "agency@email.com",
      properties: 2,
      image: "/logo-prohouse-1.png",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="py-12 bg-gray-100 px-4 mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-lg text-gray-500 uppercase">Meet Our Team</h2>
          <h1 className="text-3xl font-bold">Real Estate Agencies</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {agencies.map((agency, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-1 text-green-600">
                  <ShieldCheck size={18} /> <span>Verified</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={18} /> <span>4.5</span>
                </div>
              </div>
              <div className="my-6 flex justify-center">
                <Image
                  src={agency.image}
                  alt={agency.name}
                  className="rounded-md object-cover"
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                🇺🇸 {agency.location}
              </p>
              <h3 className="text-xl font-semibold my-2">{agency.name}</h3>
              <p className="text-sm text-gray-600">{agency.phone}</p>
              <p className="text-sm text-gray-600">{agency.email}</p>
              <button className="mt-4 bg-blue-100 text-blue-600 py-2 px-4 rounded-md">
                {agency.properties}{" "}
                {agency.properties > 1 ? "Properties" : "Property"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealEstateAgencies;
