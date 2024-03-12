import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
 
import { CgAdd, CgList, CgProfile } from "react-icons/cg";
import {  useState } from "react";
import { toast } from "@/components/ui/use-toast";

import { PiSignOutBold } from "react-icons/pi";
import { MdDelete, MdError } from "react-icons/md";

import { Start,Failure, Success,deleteUserSuccess } from '@/redux/user/userSlice';
import Informations from "./components/Informations";
import PropretyLists from "./components/PropretyLists";
import PropretyAdd from "./components/PropretyAdd";
import { useDispatch, useSelector } from "react-redux";

const ProfileTow = () => {
  
  const {currentUser,loading, error} = useSelector(state=> state.user)
  const [active, setActive]=useState('Informations')
  const dispatch= useDispatch()






  const handelDeleteUser= async ()=>{
    try {
      dispatch(Start())
      const res= await fetch(`/api/user/delete/${currentUser._id}`,
        {
          method:"DELETE",
        }
      );

      const data = await res.json();
      if(data.success === false){
        dispatch(Failure(data.message))
        toast({
          icon: <MdError size={30} />,
          className:"bg-red-600 text-white font-semibold font-poppins",
          description:data.message ,
        })
        return
      }
      dispatch(deleteUserSuccess(data))
    } catch (error) {
      dispatch(Failure(error.message))
      toast({
        icon: <MdError size={30} />,
        className:"bg-red-600 text-white font-semibold font-poppins",
        description:error.message ,
      })
    }
  }



  const handelSignOut= async()=>{
    try {
      const res= await fetch("/api/auth/signout")
      const data =await res.json()
      if (data.success === false){
        dispatch(Failure(data.message))
        toast({
          icon: <MdError size={30} />,
          className:"bg-red-600 text-white font-semibold font-poppins",
          description:data.message ,
        })
        return
      }
      dispatch(deleteUserSuccess(data))
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
    <div className="font-poppins">
        <section className="relative block h-[450px]  " >
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

        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-3 relative container mx-auto -mt-80 mb-20">
            <div className="bg-white shadow-xl rounded-xl gap-60 col-span-1 p-6 flex flex-col  justify-between max-lg:gap-6 ">
                <div className="max-lg:flex items-center justify-between ">        
                <h1 className="font-bold text-2xl max-lg:hidden ">Settings</h1>

                <div onClick={()=>setActive("Informations")} className={`${active=="Informations" && "text-primary"} flex gap-3 items-center cursor-pointer text-lg mt-3 pt-6 max-lg:pt-0 max-lg:mt-0`}>
                    <CgProfile className="max-lg:w-7 h-7"  />
                    <p className="max-lg:hidden" >Account informations</p>

                </div>

                <div onClick={()=>setActive("PropretyLists")} className={`${active=="PropretyLists" && "text-primary"} flex gap-3 items-center text-lg pt-6 max-lg:pt-0  cursor-pointer`} >
                    <CgList className="max-lg:w-7 h-7"  />
                    <p className="max-lg:hidden"  >Properties Lists</p>

                </div>

                
                <button onClick={()=>setActive("PropretyAdd")} className={`${active=="PropretyAdd" && "text-primary"} flex gap-3 items-center text-lg pt-6 max-lg:pt-0 cursor-pointer`}>
                    <CgAdd size={22} className="max-lg:w-7 h-7" />
                    <p className="max-lg:hidden">Add Property Listing</p>

                </button>

                </div>

                <div className=" pt-4 border-t border-gray-300">
                  <div className="flex justify-between items-center ">
      
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                            <button
                                disabled={loading}
                                className="flex  justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold  text-white shadow-sm "
                              >
                                {loading ? 
                                <svg className="mr-3 h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg> : <MdDelete size={15} />}
                            </button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="font-poppins">
                              <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. This will permanently delete your
                                  account and remove your data from our servers.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handelDeleteUser} >Delete</AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
     
                            <button
                                onClick={handelSignOut}
                                disabled={loading}
                                className="flex  justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold  text-white shadow-sm  "
                              >
                                {loading ? 
                                <svg className="mr-3 h-6 w-6 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg> :  <PiSignOutBold size={15} />}
                            </button>
                                   
                  
                </div>
              </div>
            </div>

            {active === "Informations" && <Informations />}
            {active === "PropretyLists" && <PropretyLists />}
            {active === "PropretyAdd" && <PropretyAdd />}
        </section>

    </div>
  )
}

export default ProfileTow