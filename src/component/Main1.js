import React from 'react'
import ac from '../image/ac.png'
import img2 from '../image/water.png'
import camera from '../image/camera.png'
import power from '../image/power.png'
import charging from '../image/charging.png'
import chair from '../image/chair.png'
import locker from '../image/loker.png'
import enviroment from '../image/enviroment.png'
import wifi from '../image/wifi.png'
import '../index.css'

function Main1() {
  return (
    <div className=' w-full h-full '>
      <div id='our' className=' mx-14 mb-8 grid  gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-120'>
        <div className='p-3 grid place-items-center  bg-[#1E7FBD] rounded-xl '>
            <img className='  h-36 w-36' src={img2} alt='water'/>
            <h1 className='text-2xl font-medium flex-wrap-reverse text-white'>RO. Drinking Water</h1>
        </div>
        <div className='p-3 grid place-items-center bg-[#1E7FBD] rounded-xl'>
            <img className=' justify-center h-36 w-36' src={ac} alt='AC'/>
            <h1 className='text-2xl font-medium flex-wrap-reverse text-white'>Fully Air Condition</h1>
        </div>
        <div className='p-3  grid place-items-center bg-[#1E7FBD] rounded-xl'>
            <img className=' justify-center h-36 w-36' src={camera} alt='AC'/>
            <h1 className='text-2xl font-medium flex-wrap-reverse text-white'>CCTV Surveillance</h1>
        </div>
      
        <div className=' p-3  grid place-items-center bg-[#1E7FBD] rounded-xl'>
            <img className=' justify-center h-36 w-36' src={power} alt='AC'/>
            <h1 className='text-2xl font-medium flex-wrap-reverse text-white'>Power Backup</h1>
        </div>
        <div className='p-3  grid place-items-center bg-[#1E7FBD] rounded-xl'>
            <img className=' justify-center h-36 w-36' src={charging} alt='AC'/>
            <h1 className=' text-2xl font-medium flex-wrap-reverse text-white'>Seprate Charging Point</h1>
        </div>
        <div className='p-3  grid place-items-center bg-[#1E7FBD] rounded-xl'>
            <img className=' justify-center h-36 w-36' src={chair} alt='AC'/>
            <h1 className='text-2xl font-medium flex-wrap-reverse text-white'>Seprate Cabin  With Study Lamp</h1>    
        </div>
      
        <div className='p-3  grid place-items-center bg-[#1E7FBD] rounded-xl'>
            <img className=' justify-center h-36 w-36' src={locker} alt='AC'/> 
            <h1 className='text-2xl font-medium flex-wrap-reverse text-white'>Locker Facilities</h1>   
        </div>
        <div className='p-3  grid place-items-center bg-[#1E7FBD] rounded-xl'>
            <img className=' justify-center h-36 w-36' src={enviroment} alt='AC'/>
            <h1 className='text-2xl font-medium flex-wrap-reverse text-white'>Peaceful Enviroment</h1> 
        </div>
        <div className='p-3  grid place-items-center bg-[#1E7FBD] rounded-xl'>
            <img className=' justify-center h-36 w-36' src={wifi} alt='AC'/> 
            <h1 className='text-2xl font-medium flex-wrap-reverse text-white'>High Speed Connectivity</h1>
        </div>
      </div>
     </div>
  )
}

export default Main1
