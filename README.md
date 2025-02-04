# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




//import React, { useState } from 'react'

const Hero = () => {
  const [open ,setopen] = useState('home')
  return (
    <!-- <div className='bg- h-[85vh]'> -->
      <!-- <h1>hero</h1> -->

    </div>
  )
}

export default Hero


// import React, { useState } from "react";

const Home = () => 
//   const [open, setopen] = useState("hom");

  return (
    <!-- <div> -->
      {/* {open === "home" && (
        <!-- <div>
          <h1>Home</h1>
          <h1>hhh</h1>
        </div> -->
      )} */}
      <!-- <h1>Home</h1>
    </div> -->
  );




  //const categories = ["All", "Electronics", "Clothing", "Home"];
  const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Smartphone", category: "Electronics" },
    { id: 3, name: "T-shirt", category: "Clothing" },
    { id: 4, name: "Jeans", category: "Clothing" },
    { id: 5, name: "Sofa", category: "Home" },
    { id: 6, name: "Table", category: "Home" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");