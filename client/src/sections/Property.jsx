import React from 'react'
import PropertyCard from './components/PropertyCard'
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Property = () => {
  /*
      img={img} price={price} title={title} description={desc}
      */
  return (
    <section id='property' className='max-w-screen-2xl mx-auto font-poppins  m-5 p-3 md:px-16  pt-28'>
      <div className=''>
        <h2 className='text-lg'>Best Choice</h2>
        <div className='flex justify-between items-center mt-2'>
          <h2 className='text-3xl font-semibold tracking-wide'>Popular <span className='text-primary'>Residences</span> </h2>
          <div className='flex items-center gap-2'>
            <button className='border p-1 rounded-sm  border-primary text-primary'><MdNavigateBefore /></button>
            <button className='p-1 border rounded-sm border-primary bg-primary text-white '><MdNavigateNext /></button>
          </div>
        </div>
      </div>

      
      <div className='grid grid-cols-1 justify-between sm:grid-cols-2 md:grid-cols-3  gap-6 mt-16'>
        <PropertyCard  />
        <PropertyCard  />
        <PropertyCard  />
      </div>

    </section>
  )
}

export default Property