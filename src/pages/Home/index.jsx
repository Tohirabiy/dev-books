import {useEffect} from "react";
import {Button} from "flowbite-react";

import IntroCarousel from "../../components/UI/Carousel/IntroCarousel";
// import Search from "antd/es/input/Search";
import SearchPanel from "../../components/UI/SearchPanel/SearchPanel";


const index = () => {

  

    return (
        <div className="container">
           
           <div className="wrapper">
            <IntroCarousel/>
            <SearchPanel/>
           </div>
        </div>
    );
};

export default index;
