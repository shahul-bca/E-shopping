import React from "react";
import camera from "../assets/camera4.jpg";
import lap from "../assets/laptop.jpg";
import tv from "../assets/tv.jpg"
import mob from "../assets/gadjets2.jpg"
import banner from "../assets/banner.png"
const ProductCard = () => {
  const images = [
    {
      image: camera,
      title: "Cameras",
    },
    {
      image: lap,
      title: "Laptops",
    },
    {
      image: tv,
      title: "HomeTv",
    },
    {
      image: mob,
      title: "Mobiles",
    }
  ];

  return (
    <>

      <div className=" md:flex flex-col  gap-10 items-center w-full     ">
        <div>
          <h1 className=" md:text-2xl font-bold text-center  mt-11 py-5 pz-5">Our Best Selling Digital Products</h1>
        </div>
        <div className=" md:flex flex-wrap justify-center gap-20 h-full    ">
          {images.map((item, index) => (
            <div key={index} className="md:w-48 h-auto  flex flex-col items-center w-auto">
              <img src={item.image} alt={item.title} className="md:w-full w-10" />
              <h2 className="text-center mt-2 text-lg font-medium">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
     <div className=" md:py-10 px-10 mb-10  ">
     <img src={banner} alt=""  className="w-full rounded-lg"/>
     </div>
    </>
  );
};

export default ProductCard;
