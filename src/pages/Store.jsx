import React, { useMemo, useState } from "react";
import Products from "../components/Products";
import { useNavigate } from "react-router-dom";
// import Jewellery from "../components/Jewellery";
const Store = () => {

  const nav = useNavigate()
  const [category, setcategory] = useState('all')
  // console.log(category);
  return (
    <>
 <div className=" px-10 py-10">
      <div className="md:w-full h-60 bg-black rounded-lg ">
        <h1 className="text-white text-3xl px-10 py-10 text-bold ">
          Best offer for you
        </h1>
        <div className="px-20">
          <button className="lg:text-white text bg-gray-400 w-20 h-8   ">
            Click
          </button>
        </div>
      </div>

      <h1 className="text-2xl text-bold mb-5 text center"> All Categories</h1>

      <div className="w-full ">
        
        <div className="  px-10 py-10 bg-slate-200 shadow-md">
          <ul className="  flex flex-col lg:flex-row   decoration-none  justify-between">
            <li className="text-1xl font-semibold text-gray-400 t mb-3" onClick={()=>setcategory('products')}>
              #All
            </li>
            <li className="text-1xl font-semibold text-gray-400 t mb-3" onClick={()=>setcategory('electronics')}>
              #Electronics
            </li>
            <li className="text-1xl font-semibold text-gray-400 t mb-3" onClick={()=>setcategory('jewellery') }>
              #Jewellery
            </li>
            <li className="text-1xl font-semibold text-gray-400 t mb-3" onClick={()=>setcategory(`men's clothing`)} >
              #Mencloths
            </li>
            <li className="text-1xl font-semibold text-gray-400 t mb-3" onClick={()=>setcategory(`women's clothing`)}>
              #Womencloths
            </li>
          </ul>
        </div>

        <div>
          
        </div>
      </div> 
    <Products category={category}/>
    {/* {category === 'jewellery'  && <Jewellery/>} */}


    </div>

   
    </>
  );
};

export default Store;
