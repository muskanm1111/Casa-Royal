import Image from "next/image";

const Banner = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center  bg-[url('/banner.jpg')]"
      
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-start text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Let Us Guide You Home
        </h1>
        <p className="text-lg mt-2">Find the house of your dreams</p>

        {/* Search Bar */}
        <div className="mt-6 bg-white shadow-lg  rounded-lg flex flex-col md:flex-row items-center p-4 border-2  max-w-7xl ">
          {/* Select Type */}
          <div className="w-full md:w-1/4 p-2">
            <label className="text-gray-600 text-sm">Type</label>
            <select className="w-full p-2 border rounded">
              <option>Select Type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Villa</option>
            </select>
          </div>

          {/* Select Status */}
          <div className="w-full md:w-1/4 p-2">
            <label className="text-gray-600 text-sm">Status</label>
            <select className="w-full p-2 border rounded">
              <option>Select Status</option>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-2/4 p-2">
            <label className="text-gray-600 text-sm">Search</label>
            <input
              type="text"
              placeholder="Search for properties, suburbs, or keywords..."
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Button */}
          <div className="w-full md:w-auto p-2">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full">
              Find Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
