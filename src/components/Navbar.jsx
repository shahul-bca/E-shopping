import { AlignJustify } from "lucide-react";
import React, { useState } from "react";
import logo from "../assets/Logo2.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  let [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center  text-black  px-8 md:px-32 bg-slate-100 h-[10%] ">
        <img src={logo} alt="" className=" h-32  " />
        <nav className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <Link to={"/"} className="hover:text-blue-500">
            Home
          </Link>
          <Link to={"/product"} className="hover:text-blue-500">
            Product
          </Link>
          <Link to={"/blog"} className="hover:text-blue-500">
            Blog
          </Link>
          <Link to={"/aboutus"} className="hover:text-blue-500">
            AboutUs
          </Link>
        </nav>
        <div>
          <Link
            Link
            to={"signin"}
            button
            className="md:bg-blue-400 text-white px-5 py-2 rounded-md hover:bg-[#87acec] "
          >
            SignIn
          </Link>
        </div>
        <AlignJustify
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div
          className={`absolute xl:hidden top-24 left-0 w-full bg bg-white flex flex-col items-center gap-7 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease,opacity:0.3s ease" }}
        >
          <Link
            to={"/"}
            className="list-none  w-full text-left p-4  text-black transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to={"product"}
            className="list-none  w-full text-left p-4  text-black transition-all cursor-pointer"
          >
            Product
          </Link>
          <Link
            to={"Blog"}
            className="list-none  w-full text-left p-4  text-black transition-all cursor-pointer"
          >
            Blog
          </Link>
          <Link
            to={"aboutus"}
            className="list-none  w-full text-left p-4  text-black transition-all cursor-pointer"
          >
            Aboutus
          </Link>
          <Link
            Link
            to={"signin"}
            button
            className="bg-blue-400 text-white px-5 py-2 mb-5 rounded-md mr-40"
          >
            SignIn
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
