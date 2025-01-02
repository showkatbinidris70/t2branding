import React, { useState } from "react";
import T2Logo from '../assets/icons/t2logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-bgColor w-full" style={{ width: "100%" }}>
      <nav className="text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={T2Logo} alt="" srcset="" />
            </div>
            <div className="hidden md:flex space-x-4">

              <a href="about" className="text-white">
                About
              </a>
              <a href="services" className="text-white">
                Services
              </a>
              <a href="portfolio" className="text-white">
                Portfolio
              </a>
              <a href="contact" className="text-white">
                Contact
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-700">
            <a
              href="#home"
              className="block px-4 py-2 text-sm hover:bg-gray-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-sm hover:bg-gray-600"
            >
              About
            </a>
            <a
              href="#services"
              className="block px-4 py-2 text-sm hover:bg-gray-600"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-sm hover:bg-gray-600"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
