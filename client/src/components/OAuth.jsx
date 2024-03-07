import React from 'react'
import { RiGoogleFill } from 'react-icons/ri'
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"
import { app } from '@/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { signInSuccess } from '@/redux/user/userSlice'
import { MdError } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'



const OAuth = () => {

    const navigate= useNavigate();
    const dispatch= useDispatch()
    const {loading,error}=useSelector((state)=>state.user)
    const handelGoogleClick= async()=>{
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            
            const result = await signInWithPopup(auth,provider)
            const res= await fetch('api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name:result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL
                })
            })
            const data=await res.json()
            dispatch(signInSuccess(data))
            navigate('/')
        } catch (error) {
            toast({
                icon: <MdError size={30} />,
                className:"bg-red-600 text-white font-semibold font-poppins",
                description:'error logging' ,
              })
            
        }
    }
  return (
    <div className='flex flex-col justify-center items-center '>   
          
          <div className='font-semibold w-full  relative'>      
            <div className='bg-primary h-0.5 w-full absolute bottom-1/2 top-1/2 -z-10' />
            <p className='bg-white w-fit mx-auto p-1 rounded-full text-primary '>or</p>
          </div>

          <button
              onClick={handelGoogleClick}
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {loading ? 
                <svg className="mr-3 h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> : <div className='flex justify-center items-center gap-3'><RiGoogleFill size={20} color='white'  />  Continue with Google </div>  }  
            </button>
          
        </div>
  )
}

export default OAuth