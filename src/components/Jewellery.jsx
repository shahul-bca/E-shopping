import axios from 'axios';
import React , {useEffect, useState} from 'react'

function Jewellery() {


    const [data, setData] = useState([]);
    useEffect(() => {
      const datas = async () => {
        const res = await axios.get("https://fakestoreapi.com/products/category/jewelery");
        setData(res.data);
        console.log(res);
      };
      datas();
    }, []);


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
      <h1 className="w-full text-center text-gray-600 font-bold px-5 text-sm sm:text-sm md:text-2xl">
         {item.category}
      </h1>
      <h1 className="px-5 py-3 w-full text-left font-bold text-lg sm:text-xl md:text-2xl">
        Price: ${item.price}
      </h1>
    </div>
  ))}
</div>

    </>
  )
}

export default Jewellery
