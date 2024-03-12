import { reviewsList } from '@/constants'
import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  
  return (
    <section id='reviews' className=' bg-blue-100'>
      <div className='max-w-screen-2xl mx-auto font-poppins  m-5 p-3 md:px-16 pt-28' >
    
        <div className=''>
          <h2 className='text-lg'>Testimonial</h2>    
          <h2 className='text-3xl font-semibold tracking-wide mt-2'>Wha <span className='text-primary'>Our Customers</span> Have To Saying.</h2>        
          
        </div>

        <div className='grid grid-cols-3 max-sm:grid-cols-1 justify-between items-center   gap-8 mt-16 mb-16'>
        {reviewsList.map((review,index)=>(        
          <div className='flex flex-col   bg-white  rounded-lg gap-6 p-8 py-10 relative   '>
            <FaQuoteLeft size={30} className='text-primary absolute -top-3 ' />
            <p className='text-justify text-gray-400 max-lg:text-sm'>" {review.descrpition} "</p>
            <div className='flex gap-3 items-center '>
              <img src={review.img} alt="profile" className='w-[50px] h-[50px] object-cover rounded-xl ' />
              
              <div>
                <h3 className='font-semibold max-lg:text-xs'>{review.name} </h3>
                <p className='text-sm text-gray-500 max-lg:text-xs'>{review.title}</p>
              </div>
            </div>
          </div>
        ))}
        
      </div>



      </div>

      
      

    </section>
  )
}

export default Reviews