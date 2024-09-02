import React from 'react'
import Nav from '../component/Nav'
import one from '../image/1.jpg'
import two from '../image/2.jpg'
import three from '../image/3.jpg'
import four from '../image/4.jpg'
import five from '../image/5.jpg'
import six from '../image/6.jpg'
import seven from '../image/7.jpg'
import eight from '../image/8.jpg'
import nine from '../image/9.jpg'
import ten from '../image/10.jpg'
import eleven from '../image/11.jpg'
import twelve from '../image/12.jpg'
import thirteen from '../image/13.jpg'
import fourteen from '../image/14.jpg'
import Footer from '../component/Footer'
import '../index.css'



function Gallery() {
  return (
   <div>
    <Nav/>
    <h1 id='facility' className='align-middle font-semibold text-5xl flex justify-center m-3 p-4 max-sm:text-3xl max-sm:m-1 max-sm:p-1'>Gallery</h1>
    <div id='facility' className='grid mt-8 mb-8  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-wrap justify-center m-2 p-3 gap-4 rounded-lg max-sm:p-1 max-sm:m-1'>
    <img src={one} alt='one'/>
    <img src={two} alt='one'/>
    <img src={six} alt='one'/>
    <img src={three} alt='one'/>
    <img src={four} alt='one'/>
    <img src={nine} alt='one'/>
    <img src={eight} alt='one'/>
    <img src={twelve} alt='one'/>
    <img src={thirteen} alt='one'/>
    <img src={ten} alt='one'/>
    <img src={fourteen} alt='one'/>
   
    <img src={seven} alt='one'/>
    <img src={eleven} alt='one'/>
    <img src={five} alt='one'/>
   </div>
   <Footer/>
   </div>
  )
}

export default Gallery
