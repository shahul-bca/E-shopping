import heroImg from "../assets/heroImg.png";
import brand from '../assets/brands.png'
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className=" flex flex-row justify-between bg-blue-400 ">
        <div className="md:ml-36 mt-28 ml-10 mb-20 ">
          <h1 className="md:text-5xl text-white font-bold text-2xl">
            Best Product&
          </h1>
          <span className="md:text-5xl text-white font-bold text-2xl">
            brands in our store
          </span>
          <p className="md:text-1xl mt-3 text-white text-sm font-bold">
            Trendy products,Factory prices,Excellent services
          </p>
          <div>
            <div className="md:flex flex-row gap-3 mt-7   ">
              <div className="mb-5">
                <Link to="aboutus" className="md:bg-white text-black px-5 py-2 rounded-md hover:bg-yellow-500 font-bold bg-white   ">
                  LernMore
                </Link>
              </div >
              <div>
              <Link to="store" className="md:bg-white text-black px-5 py-2 rounded-md   hover:bg-yellow-500 font-bold bg-white  ">
                PurchaseNow
              </Link>
              </div>
              
            </div>
          </div>
        </div>
        <div className=" md:flex flex-row hidden  ">
          <div>
            <img src={heroImg} alt="" className="px-10" />
          </div>
        </div>
      
      </div>
      <div className="text-center  ">
      <img src={brand} alt=""  className="inline-block w-full  rounded-lg py-6 px-6  "  />
      </div>
    </>
  );
};

export default Hero;
