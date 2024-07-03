import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMediumM,
  FaQuora,
  FaSearch,
} from "react-icons/fa";
export default function TopBanner() {
  return (
    <header className="bg-gray-600 text-white py-4 px-36">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            DMCA
          </a>
          <a href="#" className="hover:underline">
            Terms of use
          </a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaMediumM />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaQuora />
          </a>
          <div className="border-l border-white h-6 mx-4 pb-5"></div>
          <a href="#" className="hover:text-gray-400">
            <FaSearch />
          </a>
        </div>
      </div>
    </header>
  );
}
