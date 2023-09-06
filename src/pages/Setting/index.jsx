import React, { useEffect } from "react";
import { Outlet, Navigate, useNavigate, NavLink } from "react-router-dom";
import "./style.scss";
const index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/settings/my-account");
  }, []);

  return (
    <div>
      
      <header className="bg-[#E5E5E5]">
        <div className="container mx-auto">
        
          <ul className="flex">
            <li className="w-1/4 mx-1">
              <NavLink className="p-5 m-[5px] mt-[5px] block w-full  bg-[#F3F6F9]" to="/settings/my-account">Profil</NavLink>
            </li>
            <li className="w-1/4 mx-1">
              <NavLink className="p-5 m-[5px] mt-[5px] block w-full  bg-[#F3F6F9]" to="/settings/security">Xafsizlik</NavLink>
            </li>
            <li className="w-1/4 mx-1">
              <NavLink className="p-5 m-[5px] mt-[5px] block w-full  bg-[#F3F6F9]" to="/settings/setting">So'zlamalar</NavLink>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default index;
