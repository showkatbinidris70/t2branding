import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import T2Logo from '../assets/icons/t2logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Function to handle closing the menu
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="bg-bgColor w-screen relative">
      <div className="container">
        <nav className="text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link to="/">  <img src={T2Logo} alt="" /></Link>
              </div>
              <div className="hidden md:flex space-x-4">
                <Link to="/about">  About</Link>
                <Link to="/services">  Services</Link>
                <Link to="/portfolio">  Portfolio</Link>
                <Link to="/contact">  Contact</Link>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-md text-white hover:text-white hover:bg-[#F44904] bg-[#F44904] focus:outline-none"
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
            <div className="md:hidden bg-[#F44904] p-5 absolute top-[70px] left-0 w-full z-50">
              <div><Link to="/about" onClick={closeMenu}>About</Link></div>
              <div><Link to="/services" onClick={closeMenu}>Services</Link></div>
              <div><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></div>
              <div><Link to="/contact" onClick={closeMenu}>Contact</Link></div>
            </div>
          )}
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
