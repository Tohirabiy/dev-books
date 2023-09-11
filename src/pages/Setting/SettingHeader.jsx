import React from "react";
import "./style.scss";

import { NavLink } from "react-router-dom";
const SettingHeader = () => {
  return (
    <header className="font-sans bg-[#E5E5E5]">
      <div className="container">
        <ul className="flex">
          <li className="w-1/4 mx-1">
            <NavLink
              className="p-5 m-[5px] mt-[5px] flex items-center text-center gap-[23px]  w-full  bg-[#F3F6F9]"
              to="/settings/my-account"
            >
              <div className="w-[35px] active:text-white  h-[35px] flex-shrink-0 rounded-[4px] bg-[#E5EAEE] focus:bg-[#152540]   active:bg-[#152540]  flex items-center justify-center ">
                1
              </div>
              <h2>Profil</h2>
            </NavLink>
          </li>
          <li className="w-1/4 mx-1">
            <NavLink
              className="p-5 m-[5px] mt-[5px] flex items-center text-center gap-[23px]  w-full  bg-[#F3F6F9]"
              to="/settings/security"
            >
              <div className="w-[35px] h-[35px] flex-shrink-0 rounded-[4px] bg-[#E5EAEE] active:text-white focus:bg-[#152540]   active:bg-[#152540]  flex items-center justify-center ">
                2
              </div>
              <h2>Xafsizlik</h2>

              {/* Xafsizlik */}
            </NavLink>
          </li>
          <li className="w-1/4 mx-1">
            <NavLink
              className="p-5 m-[5px] mt-[5px] flex items-center text-center gap-[23px]  w-full  bg-[#F3F6F9]"
              to="/settings/setting"
            >
              <div className="w-[35px] h-[35px] flex-shrink-0 rounded-[4px] bg-[#E5EAEE] focus:bg-[#152540]  active:text-white  active:bg-[#152540]  flex items-center justify-center ">
                3
              </div>
              <h2>So'zlamalar</h2>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default SettingHeader;
