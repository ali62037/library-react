import React from 'react'
import img1 from '../image/logo.png'
import { Link } from 'react-router-dom'
import '../index.css'

function Nav() {
  return (
    <div id='nav2' className=' w-full  flex justify-between border-b-2'>
      <img className='h-16 w-16 ' src={img1} alt='logo'/>
    
      <div id='nav1' className='flex gap-7 p-4 nav'>
        <h4 className='text-xl font-semibold'><Link to="/library-react/">Home</Link></h4>
        <h4 className='text-lg'><Link to="/catalog">Catalog</Link></h4>
        <h4 className='text-lg'><Link to="/gallery">Gallery</Link></h4>
        <h4 className='text-lg'><Link to= "/about">About</Link></h4>
        <h4 className='text-lg mr-6'><Link to="/contact">Contact Us</Link></h4>
      </div>
        {/* <i id='menu' class="fa-solid fa-bars text-3xl text-center p-3 hidden"></i> */}
    </div>
  )
}

export default Nav
