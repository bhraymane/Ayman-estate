

import React, { useRef, useState } from 'react'
import { CgAdd } from 'react-icons/cg'
import { MdOutlineFileUpload } from 'react-icons/md'

const PropretyAdd = () => {
  
  const [formData,setFormData]=useState({})
  const [typeValue,setypeValue]=useState("sell")
  const fileRef = useRef(null)


  const handelChange =(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
  }


  console.log(formData)

  return (
    <div className="bg-white shadow-xl rounded-xl  col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 p-6 flex flex-col">
        <div  className={` flex gap-3 items-center text-xl font-semibold `}>
            <CgAdd size={22} />
            <p>Add Property Listing</p>
        </div>   

        <form action="" className='flex flex-col gap-3 mt-3'>
          <div onClick={()=>fileRef.current.click()} className='w-48 h-28 bg-gray-200 rounded-xl flex justify-center items-center text-gray-300 hover:bg-gray-300 hover:text-gray-500 cursor-pointer transition-all ease-in-out'>
            <MdOutlineFileUpload size={30} className='' />
            <input type="file" hidden  ref={fileRef} accept="image/*" />

          </div>

          <div>
            <h4 className='font-semibold'>Property Information</h4>
            <div className='border mt-2 grid grid-cols-4 gap-4 py-2 px-4 rounded-xl'>
              <div className="grid grid-cols-2 gap-2 col-span-2 ">
                <div className='w-full'>
                  <label htmlFor="name" className='text-sm'>Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="name"
                      onChange={handelChange}
                      
                      className="block w-full mt-1 focus:outline-none rounded-md  py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                                                    
                  <div className="w-full ">
                    <label htmlFor="City" className='text-sm'>City</label>

                    <select name="city" id="city" onChange={handelChange} className=" block w-full mt-1 focus:outline-none rounded-md py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300    sm:text-sm sm:leading-6 ">
                      <option selected disabled>Choose a City</option>
                      <option value="casa">casa</option>
                      <option value="rabat">rabat</option>
                      <option value="marrakech">marrakech</option>
                      <option value="safi">safi</option>
                    </select>                      
                                          
                  </div>

                  <div className="w-full">
                    <label htmlFor="address" className='text-sm'>Address</label>
                      <input
                        id="address"
                        name="address"
                        type="text"                  
                        placeholder="address"
                        onChange={handelChange}             
                        className="block w-full mt-1 focus:outline-none rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>

                  <div className="w-full">
                    <label htmlFor="regularPrice" className='text-sm'>regularPrice</label>
                      <input
                        id="regularPrice"
                        name="regularPrice"
                        type="number"                 
                        placeholder="DH / month"  
                        
                        onChange={handelChange}            
                        className="block w-full mt-1 focus:outline-none rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>
              </div>


              <div className="w-full col-span-2 ">
                    <label htmlFor="description" className='text-sm'>Description</label>
                      <textarea name="description" id="description" 
                        cols="10" 
                        rows="4"
                        className="w-full mt-1 resize-none  focus:outline-none rounded-md py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" 
                        onChange={handelChange}
                        
                        />

              </div>







            </div>

          </div>


          <div>
            <h4 className='font-semibold'>Additional Information</h4>
            <div className='border mt-2 grid grid-cols-4 gap-4 py-2 px-4 rounded-xl'>
              <div className="grid grid-cols-2 gap-2 col-span-2 ">

              <div className="w-full col-span-2">
                    <label htmlFor="space" className='text-sm'>Living Space </label>
                      <input
                        id="space"
                        name="space"
                        type="number"                 
                        placeholder="m²"
                        onChange={handelChange}  
                        min={0}           
                        className="block w-full mt-1 focus:outline-none rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>

                <div className='w-full'>
                  <label htmlFor="bedrooms" className='text-sm'>Bedrooms</label>
                    <input
                      id="bedrooms"
                      name="bedrooms"
                      type="number"
                      min={0}
                      placeholder="0"
                      onChange={handelChange}
                      className="block w-full mt-1 focus:outline-none rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                                                    
                  <div className="w-full">
                    <label htmlFor="bathrooms" className='text-sm'>Bathrooms</label>
                      <input
                        id="bathrooms"
                        name="bathrooms"
                        type="number"    
                        min={0}             
                        placeholder="0"
                        onChange={handelChange}             
                        className="block w-full mt-1 focus:outline-none rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
                  </div>

                 

                 
              </div>


              <div className="w-full col-span-2 ">
                    <label htmlFor="Description" className='text-sm'>Type</label>
                      <div  className='flex gap-3 mt-2 mb-4'>
                        <button onFocus={handelChange}  type='button' value="sell"  id='type'   className='border-2 border-gray-200 py-1 px-6 text-gray-400 font-bold text-xs rounded-sm cursor-pointer hover:bg-blue-50 focus:border-primary focus:text-primary '>
                          Sell
                        </button>
                        <button onFocus={handelChange} type='button' value="rent" id='type'  className='border-2 border-gray-200 text-gray-400 py-1 px-6 font-bold text-xs rounded-sm cursor-pointer hover:bg-blue-50 focus:border-primary focus:text-primary'>
                          Rent
                        </button>

                      </div>

                      <label htmlFor="Description" className='text-sm'>More</label>
                      <div className='flex gap-3 mt-2 flex-wrap'>
                        <button onFocus={handelChange}  type='button' value="true"  id='parking' className='border-2 border-gray-200 py-1 px-6 text-gray-400 font-bold text-xs rounded-sm cursor-pointer hover:bg-blue-50'>
                          Parking spot 
                        </button>
                        <button onFocus={handelChange} type='button' value="true"  id='furnished' className='border-2 border-gray-200 text-gray-400 py-1 px-6 font-bold text-xs rounded-sm cursor-pointer hover:bg-blue-50'>
                          Furnished
                        </button>
                        <button onFocus={handelChange}  type='button' value="true"  id='offer' className='border-2 border-gray-200 text-gray-400 py-1 px-6 font-bold text-xs rounded-sm cursor-pointer hover:bg-blue-50'>
                          offer
                        </button>


                        
                      </div>


              </div>







            </div>

          </div>

        </form>

    </div>
  )
}

export default PropretyAdd