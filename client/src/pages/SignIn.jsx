import { HeroBg1 } from '../assets/images'
import { Link } from 'react-router-dom'

const SignIn = () => {
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
        <form className="space-y-4" action="#" method="POST">

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
                className="block focus:outline-none w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#81b9ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Sign in
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