import React from 'react';
import Image from 'next/image';

function Banner() {
  return (
    <div className="relative h-[550px] sm:h[400px] lg:h[550px] xl:h-[650px] 2xl:h-[750px] bg-[url('/airbnb-banner.png')] bg-cover bg-center ">
        <Image src="/airbnb-banner.png" layout='fill'objectFit='contain' className=' invisible xl:visible'/>
        <div className='absolute top-2/3 w-full text-center text-white '>
          <p className="relative text-2xl md:text-3xl p-6 xl:text-4xl font-bold font-mono">Not sure where to go? Perfect.</p>
          <div className='relative flex justify-center'>
            <div className='absolute flex items-center justify-center group '>
              <button className= 'relative content-center  cursor-pointer z-49  text-center group-hover:bg-gray-100 bg-white group-active:scale-90 transition duration-150 px-20 py-8 shadow-md rounded-full group-hover:scale-105 transform ease-out'></button>
               <p className= 'absolute text-lg content-center cursor-pointer text-center z-50 group-hover:bg-gray-100 text-bold group-active:scale-90 transition duration-150 bg-gradient-to-r from-[#6F019C] to-[#C6017E] text-transparent bg-clip-text px-3 py-4 font-bold group-hover:scale-105 transform ease-out'>I'm flexible</p> 
            </div>
          </div>
           
            

        </div>
    </div>

  )
}

export default Banner