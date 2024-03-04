import React from 'react'
import { HeroBg, MobileBg } from '../assets/images'
import { HeroBg1 } from '../assets/images'
import { HiSearch } from "react-icons/hi";
import { status } from '../constants';
const Home = () => {
  return (
    <main className='max-w-screen-2xl mx-auto font-poppins  m-5 p-3 md:px-16  '>
      <div className='flex justify-between gap-8 '>
        <div className='max-lg:text-center flex flex-col max-lg:justify-center max-lg:items-center max-lg:w-full  '>
          <h1 className='text-7xl font-semibold leading-normal mt-6 max-xl:text-6xl relative max-lg:w-full max-sm:text-4xl '>
          Discover 
          <br /> 
          <span className='text-primary'>Most Suitable  </span> 
          <br />Property
          <img src={MobileBg} alt="mobile image" className=' max-lg:block absolute hidden z-[-9] -bottom-16   ' />
          </h1>
          <p className='max-w-md text-gray-400 text-justify mt-6 max-lg:hidden '>It is a long established fact that a reader will be distracted by the readable content of a page</p>
          <form className='bg-slate-100 flex justify-between p-3 rounded-xl relative shadow-xl mt-5 max-lg:w-[60%] max-sm:w-full max-sm:text-sm'>
            <div className='flex justify-center items-center gap-3  '>
              <HiSearch size={25} color='#3F86FA' />
              <input type="text" placeholder='Search' className='bg-transparent absolute h-full w-full right-0 rounded-xl px-12 focus:outline-none' />

            </div>
            <button className='bg-primary rounded-lg text-white px-10 py-2 max-sm:px-5 cursor-pointer z-10'>
              Search
            </button>
          </form>
          <p className='max-w-md text-gray-400 mt-3 text-sm max-lg:block hidden '>It is a long established fact that a reader will be distracted by the readable content of a page</p>


          <div className='flex justify-between items-center lg:mt-10 p-5 max-lg:w-full max-lg:justify-around'>
            {status.map((item,index)=>(
              <div key={index} className='flex flex-col justify-center items-center gap-2'>
                <h2 className='font-palanquin text-4xl font-bold max-sm:text-2xl '>{item.Num}</h2>
                <p className='max-w-16 text-center text-gray-400 max-sm:text-sm '>{item.label}</p>
              </div>
            ))}
          </div>

        </div>
        <img src={HeroBg1} alt="hero image" className='w-[700px] max-lg:hidden    max-xl:w-[400px] max-xl:object-cover  ' />
        
      </div>
      
      
    </main>
  )
}

export default Home