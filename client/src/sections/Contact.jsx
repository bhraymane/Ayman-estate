import { AboutPic, ContactImg } from '@/assets/images'
import { contactInf } from '@/constants'
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='max-w-screen-2xl mx-auto font-poppins  m-5 p-3 md:px-16 pt-28'>
      <div className='grid grid-cols-5 justify-between gap-6'>

        <div className='flex-1 flex flex-col gap-11 max-lg:col-span-5 col-span-3 '>
          <div>
            <h3 className='text-lg'>Contact Us</h3>
            <h3 className='text-3xl font-semibold tracking-wide mt-2 leading-normal'>Easy to  <span className='text-primary'>contact Us</span></h3>
          </div>

          <p className=' text-gray-500 max-w-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          <div className='grid grid-cols-2 gap-4 max-w-2xl' >
            {contactInf.map((item,index)=>(
              <div className={item.full=="" ? 'flex col-span-2 border-2 items-center rounded-xl p-5 gap-3' : "max-sm:col-span-2 items-center flex border-2 rounded-xl p-5 gap-3 " }>
                <div className='bg-gray-100 p-3 rounded-xl'>
                  {item.icon}
                </div>
    
                <div className='overflow-hidden'>
                  <h3 className='font-bold'>{item.title}</h3>
                  <p className='text-gray-400 text-sm '>{item.subtitle} </p>
                </div>
              </div>
            ))}
          </div>
          

        </div>
        <div className='col-span-2 max-lg:hidden'>
            <img src={ContactImg} alt="image" className='w-[500px] object-cover' />
        </div>
      </div>
    </section>
  )
}

export default Contact