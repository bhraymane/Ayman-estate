import { useState } from 'react'
import { HeroBg1,MobileBg } from '../assets/images'
import { Link } from 'react-router-dom'
import { useToast } from "@/components/ui/use-toast"
import { MdError } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { BsFillBookmarkCheckFill } from "react-icons/bs";



const SignUp = () => {

  const [formData,setFormData]=useState({})
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(false)
  const { toast } = useToast()
  const navigate= useNavigate();

  const handelChange=(e)=>{
      setFormData({
        ...formData,
        [e.target.id]:e.target.value
      })   
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        toast({
          icon: <MdError size={30} />,
          className:"bg-red-600 text-white font-semibold font-poppins",
          description:data.message
        })
        
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in')
      toast({
        icon: <BsFillBookmarkCheckFill size={30} />,
        className:"bg-green-600 text-white font-semibold font-poppins",
        description:"Sign up Successfully" ,
      })
      
    } catch (error) {
      setLoading(false);
      setError(error.message);
      toast({
        icon: <MdError size={30} />,
        className:"bg-red-600 text-white font-semibold font-poppins",
        description:error.message ,
      })
      
    }
  };

  return ( 
    <div className='flex justify-center items-center font-poppins mt-8 mx-4 '>
      <div className=' rounded-xl flex justify-between items-center p-3 shadow-xl max-lg:w-[80%] max-sm:w-auto  '>
        <div className="flex min-h-full flex-col justify-center  px-2  lg:px-8 max-lg:w-full ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm relative ">
          <img
            className="mx-auto h-10 w-auto"
            src="LOGO.svg"
            alt="Logo image"
          />
          
          <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-wider  text-primary ">
            Sign up
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-4"  >
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                UserName
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  onChange={handelChange}
                  className="block w-full focus:outline-none rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

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
                    show password
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
                </svg> :  'Sign up'}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
            <Link to={"/sign-in"}>
              <span className="font-semibold leading-6 text-primary hover:text-[#90adff]">
                Sign In
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

export default SignUp