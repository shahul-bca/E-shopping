import React, { useEffect, useState } from "react";
import axios from "axios";
const Products = ({ category }) => {
  const [data, setData] = useState([]);
  console.log(category);
  useEffect(() => {
    const datas = async () => {
      if (category === "all") {
        const res = await axios.get("https://fakestoreapi.com/products/");
        setData(res.data);
      } else if (category === "jewellery") {
        const res = await axios.get(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        setData(res.data);
      } else if (category === "electronics") {
        const res = await axios.get(
          "https://fakestoreapi.com/products/category/electronics"
        );
        setData(res.data);
      } else if (category === `men's clothing`) {
        const res = await axios.get(
          `https://fakestoreapi.com/products/category/men's clothing`
        );
        setData(res.data);
      } else if (category === `women's clothing`) {
        const res = await axios.get(
          `https://fakestoreapi.com/products/category/women's clothing`
        );
        setData(res.data);
      } else {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
      }
    };
    datas();
  }, [category]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-8">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="bg-gray-200 w-full rounded-2xl py-8 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt="Product"
              className="w-40 h-40 object-contain"
            />
            <div>
              <h1 className="w-full text-center text-gray-600 font-bold px-5 text-xs sm:text-sm md:text-sm">
                {item.category}
              </h1>
            </div>
            <div>
              <h1 className="px-5  py-3 w-full font-bold text-lg sm:text-xl md:text-xs ">
                Price: ${item.price}
              </h1>
            </div>
            <div className="flex justify-between  gap-3">
              <button className=" md:w-32 bg-white h-10 text-black rounded-lg hover:bg-orange-400 hover:text-white  w-20 hover:text-sm  ">
                Byenow
              </button>
              <button className=" md:w-32 bg-white h-10 text-black rounded-lg hover:bg-blue-400 hover:text-white hover:text-sm">
                Add Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
