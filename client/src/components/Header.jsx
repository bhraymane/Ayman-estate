import React, { useState } from 'react'
import { navLinks } from '../constants'
import { TbH1, TbMenuDeep } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [toggle,setToggle]=useState(true)

  const {currentUser} = useSelector((state)=> state.user)

  return (
    <header className=' font-poppins fixed  z-50 top-0  w-full '>
      <div className='flex justify-between items-center max-w-screen-2xl mx-auto m-3 p-3 md:px-16'>

      
      <Link to='/'>
        <img src="/LOGO.svg" alt="logo"  className=' w-12' />
      </Link>
      

      <div className='flex justify-between items-center gap-16 text-lg text-gray-400 max-lg:hidden '>
        <ul className='flex gap-6 items-center '>
        {navLinks.map((link,index)=>(
          <li  key={index} className='hover:text-gray-800'>
            <a href={link.href} > {link.label} </a>
          </li>
        ))}
        </ul>

        <Link to={currentUser ? "/profile ": '/sign-in' }>
          {currentUser ? <img src={currentUser.avatar} alt='profile' className='rounded-full object-cover w-10 h-10  hover:grayscale  ' /> 
            : 
            <button className='bg-primary rounded-lg text-white w-full px-6 py-2 mt-2'>
              Sign In
            </button> }
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
              <Link to={currentUser ? "/profile ": '/sign-in' } >
                
                  {currentUser ? <img src={currentUser.avatar} alt='profile' className='rounded-full object-cover w-10  h-10 mx-auto' /> 
                  : 
                  <button className='bg-primary rounded-lg text-white w-full  py-2 mt-2'>
                    Sign In
                  </button> }
                
                
                
              </Link>

              

            </div>

          </div>



      </div>
      

    </div>
    </header>
  )
}

export default Header