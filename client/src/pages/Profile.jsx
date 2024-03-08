import { useEffect, useRef, useState } from "react";
import {  useSelector } from "react-redux";
import {  FaUser } from "react-icons/fa";
import OAuth from "@/components/OAuth";
import { Link } from "react-router-dom";
import { PiSignOutBold } from "react-icons/pi";
import { MdDelete, MdError } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import {getDownloadURL, getStorage,ref, uploadBytesResumable} from "firebase/storage";
import { app } from "@/firebase";
import { useToast } from "@/components/ui/use-toast";

const Profile = () => {
  const {currentUser,loading} = useSelector(state=> state.user)
  const fileRef = useRef(null)
  const [file,setFile]= useState(undefined)
  const [filePrec,setFilePrec]=useState(0)
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData,setFormData]=useState({})
  const { toast } = useToast()
  
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  useEffect(()=>{
      if(file){
        handelFileUpload(file);
      }
  },[file])

  const handelFileUpload=(file)=>{
    const storage = getStorage(app);  
    const fileName= new Date().getTime() + file.name
    const storageRef= ref(storage, fileName) 
    const uploadTask = uploadBytesResumable(storageRef,file)
    

    uploadTask.on('state_changed',(snapshot)=>{
      const progress= (snapshot.bytesTransferred /snapshot.totalBytes) * 100
      setFilePrec(Math.round(progress))
    },(error) => {
      setFileUploadError(true)
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then(
        (downloadURL)=>setFormData({...formData, avatar : downloadURL})
      )
    }
    )
    
  }



  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  

  return (
    <div className="font-poppins">
      <section className="relative block h-[500px] max-sm:h-[400px] " >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover brightness-50 "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
          }}
        >
          
        </div>
        <div className="top-auto -bottom-1 left-0 right-0 w-full absolute ">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current "
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>

      <section className="relative py-8 bg-white">
        <div className="container mx-auto lg:px-16 sm:max-w-2xl ">
          <div className=" bg-white shadow-xl rounded-lg -mt-80">
              <div className="flex justify-center flex-col items-center relative ">       
                  <div className="" >
                    <img  alt="Profile" onClick={()=>fileRef.current.click()} src={formData.avatar || currentUser.avatar} className="shadow-lg rounded-full h-[100px] -mt-10 w-[100px] object-cover cursor-pointer hover:brightness-50 "/>          
                  </div>   
                  
                  <div className="absolute -bottom-6">
                    {fileUploadError ? ( <span className="font-semibold text-red-600 text-xs">  Image should be less then 2 mb </span> ) 
                    : filePrec > 0 && filePrec < 100 ? (<span className="font-semibold text-slate-600 text-xs"> {`Uploading ${filePrec}%`} </span>    )                   
                    : "" }  
                  </div>

                         
              </div>
              
              <div className="text-center mt-5">
                <h3 className="text-4xl font-semibold leading-normal text-gray-800 max-sm:text-3xl ">
                  {currentUser.Profilename}
                </h3>
                <div className="text-sm  mb-2 text-gray-400 font-semibold flex justify-center items-center gap-2">
                  <FaUser />
                  {currentUser.username}
                </div>
                
              

                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md px-6">
                  <form  className="space-y-4"  >
                       <input onChange={(e)=>setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept="image/*" />               
                      <div className="mt-1">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          autoComplete="username"
                          
                          placeholder="Username"
                          className="block w-full focus:outline-none rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        />
                      </div>
                    
                                  
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          
                          placeholder="email address"              
                          className="block w-full focus:outline-none  rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                      </div>
                                                         
                      <div className="mt-1 relative">
                        <input
                          id="password"
                          name="password"
                          type={isPasswordVisible ? "text" : "password"}
                          autoComplete="current-password"
                          placeholder="Password"
                          
                          
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
                    

                    <div>
                      <button
                        disabled={loading}
                        className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        {loading ? 
                        <svg className="mr-3 h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg> :  'Update'}
                      </button>
                    </div>

                    <div className="mt-3 py-5 border-t border-gray-300">
                <div className="flex justify-between items-center ">
                    <button
                        disabled={loading}
                        className="flex  justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        {loading ? 
                        <svg className="mr-3 h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg> :  <MdDelete size={20} />}
                    </button>

                    <button
                        disabled={loading}
                        className="flex  justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        {loading ? 
                        <svg className="mr-3 h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg> :  <PiSignOutBold size={20} />}
                    </button>


                    
                  
                </div>
              </div>

              </form>

                </div>

              </div>

              

            
          </div>
        </div>
      </section>
    </div>
    

  )
}

export default Profile