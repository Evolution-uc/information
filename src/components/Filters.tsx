import React from "react";
import { MdOutlineViewSidebar } from "react-icons/md";
import {
  GiWoodCabin,
  GiFamilyHouse,
  GiSkis,
  GiGrandPiano,
  GiMushroomGills,
  GiSmallFishingSailboat,
  GiTreehouse,
} from "react-icons/gi";
import { TbBeach } from "react-icons/tb";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { PiGreaterThanLight } from "react-icons/pi";

function Filters() {
  
  return (
    <div className="sm:mx-6 md:mx-10 lg:mx-12 pt-3">
      <div className="flex gap-5">
        <div>
          <MdOutlineViewSidebar className="w-full items-center" />
          <h5>sidebar</h5>
        </div>
        <div>
          <GiWoodCabin className="w-full" />
          <h6>cabin</h6>
        </div>
        <div>
          <GiFamilyHouse className="w-full" />
          <h6>House</h6>
        </div>
        <div>
          <GiSkis className="w-full" />
          <p>skis</p>
        </div>
        <div>
          <GiGrandPiano className="w-full" />
          <p>piano</p>
        </div>
        <div>
          <GiSmallFishingSailboat className="w-full" />
          <p>boat</p>
        </div>
        <div>
          <GiTreehouse className="w-full" />
          <p>treehouse</p>
        </div>
        <div>
          <TbBeach className="w-full" />
          <p>Beach</p>
        </div>
        <div>
          <LiaSwimmingPoolSolid className="w-full" />
          <p>poolsolid</p>
        </div>
        <div>
          <GiWoodCabin className="w-full" />
          <h6>cabin</h6>
        </div>
        <div>
          <GiSkis className="w-full" />
          <p>skis</p>
        </div>
        <div>
          <GiSmallFishingSailboat className="w-full" />
          <p>boat</p>
        </div>
        <div>
          <GiTreehouse className="w-full" />
          <p>treehouse</p>
        </div>
        <div>
          <GiWoodCabin className="w-full" />
          <h6>cabin</h6>
        </div>
        <div>
          <GiFamilyHouse className="w-full" />
          <h6>House</h6>
        </div>
        <div>
          <GiSkis />
          <p>skis</p>
        </div>
        <div>
          <MdOutlineViewSidebar className="w-full" />
          <h5>sidebar</h5>
        </div>
        <div>
          <PiGreaterThanLight className=" pt- border rounded-full h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

export default Filters;
