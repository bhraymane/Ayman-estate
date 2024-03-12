import { AboutPic, HeroBg } from '@/assets/images'
import React from 'react'

const AboutUs = () => {
  return (
    <section id='about-us' className='max-w-screen-2xl mx-auto font-poppins  m-5 p-3 md:px-16 pt-28'>
      <div className='grid grid-cols-4 justify-between gap-6'>

        <div className='col-span-2 max-lg:hidden'>
            <img src={AboutPic} alt="image" className='w-[500px]' />
        </div>

        <div className=' col-span-2 flex flex-col gap-11 max-lg:col-span-4'>
          <div>
            <h3 className='text-lg'>About Us</h3>
            <h3 className='text-3xl font-semibold tracking-wide mt-2 leading-normal'>We Provide <span className='text-primary'>The Best <br /> Property</span>  For you.</h3>
          </div>

          <p className='leading-10 text-gray-500'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br /> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of  letters, as opposed to using 'Content here, content here',The point of using Lorem Ipsum is that it has a more-or-less normal distribution of  letters. </p>
          <div >
            <button className='bg-primary rounded-lg text-white  px-10  py-3 mt-2'>
              Learn more
            </button>
          </div>
          

        </div>
      </div>
    </section>
  )
}

export default AboutUs