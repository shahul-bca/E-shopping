import React from 'react'
import ReactPlayer from 'react-player'
const Blog = () => {
  return (
    <>
    <h1 className='text-center font-bold text-2xl mt-11  mb-5 py-5 pz-5 '>Welcome to shopping.com</h1>
     <div className="flex justify-center items-center h-screen  bg-white ">
      <ReactPlayer
        url="https://youtu.be/xbDudzs1hXU"
        className="react-player"
        controls
      />
    </div>
    </>
  )
}

export default Blog
