// pages/index.js
import Head from "next/head";
import Image from "next/image";

export default function Imgs() {
  // Our property area data
  const areas = [
    // {
    //   name: "LOS ANGELES",
    //   properties: 4,
    //   image: "/los-angeles.jpg",
    // },
    {
      name: "BEVERLY HILLS",
      properties: 1,
      image: "property-1.jpg",
    },
    {
      name: "MISSION VIEJO",
      properties: 1,
      image: "/property-2.jpg",
    },
    {
      name: "NEWPORT BEACH",
      properties: 1,
      image: "/property-3.jpg",
    },
  ];

  return (
    <div className="bg-white py-20">
      <Head>
        <title>Properties by Area | CasaRoyal Real Estate</title>
        <meta name="description" content="Browse properties by area" />
      </Head>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header section */}
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm uppercase">
            CASAROYAL REAL ESTATE AGENCY
          </p>
          <h1 className="text-6xl font-semibold mt-2 mb-20">Properties by Area</h1>
        </div>

        {/* Property grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First row */}

          <div className="relative h-80 rounded overflow-hidden">
            <Image
              src="/property-1.jpg"
              alt="Beverly Hills properties"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
              <h2 className="text-white text-xl font-bold">BEVERLY HILLS</h2>
              <p className="text-white text-sm">1 Property</p>
            </div>
          </div>

          {/* Second row - wide property */}
          <div className="relative h-80 rounded overflow-hidden md:col-span-2">
            <Image
              src="/property-2.jpg"
              alt="Mission Viejo properties"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
              <h2 className="text-white text-xl font-bold">MISSION VIEJO</h2>
              <p className="text-white text-sm">1 Property</p>
            </div>
          </div>

          <div className="relative h-80 rounded overflow-hidden md:col-span-2">
            <Image
              src="/property-3.jpg"
              alt="Mission Viejo properties"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
              <h2 className="text-white text-xl font-bold">MISSION VIEJO</h2>
              <p className="text-white text-sm">1 Property</p>
            </div>
          </div>

          <div className="relative h-80 rounded overflow-hidden">
            <Image
              src="/property-4.jpg"
              alt="Beverly Hills properties"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
              <h2 className="text-white text-xl font-bold">BEVERLY HILLS</h2>
              <p className="text-white text-sm">1 Property</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
