import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Category = () => {
  const [category, setCategory] = useState([
    {
      title: "Temuriylar davri",
      link: "/",
    },
    {
      title: "Jadid adabiyoti",
      link: "/",
    },
    {
      title: "Sovet davri",
      link: "/",
    },
    {
      title: "Mustaqillik davri",
      link: "/",
    },
  ]);
  return (
    <div className="p-8 ">
      <h1 className="text-center text-[#C9AC8C] text-[31px] mb-[21px]">
        Asosiy kategoriyalar
      </h1>
      <nav className="">
        <ul className="flex gap-x-[49px] justify-center">
          {category.length
            ? category.map((link) => {
                return (
                  <li className="p-[10px]">
                    <NavLink to="/" className="hover:text-[#C9AC8C] font-sans text-[20px] text-[rgba(255, 255, 255, 0.60)]">
                      {link?.title}
                    </NavLink>
                  </li>
                );
              })
            : ""}
        </ul>
      </nav>
    </div>
  );
};

export default Category;

// Temuriylar davri
// Jadid adabiyoti

// <li>Temuriylar davri</li>
// <li>Jadid adabiyoti</li>
// <li>Sovet davri </li>
// <li>Mustaqillik davri</li>
