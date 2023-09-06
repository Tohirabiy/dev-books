// import { Footer } from "flowbite-react";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer"
const Layout = () => {
  return (
    <div>
      <Header />

      <main className="m-h-screen">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
