"use client"
import { IoClose, IoSearch } from "react-icons/io5";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";



const navItems = [
  { name: "Home", link: "/" },
  { name: "Properties", link: "/properties" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export const Header = () => {
    const [show, setShow] = useState(false);
    const [showSearch, setShowSearch] = useState(false);


    const toggleSearch = ()=> {
        setShowSearch(!showSearch)
    }
    
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#2A41E8] text-white text-sm md:text-lg font-semibold py-2 hidden md:flex md:max-lg:hidden ">
        <div className="container mx-auto flex flex-wrap justify-between  items-center px-4 md:px-2">
          {/* Left Section */}
          <div className="flex flex-wrap items-center space-x-2 md:space-x-2   text-xs md:text-lg">
            <span className=" ">📍 1441 Market St, San Francisco</span>
            <span>📞 (123) 456-7890</span>
            <span>⏰ Mon - Sun: 8:00am - 6:00pm</span>
          </div>

          {/* Right Section */}
          <div className=" space-x-6 items-center gap-4 text-xs  md:hidden lg:flex">
            <IoSearch
              onClick={toggleSearch}
              className="cursor-pointer text-xl"
            />
            <FaFacebookF className="cursor-pointer text-xl" />
            <FaTwitter className="cursor-pointer text-xl" />
            <BsInstagram className="cursor-pointer text-xl" />
            <button className="font-semibold px-2 text-lg md:px-3 py-1 ">
              LOGIN/REGISTER
            </button>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-4 md:px-0 md:py-0 md:max-lg:py-1 relative md:sticky top-0 z-50">
        <div className=" mx-auto flex flex-wrap justify-between items-center ">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-gray-800 flex items-center  px-4 md:px-8 space-x-2">
            <Image src="/logo.png" width={200} height={200} alt="logo" />
          </div>

          {/* Navigation Items */}
          <ul className="hidden md:flex md:max-lg:hidden space-x-6 text-[20px] text-gray-700 font-semibold">
            {navItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="hover:text-blue-600 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </ul>

          <Sheet>
            <SheetTrigger className=" md:hidden md:max-lg:flex">
              <div className=" border p-2    md:hidden md:max-lg:flex text-black text-2xl rounded">
                {show ? <IoClose /> : <GiHamburgerMenu />}
              </div>
            </SheetTrigger>
            <SheetContent
              className="bg-black/70 border-none text-white"
              side="left"
            >
              <SheetHeader className="border-b-2 ">
                <Image
                  src="/logo-light.png"
                  width={200}
                  height={200}
                  alt="logo"
                  className=" mb-4 p-2  pl-5 "
                />
              </SheetHeader>

              <div className=" mt-4">
                <ul className="flex flex-col md:hidden md:max-lg:flex space-y-6 pl-5  font-semibold items-start">
                  {navItems.map((item, index) => (
                    <Link
                      href={item.link}
                      key={index}
                      className="hover:text-blue-600 cursor-pointer text-xl"
                    >
                      {item.name}
                    </Link>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>

          {/* Submit Listing Button */}
          <button className="bg-orange-500 text-white px-8 md:px-8 py-6 max-sm:hidden   max-md:hidden lg:flex ">
            Submit Listing
          </button>
        </div>

        {showSearch && (
          <div className="absolute -bottom-36 w-full left-0  bg-white  text-black">
            <div className="flex items-center justify-between">
              <input
                type="text"
                className="border border-gray-300 p-2 w-full"
                placeholder="Search..."
              />
              <button onClick={toggleSearch}>
                <IoClose />
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
