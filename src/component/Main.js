import React from 'react'
import imag2 from '../image/book.png'
import img1 from '../image/Jk library.jpeg'
import '../index.css'

function Main() {
  return (
    <div id='main' className='flex'>
      <div id='main1' className='h-[calc(100vh-64px)] w-2/4 pl-7'>
        <h1 id='learn' className='text-4xl pt-16 pl-8 pr-6 font-sans font-semibold md:text-6xl md:pt-16 md:pr-6 lg:2xl '>Explore, Learn, <span className='text-[#EC693F] '>Grow with</span> J.K Library</h1>
        <p id='offer' className="text-sm pt-6 pl-8 pr-24 md:text-base lg:text-base">J.K Library offers a curated collection of self-study resources, combining the ease of offline access with the depth of online content. Empower your learning journey anytime, anywhere with our comprehensive digital library.</p>
        <a href={img1} download="jk library.jpeg"> <button id='btnnow' className='bg-[#EC693F] h-10 text-white rounded-sm ml-8 mt-7 font-semibold w-28 p-2'>Explore Now</button></a>
      </div>
      <div id='main1' className='h-[calc(100vh-64px)] w-2/4 md:h-100%'>
        <img id='imgs' className=' h-[calc(100vh-64px)] w-4/5 pl-10 md:h-100%' src={imag2} alt=''/>
      </div>
      
    </div>
  )
}

export default Main
