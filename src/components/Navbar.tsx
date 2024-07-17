
import mylogo from "../assets/logo.png";
import { TbWorld } from "react-icons/tb";
import { FaUserCircle,FaSearch  } from "react-icons/fa";
import Down from "./Down";







function Navbar() {
  return (
    <div className="border-0 sticky">
    <div className=" flex items-center justify-between sm:mx-6 md:mx-10 lg:mx-12 ">
      {/* left */}
      <div className="">
        <img src={mylogo} alt="" />
      </div>
      {/* middle */}
      <div className="hidden sm:flex relative justify-center items-center shadow-md shadow-gray-400 border  rounded-full outline-0">
        <input
          type="search"
          placeholder=""
          className="py-2.5 w-[20rem]  rounded-full "
        />
        <div className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-700">
          <button className="w-full">anywhere</button>
          <button className="border-l border-x px-6">anyhow</button>
          <button className="w-full text-gray-600/60 pl-2">place</button>
        </div>
        <div className="bg-red-400 text-white pr-1 rounded-s-full ">
        <FaSearch />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center pr-4 font-semibold text-gray-600">
        <p className="hidden sm:block">Airbnb your home</p>
        <TbWorld  className="mx-4"/>
        <div className="flex items-center  border px-4 py-2 rounded-full gap-3">
          <div >
          
          <Down/>
          
         
        
          </div>
          
          
          
          <FaUserCircle className="text-[19px]" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
