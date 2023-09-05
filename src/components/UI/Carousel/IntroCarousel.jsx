import { Carousel } from "antd";
import IMG1 from "../../../assets/images/Rectangle14.png";
import "./intro.css"
const IntroCarousel = () => {
  return (
    <>
      <Carousel dotPosition={"bottom"}>
        <img src={IMG1} alt="item 1" className="slider"/>
        <img src={IMG1} alt="item 2" className="slider"/>
        <img src={IMG1} alt="item 3" className="slider"/>
        <img src={IMG1} alt="item 4" className="slider"/>
      </Carousel>
    </>
  );
};

export default IntroCarousel;
