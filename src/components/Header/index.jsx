import "./style.scss";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
const index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") || false
  );
  const go = useNavigate();

  const logOut = () => {
    if (localStorage.getItem("token")) {
      toast.info("log out");
      localStorage.clear();
    } else {
      setIsLoggedIn(false);
    }
    go("/signin");
  };

  return (
    <header className="border-b-2">
      <ToastContainer />
      <div className="container">
        <nav className="flex justify-between items-center h-[80px]">
          <Link className="p-2" to="/">
            <span className=" text-[25px] text-[#C9AC8C] font-normal">
              BADiiYAT
            </span>
          </Link>
          <div className="flex items-center gap-x-[130px]">
            <ul className="flex gap-x-[43.5px] ">
              <li>
                <NavLink className="link font-sans" to="/">
                  Bosh sahifa
                </NavLink>
              </li>
              <li>
                <NavLink className="link font-sans" to="/nasr">
                  Nasr
                </NavLink>
              </li>
              <li>
                <NavLink className="link font-sans" to="/nazm">
                  Nazm
                </NavLink>
              </li>
              <li>
                <NavLink className="link font-sans" to="maqola">
                  Maqolalar
                </NavLink>
              </li>
              <li>
                <NavLink className="link font-sans" to="forum">
                  Forum
                </NavLink>
              </li>
            </ul>
            <Dropdown label="User" className="">
              {isLoggedIn ? (
                <ul>
                  <li>
                    <Link
                      className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 block font-sans m-1"
                      to="/"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 block font-sans m-1"
                      to="/dashboard"
                    >
                      Maydon
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 block font-sans m-1"
                      to="/settings"
                    >
                      So'zlanmalar
                    </Link>
                  </li>
                  <li>
                    <span
                      onClick={() => logOut()}
                      className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 block font-sans m-1"
                      to="/signin"
                    >
                      {isLoggedIn ? "Chiqish" : "Kirish"}
                    </span>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <span
                      onClick={() => logOut()}
                      className="p-2 bg-slate-50 rounded-md hover:bg-slate-200 block font-sans m-1"
                      to="/signin"
                    >
                      {isLoggedIn ? "Chiqish" : "Kirish"}
                    </span>
                  </li>
                </ul>
              )}
            </Dropdown>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default index;
