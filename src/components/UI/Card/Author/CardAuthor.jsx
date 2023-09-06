import React from "react";
import "./style.scss";
import VECTOR from "../../../../assets/images/Vector.svg"
import IMG1 from "../../../../assets/images/avloniy.jpg"
const CardAuthor = () => {

  const card_style={

    backgroundImage: `url(${VECTOR})`,
    backgroundPosition: '  100% 65%',
    backgroundRepeat :'no-repeat',
    backgroundSize:'60%'
  
  
  };
  return (<div className="">

  
    <div className="card_a " style={card_style}>
      <img className="h-[132.186px]" src={IMG1} alt="author" />
      <h3 className="text-center text-[20px]  text-[#C9AC8C] ">Abdulla Avloniy</h3>
      <p className="text-center text-[12px] font-sans mb-[13px] text-[#FFFFFF99]" >1878-1934</p>
      <ul className="text-white  flex mt-[13px]  gap-x-[32px] px-[27.3px] pb-[22.85px]">
        <li className=" flex ">
          <i class="bx text-[24px] bxs-book-alt me-2"></i>
          <span className="font-sans">34</span>
        </li>
        <li className=" flex ">
          <i class="bx text-[24px] bx-headphone me-2 "></i>
          <span className="font-sans">13</span>
        </li>
      </ul>
    </div></div>
  
  );
};

export default CardAuthor;
