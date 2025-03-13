import { FaRegCommentDots, FaPaperPlane, FaRegHeart } from "react-icons/fa";

export default function OurValues() {
  return (
    <section className="text-center py-20 px-6">
      <h5 className="text-gray-500 tracking-widest uppercase">
        Casaroyal Real Estate Agency
      </h5>
      <h2 className="text-4xl font-bold mt-2 mb-20">Our Values</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
        <div className="max-w-sm text-center">
          <FaRegCommentDots className="text-blue-500 text-3xl mx-auto" />
          <h3 className="font-semibold text-xl mt-4">
            Ensuring clear communication
          </h3>
          <p className="text-gray-500 mt-2">
            We keep you in the loop every step of the way. You can rely on a
            transparent, comprehensible flow of information.
          </p>
        </div>
        <div className="max-w-sm text-center bg-white shadow-lg p-6 rounded-lg">
          <FaPaperPlane className="text-blue-500 text-3xl mx-auto" />
          <h3 className="font-semibold text-xl mt-4">
            Making the most of technology
          </h3>
          <p className="text-gray-500 mt-2">
            Time is precious. We guarantee a high degree of efficiency and a
            premium level of service by using the right tools.
          </p>
        </div>
        <div className="max-w-sm text-center">
          <FaRegHeart className="text-blue-500 text-3xl mx-auto" />
          <h3 className="font-semibold text-xl mt-4">
            Providing excellent customer service
          </h3>
          <p className="text-gray-500 mt-2">
            We are passionate about what we do and we take pride in achieving
            the personalised results that you have in mind.
          </p>
        </div>
      </div>
      <button className="bg-black text-white py-4 px-12 rounded-full mt-10 hover:bg-blue-600 transition">
        READ MORE
      </button>
    </section>
  );
}
