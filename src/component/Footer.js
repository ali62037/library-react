import React from 'react'
import '../index.css'


function Footer() {
  return (
    <div className='flex flex-wrap justify-center bg-black p-12 lg:justify-around '>
        <div className='bg-[#] flex flex-wrap gap-4 '>      
            <iframe className='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.003444851509!2d85.08445397539516!3d25.604801777450852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed576060081feb%3A0x5406c5eca435ff00!2sJK%20LIBRARY!5e0!3m2!1sen!2sin!4v1724563435393!5m2!1sen!2sin" width="250" height="200"   loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='JKLIBRARY'></iframe>
            <h4 className='text-yellow-100 text-sm font-semibold lg:text-2xl'>J.K LIBRARY<br/> PILLAR NO 62,<br/> CHOURASIA MARKET,<br/> Bailey Rd, Samanpura,<br/> Raja Bazar,<br/> Indrapuri, Patna, Bihar 800014</h4>
        </div>
          
        <div className='text-2xl lg:text-4xl text-white cursor-pointer '>
          <i class="fa-brands fa-facebook"></i>
          <i class="ml-14 fa-brands fa-instagram"></i>
          <i class="ml-14 fa-brands fa-youtube"></i>
          <i class="ml-14 pt-11 fa-brands fa-twitter"></i>
        </div>
    </div>
  )
}

export default Footer
