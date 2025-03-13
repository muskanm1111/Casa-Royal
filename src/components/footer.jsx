"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-400">
      {/* Top Bar with Logo and Social Icons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center border-b border-gray-800">
        {/* Logo */}
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="flex items-center">
            <div>
             <Image
               src="/logo-light.png"
                alt="casaRoyal Logo"
                width="200"
                height="200"
                viewBox="0 0 24 24"
               
                xmlns="http://www.w3.org/2000/svg"
              />
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex">
          <Link
            href="#"
            className="w-12 h-12 border border-gray-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-colors"
          >
            <Facebook className="w-5 h-5 text-white" />
          </Link>
          <Link
            href="#"
            className="w-12 h-12 border border-gray-800 border-l-0 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-colors"
          >
            <Twitter className="w-5 h-5 text-white" />
          </Link>
          <Link
            href="#"
            className="w-12 h-12 border border-gray-800 border-l-0 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-colors"
          >
            <Instagram className="w-5 h-5 text-white" />
          </Link>
          <Link
            href="#"
            className="w-12 h-12 border border-gray-800 border-l-0 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-colors"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Information Column */}
          <div>
            <h3 className="text-white uppercase text-sm tracking-wider font-medium mb-6">
              INFORMATION
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our Contacts
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Properties Column */}
          <div>
            <h3 className="text-white uppercase text-sm tracking-wider font-medium mb-6">
              PROPERTIES
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  House
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Office
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Residential Tower
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-white uppercase text-sm tracking-wider font-medium mb-6">
              LOCATIONS
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Beverly Hills
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Los Angeles
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Mission Viejo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Newport Beach
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Pasadena
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links & About Column */}
          <div>
            <div className="mb-10">
              <h3 className="text-white uppercase text-sm tracking-wider font-medium mb-6">
                USEFUL LINKS
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Contacts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Submit Listing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white uppercase text-sm tracking-wider font-medium mb-6">
                ABOUT CASAROYAL
              </h3>
              <p className="mb-4">
                casaRoyal - Premium Real Estate Wordpress Theme by
                FantasyThemes.
              </p>
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>111 Wall Street, USA, New York</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>Phone: (123) 456-7890</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      {/* <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-sm text-center md:text-left">
            <p>
              Proudly powered by{" "}
              <Link href="#" className="hover:text-white">
                WordPress
              </Link>{" "}
              and{" "}
              <Link href="#" className="hover:text-white">
                casaRoyal
              </Link>{" "}
              by{" "}
              <Link href="#" className="hover:text-white">
                FantasyThemes
              </Link>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-center">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div> */}
    </footer>
  );
}
