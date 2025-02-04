import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
const AboutUs = () => {
  return (
    <>
  <div className=" w-full h-fit bg-blue-400 ">
  <h1 className="text-4xl font-bold px-5 lg:px-20  pt-10 text-white">About Us</h1>
  <p className=" text-1xl font-bold px-20 text-white ">A jorney in the making since 1851</p>

  <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 px-5 lg:px-20">
  {/* col first */}
    <p className=" lg:font-semibold text-1xl  font-sm text-white ">
      At Shopping.com, we are passionate about bringing you the best selection
      of electronic gadgets and home appliances directly to your doorstep
      through the convenience of online shopping. With a commitment to quality,
      competitive prices, and exceptional customer service, we strive to
      provide a seamless shopping experience.
    </p>
    {/* coll second */}
    <div className="flex items-center justify-center   p-6">
      <form className=" p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Money Refund & Shippinginfo</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  
</div>
<div className=" grid grid-col w-full h-fit bg-white px-20 mb-10">
<div>
  <h1 className=" text-xl font-bold mb-4 text-gray-500">Contact Us</h1>
  <ul className="flex flex-col gap-4 t">
    
    <li className="flex items-center gap-2 text-lg">
      <FaPhoneVolume className="text-blue-500" />
      <span>+1 558 516 5555</span>
    </li>

  
    <li className="flex items-center gap-2 text-lg">
      <MdEmail className="text-blue-500" />
      <span>Shopping@zmax.com</span>
    </li>


    <li className="flex items-center gap-2 text-lg">
      <IoLocation className="text-blue-500"  /> 
      <span>Mexico</span>
    </li>
  </ul>
</div>




</div>

    </>
  );
};

export default AboutUs;
