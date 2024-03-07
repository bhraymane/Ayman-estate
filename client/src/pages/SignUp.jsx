import { useState } from 'react'
import { HeroBg1,MobileBg } from '../assets/images'
import { Link } from 'react-router-dom'
import { useToast } from "@/components/ui/use-toast"
import { MdError } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { RiGoogleFill } from 'react-icons/ri';
import OAuth from '@/components/OAuth';



const SignUp = () => {

  const [formData,setFormData]=useState({})
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(false)
  const { toast } = useToast()
  const navigate= useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

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
    <div className='flex justify-center items-center font-poppins mt-28 mx-4 '>
      <div className=' rounded-xl flex justify-between items-center p-3 shadow-xl max-lg:w-[80%] max-sm:w-auto  '>
        <div className="flex flex-col justify-center  px-2  lg:px-8 max-lg:w-full ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm relative ">
          <img
            className="mx-auto h-10 w-auto"
            src="LOGO.svg"
            alt="Logo image"
          />
          
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-wider  text-primary ">
            Sign up
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-2"  >
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
              </div>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={isPasswordVisible ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  onChange={handelChange}
                  className="block focus:outline-none w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
                <button
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                onClick={togglePasswordVisibility}
                type='button'
              >
                {isPasswordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
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

          <OAuth  />

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

        <img src={HeroBg1} alt="img" className=' h-[480px]   rounded-xl max-lg:hidden ' />
        
        
      </div>

    </div>
  )
}

export default SignUp