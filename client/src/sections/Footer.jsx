import { FooterLink } from '@/constants'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <section id='reviews' className=' bg-blue-100 font-poppins'>
      <div className='max-w-screen-2xl mx-auto  m-5 p-3 md:px-16 pt-28 ' >
        <div className='flex justify-between max-lg:flex-col gap-5'>

        
        <div>
           <div className='flex gap-3 items-center'>
                <img src="/LOGO.svg" alt="logo" className='w-[40px]' />   
                <h2 className=' font-semibold text-xl tracking-wide  text-primary'>Aymane Estate</h2>           
            </div> 
            <p className='max-w-xs max-lg:max-w-full text-justify  tracking-wide text-gray-600 mt-5'>
            It is a long established fact that a reader will be distracted by the readable content of a page 
            </p>
        </div>
        

        <div className='grid grid-cols-4 gap-8 max-sm:grid-cols-2'>
            {FooterLink.map((item,index)=>(
                <div>
                    <h3 className='text-xl mb-2 font-semibold text-primary'>{item.title}</h3>
                    
                        {item.list.map((link,index)=>(
                        <p className='text-gray-400 mt-1 cursor-pointer hover:text-primary'>{link}</p>
                        ))} 
                   
                   
                </div>
            ))}
        
        
        </div>

        </div>

        <div className='flex py-10 gap-4 justify-end '>
            <FaFacebook size={25} className='text-primary cursor-pointer' />
            <FaInstagram size={25} className='text-primary cursor-pointer' />
            <FaYoutube size={25} className='text-primary cursor-pointer' />
            <FaLinkedin size={25} className='text-primary cursor-pointer' />
        </div>



      </div>


      <div className='bg-primary flex justify-center items-center text-center'>
        <p className='text-white p-4'>© 2024 Aymane Bachar | All Rights Reserved</p>

      </div>

      

    </section>
  )
}

export default Footer