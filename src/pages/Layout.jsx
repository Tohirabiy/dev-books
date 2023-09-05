import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/Header"
const Layout = () => {
    return (
        <div>
                   <Header/>


            {/* main routing <Outlet/> */}

            {/* footer */}
         <main className="min-h-screen">
         <Outlet/>
         </main>
        </div>
    );
};

export default Layout;
