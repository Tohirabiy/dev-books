import { Carousel } from "antd";
import IMG1 from "../../../assets/images/introcarousel.png";
import "./intro.css";
const IntroCarousel = () => {
  return (
    <>
      <Carousel dotPosition={"bottom"}>
        {/* <h1>hello</h1> */}
        <img src={IMG1} alt="item 1" className="slider" />
        <img src={IMG1} alt="item 2" className="slider" />
        <img src={IMG1} alt="item 3" className="slider" />
        <img src={IMG1} alt="item 4" className="slider" />
      </Carousel>
    </>
  );
};

export default IntroCarousel;
