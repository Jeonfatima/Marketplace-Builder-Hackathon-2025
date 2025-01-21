import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-[5%]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 h-auto">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-[10%]">Funiro.</h2>
            <p className="text-xl text-gray-500 mt-4">
              400 University Drive Suite 200 Coral <br />Gables, <br /> FL 33134 USA
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 flex-1">
            {/* Middle Section */}
            <div className="flex flex-col lg:flex-col text-sm text-gray-600 h-[505px] flex-1">
              <h3 className="font-bold text-2xl text-gray-500 mb-7">Links</h3>
              <ul className="flex flex-col lg:flex-col text-black justify-between h-[70%]">
                <li className="sm:mr-4 mb-4 sm:mb-0">
                  <Link href="/" className="hover:text-gray-900 text-xl">Home</Link>
                </li>
                <li className="sm:mr-4 mb-4 sm:mb-0">
                  <Link href="/Shop" className="hover:text-gray-900 text-xl">Shop</Link>
                </li>
                <li className="sm:mr-4 mb-4 sm:mb-0">
                  <Link href="/Blog" className="hover:text-gray-900 text-xl">Blog</Link>
                </li>
                <li className="sm:mr-4 mb-4 sm:mb-0">
                  <Link href="/Contact" className="hover:text-gray-900 text-xl">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="flex flex-col lg:flex-col text-sm text-gray-600 h-[505px] flex-1">
              <h3 className="font-semibold text-2xl text-gray-500 mb-7">Help</h3>
              <ul className="flex flex-col lg:flex-col text-black justify-between h-[50%]">
                <li className="sm:mr-4 mb-4 sm:mb-0">
                  <Link href="#" className="hover:text-gray-900 text-xl">Payment Options</Link>
                </li>
                <li className="sm:mr-4 mb-4 sm:mb-0">
                  <Link href="#" className="hover:text-gray-900 text-xl">Returns</Link>
                </li>
                <li className="sm:mr-4 mb-4 sm:mb-0">
                  <Link href="#" className="hover:text-gray-900 text-xl">Privacy Policies</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex-1 mt-6 md:mt-0 text-center">
            <h3 className="font-bold text-2xl text-gray-500 mb-7 text-left">Newsletter</h3>
            <div className="flex flex-col sm:flex-row justify-start gap-2 sm:gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="px-4 py-2 border-b border-black rounded-md w-full sm:w-80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button className="mt-2 sm:mt-0 px-6 py-2 border-b border-black text-black ">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500 mt-4">
          <p>2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
