import { servicesList } from '@/constants'
import React from 'react'

const Services = () => {
  return (
    <section id='services' className='max-w-screen-2xl mx-auto font-poppins  m-5 p-3 md:px-16 pt-28 '>
      <div className=''>
        <h2 className='text-lg'>Best Service</h2>    
        <h2 className='text-3xl font-semibold tracking-wide mt-2'><span className='text-primary'>Our</span> Services</h2>        
        
      </div>

      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between   gap-8 mt-16'>
        {servicesList.map((service,index)=>(
          <div className='flex flex-col justify-center items-center   text-center shadow-lg rounded-lg gap-6 p-3 py-10 hover:bg-white hover:shadow-md hover:scale-105 cursor-pointer transition-all ease-in-out'>
            <div className='bg-primary p-4   rounded-full'>
              {service.icon}
            </div>      
            <h2 className='font-semibold text-lg text-primary'>{service.title}</h2>
            <p className='text-gray-500 text-sm'>{service.descrpition}</p>
          </div>
        ))}
        
      </div>

    </section>
  )
}

export default Services