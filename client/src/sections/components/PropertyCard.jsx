import { IoLogoUsd } from "react-icons/io";

const PropertyCard = ({img,price,title,desc}) => {
  return (
    <div className=' rounded-xl  '>
        <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="image" className=" object-cover rounded-xl   " />

        <div className="flex gap-2 mt-2 items-center text-primary font-bold" >
            <IoLogoUsd className="" />
            <p className="max-sm:text-sm ">60,000</p>
        </div>

        <h2 className="font-bold text-lg mt-2 max-sm:text-sm">Aliva test place</h2>
        <p className="text-sm max-w-sm text-slate-400 max-sm:text-xs">It is a long established fact that a reader will be distracted by the</p>

    </div>
  )
}

export default PropertyCard