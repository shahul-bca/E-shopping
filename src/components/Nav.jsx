import React, { useState } from "react";
import logo from '../assets/Logo2.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <div>
    <nav className="bg-white shadow-md  sticky">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10   py-10">
          <img src={logo} alt="" className=" h-32  " />

          {/* Menu (Mobile) */}
          <div className="md:hidden">
         
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-bold"
            >
              Home
            </Link>
            <Link
            to='product'
              
              className="text-gray-600 hover:text-blue-400  px-3 py-2 rounded-md text-sm font-bold"
            >
              Product
            </Link>
            <Link
              to="blog"
              className="text-gray-600 hover:text-blue-400  px-3 py-2 rounded-md text-sm font-bold"
            >
              Blog
            </Link>
            <Link
              to="aboutus"
              className="text-gray-600 hover:text-blue-400  px-3 py-2 rounded-md text-sm font-bold"
            >
              AboutUs
            </Link>
            
          </div>

          {/* Login Button */}
          <div className="hidden md:flex">
            <Link
              to="login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <Link
              to="/"
              className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="product"
              className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Product
            </Link>
            <Link
              to="blog"
              className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              Blog
            </Link>
            <Link
              to="aboutus"
              className="block text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
            >
              AboutUs
            </Link>
            <Link
              to="login"
              className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium mt-2 hover:bg-blue-700 "
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
    </div>
    </>
  );
};

export default Navbar;
