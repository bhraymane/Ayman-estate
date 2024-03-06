import { useState } from 'react'
import { HeroBg1 } from '../assets/images'
import { Link, useNavigate } from 'react-router-dom'
import { useToast } from '@/components/ui/use-toast'
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'
import { signInStart,signInSuccess,signInFailure } from '@/redux/user/userSlice';

const SignIn = () => {

  const [formData,setFormData]=useState({})
  const {loading,error}=useSelector((state)=>state.user)
  const { toast } = useToast()
  const navigate= useNavigate();
  const dispatch = useDispatch()


  const handelChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })   
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data.message);
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        toast({
          icon: <MdError size={30} />,
          className:"bg-red-600 text-white font-semibold font-poppins",
          description:data.message ,
        })

        return;
      }
      dispatch(signInSuccess(data))
      navigate('/')
      
    } catch (error) {
      dispatch(signInFailure(error.message))
      toast({
        icon: <MdError size={30} />,
        className:"bg-red-600 text-white font-semibold font-poppins",
        description:error.message ,
      })
      
    }
  };



  return (
    <div className='flex justify-center items-center font-poppins mt-8 mx-4'>
    <div className=' rounded-xl flex justify-between items-center p-3 shadow-xl  max-lg:w-[80%] max-sm:w-auto '>
      <div className="flex min-h-full flex-col justify-center  px-2  lg:px-8 max-lg:w-full ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm relative ">
        <img
          className="mx-auto h-10 w-auto"
          src="LOGO.svg"
          alt="Logo image"
        />
        
        <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-wider  text-primary ">
          Sign in
        </h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-4"  >

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={handelChange}
                className="block w-full focus:outline-none  rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-primary hover:text-[#90adff]">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={handelChange}
                className="block focus:outline-none w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {loading ? 
                <svg className="mr-3 h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg> :  'Sign in'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Dont Have an account?{' '}
          <Link to={"/sign-up"}>
            <span className="font-semibold leading-6 text-primary hover:text-[#90adff]">
              Sign Up
            </span>
          </Link>
          
        </p>
      </div>
    </div>

      

      <img src={HeroBg1} alt="img" className=' h-[480px]  rounded-xl max-lg:hidden ' />
      
      
    </div>

  </div>
  )
}

export default SignIn