import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    <div className="bg-slate-100 flex flex-col md:flex-row   justify-between py-2 ">
      <div className="mt-3">
        <span className="text-2xl text-blue-800 ml-7 font-semibold hover:text-yellow-500">Shopping</span>
        <span className="text-2xl text-black font-normal  hover:text-yellow-500">.com</span>
        <p className="text-gray-500 ml-7 ">Welcome to the world of shopping.</p>
        <h1 className=" md:font-bold sm:none  text-gray-500  font-bold ml-7 ">
          Copyright © 2025 E-shopp Inc.
        </h1>
        <div className="flex flex-row gap-7">
          <FaInstagramSquare className="w-8 h-8 text-red-400 ml-7 mt-4 mb-11" />
          <FaSquareTwitter className="w-9 h-8 text-blue-400 ml-7 mt-4 mb-11" />
          <FaFacebookSquare className="w-9 h-8 text-blue-400 ml-7 mt-4 mb-11" />
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-7">
          <h1 className="md:mt-3 font-bold  text-blue-500 ml-7 ">
            Information
          </h1>
          <ul className=" md:text-gray-500 ml-7 ">
            <Link to="/">Home</Link>
            <li>Shippin Information</li>
            <li>Refund</li>
          </ul>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-7">
          <h1 className="md:mt-3 font-bold   text-blue-500 ml-7">Store</h1>
          <ul className="md:text-gray-500  ml-7">
            <li>About Us</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-7 ml-2">
          <h1 className="md:mt-3 font-bold  text-blue-500 ml-6 ">Support</h1>
          <ul className="md:text-gray-500  mr-6 ml-6">
            <Link to="aboutus">ContactUs</Link>
            <li>Document</li>
            <li>My Ordes</li>
          </ul>
        </div>
      </div>
      <div className=" hidden"></div>
    </div>
    </>
  );
};

export default Footer;
