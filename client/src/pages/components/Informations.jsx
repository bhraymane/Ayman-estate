import { Image } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaUser } from 'react-icons/fa'
import {  useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {getDownloadURL, getStorage,ref, uploadBytesResumable} from "firebase/storage";
import { app } from "@/firebase";
import { Start,Failure, Success,deleteUserSuccess } from '@/redux/user/userSlice';
import { toast } from "@/components/ui/use-toast";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import {  MdError } from "react-icons/md";

const Informations = () => {

    const fileRef = useRef(null)
    const {currentUser,loading, error} = useSelector(state=> state.user)
    const [file,setFile]= useState(undefined)
    const [filePrec,setFilePrec]=useState(0)
    const [fileUploadError, setFileUploadError] = useState(false);
    const [formData,setFormData]=useState({})
    const dispatch= useDispatch()
    const navigate =useNavigate()


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
  
    const handelChange =(e)=>{
      setFormData({
        ...formData,
        [e.target.id]:e.target.value
      })
    }
  
    const handelSubmit= async (e)=>{
      e.preventDefault()
      try {
        dispatch(Start())
        const res= await fetch(`/api/user/update/${currentUser._id}`,{
          method:"POST",
          headers:{
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
        const data = await res.json()
        if(data.success === false){
          dispatch(Failure(data.message))
          toast({
            icon: <MdError size={30} />,
            className:"bg-red-600 text-white font-semibold font-poppins",
            description:data.message ,
          })
          return
        }
        dispatch(Success(data))
        toast({
          icon: <BsFillBookmarkCheckFill size={30} />,
          className:"bg-green-600 text-white font-semibold font-poppins",
          description:"Update Successfully" ,
        })
      } catch (error) {
          dispatch(Failure(error.message))
          toast({
            icon: <MdError size={30} />,
            className:"bg-red-600 text-white font-semibold font-poppins",
            description:error.message ,
          })
        
      }
    }
  
    
  

  return (
    <div className="bg-white shadow-xl rounded-xl  col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 p-6 flex flex-col">
        <div  className={` flex gap-3 items-center text-xl font-semibold max-[377px]:text-[16px]  `}>
            <CgProfile />
            <p>Account informations</p>
        </div>

        <div className="flex mt-5 gap-5 max-[377px]:flex-col  max-[377px]:items-center">       
            <div className="" >
                <img  alt="Profile"  src={  formData.avatar || currentUser.avatar  } className="shadow-lg rounded-full h-[120px] w-[100px] object-cover  "/>          
            </div>  

            <div className='flex flex-col items-start'>
                <h3 className="text-2xl font-semibold leading-normal text-gray-800 max-[450px]:text-lg  ">
                  {currentUser.Profilename}
                </h3>
                <div className="text-sm text-gray-400 font-semibold flex justify-center items-center gap-2 max-[450px]:text-xs">
                  <FaUser />
                  {currentUser.username}
                </div>    

                <button onClick={()=>fileRef.current.click()} className='flex items-center border-2 gap-2 border-primary rounded-lg text-primary font-semibold mt-4 px-9 py-2 text-sm hover:bg-primary hover:text-white'>
                    <Image size={20} />
                    Change
                </button> 

                <div >
                    {fileUploadError ? ( <span className="font-semibold text-red-600 text-xs">  Image should be {"<"} 2mb </span> ) 
                    : filePrec > 0 && filePrec < 100 ? (<span className="font-semibold text-slate-600 text-xs"> {`Uploading ${filePrec}%`} </span>    )                   
                    : "" }  
                </div>   
            </div> 

            
                  
                  

                         
        </div>


        <div className="mt-6 h-full ">
            <form onSubmit={handelSubmit}  className="space-y-4 flex flex-col justify-between h-full"  >
                <input onChange={(e)=>setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept="image/*" />               
                    <div>
         
                        <div className="flex gap-6 max-sm:flex-col max-sm:gap-3">
                            <div className='w-full'>
                                <label htmlFor="">Username</label>
                                <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                onChange={handelChange}
                                defaultValue={currentUser.username}
                                placeholder="Username"
                                className="block w-full mt-2 focus:outline-none rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        
                                    
                            <div className="w-full">
                                <label htmlFor="">Email</label>
                                <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                onChange={handelChange}
                                defaultValue={currentUser.email}
                                placeholder="email address"              
                                className="block w-full mt-2 focus:outline-none rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                                                         
                        <div className='mt-3' >
                        <label htmlFor="">Password</label>
                        <div className="relative">
                        <input
                          id="password"
                          name="password"
                          type={isPasswordVisible ? "text" : "password"}
                          autoComplete="current-password"
                          placeholder="Password"
                          onChange={handelChange}
                          
                          className="block mt-2 focus:outline-none w-full rounded-md border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
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
                    </div>
                    

                    <div>
                      <button
                        disabled={loading}
                        className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-primary hover:bg-white border-2 border-primary"
                      >
                        {loading ? 
                        <svg className="mr-3 h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg> :  'Update'}
                      </button>
                    </div>

              </form>

            </div>

    </div>
  )
}

export default Informations