import React, { useState } from 'react'
import { navLinks } from '../constants'
import { TbH1, TbMenuDeep } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggle,setToggle]=useState(true)
  return (
    <header className='flex justify-between items-center max-w-screen-2xl mx-auto font-poppins m-3 p-3 md:px-16 sticky top-3 z-50'>
      <Link to='/'>
        <img src="/LOGO.svg" alt="logo"  className=' w-12' />
      </Link>
      

      <div className='flex justify-between items-center gap-16 text-lg text-gray-400 max-lg:hidden'>
        <ul className='flex gap-6 items-center '>
        {navLinks.map((link,index)=>(
          <li  key={index} className='hover:text-gray-800'>
            <a href={link.href} > {link.label} </a>
          </li>
        ))}
        </ul>

        <Link to='/sign-in'>
          <button className='bg-primary rounded-lg text-white px-10 py-2'>
            Sign In
          </button>
        </Link>

        
          
        
      </div>

      <div className='hidden max-lg:block ' onClick={()=>setToggle(!toggle)}>
          {toggle ? <TbMenuDeep size={35} color='#3F86FA' /> : <CgClose size={35} color='#3F86FA' /> }
          <div className={toggle ? "hidden" : 'relative '}>
            <div className=' absolute right-0 p-2 rounded-lg mt-3 backdrop-blur-sm bg-white/80 shadow-xl  '>
              <ul className='flex flex-col justify-center items-center gap-3 w-[150px]'>
                {navLinks.map((link)=>(
                  <li key={link.label}>
                    <a href={link.href} className='font-montserrat leading-normal text-md text-primary ' > {link.label} </a>
                  </li>
                            ))}
              </ul>
              <Link to='/sign-in'>
                <button className='bg-primary rounded-lg text-white w-full  py-2 mt-2'>
                  Sign In
                </button>
              </Link>

              

            </div>

          </div>



      </div>
      


    </header>
  )
}

export default Header