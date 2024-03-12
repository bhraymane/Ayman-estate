import React from 'react'
import { CgList } from 'react-icons/cg'

const PropretyLists = () => {
  return (
    <div className="bg-white shadow-xl rounded-xl  col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 p-6 flex flex-col">
        <div  className={` flex gap-3 items-center text-xl font-semibold `}>
            <CgList />
            <p>Properties Lists</p>

        </div>  

    </div>
  )
}

export default PropretyLists