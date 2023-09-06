import React from "react";
import "./style.scss";
import IMG1 from "../../../../assets/images/dunyo.png";
const CardBook = () => {
  return (
    <div className="">
      <div className="card_as">
        <img className="imgss object-fit rounded-sm" src={IMG1} alt="author" />
      <div className="p-2">
      <h3 className=" leading-3 font-normal  text-[16px] mb-[1.3] text-[#C9AC8C] ">
          Dunyoning ishlari
        </h3>
        <p className=" text-[12px] font-sans mb-[1.3px] text-[#FFFFFF99]">
          O’tkir Hoshimov
        </p>
        <ul className="text-white  flex ">
          <li className=" flex ">
            <i class="bx bxs-star me-2 "></i>
            <span className="font-sans text-[12px]">4.1 • 3400 ta fikrlar</span>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default CardBook;
